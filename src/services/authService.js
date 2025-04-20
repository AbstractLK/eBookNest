const URL = process.env.REACT_APP_URL;


export async function login(userData){
    const res = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(userData)
    });
    if(!res.ok) throw {message: res.statusText, status: res.status};
    const data = await res.json();
    if (data.accessToken) {
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('uid', data.user.id);
    }
    return data;
}

export async function register(userData) {
    const res = await fetch(`${URL}/register`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    if(!res.ok) throw {message: res.statusText, status: res.status};
    const data = await res.json();
    if (data.accessToken) {
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('uid', data.user.id);
    }
    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("uid");
}