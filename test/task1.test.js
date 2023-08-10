import { localize } from "../src/task1";

describe('task 1', () => {
    const translations = {  
        en: {  
            greet: "Hello",  
            intro: "Welcome to our website"  
        },  
        fr: {  
            greet: "Bonjour",  
            intro: "Bienvenue sur notre site web"  
        }  
    }; 
    const greeting = "greet";  
    const introduction = "intro"; 
    const localizedGreeting = localize`${greeting} Liza! ${introduction}`;  

    test('localize ok [en]', () => {
        expect(localizedGreeting("en", translations)).toEqual("Hello Liza! Welcome to our website");
    });

    test('localize ok [fr]', () => {
        expect(localizedGreeting("fr", translations)).toEqual("Bonjour Liza! Bienvenue sur notre site web");
    });

    test('localize validation', () => {
        expect(() => localizedGreeting("fr", null)).toThrow(TypeError);
        expect(() => localizedGreeting(null, translations)).toThrow(TypeError);
    });

});