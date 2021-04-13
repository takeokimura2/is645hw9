// Load the Express, Multer and Body-Parser packages as a module
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");

// Access the exported service
const app = express();
const upload = multer();
const jsonParser = bodyParser.json();

// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Serve content of the "css" subfolder directly
app.use(express.static("css"));


// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});



// Return a web page for requests to "/ex1"
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

// Handle form data submission to the "/ex1" route
app.post("/ex1", upload.array(), (request, response) => {
  console.log(request.body)
  const name = request.body.customername;
  const email = request.body.email;
  response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.`);
});

//Define an country list
const travelInfo = {
  name: "Takeo",
  countries: [
    {
      name: "USA",
      year: 2001
    },
    {
      name: "Morocco",
      year: 2019
    },
    {
      name: "Germany",
      year: 2019
    }
  ],
};

//Return the county list in JSON format
app.get("/api/countries", (request, response) => {
  response.json(travelInfo);
});



// Handle submission of a JSON country array
app.post("/api/countries", jsonParser, (request, response) => {

  const name = request.body.name;
  const numberofCountries = request.body.countries.length;
  response.send(`Your name is ${name} and you visited ${numberofCountries} countries. Keep travelling!`)
}
)

// Return a web page for requests to "/ex2"
app.get("/ex2", (request, response) => {
  response.sendFile(`${__dirname}/views/ex2.html`);
});

// Return a web page for requests to "/ex3"
app.get("/ex3", (request, response) => {
  response.sendFile(`${__dirname}/views/ex3.html`);
});

//create an array to store the input from user 
articleArray = [];

// Handle form data submission to the "/ex3" route
app.post("/ex3", upload.array(), (request, response) => {
  contents = request.body;
  console.log(contents);

  //push the user input to the articleArray
  articleArray.push(contents);
  articleID = articleArray.length;

  console.log(articleArray);

  const title = request.body.title;
  const content = request.body.content;
  response.send(`New article added successfully with title "${title}" and ID ${articleID}.`);

});
// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});