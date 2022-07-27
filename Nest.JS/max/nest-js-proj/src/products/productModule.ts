import { Module } from '@nestjs/common';
import { deflate } from 'zlib';
import { ProductController } from './products.controller';
import { ProductsService } from './productsService';

@Module({
  controllers: [ProductController],
  providers: [ProductsService],
})
export class ProductModule {}
