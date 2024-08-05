const express = require("express");
const { signup } = require('../controller/usercontroller');
const { login } = require('../controller/usercontroller');

const router = express.Router();


router.post("/signup", signup);
router.post("/login",login);

module.exports = router;
module.exports = router;
