import { multiline } from "../src/task3";

describe('task 3', () => {

    test('multiline ok', () => {
        const expected = `
1         function add(a, b) {  
2 return a + b;  
3 }
`;  
        const result = multiline`
        function add(a, b) {  
return a + b;  
}
`;   
        expect(result).toEqual(expected);
    });

    test('multiline validation', () => {
        expect(() => multiline(null)).toThrow(TypeError);
    });

});