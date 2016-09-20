import React from 'react'
import style from './style'
import Chip from '../Chip'
import { Panel, Checkbox } from 'react-toolbox'

export default () => (
  <Panel className={style.panel}>
    <Chip />
    <h1>Main Content 0</h1>
    <p>
      Main content goes here.
    </p>
    <Checkbox label='Pin drawer' checked />
    <Checkbox label='Show sidebar' checked />
  </Panel>
)
