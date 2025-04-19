import React, { useEffect, useState } from 'react'
import { DashboardCard } from './components/DashboardCard';
import { DashboardEmpty } from './components/DashboardEmpty';
import { getOrders } from '../../services';

export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrders();
            setOrders(data);
        }
        fetchOrders();
    }, []);
    
    return (
        <main>
          <section>
            <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
          </section>
            <section>
                {orders.length ? (
                    orders.map((order) => <DashboardCard key={order.id} order={order} />)
                ) : (
                    <DashboardEmpty />
                )}
            </section>
        </main>
      )
}
