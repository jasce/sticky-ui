import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import About from 'Components/About'
import Home from 'Components/Home'

const Navbar = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
)

export default Navbar
