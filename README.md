# Employee Assignment

### To run the code
 1. Clone this repo
 2. Do `npm install`
 3. Run `npm start`

### It starts Node JS express server with below endpoints

Endpoint /api/employees :
1. GET /api/employees
a. Respond with status code 200 and return records of all employees.
2. GET /api/employees/{empId}
a. If a record with the exact empId is found then respond with status code 200 and
return the record with empId.
b. If a record is not found with exact empId respond with status code 404 and user
friendly message.
c. If userId is invalid then return status code 400 and a user friendly message.
3. POST /api/employees - Create employee record
a. Create an employee record if required fields are present and respond with status
code 201.
b. Respond with status code 400 and user friendly message if the required fields
are not present.
4. PUT /api/employees/{empId}
a. Respond with status code 200 and record details if the record with empId is
found.
b. If a record is not found with exact empId respond with status code 404 and user
friendly message.
c. If userId is invalid then return status code 400 and a user friendly message.
5. DELETE /api/employees/{empId}
a. Respond with status code 204 if record is found and deleted.
b. If a record is not found with exact empId respond with status code 404 and user
friendly message.
c. If userId is invalid then return status code 400 and a user friendly message.

Employee Object Details:
1. employeeId - String , generated unique identifier
2. employeeName - String, required
3. salaryAmount - number
4. age - number, required
5. email - string
6. degreeDetails - array of strings (For example : [MTech, BTech]
