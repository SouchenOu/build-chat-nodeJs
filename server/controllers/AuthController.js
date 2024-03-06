import getPrismaInstance from "../utils/PrismaClient.js";
export const  checkUser = async (req, res, next) =>{
    try{
        const {email} = req.body;
        if(!email)
            return res.json({msg: "Email is required", status: false});

        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where : {email}});
        if(!user)
            return res.json({msg : "user not found", status : false});
        else{
            console.log("enter here");
            return res.json({msg : "SignIn succefully..", status: true, data : user});
        }

    }catch(err){    
        next(err);
    }
}

export const RegisterUser =async (req, res, next) =>{
        try{
            const {email, name, about, image: profilePicture} = req.body;
            console.log("server-->", name);
            console.log("abaout here", about);
            console.log("image",profilePicture);
            if(!email || !name || !profilePicture){
                return res.send("Email and name are required");

            }

            const prisma = getPrismaInstance();
            await prisma.user.create({
                data: {email, name , about, profilePicture}
            });
            return res.json({msg: "Success", status: true});

        }catch(err){
            next(err);

    }

}



