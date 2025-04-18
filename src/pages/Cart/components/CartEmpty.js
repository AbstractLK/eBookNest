import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <section className="text-base text-center max-w-4xl mx-auto my-10 pt-8 pb-14 dark:text-slate-100 border dark:border-slate-700 rounded-xl">
      <div className="mt-5 mb-10">
        <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
        <p>Your cart looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      <Link
        to="/products"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
      >
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};
