import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  private employees: CreateEmployeeDto[] = [];
  create(createEmployeeDto: CreateEmployeeDto) {
    this.employees.push(createEmployeeDto);
    return {
      message: 'Employee created successfully',
      data: createEmployeeDto,
    };
  }
}
