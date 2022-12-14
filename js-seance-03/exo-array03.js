let palindrome = ['a', 'y', 'a'];
let estPalindrome = true;

for (let i = 0; i < palindrome.length; i++) {

    j = palindrome.length - i-1
    // console.log(i);
    // console.log(j);
    // console.log(palindrome[j]);
    // console.log(palindrome[i]);

if (palindrome[j] != palindrome[i]) {
    
        console.log('ce nest pas un palindrom');
        estPalindrome = false;

    }
}
console.log(estPalindrome);