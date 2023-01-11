const ones = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero"
};

const teens = {
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
};

const tens = {
    0:"",
    1:"ten",
    2:"twenty",
    3:"thirty",
    4:"forty",
    5:"fifty",
    6:"sixty",
    7:"seventy",
    8:"eighty",
    9:"ninety"
};

const hundred = "hundred";
const whitespace = " ";

module.exports = function toReadable (number) {   
    return  number < 10 ? onesToString(number):
            number <= 99 ? tensToString(number):
            hundredsToString(number);
}

function hundredsToString(number){
    var hundredsDigit = Math.trunc(number / 100);

    var tensNumber = number - hundredsDigit * 100;

    var result = [];

    result.push(ones[hundredsDigit]);
    result.push(hundred);
    result.push(tensToString(tensNumber));

    return result.join(" ").trim();
}

function tensToString(number) {
    
    if (number >= 11 && number <=19)return  teens[number];
        
    var tensDigit = Math.trunc(number / 10);
    var onesDigit = number - (tensDigit * 10);

    var result = [];

    result.push(tens[tensDigit]);
    if (number % 10 !== 0)  result.push(ones[onesDigit]);
      

    return result.join(" ").trim();
}

function onesToString(number){
    return ones[number];
}