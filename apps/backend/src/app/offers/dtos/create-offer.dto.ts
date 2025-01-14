import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateOfferDto {
  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  salary: number;
}
