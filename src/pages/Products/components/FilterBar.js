import { useFilter } from "../../../context";

export const FilterBar = ({ setFilterBar }) => {
  const { state, dispatch } = useFilter();

  const handleBestSeller = (checked) => {
    dispatch({
      type: "BEST_SELLER_ONLY",
      payload: { bestSellerOnly: checked },
    });
  };

  const handleInStock = (checked) => {
    dispatch({
      type: "ONLY_IN_STOCK",
      payload: { onlyInStock: checked },
    });
  };

  const handleSort = (sortType) => {
    dispatch({
      type: "SORT_BY",
      payload: { sortBy: sortType },
    });
  }

  const handleRating = (ratings) => {
    dispatch({
      type: "RATINGS",
      payload: { ratings: ratings}
    })
  }

  const handleClearFilters = () => {
    dispatch({type: 'CLEAR_FILTER'});
  }

  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className="fixed z-40 h-screen p-6 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-all duration-300 ease-in-out shadow-lg left-0 top-0 transform-none border-r border-gray-200 dark:border-gray-700"
        tabIndex="-1"
        aria-labelledby="drawer-disable-body-scrolling-label"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between mb-4">
          <h5
            id="drawer-disable-body-scrolling-label"
            className="text-lg font-bold text-gray-700 dark:text-gray-200"
          >
            Filter Options
          </h5>
          <button
            onClick={() => setFilterBar(false)}
            type="button"
            data-drawer-dismiss="drawer-disable-body-scrolling"
            aria-controls="drawer-disable-body-scrolling"
            className="text-gray-500 hover:text-gray-900 bg-transparent hover:bg-gray-100 rounded-lg text-sm p-2 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white transition-colors duration-200"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close Filters</span>
          </button>
        </div>

        <div className="border-b border-gray-200 dark:border-gray-700 pb-3"></div>

        <div className="py-4 overflow-y-auto">
          <ul className="text-gray-700 dark:text-gray-200 space-y-6">
            {/* Sort By Section */}
            <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  ></path>
                </svg>
                Sort by
              </p>

              <div className="space-y-2">
                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="price-sort-1"
                    type="radio"
                    checked={state.sortBy === "lowToHigh"}
                    onChange={() => handleSort("lowToHigh")}
                    name="price-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="price-sort-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer w-full"
                  >
                    Price - Low to High
                  </label>
                </div>

                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="price-sort-2"
                    type="radio"
                    checked={state.sortBy === "highToLow"}
                    onChange={() => handleSort("highToLow")}
                    name="price-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="price-sort-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer w-full"
                  >
                    Price - High to Low
                  </label>
                </div>
              </div>
            </li>

            {/* Rating Section */}
            <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                Rating
              </p>

              <div className="space-y-2">
                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="rating-sort-1"
                    type="radio"
                    checked={state.ratings === 4}
                    onChange={() => handleRating(4)}
                    name="rating-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="rating-sort-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center w-full cursor-pointer"
                  >
                    4 Stars & Above
                    <div className="flex ml-2">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1">+</span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="rating-sort-2"
                    type="radio"
                    checked={state.ratings === 3}
                    onChange={() => handleRating(3)}
                    name="rating-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="rating-sort-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center w-full cursor-pointer"
                  >
                    3 Stars & Above
                    <div className="flex ml-2">
                      {[...Array(3)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1">+</span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="rating-sort-3"
                    type="radio"
                    checked={state.ratings === 2}
                    onChange={() => handleRating(2)}
                    name="rating-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="rating-sort-3"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center w-full cursor-pointer"
                  >
                    2 Stars & Above
                    <div className="flex ml-2">
                      {[...Array(2)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1">+</span>
                    </div>
                  </label>
                </div>

                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="rating-sort-4"
                    type="radio"
                    checked={state.ratings === 1}
                    onChange={() => handleRating(1)}
                    name="rating-sort"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="rating-sort-4"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center w-full cursor-pointer"
                  >
                    1 Star & Above
                    <div className="flex ml-2">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1">+</span>
                    </div>
                  </label>
                </div>
              </div>
            </li>

            {/* Other Filters Section */}
            <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
                Other Filters
              </p>

              <div className="space-y-2">
                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="best-seller"
                    type="checkbox"
                    checked={state.bestSellerOnly}
                    onChange={(e) => handleBestSeller(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="best-seller"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer w-full flex items-center"
                  >
                    Best Seller Only
                    <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      Popular
                    </span>
                  </label>
                </div>

                <div className="flex items-center hover:bg-white dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-150">
                  <input
                    id="only-instock"
                    type="checkbox"
                    checked={state.onlyInStock}
                    onChange={(e) => handleInStock(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="only-instock"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer w-full flex items-center"
                  >
                    INSTOCK Only
                    <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      Available
                    </span>
                  </label>
                </div>
              </div>
            </li>

            {/* Price Range Section */}
            {/* <li className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <p className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Price Range
              </p>

              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value="500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <span>$0</span>
                  <span>$250</span>
                  <span>$500</span>
                  <span>$750</span>
                  <span>$1000</span>
                </div>
              </div>
            </li> */}

            {/* Action Buttons */}
            <li className="mt-6 flex space-x-2">
              {/* <button
                type="button"
                className="w-1/2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200"
              >
                Apply Filters
              </button> */}

              <button
                type="button"
                onClick={handleClearFilters}
                className="w-1/2 text-gray-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
