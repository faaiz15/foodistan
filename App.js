import React from 'react';

// import abc from './abc.jpg';
import './App.css';
import Approuter from './router';
import fire from './components/fire';
import Home from './components/Home';
import Login from './components/Login';
class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
    //<Login/>
     <div><Approuter />
     {/* {this.state.user ? ( <Home/>) : (<Login />)} */}
     </div>
    )}
}


export default App;
