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

// procedure call here :
app.post("/at" , (req ,res)=>{ 
    const q = `CALL monthl_attendence(?) ;` 
    db.query(q  , req.body.month,  (err , data)=>{
        if(err) return res.json(err) 
        return res.json(data[0])
    })
})


app.get("/diet" ,(req, res)=>{
    const q =  `select count(*) as attendance ,avg(protein) as pavg ,min(protein) as pmin ,max(protein) as pmax  
    ,avg(fat_sugars) as favg ,min(fat_sugars) as fmin ,max(fat_sugars) as fmax  , count(Multivitamins = 1 )  as multi 
    from analytics inner join diet on analytics.date = diet.dates where month(analytics.date) =3 and analytics.quantity = 1 ; `
    db.query(q , (err , data)=>{
        if(err) return res.json(err)  
        return res.json(data)
    })
})

app.post("/equipments" ,(req ,res)=>{
    const q = `SELECT * FROM equipments  where organ = ? AND location LIKE ?  AND item = ?;`
    vals  =  req.body.organ   
    locs = req.body.location 
    item = req.body.item
    

    db.query(q, [vals , '%' + locs + '%' , item] ,(err , data)=>{
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

app.post("/bookslot" , (req , res)=>{
    const q =  ` SELECT COUNT(*) as count FROM booking WHERE trainer = ? and date = ? and slot= ?` 
    db.query(q ,[ req.body.trainer , req.body.date ,req.body.slot ] , (err , data) =>{
        if(err) return res.json(err) 
        if (data[0].count  == 0 ) {
            const qr = "insert into booking (`trainer` , `date` , `slot`) values(?)" 
            const vals = [ req.body.trainer , req.body.date ,req.body.slot ] 
            db.query(qr , [vals] , (err , data)=>{
                if(err) return res.json(err) 
                return res.json("Booked successfully !")
            })
         } 
         else{
            return res.json("Slot not available")
         }
    })
})

app.post("/addmemship" , (req, res)=>{
    const q = "INSERT INTO membership (`mid` ,`gname`, `plan`) VALUES(?)" 
    const vals = [req.body.mid , req.body.gname , req.body.plan] 
    db.query(q , [vals] , (err ,data) =>{
        if(err) return res.json(err) 
        return res.json(data)
    })
})

app.post("/loguser" ,(req ,res) =>{

    const q = 'SELECT * FROM members WHERE name = ?  '
    const vals = [ req.body.name ] 
    db.query(q , [vals] , (err ,data) =>{
        if(data[0] ) return res.json({success:true , mid : data[0].mid}) 
        return res.json({success:false})
    })
    
})


app.listen(port , ()=>{console.log("server up and running")})