const express = require("express");
const xtpl = require('xtpl');
const bodyParser = require("body-parser");


const app = express();
app.set('views','./public-static');
app.set('view engine','html');
app.engine('html',xtpl.renderFile);

//静态资源中间件
app.use('/static',express.static('./public-static'));
//body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
//formidable中间件


app.get('/',(req,res)=>{
    res.render('index',{})
});

//路由
app.use("/user",require('./user').userRouter);
app.use("/book",require("./book").bookRouter);
app.listen(9999);