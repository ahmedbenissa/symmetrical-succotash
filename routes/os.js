const express = require ('express')
const route =express.Router();
const os = require ('os')
const cpus = require ('cpus')

route.get('/get',(req,res) => {
var hostname = os.hostname();
var type = os.type() ;
res.json ({hostname,type});
})
route.get('/cpus',(req,res) => {
    var cpus = os.cpus();
 
    res.send ({cpus});
    })
route.get('/cpus/:id',(req,res) => {
    var cpus = os.cpus();
    let y=os.cpus().filter(e=>e.model==req.params.id)
 
    res.send ({y});
    })
//route.get()

module.exports=route ;