

/** REACT APP STATE **/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState{
    homepage: HomepageState;
}

export interface HomepageState{
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}