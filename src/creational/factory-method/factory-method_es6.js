class Employee {
  constructor(employeeId) {
    this.employeeId = employeeId;
  }
}

class IFactory {
  constructor() {
  }

  findOrCreate(id) {
    throw "Not implemented"
  }

}


class EmployeeFactory extends IFactory{
  constructor() {
    super();
    this.employees = {};
  }

  findOrCreate(id) {
    if (this.employees[id] === undefined)
      this.employees[id] = new Employee(id);
    return this.employees[id];
  }

  getNumberOfEmployees() {
      return Object.keys(this.employees).length;
  }

}

export { EmployeeFactory, Employee };
