import { useEffect, useState } from 'react'
import { DashboardCard } from './components/DashboardCard';
import { DashboardEmpty } from './components/DashboardEmpty';
import { getOrders } from '../../services';
import { useTitle } from '../../hooks/useTitle'
import { toast } from 'react-toastify';

export const DashboardPage = () => {
    useTitle('Dashboard');
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getOrders();
                setOrders(data);                
            } catch (error) {
                toast.error(error.message);
            }
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
