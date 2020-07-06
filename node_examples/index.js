var rect = require('./rectangle');

function solveRect(l, b) {
  console.log('----------------------------------------------------------');
  console.log('solving for rectangle with l=' + l + ' and b=' + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log('error: ' + err.message);
    } else {
      console.log('Area of rectangle is:' + rectangle.area());
      console.log('Perimeter of rectangle is :' + rectangle.perimeter());
    }
  });

  console.log('this statement is after the call to rect.');
}

solveRect(5, 2);
solveRect(-2, 5);
