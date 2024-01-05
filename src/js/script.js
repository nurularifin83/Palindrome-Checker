/** Ask for button and input */
const palindromeInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const output = document.getElementById('result');

const allPalindromes = [
    {
        id: 1,
        name: "A",
        result: true
    },
    {
        id: 2,
        name: "eye",
        result: true
    },
    {
        id: 3,
        name: "_eye",
        result: true
    },
    {
        id: 4,
        name: "race car",
        result: true
    },
    {
        id: 5,
        name: "not a palindrome",
        result: false
    },
    {
        id: 6,
        name: "A man, a plan, a canal. Panama",
        result: true
    },
    {
        id: 7,
        name: "never odd or even",
        result: true
    },
    {
        id: 8,
        name: "nope",
        result: false
    },
    {
        id: 9,
        name: "almostomla",
        result: false
    },
    {
        id: 10,
        name: "My age is 0, 0 si ega ym.",
        result: true
    },
    {
        id: 11,
        name: "1 eye for of 1 eye.",
        result: false
    },
    {
        id: 12,
        name: "0_0 (: /-\ :) 0-0",
        result: true
    },
    {
        id: 13,
        name: "five|\_/|four",
        result: false
    }
];

/** check Palindrome */
const checkPalindrome = (keyWord) => {
    for (let i = 0; i < allPalindromes.length; i++) {
        if(allPalindromes[i].name.toLowerCase() === keyWord.toLowerCase()
         && allPalindromes[i].result === true ) {
            return allPalindromes[i].name;
        }
    }
}

/** Button act. */
checkButton.addEventListener('click', () => {
    if (palindromeInput.value === '') {
        alert('Please input a value');
        output.classList.add('hide');
        palindromeInput.focus();
    } else if (checkPalindrome(palindromeInput.value)) {
        output.innerHTML = `
        <p class="user-input"><span>${checkPalindrome(palindromeInput.value)}</span> is a palindrome</p>`;
        output.classList.remove('hide');
        palindromeInput.focus();
        palindromeInput.value = '';
        console.log(checkPalindrome(palindromeInput.value));
    } else {
        output.innerHTML = `
        <p class="user-input"><span>${palindromeInput.value}</span> is not a palindrome</p>`;
        output.classList.remove('hide');
        palindromeInput.focus();
        palindromeInput.value = '';
    }
});