export function isPalindrome(word: string): boolean {
    let normalized = normalizeWord(word);
    let reversed = reverseWord(word);
    return normalized === reversed;
}

const normalizeWord = (word: string) => {
    return word.toLowerCase().replace(/ /g, '');
}

const reverseWord = (word: string) => {
    return normalizeWord(word)
        .split('').reverse().join('');
}