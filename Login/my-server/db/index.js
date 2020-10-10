const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1000',
    database:'login'
});


module.exports=(sql,arr)=>{
  connection.query(sql,arr);
};