export function localize(strings, ...keys) {
    return (...values) => {
        const language = values[0];
        const dictionary = values[values.length - 1];
        if (typeof language !== "string" || typeof dictionary !== "object" || dictionary === null) {
            throw new TypeError("Bad params");
        }
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dictionary[language][key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}