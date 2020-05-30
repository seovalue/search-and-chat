const express = require('express');
const router = express.Router();
const uuid = require('uuid'); //uuid 제대로 이해하고 다시 작성하기.

const axios = require('axios');
const cheerio = require('cheerio');

//@가수명 으로 입력이 들어왔을 때, 가수명만 받아서 

router.post('/textQuery', async(req,res)=>{
    const result = req.body.text;
    var i = 0;
    for(i; i < result.length; i++){
        if(result[i] === '_') break;
    }
    var name = result.substr(1,i-1);

    var url = 'https://search.naver.com/search.naver?query=' //naverTV의 링크
    var where = '&where=news'
    url = url + name + where
    url = encodeURI(url)
    console.log("url is ",url)
    const getHtml = async() => {
        try{
            return await axios.get(url); //axios.get 함수를 이용해서 비동기로 네이버 뉴스 중 해당 가수의 이름이 들어간 최신 뉴스 html 파일을 가져온다. 
        } catch(error){
            console.log("error! check your code");
        }
    };

    getHtml()
    .then(html => {
        let newsList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.news").children("ul.type01").children("li");


        $bodyList.each(function(i, elem){
            newsList[i] = {
                description : "네이버 검색 기사",
                title :  $(this).find('a._sp_each_title').attr('title'),
                link : $(this).find('a._sp_each_title').attr('href'),
                image : $(this).find('a.sp_thmb').children('img').attr('src')
            }
        })

        data = newsList.filter(n => n.title);
        data = JSON.stringify(data.slice(0,3))
        
        res.send(data);
    })
})

module.exports = router;