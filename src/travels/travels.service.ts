import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Travels, TravelsDocument } from './schema/travels.schema';

@Injectable()
export class TravelsService {
  constructor(
    @InjectModel(Travels.name)
    private TravelsModule: Model<TravelsDocument>,
  ) {}

  async create(createTravelDto: CreateTravelDto) {
    const travelCreate = await this.TravelsModule.create(createTravelDto);
    return travelCreate;
  }

  async findAll() {
    const travels = await this.TravelsModule.find();
    return travels;
  }

  async findAllActives() {
    const travels = await this.TravelsModule.find({ status: 'active' });
    return travels;
  }

  async findAllCompleted() {
    const travels = await this.TravelsModule.find({ status: 'completed' });
    return travels;
  }

  async findOne(id: string) {
    const travel = await this.TravelsModule.findOne({ _id: id });
    if (!travel) throw new HttpException('Travel no found', 404);
    return travel;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async completing(id: string, updateTravelDto: UpdateTravelDto) {
    const travel = await this.TravelsModule.findOne({ _id: id });
    if (!travel) throw new HttpException('Passenger no found', 404);
    const travelUpdate = await this.TravelsModule.findByIdAndUpdate(id, {
      status: 'completed',
    });
    return travelUpdate;
  }
}
