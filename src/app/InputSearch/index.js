import React from 'react'
import theme from './style'
import { Input } from 'react-toolbox'

export default ({toggle, get, set}) => {
  const onFocus = () => set('searchFocus', true)
  const onBlur = () => set('searchFocus', false)

  return (
    <Input
      theme={theme}
      type='text'
      name='search'
      icon='search'
      placeholder='Board, model, price,...'
      onFocus={onFocus}
      onBlur={onBlur} />
  )
}
