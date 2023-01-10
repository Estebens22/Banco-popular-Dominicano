import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TravelsService } from './travels.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Travels')
@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) {}

  @Post()
  async create(@Res() response, @Body() createTravelDto: CreateTravelDto) {
    try {
      await this.travelsService.create(createTravelDto);
      return response
        .status(HttpStatus.OK)
        .send('Travel inicializated successfully');
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get()
  async findAll(@Res() response) {
    const allTravels = this.travelsService.findAll();
    return response.status(HttpStatus.OK).send(allTravels);
  }

  @Get('/actives')
  async findAllActives(@Res() response) {
    const allTravelsActives = this.travelsService.findAllActives();
    return response.status(HttpStatus.OK).send(allTravelsActives);
  }

  @Get('/completed')
  async findAllCompleted(@Res() response) {
    const allTravelsCompleted = this.travelsService.findAllCompleted();
    return response.status(HttpStatus.OK).send(allTravelsCompleted);
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    const travel = await this.travelsService.findOne(id);
    return response.status(HttpStatus.OK).send(travel);
  }

  @Patch('/completing/:id')
  async completing(
    @Res() response,
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateTravelDto,
  ) {
    await this.travelsService.completing(id, updateTravelDto);
    return response.status(HttpStatus.OK).send('Travel completed successfully');
  }
}
