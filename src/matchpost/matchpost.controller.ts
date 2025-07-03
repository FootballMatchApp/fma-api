import { Controller, Get } from '@nestjs/common';
import { mockData } from './mock-data';

@Controller('matchposts')
export class MatchpostController {
  @Get()
  getAllPosts() {
    return {
      statusCode: 200,
      message: 'Posts fetched successfully',
      data : mockData
    };
  }
}


