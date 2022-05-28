const parseText = require('./textParser');

test('Should parse first number from text', () => {
    expect(parseText('5')[0]).toEqual(5);
});
test('Should parse 3 from 3', () => {
    expect(parseText('3')[0]).toEqual(3);
});
test('Should parse first number from text', () => {
    expect(parseText('5 5')[0]).toEqual(5);
});