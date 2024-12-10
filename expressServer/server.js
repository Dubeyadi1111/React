import express from 'express'
import path from 'path'


const app = express()

app.get("/",(req,res)=>{
    res.sendFile(path.join("C:","Users","dubey","OneDrive","Desktop","ReactJs","expressServer","pages","index.html"))
})


app.get("/login",(req,res)=>{
    res.sendFile(path.join("C:","Users","dubey","OneDrive","Desktop","ReactJs","expressServer","pages","login.html"))
})

const PORT = 5000
const hostname = 'localhost'
app.listen(PORT,hostname,()=>{
    console.log("Server started in PORT 5000")
})