import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './productModel';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct: Product = new Product(prodId, title, desc, price);

    this.products.push(newProduct);

    return prodId;
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  getSingalProduct(prodId: string): Product {
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }

  updateProduct(
    prodId: string,
    title: string,
    desc: string,
    price: number,
  ): void {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = { ...product };

    if (title) updatedProduct.title = title;
    if (desc) updatedProduct.description = desc;
    if (price) updatedProduct.price = price;

    this.products[index] = { ...updatedProduct };
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) throw new NotFoundException('Culd not find product');
    return [product, productIndex];
  }
}
