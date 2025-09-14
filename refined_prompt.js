/**
 * Converts a given string to camelCase format.
 *
 * Supported separators: space, hyphen (-), underscore (_).
 * Only alphabetical characters are allowed; unsupported characters will return an error string.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws if input is null, undefined, or an empty string.
 * @returns {string} The camelCase formatted string, or an error string if unsupported characters are found.
 *
 * @example
 * toCamelCase("SCREEN-NAME"); // returns "screenName"
 * toCamelCase("user_profile_name"); // returns "userProfileName"
 * toCamelCase(""); // throws Error: Found empty string
 */

/**
 * Converts a given string to dot.case format.
 *
 * Supported separators: space, hyphen (-), underscore (_).
 * Only alphabetical characters are allowed; unsupported characters will return an error string.
 *
 * @param {string} str - The input string to convert.
 * @throws {Error} Throws if input is null, undefined, or an empty string.
 * @returns {string} The dot.case formatted string, or an error string if unsupported characters are found.
 *
 * @example
 * toDotCase("SCREEN-NAME"); // returns "screen.name"
 * toDotCase("user_profile_name"); // returns "user.profile.name"
 * toDotCase(""); // throws Error: Found empty string
 */
function toCamelCase(str) {
    if (str === null || str === undefined) {
        throw new Error("Exception: Input is null or undefined");
    }
    if (str === "") {
        throw new Error("Exception: Found empty string");
    }

    // Check for unsupported separators or non-alphabetical characters
    const unsupported = /[^a-zA-Z\s\-_]/;
    if (unsupported.test(str)) {
        return "Error: String contains unsupported characters or separators";
    }

    // Split by space, hyphen, underscore
    const words = str.split(/[\s\-_]+/);

    // Convert first word to lowercase, others capitalize first letter
    const camelCase = words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");

    return camelCase;
}

// Example usage:
// console.log(toCamelCase("SCREEN-NAME")); // "screenName"
// console.log(toCamelCase("user_profile_name")); // "userProfileName"
// console.log(toCamelCase("")); // Exception: Found empty string
function toDotCase(str) {
    if (str === null || str === undefined) {
        throw new Error("Exception: Input is null or undefined");
    }
    if (str === "") {
        throw new Error("Exception: Found empty string");
    }

    // Check for unsupported separators or non-alphabetical characters
    const unsupported = /[^a-zA-Z\s\-_]/;
    if (unsupported.test(str)) {
        return "Error: String contains unsupported characters or separators";
    }

    // Split by space, hyphen, underscore
    const words = str.split(/[\s\-_]+/);

    // Convert all words to lowercase and join with dots
    return words.map(word => word.toLowerCase()).join(".");
}

// Example usage:
// console.log(toDotCase("SCREEN-NAME")); // "screen.name"
// console.log(toDotCase("user_profile_name")); // "user.profile.name"
// console.log(toDotCase("")); // Exception: Found empty string
