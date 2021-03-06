import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Navbar from './containers/Navbar'
import LoggedInNavbar from './containers/LoggedInNavbar'
import PlansContainer from './containers/PlansContainer'

class App extends Component {
  state = {
    user_id: null,
    toggled: 0
  }

  componentDidMount() {
    if (localStorage.user) {
      this.setState({ user_id: JSON.parse(localStorage.user)})
    }
  }

  setUser = (json) => {
    this.setState({ user_id: json.id })
    localStorage.user = JSON.stringify(json.id)
    console.log(localStorage.user);
  }

  logout = ( /* history */ ) => {
    localStorage.user = ""
    this.setState({
      user_id: null
    }, () => console.log(this.state)/*, () => history.push("/") */)
  }

  setToggled = (num) => {
    this.state.toggled === num ? this.setState({ toggled: 0 }) : this.setState({ toggled: num })
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          {!this.state.user_id ? <Navbar setUser={this.setUser} /> : <LoggedInNavbar logout={this.logout} setToggled={this.setToggled}/> }

          {this.state.user_id ? <PlansContainer setToggled={this.setToggled} user={this.state.user_id} toggled={this.state.toggled} /> : null}
          <Switch>

        <Route exact path='/duh' component ={ PlansContainer } />


      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
