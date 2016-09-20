import React, { Component } from 'react'
import { Panel, Layout, NavDrawer, AppBar, IconButton, Input, Checkbox, Sidebar } from 'react-toolbox'

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
        <NavDrawer className={style.menu} pinned>
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <AppBar className={style.center} fixed flat>
          <IconButton icon='menu' inverse={true} />
          <Input
            className={style.search}
            type='text'
            name='search'
            icon='search' />
          <IconButton icon='filter_list' inverse={true} />
        </AppBar>
        <Panel className={style.panel}>
          <h1>Main Content 0</h1>
          <p>
            Main content goes here.
          </p>
          <Checkbox label='Pin drawer' checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
          <Checkbox label='Show sidebar' checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
        </Panel>
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
