
// declare an object

let student = {
  name: 'Salma Akter',
  id: 12345,
  class: 'x',
  roll: 01 
}

// get value of a specific property

console.log(student.id);
var container = student['id'];
// console.log(container);
let propertyName = 'name';
let propertyName2 = 'roll';
// console.log(student[propertyName]);
// console.log(student[propertyName2]);

//change values and add new key:value

student.name = 'Nishi';
student.id = 34566;
student.class = 'ix';
student.roll = 2;
student.section = 'A';
// console.log(student);

// get all properties and values in an array

// let propertiesArray = Object.keys(student);
// console.log(propertiesArray);

// let propertiesValues = Object.values(student);
// console.log(propertiesValues);

let entries = Object.entries(student);
console.log(entries);
