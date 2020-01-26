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

const myReader = new Reader()

process.on('unhandledRejection', (reason) => {
  console.log('From Global Rejection -> Reason: ' + reason);
});

  console.log('Waiting For Device !')
  myReader.on('device-activated', async (event) => {
  console.log('Device-Activated')
  console.log(event.name)
  console.log('=============================================')

})



myReader.on('card-inserted', async (person) => {
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
app.get("/read", (req, res) => { res.render("read", { username: name , cardID : cardID }) }); 
console.log('=============================================')
  
})

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`)
})

module.exports = app

myReader.on('device-deactivated', () => {
  console.log('device-deactivated')
})
