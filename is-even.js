function isEven(number){
    const remainder = number % 2;
    return remainder % 2 === 0 ? true : false;
}

export default isEven;