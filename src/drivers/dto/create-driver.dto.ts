import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDriverDto {
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
  @ApiProperty({ type: String, description: 'License Number' })
  license_number: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Vehicle registration number' })
  vehicle_registration_number: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'Vehicle color' })
  vehicle_color: string;

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
