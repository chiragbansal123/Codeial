const mongoose = require('mongoose');
const friendshipSchema=new mongoose.Schema({
    //the user who have sent the request
    from_user:{
        type:mongoose.Schema.ObjectID,
        ref:'User'
    },

    to_user:{
        type:mongoose.Schema.ObjectID,
        ref:'User'
    },
},{
    timestamps:true
});
const FriendShip = mongoose.model('FriendShip',friendshipSchema);
module.exports=FriendShip; 