const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



//create webtoken
const createToken=(_id)=>{
   return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'3d'})
}



//login user
const loginUser = async(req,res)=>{
    const {email, password}=req.body
    try {
        const user = await User.login(email,password)

        const token = createToken(user._id)
        
        res.status(200).json({email,token,user})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//signup user1
const signUpUser = async(req,res)=>{
    const {firstName,lastName,email,password}=req.body

    try {
        const user = await User.signup(firstName,lastName,email,password)
        const token = createToken(user._id)
        res.status(200).json({email,firstName,lastName,token})
        var ress = res.status({status:true,success:"Registered successfully"})
        console.log(ress)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={
    loginUser,
    signUpUser
}