import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { CvPage } from './CvPage/CvPage'
import { HomePage } from './HomePage/HomePage'
import { MyWorkToolsPage } from './MyWorkToolsPage/MyWorkToolsPage'

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cv" component={CvPage} />
        <Route exact path="/my-work-tools" component={MyWorkToolsPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    )
  }
}
