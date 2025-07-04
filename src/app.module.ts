import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { MatchpostController } from './matchpost/matchpost.controller';
import { PitchController } from './pitch/pitch.controller';
import { TeamController } from './team/team.controller';
import { ProfileController } from './profile/profile.controller';
import { PitchOwnerController } from './pitch-owner/pitch-owner.controller';
import { TeamMembersController } from './team-members/team-members.controller';
import { AppointmentController } from './appointment/appointment.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    AuthController,
    MatchpostController,
    PitchController,
    TeamController,
    ProfileController,
    PitchOwnerController,
    TeamMembersController,
    AppointmentController,
  ],
  providers: [AppService],
})
export class AppModule {}
