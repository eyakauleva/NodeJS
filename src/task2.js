
export function getFullName(person) {
    if (isPersonValid(person)) {
        return retrieveFullName(person);
    }
    else {
        throw new TypeError("Person must have firstName and lastName");
    }
}

function isPersonValid(person) {
    return person.hasOwnProperty('firstName') && person.hasOwnProperty('lastName');
}

function retrieveFullName(person) {
    return person.firstName + " " + person.lastName;
}

export function filterUniqueWords(text) {
    isTextValid(text);
    return text.toLowerCase()
            .split(" ")
            .filter(filterWords)
            .sort();
}

function isTextValid(text) {
    if (typeof text === "string") {
        return true;
    } else {
        throw new TypeError("Test must be a string");
    }
}

function filterWords(value, index, array) {
    return array.indexOf(value) === index;
}

export function getAverageGrade(students) {
    areStudentsValid(students);
    return gradesAverage(students);
}

function areStudentsValid(students) {
    if(!(students instanceof Array)) {
        throw new TypeError("Students must be an array");
    }
    students.forEach(student => {
        if (!student.hasOwnProperty('name') || !student.hasOwnProperty('grades') 
                || !(student.grades instanceof Array)) {
            throw new TypeError("Each student must contain name and grades");
        }
    });
    return true;
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