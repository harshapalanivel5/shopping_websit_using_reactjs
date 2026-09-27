import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import {Link, Outlet } from "react-router-dom"
import ProductList from "./ProductList";
function Products() {

  
  

  return (
    <div>
      <ProductList/>
      <Outlet/>
    </div>
  )
}

export default Products