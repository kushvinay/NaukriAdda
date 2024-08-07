const nodemailer = require("nodemailer");
const errorHandler = require("./errorHandler");

exports.sendmail = (req , res , next , url) =>{
    const transport = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.MAIL_EMAIL_ADDRESS,
          pass:  process.env.MAIL_PASSWORD,
        },
    });

    const mailOption = {
        from: "JobNex Pvt. Ltd.",
        to: req.body.email,
        subject: "password Reset lind",
        html: `<h1>click link blow to reset password</h1>
                <a href="${url}"> Password Reser Link </a>`,
    };

    
    transport.sendMail(mailOption,(err,info) =>{
        if(err) return next(new errorHandler(err,500))
        console.log(info)
        return res.status(200).json({
            message:"mail sent successfully",
            url,
        })
    })
}

