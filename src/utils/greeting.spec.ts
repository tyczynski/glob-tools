import { greeting } from './greeting';

it('should return default greeting', () => {
  // act
  const defaultValue = 'Hello World!';
  // arrange
  const expectedValue = greeting();
  // assert
  expect(expectedValue).toBe(defaultValue);
});

it('should return greeting for passed value', () => {
  // act
  const name = 'Przemek';
  const defaultValue = `Hello ${name}!`;
  // arrange
  const expectedValue = greeting(name);
  // assert
  expect(expectedValue).toBe(defaultValue);
});
