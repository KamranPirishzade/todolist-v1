const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");



const app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.set("view engine","ejs");

app.use(express.static("public"));

const items=["Buy Food","Cook Food","Eat Food"]
const workItems=[]

app.get('/',function(req,res){

    const day=date.getDate()

    res.render("list",{listTitle : day, listItems : items});
});

app.get("/work",function(req,res){

    res.render("list",{listTitle:"Work List",listItems:workItems});

});


app.post('/',function(req,res){

    const newItem=req.body.newItem; 

    if (req.body.button==="Work"){
        workItems.push(newItem);
        res.redirect("/work");
    }else{
        items.push(newItem);
        res.redirect("/");
    }

})

app.get("/about",function(req,res){

    res.render("about");

});





app.listen(3000,function(){

    console.log("Server is running on port 3000.")

})