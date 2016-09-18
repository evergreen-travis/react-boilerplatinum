import React, { Component } from 'react'
import { Sidebar, Input, BottomNavigationItem, BottomNavigation, Checkbox, AppBar, IconButton, Panel, NavDrawer, Layout } from 'react-toolbox'
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
    menuActive: true,
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
      <Layout className={style.app}>
        <NavDrawer
          className={style.menu}
          active
          pinned
          permanentAt='xxxl'>
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
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
            icon='search' />
          <IconButton icon='filter_list' inverse={true} />
        </AppBar>
        <article className={style.main}>
          <section>
            <h1>Main Content 0</h1>
            <p>
              Main content goes here.
            </p>
            <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
            <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
          </section>
        </article>
        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          <header>
            <IconButton icon='close' onClick={this.toggleSidebar} />
          </header>
          <section style={{ flex: 1 }}>
            <p>
              Supplemental content goes here.
            </p>
          </section>
        </Sidebar>
      </Layout>
    )
  }
}

export default App
