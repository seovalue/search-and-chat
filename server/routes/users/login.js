const express = require('express');
const router = express.Router();
var getUser = require('./user').getUser;

// var user = {
//     email: "mathmjseo@khu.ac.kr",
//     name: "minjeong",
//     pw: "1234",
//     keyword: "오마이걸"
// }

router.post('/userInfo', async(req,res)=>{
    let userEmail = req.body.email;
    let userPW = req.body.pw;
    let result = "";

    const simpleUserInfo = {
        email: userEmail,
        pw: userPW
    };

    result = getUser(simpleUserInfo);
    res.send(result);
})

module.exports = router;