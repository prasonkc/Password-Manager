// import packages
const express = require("express");
const cors = require("cors");

// Setup express app
const app = express();
const PORT = 3000;

// Use cors middleware to let frontend send request to backend server
app.use(cors());

// Routing to home
app.get("/", (req, res) => {
   res.json({ message: "Backend is reachable!" });
});

// Listening to requests
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT)
})