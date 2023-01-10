import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@ApiTags('Drivers')
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  async create(@Res() response, @Body() createDriverDto: CreateDriverDto) {
    try {
      await this.driversService.create(createDriverDto);
      return response.status(HttpStatus.OK).send('Driver created successfully');
    } catch (error) {
      console.log('Error:', error);
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get()
  async findAll(@Res() response) {
    const allDrivers = await this.driversService.findAll();
    return response.status(HttpStatus.OK).send(allDrivers);
  }

  @Get('/actives')
  async findAllActives(@Res() response) {
    const allDrivers = await this.driversService.findAllActives();
    return response.status(HttpStatus.OK).send(allDrivers);
  }

  @Get('/ratio3km/:latitude/:longitude')
  async findAllRatio(
    @Res() response,
    @Param('latitude') latitude: string,
    @Param('longitude') longitude: string,
  ) {
    const allDrivers = await this.driversService.findAllRatio(
      latitude,
      longitude,
    );
    return response.status(HttpStatus.OK).send(allDrivers);
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    const driver = await this.driversService.findOne(id);
    return response.status(HttpStatus.OK).send(driver);
  }

  @Patch(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    await this.driversService.update(id, updateDriverDto);
    return response.status(HttpStatus.OK).send('Driver updated successfully');
  }

  @Delete(':id')
  async emove(@Res() response, @Param('id') id: string) {
    await this.driversService.remove(id);
    return response.status(HttpStatus.OK).send('Driver deleted successfully');
  }
}
