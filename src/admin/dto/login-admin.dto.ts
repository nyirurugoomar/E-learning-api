import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {



  @IsEmail()
  @ApiProperty({
    description:'Enter your email',
    example:'moses@gmail.com'
})
  email: string;

  @IsString()
  @ApiProperty({
    description:'Enter your password',
    example:'***********'
})
  password: string;
}