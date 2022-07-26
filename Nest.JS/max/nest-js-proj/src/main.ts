import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(PORT)
    .then(() => {
      console.log('Derver is up al litening to ' + PORT);
    })
    .catch((e) => {
      console.warn(e);
    });
}
bootstrap();
