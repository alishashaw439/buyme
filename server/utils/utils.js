export const sendToken = (user,res,message,statusCode)=>{
    const token = user.generateToken()
    return res.status(statusCode).cookie("token",token,{
        //converting days into milliseconds
        expires:new Date(Date.now()+15*24*60*60*1000)
    }).json({
        success:true,
        message:message,
        token
    })
}