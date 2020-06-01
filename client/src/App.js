import React, {Suspense} from "react";
import { Route, Switch } from "react-router-dom";
// import { Typography, Icon } from 'antd';
// import Chatbot from './Chatbot/Chatbot';
import chatpage from './views/chatpage';
import loginpage from './views/loginpage';
import registerpage from './views/registerpage';


//const { Title } = Typography;

function App() {
  return (
    <Suspense fallback = {(<div>Loading...</div>)}>
      <Switch>
          <Route exact path="/" component={chatpage}/>
          <Route exact path="/login" component={loginpage} />
          <Route exact path="/register" component={registerpage} />
        </Switch>
    </Suspense>
  )
}

export default App;
