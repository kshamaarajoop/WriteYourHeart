import express from 'express'
import bodyParser from 'body-parser'
const app = express();
const port=3000;
var writeList=[];

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  res.render("index.ejs",{writeUP: writeUp})
})

app.listen(port,()=>{
  console.log(`Listening on port ${port}`)
})

app.post("/create-post",(req,res)=>{
  res.render('create.ejs')
})

app.post("/",(req,res)=>{
  var writeUp =req.body.writeMain;
  console.log(writeUp)
  writeList.push(writeUp)
  var lisLen=writeList.length
  console.log(lisLen)
  console.log(writeList)
  res.render("index.ejs",{writeUP: writeUp,ListLen:lisLen,WriteList:writeList})
})
