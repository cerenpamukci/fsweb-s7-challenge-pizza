import React from 'react'
import './App.css'
import HomePage from "./HomePage.jsx"
//import OrderPage from "./OrderPage.jsx"
//import SuccessPage from "./SuccessPage.jsx"
import { Switch, Route, Router} from 'react-router-dom'


function App() {
 return (
  <Router>
    <Switch>
      <Route path = "/" element= {<HomePage/>}/>
      {/*<Route path = "/order-page" element= {<OrderPage/>}/> <Route path = "/success-page" element= {<SuccessPage/>}/>*/}
      </Switch>
  </Router>
 )
}
export default App;