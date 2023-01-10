import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { Drivers, DriversSchema } from './schema/drivers.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drivers.name, schema: DriversSchema }]),
  ],
  controllers: [DriversController],
  providers: [DriversService],
})
export class DriversModule {}
