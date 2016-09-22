import React from 'react'
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox'

import style from './style'

const Span = () => <span>75€</span>

export default ({toggle, get, set}) => (
  <List selectable ripple>
    <ListDivider />
    <ListSubHeader className={style.ListSubHeader} caption='150 results on 542ms' />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Vendo Vela North Sails Warp 2009'
      legend='totalwind.net'
      rightActions={[ <Span/> ]} />
  </List>
)
