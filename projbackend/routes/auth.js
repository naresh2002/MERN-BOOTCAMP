const  express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout, signup} = require("../controllers/auth.js");

router.post("/signup", [
  check("name", "Name should have 3 characters")  // Can give Error msgs like this also
    .isLength({ min: 3 }),
  check("email", "Mention correct format of email")
    .isEmail(),
  check("password")
    .isLength({ min: 8})
    .withMessage("Password should be atleast 8 characters long")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
], signup)
router.get("/signout", signout);

module.exports = router;