//1.0 导入express包
const express = require('express');

//2.0 创建一个express的application 对象
const app = express();
 
//http://127.0.0.1:8888/login
//http://127.0.0.1:8888/user
// http://127.0.0.1:8888/register

//3.0 必须要设置一个路由，来接管浏览器的每一个请求(get / post)
// app.get();  //表示接管浏览器的get请求
// app.post(); //表示接管浏览器的post请求
app.get('/useraccount/login',function(req,res){
	res.setHeader('Content-Type','text/html;charset=utf8');
	res.end('这是一个登录请求');
});
 
app.post('/useraccount/register',function(req,res){
res.setHeader('Content-Type','text/html;charset=utf8');
res.end('这是一个注册用户信息的请求');
 
});
 
app.get('/orderinfo/setorder',function(req,res){
res.setHeader('Content-Type','text/html;charset=utf8');
res.end('这是一个订单处理请求');
});
 
 
//4.0 利用app监听一个端口等待浏览器的请求
app.listen(8888);