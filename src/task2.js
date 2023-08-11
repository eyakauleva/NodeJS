export function highlightKeywords(template, keywords) {
    if (typeof template !== "string" || !Array.isArray(keywords)) {
        throw new TypeError("Bad params");
    }
    let words = template.split(' ');
    words.forEach((word, idx) => {
        if (/^\${(\d+)}$/.test(word)) {
            let matches = word.match(/(\d+)/);
            if (matches) {
                let keywordIdx = matches[0];
                words[idx] = keywords[keywordIdx];
            }
        } else {
            keywords.forEach(keyword => {
                if (word === keyword) {
                    words[idx] = `<span class='highlight'>${keyword}</span>`;
                    return;
                }
            });
        }
    });
    return words.join(' ');
}