const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(seq){
        return super.init({
            // column settings
            name : {
                type : Sequelize.STRING(20),
                allowNull : false
            },
            age : {
                type : Sequelize.INTEGER,
                allowNull : false
            },
            username : {
                type : Sequelize.STRING(50),
                allowNull : true
            },
            password : {
                type : Sequelize.STRING(64),
                allowNull : true
            },
            profileImage : {
                type : Sequelize.STRING(128),
                defaultValue : "./img/basic_profile.jpeg"
            }
        },{
            // table settings
            sequelize : seq,
            modelName : "User", // 노드 프로젝트에서 사용할 이름 (조회 했을때 보임)
            tableName : "users", // 데이터베이스 내에 들어갈 테이블의 이름
            charset : "utf8", // 인코딩 방식
            collate : "utf8_general_ci", // 인코딩 방식
            timestamps : true,
            paranoid : false, // 삭제시간 column 자동 생성 유무
            underscored : false // underscored - do you want to use Camel case?
        });
    };

    static associate(db){
        db.User.hasMany(db.Post, {foreignKey : "by", sourceKey : "username"});
    };
};

module.exports = User;