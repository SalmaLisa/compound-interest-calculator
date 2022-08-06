let examMarks = [99, 78, 89, 90, 88];

// get specific Element

// console.log(examMarks[2]);
// console.log(examMarks[0]);
// console.log(examMarks[4]);


// change element
examMarks[3] = 165;
examMarks[4] = 'Humayra'
console.log(examMarks);


// get specific part of the array
let specificPart = examMarks.slice(1, 4);
// console.log(specificPart);
let specificPart2 = examMarks.slice(2, 4);
// console.log(specificPart2);
let specificPart3 = examMarks.slice(0, 3);
// console.log(specificPart3);

// add Element in last position

examMarks.push(100);
// console.log(examMarks);

// add Element in first position

examMarks.unshift(97);
// console.log(examMarks);

// remove last Element

examMarks.pop();
// console.log(examMarks);

// remove first Element

examMarks.shift();
// console.log(examMarks);

