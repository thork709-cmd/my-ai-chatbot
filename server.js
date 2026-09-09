const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("My AI backend is working! 🤖");
});

app.post("/chat", (req, res) => {

    const message = req.body.message;

    if (!message) {
        return res.status(400).json({
            error: "Message is required"
        });
    }

    res.json({
        reply: "I received: " + message
    });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is running!");
});
