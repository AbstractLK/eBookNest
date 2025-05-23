import React from 'react'
import { useLocation } from 'react-router-dom'
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFail } from './components/OrderFail';
import { useTitle } from '../../hooks/useTitle'

export const OrderPage = () => {
  useTitle("Order Status");
  const {state} = useLocation();
  return (
    <main>
        {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}
