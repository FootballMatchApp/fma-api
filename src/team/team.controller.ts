import { Controller, Get } from '@nestjs/common';
import { teamList } from './mock-data';

@Controller('teams')
export class TeamController {
  @Get()
  getAllTeams() {
    return {
      statusCode: 200,
      message: 'Teams fetched successfully',
      data: teamList,
    };
  }
}
