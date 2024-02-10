const express=require('express')
const pg=require('pg')
const app=express()
const config=require("./database/db")



module.exports={

    InsertData:async(req,res)=>{
       try{
        console.log(req.body)
        const {firstname,lastname,email,mobile,salary}=req.body 
        var query=await config`insert into employee(firstname,lastname,email,mobile,salary)values(${firstname},${lastname},${email},${mobile},${salary})`
        if(query){
          res.send({msg:'Employee details insert successfully'})
          console.log(query)
        }else{
          console.log(err)
        }
       }catch(err){
        return console.error('Employee details not insert')
       }
    },
    GetData:async(req,res)=>{
        try{
          var query=await config`select *from employee`
          // var query=  'CREATE TABLE empData ( ID SERIAL PRIMARY KEY ,firstname varchar(80), lastname varchar(80), email varchar(80), mobile bigint, salary float  )'
          if(query){
           console.log(query)
          return res.send(query)
          }else{
           return console.error('get not value')
          }
        }catch(err){
          return console.error('Employee details not get',err)
        }
      
    },
    update:async(req,res)=>{
     try{
      console.log(req.body)
      const {firstname,lastname,email,mobile,salary}=req.body
      var query=await config`UPDATE employee SET firstname =${firstname}, lastname =${lastname}, email =${email},mobile =${mobile}, salary =${salary} WHERE id =${req.params.id} RETURNING *`
      if(query){
        console.log(query)
       return res.send({msg:'Employee details update',updateData:query})
       }else{
        return console.error(' not update data')
       }
     }catch(err){
      return console.error("Employee details not update",err)
     }
    },
    delete:async(req,res)=>{
    try{
      var  query=await config`delete from employee where id=${req.params.id}`
      if(query){
        console.log(query)
       return res.send({msg:'Employee details deleted successfully'})
       }else{
        return console.error(' not deleted data')
       }
    }catch(err){
        return console.error('Employee details not deleted',err)
    }
    
    },
     
    

    
}