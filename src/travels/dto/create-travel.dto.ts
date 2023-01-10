import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTravelDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'ID Passenger' })
  passenger_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'ID Driver' })
  driver_id: string;
}
