export async function login(userData){
    const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    if (data.accessToken) {
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('uid', data.user.id);
    }
    return data;
}

export async function register(userData) {
    const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
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