import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";
export const signup = async (req,res)=>{
    
  const {fullName,email,password}= req.body
  try {
    if(!fullName || !email || !password){
      res.status(400).json({message:"fill all the inputs"});
    }
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
         generateToken(newUser._id,res)
         await newUser.save();


         return res.status(201).json({
           _id: newUser._id,
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
    






export const login = async(req,res)=>{
    const {email,password} = req.body
    try {
      const user = await User.findOne({email})

      if(!user){
        return res.status(400).json({message:"invaild credentials"})
      }
    
      const isPasswordCorrect = await bcrypt.compare(password,user.password)
      if(!isPasswordCorrect){
                return res.status(400).json({message:"invaild credentials"})

      }
      generateToken(user._id,res)
       
      res.statua(200).json({
        _id:user_id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic
      })
    } catch (error) {
      console.log('error in login controller')
      res.status(500).json({messgae:"Internal server error"})
    }
};


export const logout = (req,res)=>{
    try {
      res.cookie("jwt","",{maxAge:0})
      res.status(200).json({message:"logged out sucessfully"})

    } catch (error) {
      console.log("Error in logout controller")
            res.status(500).json({messgae:"Internal server error"})

    }


};
