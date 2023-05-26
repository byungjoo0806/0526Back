const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(seq){
        return super.init({
            // column settings
            title : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            content : {
                type : Sequelize.STRING(255),
                allowNull : false
            }
        },{
            // table settings
            sequelize : seq,
            modelName : "Post",
            tableName : "posts",
            paranoid : false,
            timestamps : true,
            underscored : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    };

    static associate(db){
        db.Post.belongsTo(db.User, {foreignKey : "by", targetKey : "username"});
    };
};

module.exports = Post;