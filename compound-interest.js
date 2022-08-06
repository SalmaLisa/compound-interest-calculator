
//---------------- Compound Interest Calculator--------------------------

let principle = 80000;
let interestRate = 5 ;
let compoundingPeriods = 1;
let time = 2.5;

function calculation1(interestRate, compoundingPeriods) {
  var interestRateDecimal = (interestRate / 100);
  var calculationPart1 = (1 + (interestRateDecimal / compoundingPeriods));
  return calculationPart1;
}

var calPart1Result = calculation1(interestRate, compoundingPeriods);

// ---------------------------------------
var timeFloat = parseFloat(time);
function calculation2(compoundingPeriods, time) {
  var calculationPart2 = compoundingPeriods * time;
  return calculationPart2;
}
var calPart2Result = calculation2(compoundingPeriods, timeFloat);

// ---------------------------------------
function power(number) {
  var multiply = 1;
  for (i = 1; i <= calPart2Result; i++) {
    var multiply = multiply * number;
  }
  return multiply;
}
let powerResult = power(calPart1Result);

// --------------------------------------------

function compoundInterest(principle) {
  var finalCalfulation = principle * powerResult;
  return finalCalfulation;
}

let principleWithInterest = compoundInterest(principle);
console.log('Principle with interest is', principleWithInterest, 'taka');
let interest = principleWithInterest - principle;
console.log('Interest is', interest, 'taka');
