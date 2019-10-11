const roughly = require('./dist/index');

test('rough', () => {
  var time = roughly();
  console.log(time);
  console.log(time.toString());
});
