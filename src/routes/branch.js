const express=require('express');
const router=express.Router();
const BranchController=require('..\\app\\controllers\\BranchControllers')

router.use('/',BranchController.index)
module.exports=router;

