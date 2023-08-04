
export function getFullName(person) {
    validatePerson(person);
    return retrieveFullName(person);
}

function validatePerson(person) {
    if (!person.hasOwnProperty('firstName') || !person.hasOwnProperty('lastName')) {
        throw new TypeError("Person must have firstName and lastName");
    }
}

function retrieveFullName(person) {
    return person.firstName + " " + person.lastName;
}

export function filterUniqueWords(text) {
    validateText(text);
    return text.toLowerCase()
            .split(" ")
            .filter(filterWords)
            .sort();
}

function validateText(text) {
    if (typeof text !== "string") {
        throw new TypeError("Test must be a string");
    }
}

function filterWords(value, index, array) {
    return array.indexOf(value) === index;
}

export function getAverageGrade(students) {
    validateStudents(students);
    return gradesAverage(students);
}

function validateStudents(students) {
    if(!(students instanceof Array)) {
        throw new TypeError("Students must be an array");
    }
    students.forEach(student => {
        if (!student.hasOwnProperty('name') || !student.hasOwnProperty('grades') 
                || !(student.grades instanceof Array)) {
            throw new TypeError("Each student must contain name and grades");
        }
    });
}

function gradesAverage(students) {
    let gradesSum = 0, gradesCount = 0;
    students.forEach(student => {
        gradesSum += student.grades.reduce(sumValues, 0);
        gradesCount += student.grades.length;
    });
    return Number((gradesSum / gradesCount).toFixed(1));
}

function sumValues(a, b) {
    return a + b;
}