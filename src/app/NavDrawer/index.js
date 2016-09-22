import React from 'react'
import { NavDrawer } from 'react-toolbox'

import style from './style'

export default ({toggle, get, set}) => (
  <NavDrawer active={get('drawerActive')} className={style.panel}>
    <p>
      Navigation, account switcher, etc. go here.
    </p>
  </NavDrawer>
)
