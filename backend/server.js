const openAI = require("openai");
const { Configuration, OpenAIApi } = openAI;

const express = require("express");
const next = require("next");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const configuration = new Configuration({
  organization: "org-WhIK6UCWZx2vsfye1ciKs6qW",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
let history = `"Midnight, Beach, Lifeguard, Swimming"`;

const dev = process.env.NODE_ENV !== "production";
const dir = path.join(__dirname, "../frontend");
const app = next({ dev, dir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(cors());

    // Image static folder
    server.use(express.static(path.join(__dirname, "public")));

    server.post("/api/idea", async (req, res) => {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Give a stage of the day, place, character and action. Each parameter separated by a coma. Weird and exciting answer, not including a circus and different from ${history}`,
          max_tokens: 50,
          temperature: 0,
        });
        if (response.data?.choices[0]?.text) {
          history = history.concat(
            " and ",
            `"${response.data.choices[0].text.slice(2)}"`
          );
          res.json({ message: response.data.choices[0].text });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
