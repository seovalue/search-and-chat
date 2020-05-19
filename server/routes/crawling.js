const express = require('express');
const router = express.Router();
const uuid = require('uuid'); //uuid 제대로 이해하고 다시 작성하기.
const getvideo = require('../cheerio/video'); 
//@가수명 으로 입력이 들어왔을 때, 가수명만 받아서 

router.post('/textQuery',async(req,res)=>{
    const result = req.body.text;
    console.log(result.substring(1));
    var videoList = getvideo(result.substring(1));

    /*
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    */
    res.send(result)






    res.send(videoList);
})

module.exports = router;