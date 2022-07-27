import { ProductsService } from './productsService';
import { Product } from './productModel';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): Product[];
    getProduct(prodId: string): Product;
    updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number): void;
    removeProduct(prodId: string): void;
}
