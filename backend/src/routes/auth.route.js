import express from "express"

const router = express.Router()

router.get("/signup",(req,res)=>{
    res.send("signup page")
});


router.get("/signin",(req,res)=>{
    res.send("signin page")
});


router.get("/logout",(req,res)=>{
    res.send("logout page")
});



export default router