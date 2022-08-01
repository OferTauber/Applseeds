import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5500;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(PORT)
    .then(() => {
      console.log('Server is up and litening to ' + PORT);
    })
    .catch((e) => {
      console.error('Somthing went wrong! ', e);
    });
}
bootstrap();
