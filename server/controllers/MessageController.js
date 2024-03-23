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

/*****export const addImage = async (req, res, next) => { ... }: This function is exported as addImage and is designed to handle requests related to adding images. It is an asynchronous function, meaning it can operate asynchronously and use await inside it.

try { ... } catch (err) { ... }: The function is wrapped in a try-catch block to handle any errors that might occur during its execution.

if (req.file) { ... }: Checks if the request contains a file. This typically indicates that an image file has been uploaded to the server.

console.log("file here-->", req.file);: Logs the uploaded file object to the console for debugging purposes.

const date = Date.now();: Gets the current timestamp, which is used to generate a unique filename.

let filename = "uploads/images/" + date + req.file.originalname;: Constructs a filename for the uploaded image by concatenating the timestamp with the original name of the file.

renameSync(req.file.path, filename);: Renames the temporary file path to the constructed filename. This is assuming renameSync is a synchronous function that renames files.

const prisma = getPrismaInstance();: Retrieves an instance of Prisma, an ORM (Object-Relational Mapping) tool for interfacing with a database. The specific function getPrismaInstance() is assumed to be defined elsewhere in the code.

const { fromId, toId } = req.query;: Destructures the fromId and toId query parameters from the request URL. These are likely used to determine the sender and recipient of the image message.

if (fromId && toId) { ... }: Checks if both fromId and toId are provided in the request.

Inside the if block, it creates a new message in the database using Prisma's Message.create() method. It includes the filename of the image, sender, recipient, and sets the type of the message as "image". It then returns a JSON response with the created message.

If fromId and toId are not provided, it returns a 400 Bad Request status with a message indicating that these parameters are required.

If no image file is uploaded, it returns a 400 Bad Request status with a message indicating that an image is required.

catch (err) { next(err); }: If an error occurs during the execution of the function, it calls the next function with the err parameter to pass the error to the next error-handling middleware.

Overall, this function handles the uploading of an image file, renames it, saves information about it in a database using Prisma, and responds accordingly based on the success or failure of these operations.






 */
export const addImage = async (req, res, next) =>{
    try{
        if(req.file){
            console.log("file here-->", req.file);
            const date = Date.now();
            let filename = "uploads/images/" + date + req.file.originalname;
            console.log("original name", req.file.originalname);
            console.log("filename-->", filename);
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