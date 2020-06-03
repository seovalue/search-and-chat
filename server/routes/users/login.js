const express = require('express');
const router = express.Router();

var user = {
    email: "mathmjseo@khu.ac.kr",
    name: "minjeong",
    pw: "1234",
    keyword: "오마이걸"
}

router.post('/users/login', async(req,res)=>{
    const userEmail = req.body.email;
    const userPW = req.body.pw;
    const data = "";
    if(userEmail === user.email && ueserPW === user.pw){
        data = user.keyword;
    }
    res.send(data);
})

module.exports = router;