const express = require('express');
const router = express.Router();
const uuid = require('uuid'); //uuid 제대로 이해하고 다시 작성하기.

const axios = require('axios');
const cheerio = require('cheerio');

//@가수명_정확도 으로 입력이 들어왔을 때, 가수명만 받아서 

router.post('/textQuery', async(req,res)=>{
    const result = req.body.text;
    
    //가수명 추출
    var i = 0;
    for(i; i < result.length; i++){
        if(result[i] === '_') break;
    }
    var name = result.substr(1,i-1);

    var url = 'https://tv.naver.com/search/clip?query=' //naverTV의 링크
    var sort = '&sort=rel'
    url = url + name + sort
    url = encodeURI(url)
    console.log("url is ",url)
    const getHtml = async() => {
        try{
            return await axios.get(url); //axios.get 함수를 이용해서 비동기로 네이버티비의 해당 가수의 이름과 정확도가 높은  html 파일을 가져온다. 
        } catch(error){
            console.log("error! check your code");
        }
    };

    getHtml()
    .then(html => {
        let videoList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.src_wrap div.thl ").children("div.thl_a");

        $bodyList.each(function(i, elem){
            videoList[i] = {
                description : "naverTV",
                image : $(this).find('a.cds_thm').children('img').attr('src'), 
                title : $(this).find('a.cds_thm').attr('title'),
                link : "https://tv.naver.com/" + $(this).find('a.cds_thm').attr('href')
            }
        })

        data = videoList.filter(n => n.title);
        data = JSON.stringify(data.slice(0,3))
        
        res.send(data);
    })
})

module.exports = router;