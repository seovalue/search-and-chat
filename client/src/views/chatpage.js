import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from '../Chatbot/Chatbot';
import { withRouter } from "react-router-dom";
const { Title } = Typography;
let userKeyword = "";
let userName = "유저";
let autoSearch = 0; 
console.log("챗페이지 밖");

function chatpage() {
  console.log("챗페이지 안")
  if(sessionStorage.length === 2){
    console.log("세션스토리지 안")
    userKeyword = sessionStorage.getItem("Now_userKeyword");
    userName = sessionStorage.getItem("Now_userName");
    sessionStorage.clear();

    autoSearch = 1;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Title level={2} >CHATBOT&nbsp;<Icon type="robot" /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Chatbot userName = {userName} userKeyword = {userKeyword} autoSearch = {autoSearch}/>
      </div>
    </div>
  )
}

export default withRouter(chatpage);