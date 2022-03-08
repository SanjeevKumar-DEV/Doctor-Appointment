const router = require("express").Router();

// route to get home page for patient login
router.get("/", async (req, res) => {
  res.render("login", {});
});
