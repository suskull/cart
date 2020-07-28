import React from 'react';

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndSignUp from './pages/SignInAndSignUp';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';


import './App.css';

import {Route, Link, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOut from './components/CheckOut';




// const Topic = props => {
  
//   return (
//     <div> This is page 
//       <Link to ={`${props.match.url}/13`}> To page 13 </Link>
//       <Link to ={`${props.match.url}/14`}> To page 14 </Link>
//       <button onClick = {() => props.history.push(props.match.url + '/16') } >To page 15</button>
//     </div>
//   )
// }

// const TopicDetail = props => {
 
//   return (
//     <div> 
//       This is page :{props.match.params.topicId} 
//       <button onClick = {() => props.history.push(props.match.url.replace(('/'+ props.match.params.topicId), '')) } >To Topic</button>
//     </div>
//   )
// }


class App extends React.Component {

 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
               id: snapShot.id,
               ...snapShot.data()
             });
        })
      }
      else {
        setCurrentUser(userAuth);
      }
  
      //console.log(user);
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
        <Route path ='/checkout' component={CheckOut}/>
        {/* <Route exact path ='/topic/' component ={Topic}/>
        <Route path = '/topic/:topicId' component={TopicDetail}/> */}
        <Route path = '/signin' render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp />}/>
      </Switch>
    
    </div>
  );
}
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
