const queue = require('../config/Kue');

const commentsMailer=require('../mailers/comments_mailer');

queue.process('emails',function(job,done){
    console.log('emails working is processing the job',job.data);
    commentsMailer.newComment(job.data);
    done();

});