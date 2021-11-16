import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'log',
      protoPath: join(__dirname, '/log/log.proto')
    },
  });

  await app.startAllMicroservices();
  
  await app.listen(process.env.PORT);
}
bootstrap();
