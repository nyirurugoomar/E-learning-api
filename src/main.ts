import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('E-learning API')
    .setDescription('It is E-learning backend REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, documentFactory);
  const PORT = process.env.PORT || 3000; 
  await app.listen(PORT)
  console.log(`Application is running on port ${PORT}`);
}
bootstrap();
