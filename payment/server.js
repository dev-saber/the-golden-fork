require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const app = express();

app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/checkout", async (req, res) => {

});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
