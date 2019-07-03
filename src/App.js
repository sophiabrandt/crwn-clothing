import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </>
  )
}

export default App
