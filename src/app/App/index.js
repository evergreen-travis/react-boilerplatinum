import React, { Component } from 'react'
import { Layout, IconButton, Input, Checkbox, Sidebar } from 'react-toolbox'

import style from './style'

import NavDrawer from '../NavDrawer'
import AppBar from '../AppBar'
import Panel from '../Panel'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  state = {
    drawerActive: false,
    searchFocus: false
  }

  toggle = (key) => {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  get = (key) => this.state[key]

  set = (key, value) => this.state[key] = value

  render () {
    const { toggle, get, set } = this

    return (
      <Layout className={style.app}>
        <NavDrawer toggle={toggle} get={get} set={set} />
        <AppBar toggle={toggle} get={get} set={set} />
        <Panel toggle={toggle} get={get} set={set} />
      </Layout>
    )
  }
}
