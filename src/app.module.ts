import { Module } from '@nestjs/common';
import { LogController } from './log/log.controller';
import { LogModule } from './log/log.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDBName = process.env.MONGO_DBNAME;

const connectionString = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}?authSource=admin`;

@Module({
  imports: [LogModule, MongooseModule.forRoot(connectionString)],
  controllers: [],
  providers: [],
})
export class AppModule {}
