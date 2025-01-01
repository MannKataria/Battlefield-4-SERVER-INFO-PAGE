const express = require("express");
const cors = require("cors");
const serverStats = require("./stats.json");
const serverSettings = require("./settings.json");

const app = express();
let corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

const PORT = 5000;

app.get("/server/:path", (req, res) => {
  const path = req.params.path;
  if (path === "stats") {
    return res.json(serverStats);
  } else if (path === "settings") {
    return res.json(serverSettings);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server started at PORT: ${PORT}`);
});
