const mongoose=require("mongoose");

//120.78.215.237
mongoose.connect("mongodb://127.0.0.1:27017/admin");

let schema=new mongoose.Schema({
	name:String,
	age:Number
});

let user=mongoose.model('user',schema);

user.create({name:'zhangsan',age:1},(err,data)=>{
//	console.log(data)
});
user.find({name:'zhangsan'},(err,data)=>{
	console.log(data)
});
//user.remove({name:'zhangsan'},(err)=>{
//	console.log(err)
//});
user.update({name:'zhangsan'},{'$set':{'age':55}},()=>{
	
});
