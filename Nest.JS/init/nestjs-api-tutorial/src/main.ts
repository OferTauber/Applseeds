import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(PORT)
    .then(() => {
      console.log(`Server is up and running, listening to port ${PORT}`);
    })
    .catch((e) => {
      console.error(e.massage);
    });
}
bootstrap();
