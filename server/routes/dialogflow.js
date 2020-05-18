const express = require('express');
const router = express.Router();
const dialogflow = require('dialogflow');
const structjson = require('./structjson.js');


const config = require('../config/keys');

const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode

// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

//Text Query Route
router.post('/textQuery',async (req,res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // dialogflow agent에 보내는 query
                text: req.body.text,
                // 사용자언어 (ko)
                languageCode: languageCode,
            },
        },
    };

    const response = await sessionClient.detectIntent(request);
    console.log('Detected Intent');
    const result = response[0].queryResult;

    res.send(result)
});



// Event Query Route
router.post('/eventQuery',async (req,res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                name: req.body.text,
                // 사용자언어 (ko)
                languageCode: languageCode,
            },
        },
    };

    const response = await sessionClient.detectIntent(request);
    console.log('Detected Intent');
    const result = response[0].queryResult;

    res.send(result)
});

module.exports = router;