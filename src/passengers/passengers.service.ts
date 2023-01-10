import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passengers, PassengersDocument } from './schema/passengers.schema';
import { Model } from 'mongoose';

@Injectable()
export class PassengersService {
  constructor(
    @InjectModel(Passengers.name)
    private PassengersModule: Model<PassengersDocument>,
  ) {}

  async create(createPassengerDto: CreatePassengerDto) {
    const passengerCreate = await this.PassengersModule.create(
      createPassengerDto,
    );
    return passengerCreate;
  }

  async findAll() {
    const passengers = await this.PassengersModule.find();
    return passengers;
  }

  async findOne(id: string) {
    const passenger = await this.PassengersModule.findOne({ _id: id });
    if (!passenger) throw new HttpException('Passenger no found', 404);
    return passenger;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, updatePassengerDto: UpdatePassengerDto) {
    const passenger = await this.PassengersModule.findOne({ _id: id });
    if (!passenger) throw new HttpException('Passenger no found', 404);
    const passengerUpdate = await this.PassengersModule.findByIdAndUpdate(
      id,
      updatePassengerDto,
    );
    return passengerUpdate;
  }

  async remove(id: string) {
    const passenger = await this.PassengersModule.findOne({ _id: id });
    if (!passenger) throw new HttpException('Passenger no found', 404);
    const passengerDeleted = await this.PassengersModule.deleteOne({ _id: id });
    return passengerDeleted;
  }
}
