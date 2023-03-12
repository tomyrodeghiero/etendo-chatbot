const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-msxDpDOVhk2dtA2FJ3P3FrOT",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// create a simple express API that calls the function above
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 4000;

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 3000,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});

app.get("/api/test", (req, res) => {
  res.send("Test");
});

app.listen(port);
