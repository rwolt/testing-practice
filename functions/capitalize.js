const capitalize = (string) => {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

export default capitalize;