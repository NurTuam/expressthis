const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path")

let userRouter = express.Router();
const bodyParser = require("body-parser");
userRouter.get('/register/:id?/:page?',(req,res)=>{
    //路由参数
    console.log(req.params)
});
userRouter.post('/login',(req,res)=>{
    //console.log(req.body);  //body-parser
    let form = new formidable.IncomingForm();
    form.uploadDir = "./upload";
    form.keepExtensions = true;
    form.parse(req,(err,field,files)=>{
        let filePath = files.photofile.path;
        let fileName = files.photofile.name;
        fs.renameSync(filePath,path.join('./upload',fileName));
        res.json({code:1})
    })

});
userRouter.get('/modify',(req,res)=>{

});
module.exports = {
    userRouter
}