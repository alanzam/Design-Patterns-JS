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
    throw "Not Implemented";
  }

  getNumberOfEmployees() {
      return Object.keys(this.employees).length;
  }

}

export { EmployeeFactory, Employee };
