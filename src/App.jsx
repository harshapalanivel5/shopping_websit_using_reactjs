import { createContext, useState } from 'react'
import ToDoApp from './components/ToDoApp'
import NewProduct from './components/NewProduct'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Products from './components/Products'
import Signup from './components/Signup'
import Notfound from './components/notfound'
import Wishlist from './components/Wishlist'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateProduct from './components/UpdateProduct'

if(!localStorage.getItem("cart")){
  localStorage.setItem("cart",JSON.stringify([]))
}

function App() {
  let user = "kesavan";

    return (
     <>
     <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} >
           <Route path="list" element={<ProductList/>}/>
           <Route path="detail" element={<ProductDetails/>}/>
        </Route>
        <Route path="/login/:newuser" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/todoapp" element={<ToDoApp/>} />
        <Route path="/NewProduct" element={<NewProduct/>} />
        <Route path="/update/:id" element={<UpdateProduct/>} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
     </Router>
    </>
    
  )
}

export default App
