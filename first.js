let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);
let result;

if (ascii >= 48 && ascii <= 57) {
    result = "Number";
} else if (ascii >= 65 && ascii <= 90) {
    result = "Uppercase letter";
} else if (ascii >= 97 && ascii <= 122) {
    result = "Lowercase letter";
} else {
    result = "Neither a number nor a letter";
}

alert(result);
