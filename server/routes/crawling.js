const express = require('express');
const router = express.Router();
const uuid = require('uuid'); //uuid 제대로 이해하고 다시 작성하기.
const getvideo = require('../cheerio/video'); 
//@가수명 으로 입력이 들어왔을 때, 가수명만 받아서 

router.post('/textQuery',async(req,res)=>{
    const result = req.body.text;
    console.log(result.substring(1));
    getvideo(result.substring(1));
    res.send(result);
})

module.exports = router;