import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    if (username === 'admin' && password === '1@') {
      return {
        statusCode: 200,
        message: 'Login successful',
        data: {
          token: 'mock-jwt-token',
          user: {
            id: 1,
            username: 'admin',
            role: 'Admin',
          },
        },
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}

