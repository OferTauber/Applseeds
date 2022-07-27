import { ProductsService } from './productsService';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(prodTitle: string, prodDesc: string, prodPrice: number): any;
}
