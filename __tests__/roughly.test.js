import roughly from './../src/index';

test('hour goes up after 30', () => {
  var time = roughly(new Date('2019-10-11 15:33:00'));
  expect(time.hour).toEqual('four');
  expect(time.transition).toEqual('to');
  expect(time.estimate).toEqual('twenty-five');
});
