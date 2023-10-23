import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // setting conf swagger docs
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // untuk ubah route saat cek swagger dosc
  // http://localhost:3000/api // ini untuk cek swagger
  // SwaggerModule.setup('api', app, document); //bisa dirubah bagian 'api', optional
  // setting conf swagger docs

  await app.listen(3000);
}
bootstrap();
