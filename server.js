require("dotenv").config();

const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3000;

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/chat", async (req, res) => {
    try {
        const question = req.body.message;

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });

        const result = await model.generateContent(
            "You are LFE AI Buddy, a friendly school tutor. Explain simply.\n\nQuestion: " + question
        );

        const answer = result.response.text();

        res.json({
            answer: answer
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            error: "AI error"
        });
    }
});


app.listen(PORT, () => {
    console.log("LFE AI Server running on port 3000");
});