import { getFullName, filterUniqueWords, getAverageGrade } from "../src/task2";

describe('getFullName', () => {
    test('ok', () => {
        let given = {
            firstName: "Liza",
            lastName: "Ya"
        };
        let expected = "Liza Ya";
        let result = getFullName(given);
        expect(result).toEqual(expected);
    });
    
    test('validation', () => {
        let personWithBadProperties = {
            myName: "Liza",
            lastName2: "Ya"
        };
        expect(() => getFullName(personWithBadProperties)).toThrow(TypeError);
        expect(() => getFullName(undefined)).toThrow(TypeError);
        expect(() => getFullName("lallalala")).toThrow(TypeError);
    });
});

describe('filterUniqueWords', () => {
    test('ok', () => {
        let given = "I love NodeJs i programming nodejs love sun";
        let expected = [ 'i', 'love', 'nodejs', 'programming', 'sun' ];
        let result = filterUniqueWords(given);
        expect(result).toEqual(expected);
    });
    
    test('validation', () => {
        let given = 45;
        expect(() => filterUniqueWords(given)).toThrow(TypeError);
    });
});

describe('getAverageGrade', () => {
    test('ok', () => {
        let given = [
            { name: "student1", grades: [9, 10]},
            { name: "student2", grades: [5.5, 8]},
            { name: "student3", grades: [6, 7]}
        ];
        let expected = 7.6;
        let result = getAverageGrade(given);
        expect(result).toEqual(expected);
    });
    
    test('validation', () => {
        let studentsWithBadProperties = [
            { name: "student1", grades: [9, 10]},
            { name: "student2"}
        ];
        let studentsWithBadProperties2 = [
            { name: "student1", grades: [9, 10]},
            { name: "student2", grades: "lalalala"}
        ];
        expect(() => getAverageGrade(undefined)).toThrow(TypeError);
        expect(() => getAverageGrade(studentsWithBadProperties)).toThrow(TypeError);
        expect(() => getAverageGrade(studentsWithBadProperties2)).toThrow(TypeError);
    });
});