 var mysqldb= require('mysql')
var connection=mysqldb.createConnection({
host:'localhost',
user:'root',
password:'',
database:'dbfromnode789'
}) 
connection.connect(function(err){
if(err){
throw err
}else{
console.log("connected to mysql server !!!")
var sql="insert into friends(name,id,location ) values('vijay',1,'banaglore')"
connection.query(sql,function(err,suc){
if(err){
throw err
}else{
console.log(" 1 row inserted")
}
})
}
}) 
 