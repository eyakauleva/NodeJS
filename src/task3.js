export function multiline(template) {
    if (typeof template !== "object" || template === null) {
        throw new TypeError("Bad params");
    }
    const regex = /\s*\\n\s*/g;
    const templateWithHidden = JSON.stringify(template[0]);
    let lines = templateWithHidden.split(regex);
    let indentations = Array.from(templateWithHidden.matchAll(regex));
    let lineNumber = 1;
    let result = "";
    lines.forEach((line, idx) => {
        result += line;
        if(idx < indentations.length) {
            let match = indentations[idx][0].match(/(\s)*(\\n)/);
            if(match) {
                result += match[0];
            }
        }
        if(idx < lines.length - 2) {
            result += `${lineNumber++} `;
        }
        if(idx < indentations.length) {
            let match = indentations[idx][0].match(/(?<=\\n)(\s*)/);
            if(match) {
                result += match[0];
            }
        }
    });
    return JSON.parse(result);
}