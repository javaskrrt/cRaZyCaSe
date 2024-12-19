/**
 * mOcKcAsE - Transform your boring strings into mOcKcAsE strings!
 *
 * @param {string} input - The string to transform into mOcKcAsE.
 * @param {object} [options] - Configuration options.
 * @param {boolean} [options.capitalizeFirst=false] - Whether the first character should be uppercase.
 *
 * @returns {string} The mOcKcAsE version of the input string.
 */
export function mOcKcAsE(input, options = {}) {
    const { capitalizeFirst = false } = options;
    // Two patterns:
    // If capitalizeFirst = false (default):
    // index=0 => lowercase, index=1 => uppercase, index=2 => lowercase, etc.
    //
    // If capitalizeFirst = true:
    // index=0 => uppercase, index=1 => lowercase, index=2 => uppercase, etc.
    //
    // Essentially we alternate between uppercase and lowercase starting from the first character.
    return input
        .split("")
        .map((char, index) => {
        const isEvenIndex = index % 2 === 0;
        if (!capitalizeFirst) {
            // even -> lower, odd -> upper
            return isEvenIndex ? char.toLowerCase() : char.toUpperCase();
        }
        else {
            // even -> upper, odd -> lower
            return isEvenIndex ? char.toUpperCase() : char.toLowerCase();
        }
    })
        .join("");
}
