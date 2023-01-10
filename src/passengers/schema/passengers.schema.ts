import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PassengersDocument = Passengers & Document;

@Schema()
export class Passengers {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  type_document: string;

  @Prop()
  document_number: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: number;

  @Prop()
  status: number;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop({
    type: Date,
    default: Date.now,
  })
  create_date: Date;
}

export const PassengersSchema = SchemaFactory.createForClass(Passengers);
