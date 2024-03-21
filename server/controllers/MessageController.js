import { renameSync } from "fs";
import getPrismaInstance from "../utils/PrismaClient.js"

export const createMessage = async(req, res, next) =>{
    try{
        const prisma = getPrismaInstance();
        const {content, fromId, toId} = req.body;
        // const getUser = onlineUsers.get(toId);
        if(content && fromId && toId){
            const Sendmessage = await prisma.Message.create({
                data:{
                    content,
                    sender:{
                        connect: {
                            id: parseInt(fromId)
                        }},
                    recipient: {
                        connect:{
                            id: parseInt(toId)
                        }},
                    // messageStatus: getUser ? "delivered" : "sent",

                },
                include : {
                    sender: true,
                    recipient : true,

                }
            })
            return res.status(201).send({message: Sendmessage});
        }
        return res.status(400),send({message : "Message , sender and recipient users is required..."});


    }catch(err){
        next(err);
    }
}

export const getMessage = async (req, res, next) =>{
    try{
        const prisma = getPrismaInstance();
        const {fromId, toId} = req.params;
        const allMessages = await prisma.Message.findMany({
            where:{
                OR :
                [
                    {
                        senderId: parseInt(fromId),
                        recipientId: parseInt(toId),
                    },
                    {
                        senderId: parseInt(toId),
                        recipientId : parseInt(fromId),
                    }
                ]
            },
            orderBy:{
                id : "asc",
            },
            include: {
                sender: true, // Include all fields of the sender
            },
          
        });


        const unreadMessage = [];

        allMessages.forEach((msg, index) => {
            //sent is the default (and there is read and delevered)
            if(msg.messageStatus !== "read" && msg.senderId === parseInt(toId)){
                allMessages[index].messageStatus = "read";
                unreadMessage.push(msg.id);
            }
            
        });
            /****{ where: { id: { in: unreadMessage } } }: This is the condition specifying which messages should be updated. It's saying to update messages where the id is included in the array unreadMessage.
             *  This implies that unreadMessage is an array containing IDs of messages that are unread. */
        await prisma.message.updateMany({
            where :{
                id:{in : unreadMessage}
            },
            data : {
                messageStatus : "read",
            }
        })
        return res.status(200).send({messages : allMessages})

    }catch(err){

    }

}


export const addImage = async (req, res, next) =>{
    try{
        if(req.file){
            const date = Date.now();
            let filename = "uploads/images/" + date + req.file.originalname;
            renameSync(req.file.path, filename);
            const prisma = getPrismaInstance();
            const {fromId , toId} = req.query;
            if(fromId && toId){
                const message = await prisma.Message.create({
                    data:{
                        content: filename,
                        sender :{
                            connect : {
                                id : parseInt(fromId)
                            }
                        },
                        recipient : {
                            connect : {
                                id : parseInt(toId)
                            }
                        },
                        type : "image",
                        
                    },
                    include : {
                        sender: true,
                        recipient : true,
    
                    }

            })
                return res.status(201).json({message});

            }
            return res.status(400).send("FromId and toId is required");

        }
            return res.status(400).send("Image is required");
    }catch(err){
        next(err);

    }

}