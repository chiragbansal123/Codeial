const express = require('express');

const router = express.Router();
const likeController=require('../controllers/likes_controller');
// router.post('/toggle',(req, res, next) => {console.log("likes");next()} , likeController.toggleLike);

module.exports = router;