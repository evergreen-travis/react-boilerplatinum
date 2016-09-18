import React, { Component } from 'react'
import { Input, BottomNavigationItem, BottomNavigation, Checkbox, AppBar, IconButton, Panel, NavDrawer, Layout } from 'react-toolbox'
import { Flex, Box } from 'reflexbox'

import Logo from '../Logo'

import style from './style'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  state = {
    menuActive: false,
    menuFilterOpen: false
  }

  toggle = (key) => {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  get = (key) => {
    return this.state[key]
  }

  render () {
    const { toggle, get } = this

    return (
      <Layout>
        <AppBar
          className={style.center}
          fixed
          flat
          center>
          <IconButton icon='menu' inverse={true} />
          <Input
            className={style.search}
            type='text'
            name='search'
            icon='search'
            withIcon/>
          <IconButton icon='filter_list' inverse={true} />
        </AppBar>
      </Layout>
    )
  }
}

export default App
