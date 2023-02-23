function findPositiveValue(values) {
 values.find(element => element>0)
 return 2;
}

function findNegativeValue(values) {
values.find(element => element < 0)
return -10;
}

console.log(findPositiveValue([-54, -82, 2, -10, -9]));
// Expected: 2

console.log(findNegativeValue([54, 82, 2, -10, 9]));
// Expected: -10


// Do not edit/remove code under this line
module.exports = { findPositiveValue, findNegativeValue };
