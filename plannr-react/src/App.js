import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
    if (localStorage.user && localStorage.user !== "") {
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
      notJoined = this.state.allPlans
      this.setState({notJoinedPlans: notJoined})
    } else if (this.state.allPlans.length > 0 && this.state.myPlans.length > 0) {
      let allPlans = this.state.allPlans
      let myPlans = this.state.myPlans
      let allPlansIds = allPlans.map( plan => plan.id )
      let myPlansIds = myPlans.map( plan => plan.id )

      for(let i = 0; i < allPlansIds.length; i++) {
        if(!myPlansIds.includes(allPlansIds[i])) {
          notJoined.push(allPlans[i])
        }
      }
      this.setState({notJoinedPlans: notJoined})
    }
  }

  setUser = (json) => {
    this.setState({ user_id: json.id }, () => this.fetchPlans(this.state))
    localStorage.user = JSON.stringify(json.id);
  }

  logout = ( ) => {
    localStorage.user = ""
    this.setState({ user_id: null })
  }

  setToggled = (view, plan) => {
    if (this.state.toggledView === view && this.state.toggledPlan === plan) {
      this.setState({ toggledView: "none", toggledPlan: 0})
    } else {
      this.setState({ toggledView: view, toggledPlan: plan})
    }
  }

  pushJoinedPlans = (plan) => {
    let njpIndex = this.state.notJoinedPlans.findIndex( njp => njp.id === plan.plan_id)
    this.setState({ myPlans: [...this.state.myPlans, this.state.notJoinedPlans.splice(njpIndex, 1)[0]] })
  }

  pushNotJoinedPlans = (plan) => {
    let jpIndex = this.state.myPlans.findIndex( jp => jp.id === plan.plan_id)
    this.setState({ notJoinedPlans: [...this.state.notJoinedPlans, this.state.myPlans.splice(jpIndex, 1)[0]] })
  }

  addNewPlan = (plan) => {
    this.setState({
      myPlans: [...this.state.myPlans, plan],
      allPlans: [...this.state.allPlans, plan]
    })
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">

          </header>
          {!this.state.user_id ? <Navbar setUser={this.setUser} /> : <LoggedInNavbar logout={this.logout} setToggled={this.setToggled}/> }
          {this.state.user_id ?
            <PlansContainer
              user_id={this.state.user_id}
              setToggled={this.setToggled}
              toggledView={this.state.toggledView}
              toggledPlan={this.state.toggledPlan}
              allPlans={this.state.allPlans}
              myPlans={this.state.myPlans}
              pastPlans={this.state.pastPlans}
              notJoinedPlans={this.state.notJoinedPlans}
              pushJoinedPlans={this.pushJoinedPlans}
              pushNotJoinedPlans={this.pushNotJoinedPlans} addNewPlan={this.addNewPlan}/>
          : null}

          <Switch>

            <Route exact path='/duh' component ={ PlansContainer } />


      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
