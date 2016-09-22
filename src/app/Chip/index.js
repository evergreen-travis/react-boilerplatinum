import React from 'react'
import { Chip, Avatar } from 'react-toolbox'

import style from './style'

export default ({toggle, get, set}) => (
  <header className={style.chip}>
    <Chip deletable>
      <Avatar style={{backgroundColor: 'deepskyblue'}} title='P' /><span>provider:totalwind</span>
    </Chip>
    <Chip deletable>
      <Avatar style={{backgroundColor: 'brown'}} title='T' /><span>type:particular</span>
    </Chip>
    <Chip deletable>
      <Avatar style={{backgroundColor: 'blueviolet'}} title='S' /><span>size&lt;7</span>
    </Chip>
    <Chip deletable>
      <Avatar style={{backgroundColor: 'blueviolet'}} title='S' /><span>size&gt;6</span>
    </Chip>
  </header>
)
