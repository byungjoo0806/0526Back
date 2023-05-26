// 로그인 페이지
// 복습
// 폴더를 나눠서
// 배포를 해서 프론트를 수정하면 프로트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

// 프로젝트 관리
// 백엔트랑 프론트랑 나눠서 깃 레포 파놓고 푸쉬

// npm i express express-session cors sequelize mysql2 dotenv

const express = require("express");
const PORT = 5026;
const cors = require("cors");
const session = require("express-session");
const dot = require("dotenv").config();
const {sequelize} = require("./models");

const app = express();

app.use(express.urlencoded({extended : false}));

// 다른 도메인에서 악의적으로 접근할 수 없도록
// 도메인 접근시 발생하는 보안 정책
// 다른 도메인과 통신을 안전하게 유지 시키기 위해서 보안 정책이 있다.
// cors 모듈을 가지고 도메인을 허용 해주자
// Access-control-Allow-origin 을 헤더에 포함해서 접근을 허용하고 응답하고
// 브라우저에 응답을 받은 뒤, 헤더값을 확인해서 접근을 허용 또는 차단한다.

// 미들웨어로 추가
app.use(cors({
    // 도메인 허용 옵션
    // 접근을 허용할 도메인
    // 여러개의 도메인을 허용하고 싶다하면 배열의 형태로 여러 도메인을 넣어주면 된다.
    origin : "http://127.0.0.1:5500",
    
    // 클라이언트의 요청에 쿠키를 포함할지의 속성
    credentials : true,
}));

app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false
}));

sequelize.sync({force : false})
.then(()=>{
    console.log("mysql database connected");
}).catch((err)=>{
    console.log(err);
    console.log("mysql database NOT connected");
});

//test
// app.get("/",(req,res)=>{
//     res.send("here's server's response");
// });

// login page
const loginRouter = require("./routers/login");
app.use("/login",loginRouter);

// signup page
const signupRouter = require("./routers/signup");
app.use("/signup",signupRouter);


app.listen(PORT,()=>{
    console.log("server open");
});