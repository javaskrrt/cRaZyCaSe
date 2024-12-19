/**
 * mOcKcAsE - Transform your boring strings into mOcKcAsE strings!
 *
 * @param {string} input - The string to transform into mOcKcAsE.
 * @param {object} [options] - Configuration options.
 * @param {boolean} [options.capitalizeFirst=false] - Whether the first character should be uppercase.
 *
 * @returns {string} The mOcKcAsE version of the input string.
 */
interface MockCaseOptions {
    capitalizeFirst?: boolean;
}
declare function mOcKcAsE(input: string, options?: MockCaseOptions): string;

export { type MockCaseOptions, mOcKcAsE };
