import React from 'react'
import style from './style'
import { NavDrawer } from 'react-toolbox'

export default () => (
  <NavDrawer className={style.navDrawer} pinned>
    <p>
      Navigation, account switcher, etc. go here.
    </p>
  </NavDrawer>
)
