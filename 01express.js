const express=require("express");
const app=express();

app.get('/',(req,res,next)=>{
	//正则校验
	console.log(req.query);
	next()
},(req,res,next)=>{
//	res.end("1")
//数据库校验
next()
},(req,res)=>{
//	res.json({code:1})
    res.jsonp({code:1})
});

app.listen(6565);
