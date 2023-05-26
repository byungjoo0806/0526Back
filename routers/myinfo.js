const router = require("express").Router();
const {isLogin} = require("../middleware/loginMiddleware");
const {editInfo} = require("../controllers/loginController");

router.post("/",isLogin,editInfo);

module.exports = router;