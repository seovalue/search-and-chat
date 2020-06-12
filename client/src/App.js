import React, {Suspense} from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom";
// import { Typography, Icon } from 'antd';
// import Chatbot from './Chatbot/Chatbot';
import chatpage from './views/chatpage';
import loginpage from './views/loginpage';
import registerpage from './views/registerpage';


//const { Title } = Typography;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback = {(<div>Loading...</div>)}>
        <Switch>
          <Route path="/chat" component={chatpage}/>
          <Route path="/" exact component={loginpage} />
          <Route path="/register" component={registerpage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
