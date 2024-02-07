const pg=require('pg')
 try{
    var config = {

        // for localsystem
    
        user: 'postgres', //env var: PGUSER 
        database: 'employee', //env var: PGDATABASE 
        password: 'Anee', //env var: PGPASSWORD 
        host: 'localhost', // Server hosting the postgres database 
        port: 5433, //env var: PGPORT 
        max: 10000, // max number of clients in the pool 
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
          
    }; 
        const pool=new pg.Pool(config)
        pool.connect().then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Not connecting to the database:'); });
    
 }catch(err){
    console.log("db not connected",err)
 }
module.exports=config