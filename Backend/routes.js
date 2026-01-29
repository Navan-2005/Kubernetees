const express=require('express');
const router=express.Router();
const {signup,login,getallusers}=require('./controller')

router.post('/signup',signup)
router.post('/login',login)
router.get('/all',getallusers)

module.exports=router