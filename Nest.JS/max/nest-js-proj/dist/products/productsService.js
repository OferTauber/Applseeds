"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const productModel_1 = require("./productModel");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, desc, price) {
        const prodId = Math.random().toString();
        const newProduct = new productModel_1.Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];
    }
    getSingalProduct(prodId) {
        const product = this.findProduct(prodId)[0];
        return Object.assign({}, product);
    }
    updateProduct(prodId, title, desc, price) {
        const [product, index] = this.findProduct(prodId);
        const updatedProduct = Object.assign({}, product);
        if (title)
            updatedProduct.title = title;
        if (desc)
            updatedProduct.description = desc;
        if (price)
            updatedProduct.price = price;
        this.products[index] = Object.assign({}, updatedProduct);
    }
    findProduct(id) {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product)
            throw new common_1.NotFoundException('Culd not find product');
        return [product, productIndex];
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=productsService.js.map