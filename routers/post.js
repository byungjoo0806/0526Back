const {isLogin} = require("../middleware/loginMiddleware");
const router = require("express").Router();
const {View,Add,myPost} = require("../controllers/postController");

router.get("/",isLogin,View);

router.post("/add",isLogin,Add);

router.get("/mypost",isLogin,myPost);

module.exports = router;