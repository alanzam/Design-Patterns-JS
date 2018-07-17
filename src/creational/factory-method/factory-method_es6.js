class Employee {
  constructor(employeeId) {
    this.employeeId = employeeId;
  }
}


class EmployeeFactory {
  constructor() {
    this.employees = {};
  }

  findOrCreateEmployee(id) {
    if (this.employees[id] === undefined)
        this.employees[id] = new Employee(id);
    return this.employees[id];
  }

  getNumberOfEmployees() {
    return Object.keys(this.employees).length;
  }

}

export { EmployeeFactory, Employee };
