import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RestaurantDocument = Log & Document;

@Schema()
export class Log {
 
  // @Prop({required: true})
  // userId: number;

  @Prop({required: true})
  dateTime: string;

  @Prop()
  log: string;


}
export const LogSchema = SchemaFactory.createForClass(Log);

