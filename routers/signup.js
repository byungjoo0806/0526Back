const router = require("express").Router();
const {Signup} = require("../controllers/signupController");

router.post("/",Signup);

module.exports = router;