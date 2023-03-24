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
})