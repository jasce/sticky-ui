import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'

import './styles/app.scss'

import NavBar from 'Components/NavBar'

const Test = props => (
  <div>
    <NavBar />
  </div>
)

ReactDOM.render(<Test />, document.getElementById('root'))

export default hot(module)(Test)
