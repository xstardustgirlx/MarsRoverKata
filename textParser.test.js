const parseText = require('./textParser');

test('Should parse first number from text', () => {
    expect(parseText('5')).toEqual(5);
});