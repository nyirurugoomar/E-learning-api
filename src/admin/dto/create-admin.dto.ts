import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @ApiProperty({
    description:'Create name',
    example:'Moses'
})
  name: string;

  @IsEmail()
  @ApiProperty({
    description:'Create email',
    example:'Moses@gmail.com'
})
  email: string;

  @IsString()
  @ApiProperty({
    description:'Create password',
    example:'*********'
})
  password: string;
}