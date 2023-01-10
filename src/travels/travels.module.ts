import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Travels, TravelsSchema } from './schema/travels.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Travels.name, schema: TravelsSchema }]),
  ],
  controllers: [TravelsController],
  providers: [TravelsService],
})
export class TravelsModule {}
