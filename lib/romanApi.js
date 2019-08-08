var methods = {};

/**
 * Method checks if the string is a roman numeral, if so returns true.
 *
 * @param searchString input a search string
 * @returns true if roman numeral, false if it's not a roman numeral
 */
methods.patternMatch = function (searchString) {
    var found;
    var s = searchString;
    var pattern = new RegExp("^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");
    // use Regex .test method on Pattern
};

/**
 * Convert a number to roman numeral
 *
 * @param number, input a number to be converted
 * @returns roman number
 */
methods.intToRoman = function (number) {
    if ((number != "") || (number != 0)) {
        var romanNumerals = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            },
            roman = '', key;
        for (key in romanNumerals) {
            while (number >= romanNumerals[key]) {
                roman += key;
                number -= romanNumerals[key];
            }
        }
    }
    else {
        roman = "";
    }
    if (number % 1 != 0)
        roman = "";
    return roman;
};

exports.data = methods;