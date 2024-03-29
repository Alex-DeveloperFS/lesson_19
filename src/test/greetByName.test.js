import { greetByName_ } from '../greetByName_'

describe('greet function', () => {
  test('should return correct greeting', () => {
    expect(greetByName_('Hi', 'John')).toBe('Hi, John')
    expect(greetByName_('Hey', 'Bob')).toBe('Hey, Bob')
    expect(greetByName_('Hello', 'Mary')).toBe('Hello, Mary')
  })
})
