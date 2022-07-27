import { Controller, Post, Get, Body, Param, Patch } from '@nestjs/common';
import { ProductsService } from './productsService';
import { Product } from './productModel';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    // @Body() completBody: { title: string; desc: string },
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const newProdId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: newProdId };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string): Product {
    return this.productService.getSingalProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): void {
    this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }
}
