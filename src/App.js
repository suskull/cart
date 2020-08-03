import React from 'react';

import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndSignUp from './pages/SignInAndSignUp';
import {auth,createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';


import './App.css';

import {Route, Link, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
//import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOut from './components/CheckOut';
import { checkUserSession } from './redux/user/user.actions';

// import data from shop.data.js to firebase 
// khong xoa di se import nhieu lan
// import {addCollectionAndDocuments} from './firebase/firebase.utils';
// import { selectCollectionsForPreview } from './redux/shop/shop-selectors';
// mapstatetopprops collectionsArray: selectCollectionsForPreview(state)
// cho vao componentdidmount addCollectionAndDocuments('collections' ,collectionsArray.map(({title,items})=>({title,items})));

class App extends React.Component {

 
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {checkUserSession} = this.props
    checkUserSession();
    // const {setCurrentUser,collectionsArray} = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     
    //   if(userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser ({
    //            id: snapShot.id,
    //            ...snapShot.data()
    //          });
    //     })
    //   }
    //   else {
    //     setCurrentUser(userAuth);
        
    //   }
  
    //   //console.log(user);
    // });
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
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
