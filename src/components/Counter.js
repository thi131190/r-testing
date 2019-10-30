import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter } from './../actions/actions'

const Counter = props => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={() => dispatch(incrementCounter())}>Increase</button>
    </div>
  )
}

export default Counter
