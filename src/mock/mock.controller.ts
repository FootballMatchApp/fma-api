import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('mock')
export class MockController {
  @Get('hello')
  getHello() {
    return { message: 'Hello from mock API' };
  }

  @Get('user/:id')
  getUser(@Param('id') id: string) {
    return {
      id,
      name: 'Mock User',
      email: 'mock@example.com'
    };
  }

  @Post('login')
  login(@Body() body: any) {
    const { username, password } = body;
    return {
      access_token: 'mock-jwt-token',
      user: { username, role: 'admin' }
    };
  }
}

