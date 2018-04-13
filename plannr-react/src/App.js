import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Navbar from './containers/Navbar'
import LoggedInNavbar from './containers/LoggedInNavbar'
import PlansContainer from './containers/PlansContainer'

class App extends Component {
  state = {
    user_id: null
  }

  componentDidMount() {
    if (localStorage.user) {
      this.setState({ user_id: JSON.parse(localStorage.user)}, () => console.log(this.state))
    }
  }

  setUser = (json) => {
    this.setState({
      user_id: json.id
    }, () => console.log(this.state))
    localStorage.user = JSON.stringify(json.id)
    console.log(localStorage);
  }

  logout = ( /* history */ ) => {
    localStorage.user = ""
    this.setState({
      user_id: null
    }, () => console.log(this.state)/*, () => history.push("/") */)
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          {!this.state.user_id ? <Navbar setUser={this.setUser} /> : <LoggedInNavbar logout={this.logout}/> }
          {this.state.user_id ? <PlansContainer user={this.state.user_id} /> : null}
          <Switch>

        <Route exact path='/duh' component ={ PlansContainer } />


      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
