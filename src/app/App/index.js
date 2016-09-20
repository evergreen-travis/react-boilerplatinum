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

class App extends Component {
  state = {
    drawerActive: window.innerWidth === 1280
  }

  toggle = (key) => {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  get = (key) => this.state[key]

  render () {
    const { toggle, get } = this

    return (
      <Layout className={style.app}>
        <NavDrawer get={get} />
        <AppBar toggle={toggle} />
        <Panel />
      </Layout>
    )
  }
}

export default App
