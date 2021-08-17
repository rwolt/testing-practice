export default function caesar (string, key) {
    let encryptedString = '';
    for(let i=0; i < string.length; i++) {
        let casing;
        let charCode = string.charCodeAt(i);
        if(charCode > 64 && charCode < 91) {  //Upper case
            //Encrypt the character and append it to the new string
            casing = 'upper';
            encryptedString += encryptCharacter(charCode, key, casing);
        }
        else if (charCode > 96 && charCode < 123) {  //Lower case
                //Encrypt the character and append it to the new string
                casing = 'lower';
                encryptedString += encryptCharacter(charCode, key, casing);
        }
        else {
            //Append non-alphabet characters unencrypted
            encryptedString += string[i];
        }
    }
    return encryptedString;
}

function encryptCharacter(charCode, key, casing) {
    let newIndex;
    //Get the index in the alphabet
    if (casing === 'upper') {
        let alphabetIndex = charCode - 65;
        let encryptedIndex = alphabetIndex + key;
        newIndex = (encryptedIndex % 26) + 65
    } else if (casing === 'lower') {
        let alphabetIndex = charCode - 97;
        let encryptedIndex = alphabetIndex + key;
        newIndex = (encryptedIndex % 26) + 97
    }
    return String.fromCharCode(newIndex);
}
