// 로그인 페이지
// 복습
// 폴더를 나눠서
// 배포를 해서 프론트를 수정하면 프로트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

// 프로젝트 관리
// 백엔트랑 프론트랑 나눠서 깃 레포 파놓고 푸쉬

// npm i express express-session cors

const express = require("express");
const PORT = 5026;
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({extended : false}));

// 다른 도메인에서 악의적으로 접근할 수 없도록
// 도메인 접근시 발생하는 보안 정책
// 다른 도메인과 통신을 안전하게 유지 시키기 위해서 보안 정책이 있다.
// cors 모듈을 가지고 도메인을 허용 해주자
// Access-control-Allow-origin 을 헤더에 포함해서 접근을 허용하고 응답하고
// 브라우저에 응답을 받은 뒤, 헤더값을 확인해서 접근을 허용 또는 차단한다.

//test
app.get("/",(req,res)=>{
    res.send("here's server's response");
});

app.listen(PORT,()=>{
    console.log("server open");
});