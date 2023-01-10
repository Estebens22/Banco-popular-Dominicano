import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Passengers, PassengersSchema } from './schema/passengers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Passengers.name, schema: PassengersSchema },
    ]),
  ],
  controllers: [PassengersController],
  providers: [PassengersService],
})
export class PassengersModule {}
