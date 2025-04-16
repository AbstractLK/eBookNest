import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {CartPage, HomePage, Login, ProductDetails, ProductsList, Register} from '../pages';

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductsList/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<CartPage/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
        </Routes>
    </>
  )
}
