function saturdayFun(activity = 'roller-skate') {
    console.log(activity);
    console.log(`This Saturday, I want to ${activity}!`);
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    console.log(activity);
    console.log(`This Monday, I will ${activity}.`);
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}

let result1 = wrapAdjective('*');
let emphatic1 = result1("a hard worker");
console.log(emphatic1); 

let result2 = wrapAdjective("||");
let emphatic2 = result2("a dedicated programmer");
console.log(emphatic2);

module.exports = { saturdayFun, mondayWork, wrapAdjective };
 
