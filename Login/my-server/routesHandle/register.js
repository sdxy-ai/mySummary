const connection=require('../db/index');


module.exports=async(ctx, next) => {
  const sql='INSERT INTO user set?';
  const { username,email,password }=ctx.request.body;
  connection(sql,{username,email,password});
}
