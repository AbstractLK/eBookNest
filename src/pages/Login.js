import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services";
import { useTitle } from '../hooks/useTitle';

export const Login = () => {
    useTitle("Login");
    const navigate = useNavigate();
    const email = useRef();
    const password = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const userData = {
              email: email.current.value,
              password: password.current.value
          }
          const data = await login(userData);
          data.accessToken ? navigate('/products') : toast.error(data);
        } catch (error) {
          toast.error(error.message);
        }
    }

    const handleGuestLogin = async () => {
      try {
        const userData = {
            email: process.env.REACT_APP_GUEST_EMAIL,
            password: process.env.REACT_APP_GUEST_PASSWORD
        }
        const data = await login(userData);
        data.accessToken ? navigate('/products') : toast.error(data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    return (
      <main className="flex items-center justify-center ">
        <section className="w-full max-w-lg">
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">Login</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required autoComplete="off" />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          </form>
          <button onClick={handleGuestLogin} className="mt-3 cursor-pointer dark:text-white  hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-0.5 py-1.5  text-center  dark:hover:text-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
        </section>
      </main>
    )
}
