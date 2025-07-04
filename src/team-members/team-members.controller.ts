import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { teamMembers } from './mock-data';

@Controller('team-members')
export class TeamMembersController {
  @Get()
  findAll() {
    return {
      success: true,
      message: 'Team members retrieved successfully',
      data: teamMembers,
    };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const member = teamMembers.find(m => m.id === parseInt(id, 10));
    if (!member) {
      throw new NotFoundException('Team member not found');
    }
    return {
      success: true,
      message: 'Team member retrieved successfully',
      data: member,
    };
  }

  @Post()
  create(@Body() member: any) {
    const newMember = { id: teamMembers.length + 1, ...member };
    teamMembers.push(newMember);
    return {
      success: true,
      message: 'Team member created successfully',
      data: newMember,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedMember: any) {
    const memberIndex = teamMembers.findIndex(m => m.id === parseInt(id, 10));
    if (memberIndex === -1) {
      throw new NotFoundException('Team member not found');
    }
    teamMembers[memberIndex] = { ...teamMembers[memberIndex], ...updatedMember };
    return {
      success: true,
      message: 'Team member updated successfully',
      data: teamMembers[memberIndex],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const memberIndex = teamMembers.findIndex(m => m.id === parseInt(id, 10));
    if (memberIndex === -1) {
      throw new NotFoundException('Team member not found');
    }
    const deletedMember = teamMembers.splice(memberIndex, 1);
    return {
      success: true,
      message: 'Team member deleted successfully',
      data: deletedMember[0],
    };
  }
}
