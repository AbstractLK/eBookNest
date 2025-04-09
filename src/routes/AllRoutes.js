import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {HomePage, ProductDetails, ProductsList} from '../pages';

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductsList/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
        </Routes>
    </>
  )
}
