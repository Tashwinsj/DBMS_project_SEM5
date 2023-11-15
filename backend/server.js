const express = require("express") 
const cors = require("cors")
const app = express() 
const mysql = require( "mysql")
app.use(cors())
app.use(express.json())
const port = 5004


const db = mysql.createConnection({
    host:"localhost", 
    user:"root" , 
    password:"password",
    database:"gym"
}) 
 

app.get("/allmems" , (req , res) =>{
    const q = 'SELECT * FROM members'
    db.query(q,(err , data)=>{
        if(err) return res.json(err) 
        return res.json(data)
    })
})  
app.get("/gyms" , (req , res)=>{
    const q =  `SELECT * FROM gyms`
    db.query(q,(err , data)=>{
        if(err) return res.json(err) 
        return res.json(data)
    })
})

app.post("/adduser" , (req, res)=>{
    const q = "INSERT INTO members ( `name`,`age`, `phone`, `address` ,`password`) VALUES(?)" 
    const vals = [ req.body.name , req.body.age ,req.body.phone ,req.body.address, req.body.password] 
    db.query(q , [vals] , (err ,data) =>{
        if(err) return res.json(err) 
        return res.json(data)
    })
}) 

app.post("/loguser" ,(req ,res) =>{

    const q = 'SELECT * FROM members WHERE name = ?  '
    const vals = [ req.body.name ] 
    db.query(q , [vals] , (err ,data) =>{
        if(data[0] ) return res.json({success:true}) 
        return res.json({success:false})
    })
    
})


app.listen(port , ()=>{console.log("server up and running")})