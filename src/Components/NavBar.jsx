import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import About from 'Components/About'
import Home from 'Components/Home'

const Navbar = () => (
  <BrowserRouter>
    <div>
      <Link to="/sticky-ui">Home</Link>
      <Link to="/sticky-ui/about">About</Link>
      <Route exact path="/sticky-ui/" component={Home} />
      <Route path="/sticky-ui/about" component={About} />
    </div>
  </BrowserRouter>
)

export default Navbar
