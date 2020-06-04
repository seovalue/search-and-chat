import React from "react";
import { Typography, Form, Input, Icon, Button} from 'antd';
import { withRouter } from "react-router-dom";
import Axios from 'axios';

const { Title } = Typography;

console.log("start");

const userInfo = async (info) => {
  const email = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  if(email && pw){
    const userVariables = {
      email,
      pw
    }

    const response = await Axios.post('/api/login/userInfo', userVariables);
    if(response.data === "오마이걸"){
      // loginForm.action = `/chat?${response.data}`;
      // loginForm.submit();
      window.location.href=`/chat?keyword=${response.data}`;
    }
  }
  else{
    alert("nothing");
  }
}


function loginpage() {

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', paddingTop: '10rem' }}>
          <Title level={2}>Login Page</Title>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
          <form style={{ width: '350px' }} name = "loginForm">
            <Form.Item required>
              <Input
                id="email"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter your email"
                type="email"
              />
            </Form.Item>

            <Form.Item required>
              <Input
                id="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Enter your password"
                type="password"
              />
            </Form.Item>

            <Form.Item>
              <div>
                <Button type="primary"  className="login-form-button" style={{ minWidth: '100%' }} onClick={userInfo}>
                  Log in
                </Button>
              </div>
              <a href="/register">가입하기</a> Or <a href = "/chat"> 비회원으로 사용하기 </a>
            </Form.Item>
          </form>
      </div>
    </div>
  );
  // return (
  //  htmlType="submit"





  //   <div>
  //     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
  //       <Title level={2} >Login Page</Title>
  //     </div>
  //   </div>
  // )
}

export default withRouter(loginpage);