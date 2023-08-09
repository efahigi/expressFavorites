// Load express or Bringing in Express / Import
const express = require("express");

// Create our express app or Connects express instance to the variable 'app'
const app = express();

//-{Middleware}
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


//Item arry
const myFvoriteItems = ['DIDs', 'Printer', 'Gift Card', 'Water guns', 'shoe', 'stuffed Dog', 'Ball', 'Gum', 'Cactus', 'Rubber Duck'];

// Define a "root" route directly on app
app.get('/',(req, res) => {
  res.send('<h1>Hello World!</h1>');
});
//creat RToutes based on path/REST
app.get('/home',(req,res) => {
res.send('<h1> home page </h1>')
})
//home Route
app.get('/about',(req,res) => {
    res.send('<h1> About me</h1>')
    })
    //about Route
app.get('/contact',(req,res) => {
    res.send('<h1> Contact me </h1>')
    })
    //Resume Route
app.get('/resume',(req,res) => {
    res.send('<h1> Read my resume </h1>')
    })
    //Project Route
app.get('/project',(req,res) => {
    res.send('<h1> List of my project </h1>')
    })
    //project Route

// ----------------------{QueryParam}
app.get('/:indexOfItemsArray', (req, res) => {
    if (myFvoriteItems[req.params.indexOfItemsArray]) {
          res.send(myFvoriteItems[req.params.indexOfItemsArray]);
    } else {
      res.send(req.params.indexOfItemsArray +
        (" ") +  'is not exist in this index.'  );
    }

});

// app.get('/:indexOfItemsArray', (req, res) => {
//     res.send(myFvoriteItems[req.params.indexOfItemsArray]);
// }); 
app.get('/perscholas/:firstname',(req,res)=>{
    console.log(req.params);
    console.log( req.query);
    res.send(`Hi ${req.params.firstname}!`)
})
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, (req,res)=>{
  console.log('Listening on port 3000');
});










