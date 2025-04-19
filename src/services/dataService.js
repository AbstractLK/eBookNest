function getSession() {
    const id = sessionStorage.getItem('uid');
    const token = sessionStorage.getItem('token');
    return { id, token };
}

export async function getUser() {
    const {id, token } = getSession();
    const res = await fetch(`http://localhost:8000/600/users/${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`} 
    });
    const data = await res.json();
    return data;
}

export async function placeOrder(cartList, total, userData) {
    const {token } = getSession();
    const orderData = {
        cartList: cartList,
        total: total,
        quantity: cartList.length,
        user: {
            name: userData.name,
            email: userData.email,
            uid: userData.id,
        }
    }
    const res = await fetch('http://localhost:8000/660/orders/', {
        method: "POST",
        headers: {"Content-Type" : 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(orderData)
    });
    const data = await res.json();
    return data;
}

export async function getOrders() {
    const {id, token } = getSession();
    const res = await fetch(`http://localhost:8000/660/orders?user.uid=${id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`} 
    });
    const data = await res.json();
    return data;
}