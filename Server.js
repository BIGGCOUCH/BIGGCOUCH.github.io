const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const port = 3000;

const pool = new Pool({
    user: "your_user",       // Replace with your PostgreSQL username
    host: "localhost",
    database: "your_db",     // Replace with your PostgreSQL DB name
    password: "your_pass",   // Replace with your PostgreSQL password
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
