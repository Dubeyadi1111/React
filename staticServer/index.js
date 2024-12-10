import express from "express";

const app = express()
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    // res.send("HELLO WORLD")
    res,sendFile("C:\Users\dubey\OneDrive\Desktop\ReactJs\staticSever\public\pages\index.html")
})
// app.get("/",(req,res)=>{"C:\Users\dubey\OneDrive\Desktop\ReactJs\staticSever\public\index.html"
    
// })

const  PORT = 1000
const hostname ="127.0.0.1"
app.listen(PORT,hostname,()=>{
    console.log(`server running in https://${hostname}:${PORT}`);
})