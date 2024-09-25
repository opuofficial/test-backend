require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/singers", (req, res) => {
  const singers = [
    {
      id: 1,
      name: "Arijit Singh",
      country: "India",
    },
    {
      id: 2,
      name: "Shreya Goshal",
      country: "India",
    },
    {
      id: 3,
      name: "Opu Das",
      country: "Bangladesh",
    },
  ];

  res.json(singers);
});

app.listen(PORT, () => console.log("Server is running on PORT " + PORT));
