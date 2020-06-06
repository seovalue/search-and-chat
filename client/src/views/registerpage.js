import React from "react";
import { Typography, Form, Input, Button} from 'antd';
import { withRouter } from "react-router-dom";
import Axios from "axios";
const { Title } = Typography;

const saveUser = async (info) => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  const keyword = document.getElementById('keyword').value;

  if(name && email && pw && keyword){
    const userVariable = {
      name,
      email,
      pw,
      keyword
    }

    const response = await Axios.post('/api/register/addUser', userVariable);
    if(response.data === 'SUCCESS'){
      alert(`${name}님, 회원가입이 완료되었습니다!`);
      window.location.href = `/`;
    } 
    else if(response.data === 'EXIST'){
      alert("같은 email을 가진 회원이 존재합니다 😥");
    }
  } else{
    alert('모든 정보를 입력해주세요!');
  }
}

function registerpage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', paddingTop: '5rem' }}>
        <Title level={2}>Singup Page</Title>
      </div> 
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
        <Form style={{ minWidth: '375px' }}>
          <Form.Item required label="Name">
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
            />
          </Form.Item>

          <Form.Item required label="Email">
            <Input
              id="email"
              placeholder="Enter your Email"
              type="email"
            />
          </Form.Item>

          <Form.Item required label="keyword">
            <Input
              id="keyword"
              placeholder="Enter keywords to request the chatbot to search for instead."
              type="keyword"
            />
          </Form.Item>

          <Form.Item required label="Password">
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick = {saveUser}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default withRouter(registerpage);