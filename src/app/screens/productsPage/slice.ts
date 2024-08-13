import { createSlice } from "@reduxjs/toolkit";
import { ProductPageState } from "../../../lib/data/types/screen";

const initialState: ProductPageState = {
  restaurant: null,
  chosenProduct: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setRestaurant, setChosenProduct, setProducts } =
  productsPageSlice.actions;

const ProductPageReducer = productsPageSlice.reducer;
export default ProductPageReducer;