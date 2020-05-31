import React, { Suspense } from "react";
import { Typography, Icon } from 'antd';
import Chatbot from '../Chatbot/Chatbot';
import { withRouter } from "react-router-dom";
const { Title } = Typography;


function chatpage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Title level={2} >CHATBOT&nbsp;<Icon type="robot" /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Chatbot />
      </div>
    </div>
  )
}

export default withRouter(chatpage);