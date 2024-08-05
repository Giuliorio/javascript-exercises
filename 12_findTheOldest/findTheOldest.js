const findTheOldest = function(people) {
    const getAge = (person) => {
        const minuend = person.yearOfDeath 
        ? person.yearOfDeath 
        : new Date().getFullYear()

        return minuend - person.yearOfBirth
    }
    const peopleByAge = people.sort((a, b) => {
        return getAge(b) - getAge(a)
    })

    return peopleByAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;
