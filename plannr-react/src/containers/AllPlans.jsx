import React from 'react'

import Plan from '../components/Plan'

export default class AllPlans extends React.Component {

  state = {
    notJoinedPlans: []
  }

  componentWillReceiveProps = (nextProps) => {

    let notJoined = []
    if (nextProps.allPlans.length > 0 && nextProps.myPlans.length > 0) {
      debugger
       nextProps.allPlans.forEach(plan => {
         debugger
         if(!nextProps.myPlans.includes(plan)) {

           notJoined.push(plan)

         }
      })
    }
    this.setState({notJoinedPlans: notJoined})

  }



  renderPlans = () => {
    return this.props.allPlans.map( plan =>
      this.state.notJoinedPlans.includes(plan) ?
     <Plan key={plan.id} plan={plan} notJoined={true} />
     : <Plan key={plan.id} plan={plan} notJoined={false} />)
  }

  render() {
    return (
      <div>
        {this.renderPlans()}
      </div>
    )
  }
}
