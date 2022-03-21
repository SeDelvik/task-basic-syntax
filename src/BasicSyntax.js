function tmp(letter) {
    let finalNum = 0;
    switch (letter) {
        case 'I':
            finalNum = 1;
            break;
        case 'V':
            finalNum = 5;
            break;
        case 'X':
            finalNum = 10;
            break;
        case 'L':
            finalNum = 50;
            break;
        case 'C':
            finalNum = 100;
            break;
        case 'D':
            finalNum = 500;
            break;
        case 'M':
            finalNum = 1000;
            break;
    }

    return finalNum;
}

export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let i = 0;
    while (i < str.length) {
        let firstLet = tmp(str.charAt(i));
        let secondLet = tmp(str.charAt(i + 1));
        if (firstLet < secondLet) {
            result += secondLet - firstLet;
            i += 2;
        } else {
            result += firstLet;
            i++;
        }
    }

    return result;
}
