import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

it('renders our counter element', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Counter />)).toEqual(true)
})
