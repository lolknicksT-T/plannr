import React from 'react'

import {Card, Button, Image} from 'semantic-ui-react'

export default class Plan extends React.Component {

  onJoinPlan = (e) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: parseInt(localStorage.user, 10),
        plan_id: this.props.plan.id
      })
    }
    fetch('http://localhost:3000/api/v1/user_plans', options)
    .then(res => res.json())
    .then(json => {
      this.props.setToggled("detail", json.plan_id)
      this.props.pushJoinedPlans(json)
    })
  }

  setToggled = (e) => {
    if (e.target.className === "content") {
      this.props.setToggled("detail", e.target.dataset.planid)
    } else {
      this.props.setToggled("detail", e.target.parentNode.dataset.planid)
    }
  }

  render() {
    return (
      <Card style={{height: "auto", width: "175px"}}>
        <Card.Content data-planid={this.props.plan.id} onClick={this.setToggled}>
          <Image src="https://vignette.wikia.nocookie.net/spongebob/images/4/44/Jv7sGcME.jpg/revision/latest/scale-to-width-down/180?cb=20160607043024"/>
          <Card.Header >{this.props.plan.title }</Card.Header>
          {this.props.joined == true ? null : <Button size="mini" position="bottom" onClick={this.onJoinPlan}> Join </Button>}
        </Card.Content>
      </Card>
    )
  }
}
