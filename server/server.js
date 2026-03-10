const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/market", (req, res) => {
  res.json({
    spChange: 1.23,
    volatilityProxy: 17.5,
  });
});

app.listen(PORT, () => {
  console.log(`Market server running on port ${PORT}`);
});