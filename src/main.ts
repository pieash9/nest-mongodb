import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';

export async function bootstrap(): Promise<Server> {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Optional, enable CORS if needed
  await app.listen(3000);
  return app.getHttpServer();
}

// Export handler for Vercel
export default bootstrap();
