import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribedFromAuth = null

  componentDidMount() {
    this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        })
      } else{
        this.setState({currentUser: userAuth});
      }
    })
    
  }

  componentWillUnmount() {
    this.unsubscribedFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop/hats" component={HatsPage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );

  }
}

export default App;
