require("dotenv").config();
const express = require("express");

const app = express();

// Get all restaurants 
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    })
});

// Get individual restaurant 
app.get("/api/v1/restaurants/:restaurantsid", (req, res) => {
    console.log(req.params);
});


// Create a new restaurant
app.post("/api/v1/restaurants/", (req, res) => {
    console.log(req);
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});

