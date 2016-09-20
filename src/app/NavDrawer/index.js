import React from 'react'
import style from './style'
import { NavDrawer } from 'react-toolbox'

export default ({get}) => (
  <NavDrawer className={style.navDrawer} active={get('drawerActive')} pinned={get('drawerActive')}>
    <p>
      Navigation, account switcher, etc. go here.
    </p>
  </NavDrawer>
)
