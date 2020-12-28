const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req, res){
    const query=req.body.cityName;
    const apiKey="6014252a132a06877188f62dedd05b74"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=metric";
    
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp
        const weatherDescription=weatherData.weather[0].description
        const icon=weatherData.weather[0].icon
        const imageURL ="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.set("content-type", "text/html"); //not in the vedio andreas taught us else it was returingin the h1 as awell
        res.write("The Weather is currently "+ weatherDescription);
        res.write("<h1>The temperature in "+query+" is "+temp+" degree</h1>");
        res.write("<img src="+imageURL+">")
        res.send();
        })
    })
})





app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})