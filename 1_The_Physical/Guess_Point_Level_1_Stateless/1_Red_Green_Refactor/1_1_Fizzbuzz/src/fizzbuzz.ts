export function fizzBuzz(number: number) {
    if (number < 1 || number > 100)
        throw new Error('The number must be between 1 and 100.');
    
    let word = '';
    if (number%3 == 0) word = word.concat('Fizz');
    if (number%5 == 0) word = word.concat('Buzz.');
    if (word.length === 0) word = number.toString();
        
    return word;
}
