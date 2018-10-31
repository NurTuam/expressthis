const mongoose = require('mongoose');

//连接数据库
//120.78.215.237
mongoose.connect('mongodb://127.0.0.1:27017/admin');

//定义json文件中对象的属性及属性值的类型
let schema=new mongoose.Schema({
	name:String,
	password:String
});

//建立叫XXX的数据库文件（类似于data.json文件）

let user=mongoose.model('cheng',schema);

//数据库增删改查
//增
user.create({name:"chenggong",password:"111"},(err,data)=>{
	console.log(data)
});
//user.create({name:"shibai",password:"123"},(err,data)=>{
//	console.log(data)
//});
//查
//user.find({name:"chenggong"},(err,data)=>{
//	console.log(data)
//});
//改
//user.update({name:"chenggong"},{password:"465464"},()=>{
//	user.find({},(err,data)=>{
//		console.log(data)
//	});
//});

//删
user.remove({name:"chenggong"},()=>{
	user.find({},(err,data)=>{
		console.log(data)
	});
})


