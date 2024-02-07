const postgres = require('postgres');
 try{
    // var config = {

    //     // for localsystem
    
    //    user: 'Aneesh-Maurya', //env var: PGUSER 
    //     database: 'employee', //env var: PGDATABASE 
    //     password: 't6ihJTbAG2LX', // t6ihJTbAG2LX  env var: PGPASSWORD 
    //     host: 'ep-rough-scene-a5mcag2r-pooler.us-east-2.aws.neon.tech', // Server hosting the postgres database 
    //     port: 5433, //env var: PGPORT 
    //    max: 10000, // max number of clients in the pool 
    //     idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
          
    // }; 
   
    //     const pool=new pg.Pool(config)
    //     pool.connect().then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Not connecting to the database:'); });
    // app.js

require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const config = {
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
};
const sql=postgres(config)

// async function getPgVersion() {
//   const result = await sql`CREATE TABLE empData ( firstname varchar(80), lastname varchar(80), email varchar(80), mobile bigint, salary float )`;
//   console.log(result);
// }
// getPgVersion()
module.exports=sql
 }catch(err){
    console.log("db not connected",err)
 }
