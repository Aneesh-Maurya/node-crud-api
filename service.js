const express=require('express')
const pg=require('pg')
const app=express()
const config=require("./database/db")



module.exports={

    InsertData:async(req,res)=>{
        console.log(req.body)
        const {firstname,lastname,email,mobile,salary}=req.body
        // const client = await db.connect();
        // var query='CREATE TABLE empData ( firstname varchar(80), lastname varchar(80), email varchar(80), mobile bigint, salary float )' ID int NOT NULL,
        var query=await config`insert into empData(firstname,lastname,email,mobile,salary)values(${firstname},${lastname},${email},${mobile},${salary})`
        if(query){
          console.log(query)
        }else{
          console.log(err)
        }
    },
    GetData:async(req,res)=>{
         var query=await config`select *from empdata`
         // var query=  'CREATE TABLE empData ( ID SERIAL PRIMARY KEY ,firstname varchar(80), lastname varchar(80), email varchar(80), mobile bigint, salary float  )'
       console.log(query)
       res.send(query)
      
    },
    update:async(req,res)=>{
      console.log(req.body)
      const {firstname,lastname,email,mobile,salary,id}=req.body
      var query="UPDATE empData SET firstname ='"+ firstname+"', lastname ='" +lastname+"', email ='"+email+"',mobile ='"+mobile+"', salary ='"+salary+"' WHERE id ='" +req.params.id+" 'RETURNING *"
      let connection = await pool.connect(); //gets connection from pool
      if (connection) {
        let result = await pool.query(query);//executes query and returns result
        if (result) {
          connection.release(); //releases the connection to the pool
          res.send(result.rows)
          console.log('update') //returns the result to the called function
        } else {
          return console.error('not releases the connection to the pool')
        }
      } else {
        return console.error(' gets not connection from pool')
      }
    },
    delete:async(req,res)=>{
      var  query="delete from empData where id="+req.params.id
      let connection = await pool.connect(); //gets connection from pool
      if (connection) {
        let result = await pool.query(query);//executes query and returns result
        if (result) {
          connection.release(); //releases the connection to the pool
          res.send(result.rows)
          console.log('delete user') //returns the result to the called function
        } else {
          return console.error('not releases the connection to the pool')
        }
      } else {
        return console.error(' gets not connection from pool')
      }
    }
    
}