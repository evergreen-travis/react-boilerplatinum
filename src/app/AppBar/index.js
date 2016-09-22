import React from 'react'
import classnames from 'classnames'
import { AppBar, IconButton } from 'react-toolbox'

import InputSearch from '../InputSearch'
import theme from './theme'
import style from './style'

export default ({toggle, get, set}) => {
  return (
    <AppBar style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }} theme={theme} fixed>
      <IconButton icon='menu' inverse onClick={toggle('drawerActive')} />
      <InputSearch toggle={toggle} get={get} set={set} />
      <IconButton icon='filter_list' inverse />
    </AppBar>
  )
}
