export function isPalindrome(word : string): boolean {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}