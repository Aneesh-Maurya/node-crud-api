const pg=require('pg')
var config = {

    // for localsystem

    user: 'postgres', //env var: PGUSER 
    database: 'employee', //env var: PGDATABASE 
    password: 'Aneesh', //env var: PGPASSWORD 
    host: 'localhost', // Server hosting the postgres database 
    port: 5433, //env var: PGPORT 
    max: 10000, // max number of clients in the pool 
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
      
};
module.exports=config