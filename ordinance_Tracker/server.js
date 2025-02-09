const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const DATA_FILE = "ordinances.json";

// Load existing data or initialize an empty object
const loadData = () => {
    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    }
    return {};
};

// Save data to file
const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
};

// Endpoint to save ordinance data
app.post("/submit", (req, res) => {
    const { ward, ordinances } = req.body;
    let data = loadData();

    if (!data[ward]) {
        data[ward] = { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealingChild: 0, sealingParent: 0 };
    }

    // Update values
    Object.keys(ordinances).forEach((key) => {
        data[ward][key] += parseInt(ordinances[key]) || 0;
    });

    saveData(data);
    res.json({ message: "Data saved successfully!" });
});

// Endpoint to get sum of all wards if "Stake" is selected
app.get("/stakeSummary", (req, res) => {
    const data = loadData();
    let total = { baptism: 0, confermation: 0, initatory: 0, endowment: 0, sealingChild: 0, sealingParent: 0 };

    // Sum all ward values
    Object.values(data).forEach((ward) => {
        Object.keys(total).forEach((key) => {
            total[key] += ward[key] || 0;
        });
    });

    res.json(total);
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
