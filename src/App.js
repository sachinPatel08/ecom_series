import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './componant/Home'
import Product from './componant/Product'
import About from './componant/About'
import Header from './componant/Header'
import CheckOut from './componant/CheckOut'

const App = ()=>{
  return(
    <>
    <Router>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/checkout" element={<CheckOut/>}/>

</Routes>


    </Router>


    </>
  )
}
export default App;