import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { pitchOwners } from './mock-data';

@Controller('pitch-owners')
export class PitchOwnerController {
  @Get()
  findAll() {
    return {
      success: true,
      message: 'Pitch owners retrieved successfully',
      data: pitchOwners,
    };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const owner = pitchOwners.find(o => o.id === parseInt(id, 10));
    if (!owner) {
      throw new NotFoundException('Pitch owner not found');
    }
    return {
      success: true,
      message: 'Pitch owner retrieved successfully',
      data: owner,
    };
  }

  @Post()
  create(@Body() owner: any) {
    const newOwner = { id: pitchOwners.length + 1, ...owner };
    pitchOwners.push(newOwner);
    return {
      success: true,
      message: 'Pitch owner created successfully',
      data: newOwner,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedOwner: any) {
    const ownerIndex = pitchOwners.findIndex(o => o.id === parseInt(id, 10));
    if (ownerIndex === -1) {
      throw new NotFoundException('Pitch owner not found');
    }
    pitchOwners[ownerIndex] = { ...pitchOwners[ownerIndex], ...updatedOwner };
    return {
      success: true,
      message: 'Pitch owner updated successfully',
      data: pitchOwners[ownerIndex],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const ownerIndex = pitchOwners.findIndex(o => o.id === parseInt(id, 10));
    if (ownerIndex === -1) {
      throw new NotFoundException('Pitch owner not found');
    }
    const deletedOwner = pitchOwners.splice(ownerIndex, 1);
    return {
      success: true,
      message: 'Pitch owner deleted successfully',
      data: deletedOwner[0],
    };
  }
}
