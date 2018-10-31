const express=require("express");
const formidable=require("formidable");
const fs=require("fs");
const path=require("path");

let userRouter=express.Router();
const bodyparser = require('body-parser'); 

userRouter.get('./register/:id?/:page?',(req,res)=>{
	//路由参数
	console.log(req.params);
});
userRouter.post('./login',(req,res)=>{
//	console.log(req.body);
   let form=new formidable.IncomingForm();
   form.uploadDir="./upload";
   form.keepExtensions = true;
//解析 
   form.parse(req,(err,field,files)=>{
// 	 console.log(fields);
// 	 console.log(files.photofile.size);
     let filePath=files.photofile.path;
     let fileName=files.photofile.name;
     //重命名
     fs.renameSync(filePath,path.join('./upload',fileName));
     res.join({code:1});
   });
});
userRouter.get('./modify',(req,res)=>{
	
});

module.exports={
	userRouter
}
