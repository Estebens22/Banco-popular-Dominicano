import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassengersModule } from './passengers/passengers.module';
import { ConfigModule } from '@nestjs/config';
import { DriversModule } from './drivers/drivers.module';
import { TravelsModule } from './travels/travels.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassengersModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    DriversModule,
    TravelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
