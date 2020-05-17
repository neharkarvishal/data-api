import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  // const port = Math.floor(3000 + Math.random() * 9000);
  // console.log(`Listening on http://localhost:${port}`);

  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<string>('PORT');

  await app.listen(port);
}

bootstrap();
