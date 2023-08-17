// A password manager wants to create new passwords using two strings given by the user, then combined to create a harder-to-guess combination. Given two strings, interleave the characters of the strings to create a new string. Beginning with an empty string, alternately append a character from string a and from string b. If one of the strings is exhausted before the other, append the remaining letters from the other string all at once. The result is the new password.

function asciiAZ(string) {                                  // We create a function with string for argument to validate if the password just contains letters
    for (let i = 0; i < string.length; i++) {               // We start a For loop
        const character = string.charCodeAt(i);             // we create a constant named character and check each character with charCodeAt
        if (character < 97 || character > 122) {            // We create a conditional which doesn't allow the ASCII characters that aren't letters
            return false;                                   // If any character is not a letter, it returns false
        }
    }
    return true                                             // Otherwise it returns true
}

function password() {                                       // We create a function with no argument to combine the 2 parts of the password
    let a = 'aaa';                                          // We create a variable named a
    let b = 'bbb';                                          // We create a variable named b
    let aList = a.split('');                                // We create a variable named aList which splits the string from a
    let bList = b.split('');                                // We create a variable named bList which splits the string from b
    let longest = '';                                       // We create an empty variable named longest which will contain the longest between aList and bList
    let empty = '';                                         // We create an empty variable named empty which will contain the password characters interspersed
    if (!asciiAZ(a)) {                                      // We create a conditional to check if the function asciiAZ form a is false
        return 'A no cumple los parametros ascci (a - z).'; // If it is false, we return this string
    }
    if (!asciiAZ(b)) {                                      // We create a conditional to check if the function asciiAZ form b is false
        return 'B no cumple los parametros ascci (a - z).'; // If it is false, we return this string
    }
    if (a.length < 1 || a.length > 25000) {                 // We create a conditional to check if a's characters are betweeen 1 and 25000
        return 'A tiene menos de 1 caracter o mas de 25000' // If it is not, we return this string
    }
    if (b.length < 1 || b.length > 25000) {                 // We create a conditional to check if b's characters are betweeen 1 and 25000
        return 'B tiene menos de 1 caracter o mas de 25000' // If it is not, we return this string
    }
    if (aList.length > bList.length) {                      // We create a conditional to check if aList is longer than bList
        longest = aList;                                    // If it is, we add aList to longest
    }
    else if (b.length > a.length) {                         // We check if bList is longer than aList
        longest = bList;                                    // If it is, we add bList to longest
    }
    else {                                                  // If aList is equal to bList
        longest = aList;                                    // We add any of aList or bList to longest
    }
    let aListBool = true;                                   // We create a variable called aListBool that is true
    let bListBool = true;                                   // We create a variable called bListBool that is true
    for (let i = 0; i < longest.length; i++) {              // We start a for loop
        if (aList.length == i) {                            // We create a conditional to check if aList is equal to i
            aListBool = false;                              // If it is, aListBool will be false
        }
        else if (bList.length == i) {                       // We check if bList is equal to i
            bListBool = false;                              // If it is, bListBool will be false
        }
        if (aListBool == true) {                            // We create a conditional to check if aListBool is true
            empty += a[i];                                  // If it is, we add the character on the index i to empty un each loop 
        }
        if (bListBool == true) {                            // We create a conditional to check if bListBool is true
            empty += b[i];                                  // If it is, we add the character on the index i to empty un each loop 
        }
    }
    return empty                                            // We return empty
}
console.log(password());                                    // We print the return from password, which is empty

// Lenin Santiago Muñoz Quintero