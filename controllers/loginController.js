const {User} = require("../models");
// 로그인 관리 - npm i bcrypt jsonwebtoken
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Login = async (req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({where : {username}});
        if(user == null){
            return res.send("plase check your username");
        };
        const same = bcrypt.compareSync(password,user.password);
        const {name,age} = user;
        if(same){
            let token = jwt.sign({
                name,
                age,
                username : user.username
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "20m"
            });
            req.session.access_token = token;
            // redirect의 "/" 경로는 백엔드의 도메인 루트 경로
            // 그래서 프론트의 경로를 작성해주자
            // 여기서 이렇게 리다이렉트를 할게 아니면 프론트에서 응답 받은 값으로 조건 분기 처리해서 페이지를 전환 시켜주면 된다.
            // return res.send("login successful");

            // 이런 경우는 배포된 프론트의 경로
            return res.redirect("http://127.0.0.1:5500/frontend/main.html");
        }else{
            return res.send("please check your password");
        };
    } catch (error) {
        console.log(error);
        console.log("error in login controller");
    };
};

exports.viewUser = async (req,res)=>{
    const {acc_decoded} = req;
    // console.log(acc_decoded);
    const user = await User.findOne({where : {name : acc_decoded.name}});
    // json 형태로 데이터를 응답
    res.json(user);
};

exports.editInfo = async (req,res)=>{
    const {name,age,password} = req.body;
    const {acc_decoded} = req;
    const hash = bcrypt.hashSync(password,10);
    await User.update({name : name, age : age, password : hash},{where : {username : acc_decoded.username}});
    res.redirect("http://127.0.0.1:5500/frontend/main.html");
};