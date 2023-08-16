export function localize(strings, ...keys) {
    return (language, dictionary) => {
        if (typeof language !== "string" || typeof dictionary !== "object" || dictionary === null) {
            throw new TypeError("Bad params");
        }
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = dictionary[language][key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}