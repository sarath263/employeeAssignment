let employees = [];

const getAll = (req, res) => {
  res.status(200).json(employees);
};

const getOne = (req, res) => {
  const empId = req.params.empId;
  if(typeof empId !== 'string' || !empId || !isNaN(empId) ){
    res.status(400).json({ message: "Employee ID is not correct" });
    return;
  }
  const employee = employees.find((emp) => emp.employeeId === empId);
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: "Employee not found in our records" });
  }
};

const create = (req, res) => {
  const employeeName = req.body.employeeName;
  const age = req.body.age;
  const salaryAmount = req.body.salaryAmount;
  const email = req.body.email;
  const degreeDetails = req.body.degreeDetails;
  if (!employeeName || !age ) {
    res.status(400).json({ message: "Employee Name & Age are required fields" });
    return;
  }
  const employeeId = Math.random().toString(36).substr(2, 9);
  const newEmployee = {
    employeeId,
    employeeName,
    salaryAmount,
    age,
    email,
    degreeDetails,
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

const update = (req, res) => {
  const empId = req.params.empId;
  if(typeof empId !== 'string' || !empId || !isNaN(empId) ){
    res.status(400).json({ message: "Employee ID is not correct" });
    return;
  }
  const employeeIndex = employees.findIndex((emp) => emp.employeeId === empId);
  if (employeeIndex === -1) {
    res.status(404).json({ message: "Employee not found in our records" });
    return;
  }
  const employeeName = req.body.employeeName;
  const salaryAmount = req.body.salaryAmount;
  const age = req.body.age;
  const email = req.body.email;
  const degreeDetails = req.body.degreeDetails;
  if (employeeName) employees[employeeIndex].employeeName = employeeName;
  if (salaryAmount) employees[employeeIndex].salaryAmount = salaryAmount;
  if (age) employees[employeeIndex].age = age;
  if (email) employees[employeeIndex].email = email;
  if (degreeDetails) employees[employeeIndex].degreeDetails = degreeDetails;
  res.status(200).json(employees[employeeIndex]);
};

const remove = (req, res) => {
  const empId = req.params.empId;
  if(typeof empId !== 'string' || !empId || !isNaN(empId) ){
    res.status(400).json({ message: "Employee ID is not correct" });
    return;
  }
  const employeeIndex = employees.findIndex((emp) => emp.employeeId === empId);
  if (employeeIndex === -1) {
    res.status(404).json({ message: "Employee not found in our records"});
    return;
  }
  employees.splice(employeeIndex, 1);
  res.status(204).end();
};
module.exports = { getAll, getOne, create, update, remove };
