module.exports = function toReadable (num) {

    let number = num;
    let countRank = 1;
    let currentNumber;
    let result = '';

    let objRank = {
        3: 'hundred',
        4: 'thousand'
    }

    if(number === 0) {
        return 'zero'
    }

    if(number < 20 && number >= 10) {
        switch(number) {
            case 10 : 
                result = 'ten'
                break
            case 11 : 
                result = 'eleven'
                break
            case 12 : 
                result = 'twelve'
                break
            case 13 : 
                result = 'thirteen'
                break
            case 14 : 
                result = 'fourteen'
                break
            case 15 : 
                result = 'fifteen'
                break
            case 16 : 
                result = 'sixteen'
                break
            case 17 : 
                result = 'seventeen'
                break
            case 18 : 
                result = 'eighteen'
                break
            case 19 : 
                result = 'nineteen'
                break
        }

        return result;
    }

    for(let i = 0; i < String(num).length; i++) {
        currentNumber = number % 10;

        if(countRank === 1) {
            if(currentNumber !== 0) {
                result = getSimpleNum(currentNumber) + result;
            }
        }

        if(countRank === 2) {
            if(currentNumber !== 0) {
                switch(currentNumber) {
                    case 2 : 
                        result = 'twenty ' + result
                        break
                    case 3 : 
                        result = 'thirty ' + result
                        break
                    case 4 : 
                        result = 'forty ' + result
                        break
                    case 5 : 
                        result = 'fifty ' + result
                        break
                    case 8 : 
                        result = 'eighty ' + result
                        break
                    default :
                        result = getSimpleNum(currentNumber) + 'ty ' + result
                        break
                }
            }
            
        }

        if(countRank === 3) {
            result = `${getSimpleNum(currentNumber)} ${objRank[countRank]} ${result}`
        }

        number = Math.round(number / 10 - 0.5);
        countRank++;
    }

    return result.trim();
  

    function getSimpleNum(num) {
        switch(num) {
            case 1 : 
                return 'one'
            case 2 : 
                return 'two'
            case 3 : 
                return 'three'
            case 4 : 
                return 'four'
            case 5 : 
                return 'five'
            case 6 : 
                return 'six'
            case 7 : 
                return 'seven'
            case 8 : 
                return 'eight'
            case 9 : 
                return 'nine'
        }
    } 
}
