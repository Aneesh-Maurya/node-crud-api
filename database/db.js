const postgres = require('postgres');
 try{
require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const config = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});
// const sql=postgres(config)
(async()=>{
  const result = await config`select version()`;
  if(result[0].version){
    console.log('database connected',result)
  };
})()


 module.exports=config
 }catch(err){
    console.log("db not connected",err)
 }
