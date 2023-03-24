import { fizzBuzz } from './fizzbuzz'

describe('fizzbuzz', () => {

    it('takes numbers from 1 to 100', () => {
        expect(() => fizzBuzz(0)).toThrow('The number must be between 1 and 100.');
        expect(() => fizzBuzz(1)).not.toThrow('The number must be between 1 and 100.');
        expect(() => fizzBuzz(50)).not.toThrow('The number must be between 1 and 100.');
        expect(() => fizzBuzz(100)).not.toThrow('The number must be between 1 and 100.');
        expect(() => fizzBuzz(101)).toThrow('The number must be between 1 and 100.');
    })

    it('and outputs them as a string', () => {
        expect(fizzBuzz(1)).toEqual('1');
    })

    it('but for multiples of three it returns “Fizz” instead of the number', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
        expect(fizzBuzz(6)).toEqual('Fizz');
        expect(fizzBuzz(9)).toEqual('Fizz');
    })

});
