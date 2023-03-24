import { isPalindrome } from './index'

describe('palindrome checker', () => {

    it('Create a palindrome checker', () => {
        expect(typeof(isPalindrome)).toBe("function");
    })

    it('mom is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    })

    it('mom is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    })

    it('wow is a palindrome', () => {
        expect(isPalindrome('wow')).toBeTruthy();
    })

    it('bill is not a palindrome', () => {
        expect(isPalindrome('bill')).toBeFalsy();
    })

    it('Mom is a palindrome', () => {
        expect(isPalindrome('Mom')).toBeTruthy();
    })

    it('"Was It A Rat I Saw" is a palindrome', () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBeTruthy();
    })

    it('"Never Odd or Even" is a palindrome', () => {
        expect(isPalindrome('Never Odd or Even')).toBeTruthy();
    })

    it('"Hello my friend" is not a palindrome', () => {
        expect(isPalindrome('Hello my friend')).toBeFalsy();
    })
})