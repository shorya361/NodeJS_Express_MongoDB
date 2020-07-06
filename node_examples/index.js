var rect = require('./rectangle');

function solveRect(l, b) {
  console.log('----------------------------------------------------------');
  console.log('solving for rectangle with l=' + l + ' and b=' + b);
  if (l <= 0 || b <= 0) {
    console.log('Rectangle dimensions should be greater than 0');
  } else {
    console.log('The area of rectangle is ' + rect.area(l, b));
    console.log('The perimeter of rectangle is ' + rect.perimeter(l, b));
  }
}

solveRect(5, 2);
solveRect(-2, 5);
