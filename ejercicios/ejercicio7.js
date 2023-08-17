// A password manager wants to create new passwords using two strings given by the user, then combined to create a harder-to-guess combination. Given two strings, interleave the characters of the strings to create a new string. Beginning with an empty string, alternately append a character from string a and from string b. If one of the strings is exhausted before the other, append the remaining letters from the other string all at once. The result is the new password.

function asciiAZ(string) {
    for (let i = 0; i < string.length; i++) {
        const character = string.charAt(i);
        if (character < 97 || character > 122) {
            return false;
        }
    }
    return true
}

function password() {
    let a = '';
    let b = 'b';
    let aList = a.split('');
    let bList = b.split('');
    let longest = '';
    let empty = '';
    if (!asciiAZ(a)) {
        return 'A no cumple los parametros ascci (a - z).';
    }
    if (!asciiAZ(b)) {
        return 'B no cumple los parametros ascci (a - z).';
    }
    if (a.length < 1 || a.length > 25000) {
        return 'A tiene menos de 1 caracter o mas de 25000'
    }
    if (b.length < 1 || b.length > 25000) {
        return 'B tiene menos de 1 caracter o mas de 25000'
    }
    if (aList.length > bList.length) {
        longest = aList;
    }
    else if (b.length > a.length) {
        longest = bList;
    }
    else {
        longest = aList;
    }
    aListBool = true;
    bListBool = true;
    for (let i = 0; i < longest.length; i++) {
        if (aList.length == i) {
            aListBool = false;
        }
        else if (bList.length == i) {
            bListBool = false;
        }
        if (aListBool == true) {
            empty += a[i];
        }
        if (bListBool == true) {
            empty += b[i];
        }
    }
    return empty
}
console.log(password());

// Lenin Santiago Muñoz Quintero