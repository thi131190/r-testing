import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'
import configureMockStore from 'redux-mock-store'
import { incrementCounter } from '../actions/actions'
import { counterReducer } from '../reducers/reducers'

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

describe('Counter redux pieces', () => {
  let store

  beforeEach(() => {
    const mockStore = configureMockStore()
    store = mockStore({})
  })

  it('sends an increment counter action', () => {
    store.dispatch(incrementCounter())
    expect(store.getActions()).toEqual([{ type: 'INCREMENT_COUNTER' }])
  })

  it('applies the counter reducer for increment correctly', () => {
    // given
    const beforeState = { count: 0 }
    const action = { type: 'INCREMENT_COUNTER' }
    // when
    const afterState = counterReducer(beforeState, action)
    // then
    expect(afterState).toEqual({ count: 1 })
  })
})
