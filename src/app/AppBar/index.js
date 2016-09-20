import React from 'react'
import style from './style'
import { AppBar, IconButton, Input } from 'react-toolbox'

export default ({toggle}) => (
  <AppBar className={style.appBar} fixed flat>
    <IconButton icon='menu' inverse onClick={toggle('drawerActive')} />
    <Input
      className={style.input}
      type='text'
      name='search'
      icon='search' />
    <IconButton icon='filter_list' inverse />
  </AppBar>
)
