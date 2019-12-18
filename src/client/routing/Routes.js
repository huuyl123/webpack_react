import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Test from '../components/Test';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Faq from '../components/Faq';
import Queue from '../components/Queue/Queue';
import ProfilePage from '../components/View/Profile/ProfilePage';
import ChatBox from '../components/Chat/ChatBox';
import ChatView from '../components/Chat/ChatView';
import PickTutor from '../components/View/PickTutor';

const Routes = () => {
  return (
    <section className="masthead">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/queue" component={Queue} />
        <Route exact path="/chat" component={ChatBox} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/chatroom" component={ChatView} />
        <Route exact path="/picktutor" component={PickTutor} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};
export default Routes;
