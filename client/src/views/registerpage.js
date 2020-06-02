import React from "react";
import { Typography, Form, Input, Button} from 'antd';
import { withRouter } from "react-router-dom";
const { Title } = Typography;


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
            <Button type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
  // return (
  //   <div>
  //     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
  //       <Title level={2} >RegisterPage Test</Title>
  //     </div>
  //   </div>
  // )
}

export default withRouter(registerpage);