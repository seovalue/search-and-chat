const axios = require('axios');
const cheerio = require('cheerio');

/*
한글 utf-8 인코딩해서 searchquery에 저장해야함.
*/

function video(name){
    console.log("My favorite singer",name)
    var url = 'https://tv.naver.com/search/clip?query=' //naverTV의 링크
    var sort = '&sort=date'

    url = url + name + sort
    url = encodeURI(url)
    console.log("url is ",url)
    const getHtml = async() => {
        try{
            return await axios.get(url); //axios.get 함수를 이용해서 비동기로 네이버티비의 해당 가수의 최신 영상 html 파일을 가져온다. 
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
                thumbnail : $(this).find('a.cds_thm').children('img').attr('src'), 
                title : $(this).find('a.cds_thm').attr('title'),
                link : "https://tv.naver.com/" + $(this).find('a.cds_thm').attr('href')
            }
        })

        const data = videoList.filter(n => n.title);
        return data;
    })
    .then(res=>console.log(res));
}

module.exports = video;