import { describe } from 'node:test';
import { CreateEmployeeDto } from './create-employee.dto';

describe('CreateEmployeeDto', () => {
  it('should be defined', () => {
    expect(new CreateEmployeeDto()).toBeDefined();
  });
});
