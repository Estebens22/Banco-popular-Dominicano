import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Passengers')
@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Post()
  async create(
    @Res() response,
    @Body() createPassengerDto: CreatePassengerDto,
  ) {
    try {
      await this.passengersService.create(createPassengerDto);
      return response
        .status(HttpStatus.OK)
        .send('Passenger created successfully');
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get()
  async findAll(@Res() response) {
    const allPassengers = await this.passengersService.findAll();
    return response.status(HttpStatus.OK).send(allPassengers);
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    const passenger = await this.passengersService.findOne(id);
    return response.status(HttpStatus.OK).send(passenger);
  }

  @Patch(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updatePassengerDto: UpdatePassengerDto,
  ) {
    await this.passengersService.update(id, updatePassengerDto);
    return response
      .status(HttpStatus.OK)
      .send('Passenger updated successfully');
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    await this.passengersService.remove(id);
    return response
      .status(HttpStatus.OK)
      .send('Passenger deleted successfully');
  }
}
