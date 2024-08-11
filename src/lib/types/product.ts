import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../enums/product.enum";

export interface Product {
  _id: string;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: ProductVolume;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  cratedAt: Date;
  updatedAt: Date;
}

export interface ProductInquery {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}