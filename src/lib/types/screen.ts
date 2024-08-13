import { Member } from "../data/types/member";
import { Product } from "../data/types/product";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  productPage: ProductPageState;
}

/** HOMEPAGE */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** PRODUCTS PAGE */

/** ORDERS PAGE */