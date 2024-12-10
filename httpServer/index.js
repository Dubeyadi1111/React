import http from "http"
import fs from "fs"

const server =http.createServer((req,res)=>{
   const {url, method}= req
   console.log(url,method);
   if (url==="/" && method ==="GET"){
    let data = fs.readFileSync("./pages/index.html")
    res.write(data)
    res.end()
   }
   else if (url==="/about" && method =="GET"){
    let data = fs.readFileSync("./pages/index.html")
    res.write(data)
    res.end()
   }
   else if (url==="/index.css" && method =="GET"){
    let data = fs.readFileSync("./css/index.css")
    res.write(data)
    res.end()
   }
})
server.listen(7000,()=>{
    console.log("server started");
})