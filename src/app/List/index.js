import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox'

import style from './style'

import Chip from '../Chip'

export default () => (
  <List selectable ripple>
    <ListDivider />
    <ListSubHeader className={style.ListSubHeader} caption='150 results on 542ms' />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
      rightIcon='star' />
  </List>
)
