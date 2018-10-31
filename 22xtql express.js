const express=require("express");
const xtpl=require("xtpl");
const app=express();

app.set('views','./public-static');
app.set('view engine','html');
app.engine('/static',express.static('./public-static'));

app.get('/',(req,res)=>{
	xtpl.render('index',{})
	
})

app.listen(9999);
