import User from "../models/user.model.js"
import bcrypt from "bcrypt";
export const signup = async (req,res)=>{
    
  const {fullName,email,password}= req.body
  try {
    if(!fullName || !email || !p)
     if (password.lenght<8) {
        return res.status(400).json({
          message:"password must be at least 8 characters"
        })
       const user = await User.findOne({email});
       if (user) return res.status(400).json({message:"user already exists"});

       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt)

const newUser = new User({
  fullName,
  email,
  password:hashedPassword
})
       if (newUser){
         generateToken(newUser.id,res)
         await newUser.save();


         return res.status(201).json({
           _id:newUser._id,
           fullName:newUser.fullName,
           email:newUser.email,
           profilePic:newUser.profilePic,
         })
       };

       
     }
     else{
       res.status(400).json({message:"Invalid user data"})
     }


    
  } catch (error) {
     console.log("Error in signup cronyroller",error.message);

    res.status(500).json({message:"Internal server error"})
  } 
  
};
    






export const login = (req,res)=>{
    res.send("login page")
};


export const logout = (req,res)=>{
    res.send("logout page")
};
