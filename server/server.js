const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json()); // Middleware pro JSON
app.use(cors()); // Povolení CORS

const mongoURI = "mongodb://127.0.0.1:27017/moje-databaze";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Připojeno k MongoDB"))
  .catch((err) => console.error("❌ Chyba při připojení k MongoDB:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server běží na http://localhost:${PORT}`);
});
