import getPrismaInstance from "../utils/PrismaClient.js";
export const  checkUser = async (req, res, next) =>{
    try{
        const {email} = req.body;
        console.log("email hna -->", email)

        if(!email)
            return res.json({msg: "Email is required", status: false});

        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where : {email}});
        if(!user)
            return res.json({msg : "user not found", status : false});
        else{
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
            const check = await prisma.user.findUnique({where: {email}});

            if(check)
            {
                return res.json({msg: "Failed", status: false});
            }
           const user = await prisma.user.create({
                data: {email, name , about, profilePicture}
            });
            return res.json({msg: "Success", status: true, data : user});

        }catch(err){
            next(err);

    }

}



