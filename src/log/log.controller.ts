import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateLogDto } from './create-log.dto';
import { LogService } from './log.service';
import { Log } from './schemas/log.schema';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) { }

    @GrpcMethod('LogsService')
    createLog(data: CreateLogDto): Promise<Log> {
        return this.logService.create(data);
    }
}
