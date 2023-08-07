import { BankAccount } from "../src/task3";

describe('task3', () => {
    
    test('formattedBalance getter ok', () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.formattedBalance).toEqual("$100");
    });

    test('balance setter ok', () => {
        const bankAccount = new BankAccount();
        expect(bankAccount.formattedBalance).toEqual("$100");
        bankAccount.balance = "€123";
        expect(bankAccount.formattedBalance).toEqual("€123.00");
    });

    test('balance setter validation', () => {
        const bankAccount = new BankAccount();
        expect(() => bankAccount.balance = "€").toThrow(TypeError);
        expect(() => bankAccount.balance = "123").toThrow(TypeError);
    });

    test('transfer ok', () => {
        const bankAccountFrom = new BankAccount(), bankAccountTo = new BankAccount();
        expect(bankAccountFrom.formattedBalance).toEqual("$100");
        expect(bankAccountTo.formattedBalance).toEqual("$100");
        bankAccountFrom.transfer(bankAccountTo, "€100");
        expect(bankAccountFrom.formattedBalance).toEqual("$15.00");
        expect(bankAccountTo.formattedBalance).toEqual("$185.00");
    });

    test('transfer validation', () => {
        const bankAccountFrom = new BankAccount(), bankAccountTo = new BankAccount();
        expect(() => bankAccountFrom.transfer(bankAccountTo, "€")).toThrow(TypeError);
        expect(() => bankAccountFrom.transfer(bankAccountTo, "100")).toThrow(TypeError);
        expect(() => bankAccountFrom.transfer(bankAccountTo, "%100")).toThrow();
        expect(() => bankAccountFrom.transfer(bankAccountTo, "€9999")).toThrow();
    });
    
});