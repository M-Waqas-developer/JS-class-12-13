let char = prompt("Enter a character:").toLowerCase();
let isVowel;

if (char === 'a') {
    isVowel = true;
} else if (char === 'e') {
    isVowel = true;
} else if (char === 'i') {
    isVowel = true;
} else if (char === 'o') {
    isVowel = true;
} else if (char === 'u') {
    isVowel = true;
} else {
    isVowel = false;
}

alert(isVowel);
