// import { createSlice } from "@reduxjs/toolkit";
// import { OrdersPageState } from "../../../lib/data/types/screen";

// const initialState: OrdersPageState = {
//   pausedOrders: [],
//   processOrders: [],
//   finishedOrders: [],
// };

// const OrdersPageSlice = createSlice({
//   name: "ordersPage",
//   initialState,
//   reducers: {
//     setPausedOrders: (state, action) => {
//       state.pausedOrders = action.payload;
//     },
//     setProcessOrders: (state, action) => {
//       state.processOrders = action.payload;
//     },
//     setFinishedOrders: (state, action) => {
//       state.finishedOrders = action.payload;
//     },
//   },
// });

// export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
//   OrdersPageSlice.actions;

// const OrdersPageReducer = OrdersPageSlice.reducer;

// export default OrdersPageReducer;

import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/data/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;