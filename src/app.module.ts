import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './mock/mock.controller';
import { AuthController } from './auth/auth.controller';
import { MatchpostController } from './matchpost/matchpost.controller';
import { PitchController } from './pitch/pitch.controller';
import { TeamController } from './team/team.controller';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, MockController, AuthController, MatchpostController, PitchController, TeamController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
