import React from "react";
import { Typography, Form, Input, Icon, Button} from 'antd';
import { withRouter, Link } from "react-router-dom";
import Axios from 'axios';

const { Title } = Typography;

console.log("start");
let url = "/";

async function userInfo(){
  const email = document.getElementById('email').value;
  const pw = document.getElementById('password').value;
  

  if(email && pw){
    const userVariables = {
      email,
      pw
    }

    const response = await Axios.post('/api/login/userInfo', userVariables);
    if(response.data !== 'FAIL'){
      url = "/chat";
      // loginForm.action = `/chat?${response.data}`;
      // loginForm.submit();
      var keyword = response.data.keyword;
      var name = response.data.name;

      sessionStorage.setItem("Now_userKeyword", keyword);
      sessionStorage.setItem("Now_userName", name);
      // window.history.replaceState('login','','/chat');
      // window.history.go();
      // window.location.href = "/chat"; 
    } else{
      url = "/";
      alert("입력하신 정보와 일치하는 회원이 존재하지 않습니다 😥");
    }
  }
  else{
    url = "/";
    alert("이메일과 패스워드를 입력해주세요!");
  }
}


function loginpage() {
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', paddingTop: '10rem' }}>
          <Title level={2}>SEARCH-AND-CHAT MAIN PAGE</Title>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          사용방법은&nbsp;<Link to ="/usage">HOW TO USE</Link>&nbsp;에서 확인하실 수 있습니다.
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
                <Link to= {`${url}`} onClick= {userInfo} name = "loginLink">
                  <Button type="primary"  className="login-form-button" style={{ minWidth: '100%' }}>
                    Log in
                  </Button>
                </Link>
              </div>
              <Link to ="/register">가입하기</Link> Or <Link to = "/chat">비회원으로 사용하기</Link>
            </Form.Item>
          </form>
        </div>
    </div>
  );
}

export default withRouter(loginpage);