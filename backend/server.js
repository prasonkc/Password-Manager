// import packages
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const UserData = require('./model/datamodel');

// Setup express app
const app = express();
const PORT = 3000;

// Use cors middleware to let frontend send request to backend server
app.use(cors());

// Connect to the databasse
const dbURI = "mongodb://localhost:27017/UserData";
mongoose.connect(dbURI).then((result) => {
  console.log("Database Connected");

  // Listening to requests after catabase connects
  app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
  });
}).catch((err) => console.log(err))

// Routing to home
app.get("/", (req, res) => {
  res.json({ message: "Backend is reachable!" });
});

// Development routes
app.get("/add-data", (req, res) => {
    const userData = new UserData({
        URL: "www.google.com",
        userName: "Prason",
        password: "#HolyFuckingAirball"
    })

    userData.save().then((result) => {
        console.log("Data Saved" + result)
        res.json({result });
    }).catch((err) => {console.log(err)})
})

app.get("/get-data", (req, res) => {
    UserData.findById("68b84562f0f769a5154a6529")
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
})
