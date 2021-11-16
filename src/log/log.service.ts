import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLogDto } from './create-log.dto';
import { Log, LogSchema } from './schemas/log.schema';

@Injectable()
export class LogService {
    constructor(
        @InjectModel(Log.name) private readonly logModel: Model<Log>,
    ) { }

    create(log: CreateLogDto): Promise<Log> {
        const createdLog = new this.logModel(log);
        return createdLog.save()
    }
}
