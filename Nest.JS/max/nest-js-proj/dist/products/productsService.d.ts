import { Product } from './productModel';
export declare class ProductsService {
    private products;
    insertProduct(title: string, desc: string, price: number): string;
    getProducts(): Product[];
    getSingalProduct(prodId: string): Product;
    updateProduct(prodId: string, title: string, desc: string, price: number): void;
    private findProduct;
}
