const router = require("express").Router();
const {Upload} = require("../mid/imgUpload");
const {isLogin} = require("../middleware/loginMiddleware");
const {userPic} = require("../controllers/loginController");
const {User} = require("../models");

router.post("/",Upload.single("upload"),(req,res)=>{
    const {file,body} = req;
    // console.log(req);
    console.log(file.filename);
    
    res.json(file);
    // res.send("file saved");
});

module.exports = router;