const express = require("express");
const app = express();
const mainRoutes = require('./routes/mainRoutes.js');
app.use(express.json());

//ROUTES
app.use(mainRoutes);

//404
app.get("*", async (req, res) => {
  res.json({ message: "404" });
});

app.listen(3000, () => {
  console.log("Server Port: 3000");
});
