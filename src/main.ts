import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import './tracer';
import 'newrelic';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
