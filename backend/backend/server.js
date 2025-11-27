const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const MONGO_URI = "mongodb://localhost:27017/";
const COLAB_API_URL = "http://127.0.0.1:5000/process-video";  // Replace with your ngrok URL

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(" MongoDB Connection Error:", err));


const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
},{ collection: "seo_database" });

const User = mongoose.model("seo_database", userSchema);

const upload = multer({ dest: "uploads/" });

// 📌 API Route: Upload Video & Send to Model
app.post("/upload", upload.single("video"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    // 🔗 Python Model API Endpoint
    const pythonModelURL = "http://localhost:5000/process-video";

    // ⏩ Read the file and send it to Python as FormData
    const formData = new FormData();
    formData.append("video", fs.createReadStream(req.file.path));

    // 🚀 Send video to Python Model
    const response = await axios.post(pythonModelURL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // 🔥 Delete temp file after sending
    fs.unlinkSync(req.file.path);

    // ✅ Send Response from Python Model
    res.json({ success: true, modelResponse: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing video" });
  }
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: "User already exists" });

        
        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: "User not found" });

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        res.json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ error: "Login failed" });
    }
});
app.get("/upload",(req,res)=>{

})
app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
