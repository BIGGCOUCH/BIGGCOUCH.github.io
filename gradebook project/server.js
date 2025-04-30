const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const port = 3000;

const pool = new Pool({
    user: "postgres",           
    host: "localhost",
    database: "gradebook",      
    password: "admin",   
    port: 5432
});


app.use(express.static(path.join(__dirname, "public")));

app.get("/api/grades", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT first_name, last_name, assignment1, assignment2, assignment3 FROM grades"
        );
        res.json(result.rows);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Failed to retrieve grades.");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});