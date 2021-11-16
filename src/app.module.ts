import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogController } from './log/log.controller';
import { LogModule } from './log/log.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LogService } from './log/log.service';

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDBName = process.env.MONGO_DBNAME;

const connectionString = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}?authSource=admin`;

@Module({
  imports: [LogModule, MongooseModule.forRoot('mongodb+srv://me:1234@matchingservice.n6acs.mongodb.net/Log?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
