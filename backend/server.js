// import packages
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const UserData = require("./model/datamodel");

// Setup express app
const app = express();
const PORT = 3000;

// Use cors middleware to let frontend send request to backend server
app.use(cors());

// Allow JSON parsing
app.use(express.json());

// Connect to the databasse
const dbURI = "mongodb://localhost:27017/UserData";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Database Connected");

    // Listening to requests after catabase connects
    app.listen(PORT, () => {
      console.log("Listening on port: " + PORT);
    });
  })
  .catch((err) => console.log(err));

// Routing to home
app.get("/", (req, res) => {
  res.json({ message: "Backend is reachable!" });
});

app.post("/add-data", async (req, res) => {
  try {
    const { URL, userName, password } = req.body;


    // Create a new document from request body
    const newUserData = new UserData({ URL, userName, password });

    // Save to DB
    const result = await newUserData.save();

    // Send back the saved document
    res.json({ message: "Data Saved", entry: result });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
});


app.get("/get-data", (req, res) => {
  UserData.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch data" });
    });
});
