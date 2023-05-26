const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.Signup = async (req,res)=>{
    try {
        const {name,age,username,password} = req.body;
        const user = await User.findOne({where : {username}}); // 유저 아이디가 존재하는지 찾고
        if(user != null){ // 아이디가 중복이면
            return res.send("username already exists");
        };
        const hash = bcrypt.hashSync(password,10);
        await User.create({
            name,
            age,
            username,
            password : hash
        });
        res.redirect("http://127.0.0.1:5500/frontend/login.html");
    } catch (error) {
        console.log(error);
        console.log("error in signup controller");
    }
};