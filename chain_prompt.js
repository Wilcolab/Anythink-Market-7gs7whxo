/**
 * Converts a string to kebab case (lowercase words separated by hyphens).
 * 
 * Kebab case conversion splits words on spaces, underscores, camelCase, PascalCase, and special characters.
 * Numbers are preserved and separated appropriately. Acronyms are kept as single words (e.g., "APIResponse" → "api-response").
 * Unsupported characters (e.g., emojis, symbols) are removed, but letters, numbers, and dashes are kept.
 *
 * @param {string} input - The string to convert. Must be a non-null, non-undefined string.
 * @returns {string} The kebab-case version of the input string.
 *
 * @throws {TypeError} If the input is not a string, or is null/undefined.
 *
 * @example
 * kebabCase("Hello World"); // "hello-world"
 * kebabCase("This_is_A_Test"); // "this-is-a-test"
 * kebabCase("camelCaseExample"); // "camel-case-example"
 * kebabCase("PascalCaseInput"); // "pascal-case-input"
 * kebabCase("APIResponse200OK"); // "api-response-200-ok"
 * kebabCase("!!!Invalid###String!!!"); // "invalid-string"
 * kebabCase(""); // ""
 * kebabCase(12345); // throws TypeError
 */
function kebabCase(input) {
    try {
        if (typeof input !== 'string' || input === null || input === undefined) {
            throw new TypeError('Input must be a non-null, non-undefined string.');
        }
        if (input === '') return '';

        // Remove unsupported characters except letters, numbers, spaces, underscores, and dashes
        let sanitized = input.replace(/[^A-Za-z0-9 _-]+/g, '');

        // Replace underscores and spaces with a single space
        sanitized = sanitized.replace(/[_\s]+/g, ' ');

        // Split camelCase, PascalCase, and acronyms with numbers
        sanitized = sanitized
            // Insert space before uppercase letters that follow lowercase letters or numbers
            .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
            // Insert space between acronym and next word (e.g., APIResponse → API Response)
            .replace(/([A-Z]+)([A-Z][a-z0-9])/g, '$1 $2')
            // Insert space between letters and numbers (e.g., Version2 → Version 2)
            .replace(/([A-Za-z])([0-9])/g, '$1 $2')
            .replace(/([0-9])([A-Za-z])/g, '$1 $2');

        // Split into words, filter out empty strings
        const words = sanitized
            .split(/[\s-]+/)
            .filter(Boolean);

        // Join with hyphens and convert to lowercase
        return words.join('-').toLowerCase();
    } catch (err) {
        // Rethrow known errors, prevent runtime crashes
        if (err instanceof TypeError) throw err;
        throw new Error('Failed to convert string to kebab case: ' + err.message);
    }
}

module.exports = kebabCase;