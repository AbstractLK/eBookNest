import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";

export const ProductsList = () => {
  const {products, initialProductList} = useFilter();
  const [filterBar, setFilterBar] = useState(false);
  useTitle("Explore eBooks");

  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    const fetchData = async () => {
      // not working (?name_like) above versions of v0.17.4
      const res = await fetch(
        `http://localhost:8000/products?name_like=${
          searchTerm ? searchTerm : ""
        }`
      );
      const data = await res.json();
      initialProductList(data);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setFilterBar(!filterBar)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-filter-right"
                viewBox="0 0 16 16"
              >
                <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5" />
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {filterBar && <FilterBar setFilterBar={setFilterBar} />}
    </main>
  );
};
