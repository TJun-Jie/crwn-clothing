import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {


  unsubscribedFromAuth = null

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state)
        })
      } else{
        this.props.setCurrentUser(null);
      }
    })
    
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header ></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop/hats" component={HatsPage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" render={() => 
            this.props.currentUser ? 
            <Redirect to="/"/> : 
            <SignInAndSignUpPage/>}>
          </Route>
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
