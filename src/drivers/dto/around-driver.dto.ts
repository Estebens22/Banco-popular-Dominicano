import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AroundDriversDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Latitude Passenger' })
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Longitude Passenger' })
  longitude: number;
}
