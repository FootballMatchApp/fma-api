import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { appointments } from './mock-data';

@Controller('appointments')
export class AppointmentController {
  @Get()
  findAll() {
    return {
      success: true,
      message: 'Appointments retrieved successfully',
      data: appointments,
    };
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const appointment = appointments.find(a => a.id === parseInt(id, 10));
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }
    return {
      success: true,
      message: 'Appointment retrieved successfully',
      data: appointment,
    };
  }

  @Post()
  create(@Body() appointment: any) {
    const newAppointment = { id: appointments.length + 1, ...appointment };
    appointments.push(newAppointment);
    return {
      success: true,
      message: 'Appointment created successfully',
      data: newAppointment,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedAppointment: any) {
    const appointmentIndex = appointments.findIndex(a => a.id === parseInt(id, 10));
    if (appointmentIndex === -1) {
      throw new NotFoundException('Appointment not found');
    }
    appointments[appointmentIndex] = { ...appointments[appointmentIndex], ...updatedAppointment };
    return {
      success: true,
      message: 'Appointment updated successfully',
      data: appointments[appointmentIndex],
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const appointmentIndex = appointments.findIndex(a => a.id === parseInt(id, 10));
    if (appointmentIndex === -1) {
      throw new NotFoundException('Appointment not found');
    }
    const deletedAppointment = appointments.splice(appointmentIndex, 1);
    return {
      success: true,
      message: 'Appointment deleted successfully',
      data: deletedAppointment[0],
    };
  }
}
