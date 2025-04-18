import React from 'react'
import {Routes, Route} from 'react-router-dom';
import {CartPage, DashboardPage, HomePage, Login, OrderPage, ProductDetails, ProductsList, Register} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/products' element={<ProductsList/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}></Route>
            <Route path='/order-summary' element={<ProtectedRoute><OrderPage/></ProtectedRoute>}></Route>
            <Route path='/dashboard' element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
        </Routes>
    </>
  )
}
