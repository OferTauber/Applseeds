import { Product } from './productModel';
export declare class ProductsService {
    products: Product[];
    insertProduct(title: string, desc: string, price: number): string;
}
