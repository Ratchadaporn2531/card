const fs = require('fs')
var http = require('http')
const {
  Reader
} = require('../src')
const path = require('path')
const express = require('express')

const app = express()
const bodyParser = require("body-parser"); 

const PORT = process.env.PORT || 8080
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testing"
});

const myReader = new Reader()

app.set("view engine", "ejs"); 
app.set("../views", __dirname + "../views"); 
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false })); 
app.get("/register", function(req, res)  { 
  new Reader()
  res.render("register") 
}); 
app.get('/submit',function(req,resp){
 
  //resp.render("test") 
  new Reader().on('card-inserted', async (person) => {
  
    const cid = await person.getCid()
    var cardID = `${cid}`
    console.log(`CitizenID: ${cid}`)
  
     const thName = await person.getNameTH()
     var name = `${thName.prefix} ${thName.firstname} ${thName.lastname}`
  
    resp.render("read", {cardID : cardID})     
  })
  
})
app.get("/card", function(req, res,next)  { 
  var sql = "INSERT INTO smartcard (card_id) VALUES ('"+ cardID +"')";
  connection.query(sql,function(error,rows,fields){
    if(!!error){
      console.log('Error');
    }
    else{
     
      console.log("sucess");
   
    }
  })
})
app.get("/event", function(req, res)  { 
  connection.query("SELECT * FROM event",function(error,rows,fields){
    if(!!error){
      console.log('Error');
    }
    else{
      
        res.render("event", { rows: rows }) 
        
    
    }
    }); 
 
})



function reader() {
 new Reader().on('device-activated', async (event) => {

  console.log('Device-Activated')

  console.log('=============================================')
 
  })
}



new Reader().on('card-inserted', async (person) => {
  new Reader()
  const cid = await person.getCid()
  var cardID = `${cid}`
  console.log(`CitizenID: ${cid}`)

   const thName = await person.getNameTH()
   var name = `${thName.prefix} ${thName.firstname} ${thName.lastname}`

  app.set("view engine", "ejs"); 
  app.set("../views", __dirname + "../views"); 
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.urlencoded({ extended: false })); 
  app.get("/", (req, res) => { res.render("test") }); 
  var sql = "INSERT INTO smartcard (card_id) VALUES ('"+ cardID +"')";
  connection.query(sql,function(error,rows,fields){
    if(!!error){
      console.log('Error');
    }
    else{
     
      console.log("sucess");
   
    }
  })

  app.get('/read',function(req,res){
    
    connection.query("SELECT * FROM smartcard ORDER BY id DESC LIMIT 1;",function(error,rows,fields){
      if(!!error){
        console.log('Error');
      }
      else{
        
          res.render("read", { rows: rows }) 
          
      
      }
      }); 
})
app.get('/user/:id', function (req, res, next) {
  res.send(req.params.id)
});

  

})

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})

module.exports = app

