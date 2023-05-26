// 로그인 페이지
// 복습
// 폴더를 나눠서
// 배포를 해서 프론트를 수정하면 프로트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

// 프로젝트 관리
// 백엔트랑 프론트랑 나눠서 깃 레포 파놓고 푸쉬

// npm i express express-session cors

const express = require("express");
const path = require("path");
const PORT = 5026;
const session = require("express-session");

const app = express();

app.use(express.urlencoded({extended : false}));

app.listen(PORT,()=>{
    console.log("server open");
});