function toCamelCase(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, ' ') // Remove non-alphanumeric characters
        .split(' ')
        .filter(Boolean)
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("Eiffel Tower")); // "eiffelTower"