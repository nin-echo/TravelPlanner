import React, {Component} from 'react';
import TopBar from './TopBar';
import Main from './Main';
import '../styles/App.css';

class App extends Component{
  state = {
    isLoggedIn: false
  }

  handleLoginSucceed = () => {
    console.log("handle success")
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout = () => {
    this.setState({isLoggedIn: false});
  }

  render(){
    return (
        <div className="App">
          <TopBar handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
          <Main handleLoginSucceed={this.handleLoginSucceed} isLoggedIn={this.state.isLoggedIn}/>
        </div>
    )
  }
}
export default App;
