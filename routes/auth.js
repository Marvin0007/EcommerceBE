const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controllers
const { createUpdateUser } = require("../controllers/auth");
router.post("/create-or-update-user", authCheck, createUpdateUser);

// Testing
const myMiddleware = (req, res, next) => {
  console.log("I'M A Middleware, Yay");
  next();
};
router.get("/testing", myMiddleware, (req, res) => {
  res.json({
    data: "Testing Middleware is Successful.",
  });
});

module.exports = router;
