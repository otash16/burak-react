import React, { useEffect } from "react";
import Events from "./Events";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrivePopularDishes } from "./selector";
import { Product } from "../../../lib/data/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrivePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Select: Store => Data

  useEffect(() => {
    // // Backend server data request => DATA
    // const result = [
    //   {
    //     _id: "6682e4551e42deb51c02dbc5",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Steak",
    //     productPrice: 1,
    //     productLeftCount: 100,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "circle",
    //     productImages: [
    //       ["uploads/products/ef5d2477-2d6c-464f-81ec-922b1a85b40b.jpeg"],
    //     ],
    //     productViews: 2,
    //     createdAt: "2024-07-01T17:16:05.813Z",
    //     updatedAt: "2024-07-25T05:28:00.584Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "6686a80e68bb769c100e0212",
    //     productStatus: "PROCESS",
    //     productCollection: "DRINK",
    //     productName: "cola",
    //     productPrice: 1,
    //     productLeftCount: 20,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "drink",
    //     productImages: [
    //       ["uploads/products/2efd8663-e36d-402b-b7e0-b6b502834be3.png"],
    //     ],
    //     productViews: 0,
    //     createdAt: "2024-07-04T13:47:58.319Z",
    //     updatedAt: "2024-07-04T13:47:58.319Z",
    //     __v: 0,
    //   },
    // ];
    // // slice: DATA => REDUX
    // // @ts-ignore
    // setPopularDishes(result);
  }, []);

  // console.log("populatDishes:", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}