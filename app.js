// var calc = require('calc.js')
// resultAdd = calc.add(4, 5)
// resultSub = calc.sub(9, 5)
// console.log("The output is " + resultAdd)
// console.log("The output is " + resultSub)
// var http = require('http')

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'})
//     res.end("Welcome Back Alien!!!")
//     res.end()
// }).listen(9000)
// var fs = require('fs');
// const path = require('path');
// const calcFilePath = path.join(__dirname, 'calc.js');
// fs.readFile('node_modules/calc.js', 'utf8', (err, data)=>{
//     if (err) {
//         console.error(err);
//         return;
//       }
//       else{
//         console.log(data);
//       }
// })  
// fs.appendFile('calc.js','console.log("done")', function(err){
//   console.log("Data Saved")
// })
// fs.unlink('calc1.js', function(err){
//   console.log('deleted')
// })
const express = require('express');
const app = express();
app.get('/',(req, res)=>{
  res.send('Hello World!');
})

app.get('/alien', (req,res)=>{
  const id = req.query.id;
  res.send('Welcome Back Alien '+ id)
})
app.get('/alien/:id', (req,res)=>{
  const id = req.params.id;
  if(id == 19){
    res.send('Welcome Back Reema');
  }
  else if(id == 28){
    res.send('Welcome Back Harshil');
  }
})

app.listen(8080, (req, res)=>{
  console.log('Running..')
});