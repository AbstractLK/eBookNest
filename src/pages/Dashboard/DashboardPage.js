import React, { useEffect, useState } from 'react'
import { DashboardCard } from './components/DashboardCard';
import { DashboardEmpty } from './components/DashboardEmpty';

export const DashboardPage = () => {
    const id = sessionStorage.getItem('uid');
    const token = sessionStorage.getItem('token');
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const res = await fetch(`http://localhost:8000/660/orders?user.uid=${id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`} 
            });
            const data = await res.json();
            setOrders(data);
        }
        getOrders();
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
