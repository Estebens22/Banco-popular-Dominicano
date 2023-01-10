import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePassengerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Passenger Name' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Type Document' })
  type_document: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Document Number' })
  document_number: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Email Passenger' })
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Phone number' })
  phone: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Status Passenger' })
  status: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Latitude Passenger' })
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'Longitude Passenger' })
  longitude: number;
}
