/**
 * 
 * I, II, III, IV, V, VI, VII, VIII, IX, X
 * 
 * 
 * The rules of roman numerals:
 * ==============================
 * There are six basic rules when it comes to roman numerals.
 * 
 * Rule 1: The numerals:
 * **************************
 * All roman numerals are written using a combination of base numerals and subtractive numerals.
 * There are only seven base numerals which can be used to create any numeral sequence or number representation:
 * Utilizing the base numerals, there are also six subtractive numerals which act as shortcuts to represent numerals which would otherwise require four or five individual numerals:
 *  I, V, X, L, C, D, M
 * 
 * Rule 2: The calculation:
 * **************************
 * The value of a roman numeral sequence is calculated by simply adding together the numerals, from left to right.
 * For example, the number 1988 converted to roman numerals is MCMLXXXVIII which is calculated from left-to-right as:
 *                  M+CM+L+X+X+X+V+I+I+I
 * 
 * Rule 3: Number limits:
 * **************************
 * Any sequence of standard roman numerals can only represent numbers from 1 to 3999.
 * There is no zero in roman numerals.
 * Using bracket notation or vinculum notation we can write roman numerals from 4000 to 3999999.
 * 
 * Rule 4: Sequencing:
 * **************************
 * Roman numerals are written from left to right, and from highest to lowest (in terms of individual numeral value).
 * A higher value numeral cannot appear after a lower value numeral (unless in the context of an individual subtractive numeral).
 * 
 * Rule 5: Repetition:
 * **************************
 * An individual numeral cannot appear more than three times consecutively in any sequence.
 * If you find yourself with four same-value numerals consecutively, it can always be simplified by using a subtractive numeral in its place.
 * A special case for this simplification rule is four M's. This exceeds the 3999 limit and would be invalid unless vinculum notation
 *  or bracket notation were adopted. Using bracket notation, four M's becomes (IV).
 * 
 * Rule 6: Single use numerals:
 * **************************
 * There are individual numerals which can only appear once in any sequence.
 * All subtractive numerals can only appear once in any sequence.
 * From the set of base numerals: V,  L,  and D should only appear once.
 * The only caveat to this is when using another notation such as bracket notation.
 *  A single-use numeral can appear once within the brackets and once outside the brackets.
 *  For example, 5005 in bracket notation is (V)V.




 * 

 */

function romanNumeral(num) {
   const rNumeral = {
        1: {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
        },
        2: {
            1: 'X',
            2: 'XX',
            3: 'XXX',
            4: 'XL',
            5: 'L',
            6: 'LX',
            7: 'LXX',
            8: 'LXXX',
            9: 'XC',
        },
        3: {
            1: 'C',
            2: 'CC',
            3: 'CCC',
            4: 'CD',
            5: 'D',
            6: 'DC',
            7: 'DCC',
            8: 'DCCC',
            9: 'CM',
        },
        4: {
            1: 'M',
            2: 'MM',
            3: 'MMM',
            4: 'MV\u{0305}',
            5: 'V\u{0305}',
            6: 'V\u{0305}M',
            7: 'V\u{0305}MM',
            8: 'V\u{0305}MMM',
            9: 'X\u{0305}',
        },
        5: {
            1: 'X\u{0305}',
            2: 'X\u{0305}X\u{0305}',
            3: 'X\u{0305}X\u{0305}X\u{0305}',
            4: 'X\u{0305}L\u{0305}',
            5: 'L\u{0305}',
            6: 'L\u{0305}X\u{0305}',
            7: 'L\u{0305}X\u{0305}X\u{0305}',
            8: 'L\u{0305}X\u{0305}X\u{0305}X\u{0305}',
            9: 'X\u{0305}C\u{0305}',
        },
        6: {
            1: 'C\u{0305}',
            2: 'C\u{0305}C\u{0305}',
            3: 'C\u{0305}C\u{0305}C\u{0305}',
            4: 'C\u{0305}D\u{0305}',
            5: 'D\u{0305}',
            6: 'D\u{0305}C\u{0305}',
            7: 'D\u{0305}C\u{0305}C\u{0305}',
            8: 'D\u{0305}C\u{0305}C\u{0305}C\u{0305}',
            9: 'C\u{0305}M\u{0305}',
        },
    }

    let numArray = num
                .toString()
                .split('')
    let numLength = num.toString().length


    for (let index = 0; index < numLength; index++) {
        numArray[index] = rNumeral[numLength-index][numArray[index]]        
    }
    // console.log(numArray)
    return numArray.join('')
}
// let number = 14
// console.log(romanNumeral(10))
// console.log(romanNumeral(1))
// console.log(romanNumeral(2))
// console.log(romanNumeral(3))
// console.log(romanNumeral(4))
// console.log(romanNumeral(5))
// console.log(romanNumeral(6))
// console.log(romanNumeral(7))
// console.log(romanNumeral(8))
// console.log(romanNumeral(9))
console.log(romanNumeral(199999))
