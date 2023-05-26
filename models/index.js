const Sequelize = require("sequelize");
const config = require("../config"); // 폴더까지의 경로 -> 그 폴더 내의 index.js 파일에서 내보낸 값들을 가져온다.

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;

module.exports = db;