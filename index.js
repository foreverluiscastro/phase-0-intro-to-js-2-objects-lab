// Write your solution in this file!
const employee = {
    name: "Luis",
    streetAddress: "37 Cedar rd"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    return Object.assign(delete employee.key);
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
