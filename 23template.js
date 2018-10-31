const express=require("express");
const bodyparser = require('body-parser');
const xtpl=require("xtpl");
//const formidable=require("formidable");

const app=express();
app.set('views','./public-static');
app.set('view engine','html');
app.engine('html',xtpl.renderFile);

//静态资源中间件
app.use('/static',express.static('./public-static'));

//body-parser中间件
app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
	res.render('index',{})
});

//路由
app.use('/user',require("./23user").userRouter);
app.use('/book',require("./23book").bookRouter);
app.listen(2323);
