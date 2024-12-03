import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config'; // Add ConfigService for managing environment variables
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { LoginDto } from './dto/login-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService, private readonly configService: ConfigService) {}

  @Post('register')
async register(@Body() dto: CreateAdminDto): Promise<{ message: string; token: string }> {
  const newAdmin = await this.adminService.createAdmin(dto);
  const secret = this.configService.get<string>('JWT_SECRET');
    const token = jwt.sign({ id: newAdmin._id, role: newAdmin.role }, secret, { expiresIn: '1h' });
  return {
    message: 'Admin registered successfully',
    token, 
  };
}


  @Post('login')
  async login(@Body() { email, password }: LoginDto): Promise<{ token: string }> {
    const admin = await this.adminService.validateAdmin(email, password);
    if (!admin) throw new UnauthorizedException('Invalid credentials');
    const secret = this.configService.get<string>('JWT_SECRET');
    const token = jwt.sign({ id: admin._id, role: admin.role }, secret, { expiresIn: '3day' }); 

    return { token };
  }
}
