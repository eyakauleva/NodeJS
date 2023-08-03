import { 
    calculateDiscountedPrice, calculateTotalPrice, 
    getFullName, filterUniqueWords, getAverageGrade, 
    createCounter, repeatFunction
} from "../src/index";
import {jest} from '@jest/globals';


describe(' Task 1. Immutability and Pure Functions', () => {

    describe('calculateDiscountedPrice', () => {
        test('ok', () => {
            let given = [
                { name: "Book", price: 42.67 },
                { name: "Phone", price: 212.00 }
            ];
            let expected = [
                { name: "Book", price: 40.54 },
                { name: "Phone", price: 201.40 }
            ];
            let result = calculateDiscountedPrice(given, 5);
            expect(result).toEqual(expected);
            expect(given).toEqual([
                { name: "Book", price: 42.67 },
                { name: "Phone", price: 212.00 }
            ]);
        });

        test('validation', () => {
            let productsWithNoPrice = [
                { name: "Book", price1: 42.67 },
                { name: "Phone"}
            ];
            expect(() => calculateDiscountedPrice(productsWithNoPrice, 5)).toThrow(TypeError);
            expect(() => calculateDiscountedPrice([undefined, null, "product"], 5)).toThrow(TypeError);
            expect(() => calculateDiscountedPrice(null, 5)).toThrow(TypeError);
            expect(() => calculateDiscountedPrice([], NaN)).toThrow(TypeError);
        });
    });

    describe('calculateTotalPrice', () => {
        test('ok', () => {
            let given = [
                { name: "Book", price: 42.67 },
                { name: "Phone", price: 212.00 }
            ];
            let expected = 254.67;
            let result = calculateTotalPrice(given);
            expect(result).toEqual(expected);
            expect(given).toEqual([
                { name: "Book", price: 42.67 },
                { name: "Phone", price: 212.00 }
            ]);
        });
        
        test('validation', () => {
            let productsWithNoPrice = [
                { name: "Book", price1: 42.67 },
                { name: "Phone"}
            ];
            expect(() => calculateTotalPrice(productsWithNoPrice)).toThrow(TypeError);
            expect(() => calculateTotalPrice([undefined, null, "product"])).toThrow(TypeError);
            expect(() => calculateTotalPrice(null)).toThrow(TypeError);
        });
    });
    
});


describe('Task 2: Function Composition and Point-Free Style', () => {

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

});


describe('Task 3: Closures and Higher-Order Functions', () => {

    describe('createCounter', () => {
        test('ok', () => {
            let one = createCounter();
            expect(one()).toEqual(1);
            let two = createCounter();
            expect(two()).toEqual(1);
            expect(one()).toEqual(2);
            expect(two()).toEqual(2);
            one();
            one();
            one();
            one();
            one();
            expect(two()).toEqual(3);
            expect(one()).toEqual(8);
        });
    })

    describe('repeatFunction', () => {
        const mockCallback = jest.fn();
        
        beforeEach(() => {
            mockCallback.mockClear();
        });
    
        test('should be called provided times', () => {
            let times = 5;
            const repeatedFunction = repeatFunction(mockCallback, times);
            repeatedFunction();
            expect(mockCallback).toHaveBeenCalledTimes(times);
        });

        test('should be called infinitely', () => {
            // TODO 
        });
        
        test('validation', () => {
            expect(() => repeatFunction(null, 5)()).toThrow(TypeError);
            expect(() => repeatFunction(()=>{}, "lalala")()).toThrow(TypeError);
        });
    })

});