const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema=new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit= mongoose.model("Fruit",fruitSchema);

const fruit= new Fruit({
    name:"Apple",
    rating:34,
    review:"Pretty solid as a fruit."
});

fruit.save();



const personSchema=new mongoose.Schema({
    name: String,
    age: Number
});

const Person= mongoose.model("Person",personSchema);

const person= new Person({
    name:"John",
    age:37,
});
// person.save();

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();

        fruits.forEach(function(fruits){
            console.log(fruit.name);
        });
        console.log(fruits);
    }
});
// Person.deleteMany({name:"John"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("succesfully deleted");
//     }
// });