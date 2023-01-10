import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type DriversDocument = Drivers & Document;

@Schema()
export class Drivers {
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

  @Prop()
  license_number: string;

  @Prop()
  vehicle_registration_number: string;

  @Prop()
  vehicle_color: string;

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

export const DriversSchema = SchemaFactory.createForClass(Drivers);
