import React from 'react';

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndSignUp from './pages/SignInAndSignUp';
import {auth} from './firebase/firebase.utils';

import './App.css';

import {Route, Link, Switch} from 'react-router-dom';




const Topic = props => {
  
  return (
    <div> This is page 
      <Link to ={`${props.match.url}/13`}> To page 13 </Link>
      <Link to ={`${props.match.url}/14`}> To page 14 </Link>
      <button onClick = {() => props.history.push(props.match.url + '/16') } >To page 15</button>
    </div>
  )
}

const TopicDetail = props => {
 
  return (
    <div> 
      This is page :{props.match.params.topicId} 
      <button onClick = {() => props.history.push(props.match.url.replace(('/'+ props.match.params.topicId), '')) } >To Topic</button>
    </div>
  )
}


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
  return (
    <div className='App'>
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path ='/shop' component={Shop}/>
        <Route exact path ='/topic/' component ={Topic}/>
        <Route path = '/topic/:topicId' component={TopicDetail}/>
        <Route path = '/signin' component={SignInAndSignUp}/>
      </Switch>
    
    </div>
  );
}
}

export default App;
