const nodemailer=require('../config/nodemailer');
exports.newComment=(comment) =>{
    let htmlString = nodemailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');
    nodemailer.transporter.sendMail({
        from:'chiragbansal184@gmail.com',
        to:'chiragbansal184@gmail.com',
        subject:"New Comment Published",
        html:htmlString 
    },(err,info)=>{
        if(err){
            console.log("error in publishing email",err);
        }
        console.log("message sent",info);
        return;
    });
}
