const express = require('express');
const router = express.Router();
var addUser = require('./user').addUser;

router.post('/addUser', async(req,res)=>{
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPW = req.body.pw;
    const userKeyword = req.body.keyword;

    const newUser = {
        'name':userName,
        'email':userEmail,
        'pw' :userPW,
        'keyword': userKeyword
    };

    var result = addUser(newUser);
    res.send(result);
})

module.exports = router;