import React from 'react'
import { Panel } from 'react-toolbox'

import Chip from '../Chip'
import List from '../List'
import theme from './style'

export default ({toggle, get, set}) => (
  <Panel theme={theme}>
    <Chip />
    <List />
  </Panel>
)
