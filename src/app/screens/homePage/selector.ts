// import { createSelector } from "reselect";
// import { AppRootState, HomepageState } from "../../../lib/data/types/screen";


// export const retrievePopularDishes = createSelector (

//     (store: AppRootState)    => store.homepage,
//     (homePage:HomepageState) => homePage.popularDishes
// );

// export const retrieveNewDishes = createSelector (

//     (store: AppRootState)    => store.homepage,
//     (homePage:HomepageState) => homePage.newDishes
// );

// export const retrieveTopUsers = createSelector (

//     (store: AppRootState)    => store.homepage,
//     (homePage:HomepageState) => homePage.topUsers
// );

import {createSelector} from "reselect";
import { AppRootState } from "../../../lib/data/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievePopularDishes = createSelector(selectHomePage,
     (HomePage) => HomePage.popularDishes);

export const retrieveNewDishes = createSelector(selectHomePage,
        (HomePage) => HomePage.newDishes);

export const retrieveTopUsers = createSelector(selectHomePage,
            (HomePage) => HomePage.topUsers);