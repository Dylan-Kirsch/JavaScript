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

//fonction brut avec librairie

let chaine1 = ['K','A','Y','A','K'];
let chaine2 = ['M','A','Y','A','K'];
console.log(chaine1);
console.log(estPalindrome(chaine1));
console.log(chaine2);
console.log(estPalindrome(chaine2));