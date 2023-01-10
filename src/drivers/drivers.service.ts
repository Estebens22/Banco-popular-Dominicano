import { HttpException, Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Drivers, DriversDocument } from './schema/drivers.schema';
import { Model } from 'mongoose';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Drivers.name)
    private DriversModule: Model<DriversDocument>,
  ) {}

  async create(createDriverDto: CreateDriverDto) {
    const DriverCreate = await this.DriversModule.create(createDriverDto);
    return DriverCreate;
  }

  async findAll() {
    const drivers = await this.DriversModule.find();
    return drivers;
  }

  async findAllActives() {
    const drivers = await this.DriversModule.find({
      status: 1,
    });
    return drivers;
  }

  async findAllRatio(latitude: string, longitude: string) {
    const drivers = await this.DriversModule.find({
      status: 1,
    });

    // eslint-disable-next-line prefer-const
    let around = [];
    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i];
      const latitudeDriver = driver.latitude;
      const longitudeDriver = driver.longitude;

      const distance = getDistanciaMetros(
        latitudeDriver,
        longitudeDriver,
        latitude,
        longitude,
      );

      if (distance <= 3000) {
        around.push(driver);
      }
    }

    function getDistanciaMetros(lat1, lon1, lat2, lon2) {
      const rad = function (x) {
        return (x * Math.PI) / 180;
      };
      const R = 6378.137; //Radio de la tierra en km
      const dLat = rad(lat2 - lat1);
      const dLong = rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(lat1)) *
          Math.cos(rad(lat2)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      //aquí obtienes la distancia en metros por la conversion 1Km =1000m
      const d = R * c * 1000;
      return d;
    }

    return around;
  }

  async findOne(id: string) {
    const driver = await this.DriversModule.findOne({ _id: id });
    if (!driver) throw new HttpException('Driver no found', 404);
    return driver;
  }

  async update(id: string, updateDriverDto: UpdateDriverDto) {
    const driver = await this.DriversModule.findOne({ _id: id });
    if (!driver) throw new HttpException('Driver no found', 404);
    const driverUpdate = await this.DriversModule.findByIdAndUpdate(
      id,
      updateDriverDto,
    );
    return driverUpdate;
  }

  async remove(id: string) {
    const driver = await this.DriversModule.findOne({ _id: id });
    if (!driver) throw new HttpException('Driver no found', 404);
    const driverDeleted = await this.DriversModule.deleteOne({ _id: id });
    return driverDeleted;
  }
}
