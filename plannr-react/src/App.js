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
    toggledView: "none",
    toggledPlan: 0,
    allPlans: "",
    myPlans: "",
    pastPlans: "",
    notJoinedPlans: ""
  }

  componentDidMount() {
    if (localStorage.user !== "") {
      this.setState({ user_id: JSON.parse(localStorage.user)}, () => this.fetchPlans(this.state) )
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.user_id !== nextState.user_id || this.state.toggledView !== nextState.toggledView || this.state.toggledPlan !== nextState.toggledPlan) {
  //     return true
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   this.fetchPlans(prevState)
  // }

  fetchPlans = (state) => {
    this.fetchAllPlans(state)
    this.fetchPastPlans(state)
  }

  fetchAllPlans = (state) => {
    fetch('http://localhost:3000/api/v1/plans')
    .then(res => res.json())
    .then(json => this.setState({ allPlans: json }, () => this.fetchMyPlans(state)))
  }

  fetchMyPlans = (state) => {
    fetch(`http://localhost:3000/api/v1/users/${state.user_id}/my_plans`)
    .then(res => res.json())
    .then(json => this.setState({ myPlans: json }, () => this.notJoinedPlans() ))
  }

  fetchPastPlans = (state) => {
    fetch(`http://localhost:3000/api/v1/users/${state.user_id}/past_plans`)
    .then(res => res.json())
    .then(json => this.setState({ pastPlans: json }))
  }

  notJoinedPlans = () => {
    let notJoined = []
    if (this.state.myPlans.length === 0) {
      this.setState({notJoinedPlans: this.state.allPlans})
    } else if (this.state.allPlans.length > 0 && this.state.myPlans.length > 0) {
      this.state.allPlans.map( plan => plan.id).forEach( planId => {
        if(!this.state.myPlans.map( plan => plan.id ).includes(planId)) {
          notJoined.push(this.state.allPlans[planId - 1])
        }
      })
      this.setState({notJoinedPlans: notJoined}, () => console.log(this.state))
    }
  }

  setUser = (json) => {
    this.setState({ user_id: json.id })
    localStorage.user = JSON.stringify(json.id);
  }

  logout = ( ) => {
    localStorage.user = ""
    this.setState({ user_id: null })
  }

  setToggled = (view, plan) => {
    console.log(this.state)
    this.state.toggledPlan === parseInt(plan, 10) ? this.setState({ toggledView: "none", toggledPlan: 0 }) : this.setState({ toggledView: view, toggledPlan: plan })
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {!this.state.user_id ? <Navbar setUser={this.setUser} /> : <LoggedInNavbar logout={this.logout} setToggled={this.setToggled}/> }
          {this.state.user_id ? <PlansContainer user_id={this.state.user_id} setToggled={this.setToggled} toggledView={this.state.toggledView} toggledPlan={this.state.toggledPlan} allPlans={this.state.allPlans} myPlans={this.state.myPlans} pastPlans={this.state.pastPlans} notJoinedPlans={this.state.notJoinedPlans} /> : null}

          <Switch>

        <Route exact path='/duh' component ={ PlansContainer } />


      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
