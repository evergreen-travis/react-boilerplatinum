import React from 'react'
import classnames from 'classnames'
import { Panel } from 'react-toolbox'

import style from './style'
import Chip from '../Chip'
import List from '../List'

export default ({get}) => {
  const classes = classnames(style.panel, {
    [style.panelDesktop]: get('drawerActive')
  })

  return (
    <Panel className={classes}>
      <Chip />
      <List />
    </Panel>
  )
}
