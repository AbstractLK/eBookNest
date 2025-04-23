import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  const filterdProducts = () => {
    let filteredList = [...state.productList];

    if(state.bestSellerOnly) {
      filteredList = filteredList.filter(product => product.best_seller)
    }

    if(state.onlyInStock) {
      filteredList = filteredList.filter((product) => product.in_stock)
    }

    if(state.sortBy === 'lowToHigh') {
      filteredList.sort((a, b) => a.price - b.price)
    }
    if(state.sortBy === 'highToLow') {
      filteredList.sort((a, b) => b.price - a.price)
    }

    if(state.ratings) {
      filteredList = filteredList.filter((product) => product.rating >= state.ratings);
    }

    return filteredList;
  }

  const value = {
    state,
    dispatch,
    products: filterdProducts(),
    initialProductList,
  };

  return (
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
  );
};


export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
