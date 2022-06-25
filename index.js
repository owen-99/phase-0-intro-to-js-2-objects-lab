// Write your solution in this file!

const employee = {
    name : '',
    streetAddress : ''
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(employee, key){
    const newEmp = { ...employee }
    delete newEmp[key]
    return newEmp
}



function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
