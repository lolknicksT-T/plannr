import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Navbar from './containers/Navbar'
import PlansContainer from './containers/PlansContainer'


class App extends Component {
  state = {
    user_id: ""
  }

  setUser = (id) => {
    this.setState({
      user_id: id
    }, () => console.log(this.state))
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <Navbar setUser={this.setUser}/>
        <PlansContainer />

      <Switch>

        <Route exact path='/duh' component ={ PlansContainer } />


      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
