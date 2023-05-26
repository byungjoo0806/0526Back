const {Post} = require("../models");

exports.View = async (req,res)=>{
    Post.findAll()
    .then(posts=>{
        const post = posts.map(user => user.get({plain : true}));
        // console.log(post);
        res.json(post);
    }).catch((error)=>{
        console.log(error);
        console.log("unable to show the table in controller");
    });
};

exports.Add = async (req,res)=>{
    const {title,content} = req.body;
    await Post.create({
        title : title,
        content : content,
        by : req.acc_decoded.username
    });
    res.redirect("http://127.0.0.1:5500/frontend/post.html");
};

exports.myPost = async (req,res)=>{
    const {acc_decoded} = req;
    const writer = acc_decoded.username;
    Post.findAll({
        where : {by : writer}
    }).then(posts=>{
        const post = posts.map(user => user.get({plain : true}));
        // console.log(post);
        res.json(post);
    }).catch((error)=>{
        console.log(error);
        console.log("unable to show the table in controller");
    });
};