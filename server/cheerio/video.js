const axios = require('axios');
const cheerio = require('cheerio');

/*
이런 식으로 전달해야함. card 컴포넌트에
    {
      "description": "Youtube",
      "image": "",
      "link": "https://www.youtube.com",
      "stack": "minjeong"
    }
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
                description : "naverTV",
                image : $(this).find('a.cds_thm').children('img').attr('src'), 
                title : $(this).find('a.cds_thm').attr('title'),
                link : "https://tv.naver.com/" + $(this).find('a.cds_thm').attr('href')
            }
        })

        var data = videoList.filter(n => n.title);
        data = data.slice(0,3)
        
        return data;
    })
    //.then(res=>console.log(res));
}

module.exports = video;