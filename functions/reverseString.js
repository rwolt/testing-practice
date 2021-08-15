const reverseString = (string) => {
    let reversed = '';
    for (let i = string.length; i >= 0; i--) {
        reversed += string.charAt(i);
    }
    return reversed;
}

export default reverseString;