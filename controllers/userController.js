const Business = require('../models/businessModel')
const Freelancer = require('../models/freelancerModel')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



//create webtoken
const createToken=(_id)=>{
   return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'3d'})
}



//BUSINESS
const loginBusiness=async(req,res)=>{
    const{email,password}=req.body
    try {
        const business = await Business.loginBusiness(email,password);
        const token = createToken(business._id);
        res.status(200).json({token,business});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const signupBusiness=async(req,res)=>{
    const {firstName,lastName,email,password,city,companyName,companyType}=req.body

    try {
        const business = await Business.signupBusiness(
          firstName,
          lastName,
          email,
          password,
          city,
          companyName,
          companyType
        );
        const token = createToken(business._id);
        res.status(200).json({business,token})
    }
     catch (error) {
        res.status(400).json({error:error.message})
    }

}


//Freelancer
const loginFreelancer = async(req,res)=>{
    const{email,password}=req.body

    try {
        const freelancer = await Freelancer.loginFreelancer(email, password);
    const token = createToken(freelancer._id)
    res.status(200).json({freelancer,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const signupFreelancer = async(req,res)=>{
    const { firstName, lastName, email, password,city, profession } = req.body;

    try{
        const freelancer =await Freelancer.signupFreelancer(firstName,lastName,email,password,city,profession);
        const token=createToken(freelancer._id);
        res.status(200).json({freelancer,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }
}





module.exports={
    loginBusiness,
    signupBusiness,
    loginFreelancer,
    signupFreelancer
}