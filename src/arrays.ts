/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else if (numbers.length === 0) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convert = numbers.map((str: string): number =>
        parseInt(str) ? parseInt(str) : parseInt("0")
    );
    return convert;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remove = amounts.map((str: string): string =>
        str[0] === "$" ? str.slice(1, str.length) : str
    );
    const parse = remove.map((str: string): number =>
        parseInt(str) ? parseInt(str) : parseInt("0")
    );
    return parse;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str
    );
    const isQ = (message: string): boolean =>
        message[message.length - 1] !== "?";

    const remove = shout.filter(isQ);
    return remove;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const is4 = (word: string): boolean => word.length < 4;
    const count = words.filter(is4);
    return count.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkColor =
        colors.every(
            (color: string): boolean =>
                color === "red" || color === "blue" || color === "green"
        ) || colors.length === 0;
    return checkColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total = 0;
    const sum = addends.map((num: number): number => (total += num));
    sum;
    const arr = [...addends];
    if (addends.length === 0) {
        arr.push(0);
    }
    const str = arr.map((num: number): string => num.toString());
    const op = str.join("+");
    return total.toString() + "=" + op;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newValues = [...values];
    const neg = values.find((num: number): boolean => num < 0);
    const index = values.findIndex((num: number): boolean => num < 0);
    if (!neg) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.push(sum);
    } else {
        const arr = values.slice(0, index);
        const sum = arr.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        newValues.splice(index + 1, 0, sum);
    }
    return newValues;
}
