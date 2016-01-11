var express=require('express');
var app=express();
var PORT =3000;
var middleware=require('./middleware.js');
app.use(middleware.logger);

app.get('/',function(req,res){
    	res.send("Hello express!");
});
app.get('/about',middleware.requireAuthentication,function(req,res){
  res.send('This is about us!');
});
app.use(express.static(__dirname+'/public'));
app.listen(PORT,function(){
	console.log('express server started at port '+PORT);
});