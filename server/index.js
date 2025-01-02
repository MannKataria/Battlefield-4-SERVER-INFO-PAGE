const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();
let corsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

const PORT = 5000;

app.use(router);

app.listen(PORT, (req, res) => {
  console.log(`Server started at PORT: ${PORT}`);
});
