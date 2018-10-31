const express=require("express");
const fs=require("fs");
const app=express();

//静态资源中间件
app.use('/static',express.static("./public-static"));

//app.use('/css',express.static("./public-static/css"));
//app.use('/js',express.static("./public-static/js"));

app.get('/',(req,res)=>{
	fs.readFile("./public-static/index.html",(err,data)=>{
		if(err){
			console.log(err);
			return;
		}
		res.end(data);	
	})
})

app.listen(9999);
