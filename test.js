// the maximum integer
const maxInteger = 10;
// how often we want to test our random number function
const nSamples = 10000;

// function that creates random integers is the interval from 0 to maxInteger using floor
const randomIntegerFloor = () => Math.floor(Math.random() * maxInteger);

// function that creates random integers in the interval from 0 to maxInteger using ceil
const randomIntegerCeil = () => Math.ceil(Math.random() * maxInteger);

// function that creates random integers in the interval from 0 to maxInteger using round
const randomIntegerRound = () => Math.round(Math.random() * maxInteger);

// objects in which we save how often we get a integer
floorDist = {};
ceilDist = {};
roundDist = {};

// initialize all entries with zero
for(let number = 0; number <= maxInteger; number++) {
    floorDist[number] = 0;
    ceilDist[number] = 0;
    roundDist[number] = 0;
}

// here create nSamples of each random integer function and count how often we get a certain integer
for(let sample = 0; sample < nSamples; sample++) {
    let floorRandomInt = randomIntegerFloor()
    floorDist[floorRandomInt] = floorDist[floorRandomInt] + 1; 
    let ceilRandomInt = randomIntegerCeil()
    ceilDist[ceilRandomInt] = ceilDist[ceilRandomInt] + 1; 
    let roundRandomInt = randomIntegerRound()
    roundDist[roundRandomInt] = roundDist[roundRandomInt] + 1; 
}

// we normalize the entries so that we get the propability of each integer
for(let sample = 0; sample <= maxInteger; sample++) {
    floorDist[sample] = floorDist[sample] / nSamples;
    ceilDist[sample] = ceilDist[sample] / nSamples;
    roundDist[sample] = roundDist[sample] / nSamples;
}

// print the results to the console
console.table({ floor: floorDist, ceil: ceilDist, round: roundDist });

// so if we want to create a function that generates random integers between (or equal to) 0 and max we have to do it like this:
function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1))
}

randomIntegerDist = {};

// initialize all entries with zero
for(let number = 0; number <= maxInteger; number++) {
    randomIntegerDist[number] = 0;
}

// here create nSamples of each random integer function and count how often we get a certain integer
for(let sample = 0; sample < nSamples; sample++) {
    let randomInt = randomInteger(maxInteger)
    randomIntegerDist[randomInt] = randomIntegerDist[randomInt] + 1;
}

// we normalize the entries so that we get the propability of each integer
for(let sample = 0; sample <= maxInteger; sample++) {
    randomIntegerDist[sample] = randomIntegerDist[sample] / nSamples
}

// print the results to the console
console.table({ floor: floorDist, ceil: ceilDist, round: roundDist, randomInteger: randomIntegerDist });