import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './productsService';

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
}
