var admin = require("firebase-admin");
const fcm=require("fcm-notifications");
var serviceAccount =require("../freelanceri-2170e-firebase-adminsdk-evvk4-92b19eaebb.json");
const certPath = admin.credential.cert(serviceAccount);
var FCM=new fcm(certPath);
const sendPushNotifis = (req,res,next)=>{
    try {
        let message={
            notification:{
                title:"Test Node",
                body:"Test body node"
            },
            data:{
                orderId:'12345',
                orderDate:"2022-10-28",
            },
            token:req.body.fcm_token
        };

        FCM.send(message,function(err,rsp){
            if(err){
                res.status(500).send({
                    message:err
                })                
            }
            else{
                return res.status(200).send({
                    message:"Notification Sent"
                })
            }
        })
    } catch (error) {
        
    }
}
