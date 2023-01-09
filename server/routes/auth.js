const router = require("express").Router()
const passport = require("passport")
const confession = require("../models/confessions")

const CLIENT_URL = "http://localhost:3000"
router.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            message:"user authenticated",
            user:req.user,
            cookies:req.cookies
        })
    }
})
router.get("/login/failed",(req,res)=>{
    res.status(401).json({
        success:false,
        message:"user failed to authenticate"
    })
})
router.get("/logout",(req,res)=>{
    req.logout()
    res.redirect(CLIENT_URL)
})
router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
    }))

router.get("/google/callback", passport.authenticate("google", {successRedirect:"http://localhost:3000",failureRedirect:"/login/failed"}))  

//save contents from a form which has a post request to / route

router.post("/confessionform",(req,res)=>{
    if(req.user){
    res.status(200).json({
        success:true,
        message:"user authenticated",
        user:req.user,
        cookies:req.cookies
    })
    const {query,confess} = req.body
    const newConfession = new confession({
        query:query,
        confession:confess,
        user:user
    })
    newConfession.save()
    .then(confession=>{
        console.log("success: ",confession)
        res.status(200).json({
            success:true,
            message:"confession saved",
            confession
        })
    }
    )
    .catch(err=>{
        res.status(500).json({
            success:false,
            message:"confession not saved",
            err
        })
    }
    )
}
})
module.exports = router