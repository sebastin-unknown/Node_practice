const bodyParser = require("body-parser");
const express = require("express");
const app =  express();
const routerdata = require("./routes/admin")
const routershop = require("./routes/shop")
const path = require("path")




app.set('view engine','pug')
app.use('/admin',routerdata)
app.use(routershop)
app.use(express.static(path.join(__dirname,'public')))



app.get('/index',(req,res)=>{
 res.render("index",{Headers:'Let me tell you a small',body:'this is body part'})
})


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404-error.html'))

})

app.use(bodyParser.urlencoded({extended:true}))







app.listen(4500)






