// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

function createFareMultiplier(fareMultiplier){
    return function(fare){ return fare * fareMultiplier};
}

function fareDoubler(fare){
    const doubleOrNothing = createFareMultiplier(2);
    return doubleOrNothing(fare);
}

function fareTripler(fare){
    const tripleOrNothing = createFareMultiplier(3);
    return tripleOrNothing(fare);
}

function selectDifferentDrivers(drivers, choice){
    let newDrivers = [];

    if(choice.name === "returnFirstTwoDrivers"){

        newDrivers = returnFirstTwoDrivers(drivers);

    }else if(choice.name === "returnLastTwoDrivers"){

        newDrivers = returnLastTwoDrivers(drivers);
    }

    return newDrivers;
}

/*
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));
*/
const selectingDrivers = [];
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

//console.log(selectingDrivers[0].name);