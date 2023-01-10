import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TravelsDocument = Travels & Document;

@Schema()
export class Travels {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop()
  passenger_id: string;

  @Prop()
  driver_id: string;

  @Prop({
    type: String,
    default: 'active',
  })
  status: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  create_date: Date;
}

export const TravelsSchema = SchemaFactory.createForClass(Travels);
