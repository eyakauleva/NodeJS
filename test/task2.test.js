import { highlightKeywords } from "../src/task2";

describe('task 2', () => {

    test('highlightKeywords ok', () => {
        const keywords = ["JavaScript", "template", "tagged"];  
        const template = "Learn JavaScript tagged templates to create custom ${1} literals for ${2} manipulation."; 
        const expected = `Learn <span class='highlight'>JavaScript</span> \
<span class='highlight'>tagged</span> templates to create custom template \
literals for tagged manipulation.`;
        const highlighted = highlightKeywords(template, keywords);  
        expect(highlighted).toEqual(expected);
    });

    test('highlightKeywords validation', () => {
        expect(() => highlightKeywords(null, [])).toThrow(TypeError);
        expect(() => highlightKeywords("", undefined)).toThrow(TypeError);
    });

});