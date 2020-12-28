const express=require("express");
const https=require("https");
const app = express();
app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=6014252a132a06877188f62dedd05b74&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp
        const weatherDescription=weatherData.weather[0].weatherDescription
        res.send("<h1>The temperature in london is "+temp+" degree</h1>");
        })
    })
})




app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})