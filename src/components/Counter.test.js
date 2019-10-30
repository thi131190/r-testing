import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders h1 components', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.contains(<h1>Counter</h1>)).toEqual(true)
  })

  it('renders a button', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.contains(<button>Increase</button>)).toEqual(true)
  })
})
