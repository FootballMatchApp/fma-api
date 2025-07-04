import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { profiles } from './mock-data';

@Controller('profile')
export class ProfileController {
  @Get()
  findAll() {
    return {
      success: true,
      message: 'Profiles retrieved successfully',
      data: profiles,
    };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const profile = profiles.find(p => p.id === parseInt(id, 10));
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return {
      success: true,
      message: 'Profile retrieved successfully',
      data: profile,
    };
  }

  @Post()
  create(@Body() profile: any) {
    const newProfile = { id: profiles.length + 1, ...profile };
    profiles.push(newProfile);
    return {
      success: true,
      message: 'Profile created successfully',
      data: newProfile,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedProfile: any) {
    const profileIndex = profiles.findIndex(p => p.id === parseInt(id, 10));
    if (profileIndex === -1) {
      throw new NotFoundException('Profile not found');
    }
    profiles[profileIndex] = { ...profiles[profileIndex], ...updatedProfile };
    return {
      success: true,
      message: 'Profile updated successfully',
      data: profiles[profileIndex],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const profileIndex = profiles.findIndex(p => p.id === parseInt(id, 10));
    if (profileIndex === -1) {
      throw new NotFoundException('Profile not found');
    }
    const deletedProfile = profiles.splice(profileIndex, 1);
    return {
      success: true,
      message: 'Profile deleted successfully',
      data: deletedProfile[0],
    };
  }
}