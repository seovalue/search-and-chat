const express = require('express');
const router = express.Router();

var user = {
    email: "mathmjseo@khu.ac.kr",
    name: "minjeong",
    pw: "1234",
    keyword: "오마이걸"
}

router.post('/userInfo', async(req,res)=>{
    let userEmail = req.body.email;
    console.log(userEmail);
    let userPW = req.body.pw;
    console.log(userPW);
    let data = "";
    if(userEmail === user.email && userPW === user.pw){
        data = user.keyword;
        console.log(data);
    }
    res.send(data);
})

module.exports = router;