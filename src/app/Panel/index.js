import React from 'react'
import { Panel, Checkbox } from 'react-toolbox'

import style from './style'
import Chip from '../Chip'
import List from '../List'

export default () => (
  <Panel className={style.panel}>
    <Chip />
    <List />
  </Panel>
)
