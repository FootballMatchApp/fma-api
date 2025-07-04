import { Controller, Get } from '@nestjs/common';
import { pitchList } from './mock-data';

@Controller('pitchs')
export class PitchController {
  @Get()
  getAllPitch() {
    return {
      statusCode: 200,
      message: 'Pitchs fetched successfully',
      data: pitchList,
    };
  }
}
