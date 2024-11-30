const express=require('express');
const router=express.Router();
const MenuController=require('..\\app\\controllers\\MenuControllers')

router.use('/',MenuController.index)
module.exports=router;
