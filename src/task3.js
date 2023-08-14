export function multiline(template) {
    if (typeof template !== "object" || template === null) {
        throw new TypeError("Bad params");
    }
    let lineNumber = 1;
    const templateWithHidden = JSON.stringify(template[0]);
    let splittedTemplate = templateWithHidden.split(/\\n/);
    return splittedTemplate
        .map((value, idx) => {
            if (idx === 0 || idx === splittedTemplate.length - 1) {
                return value.replace('"', '');
            }
            return value;
        })
        .map(value => {
            if (value !== '') {
                return lineNumber++ + ' ' + value
            } else {
                return value;
            }
        })
        .join('\n');   
}