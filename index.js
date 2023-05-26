// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/*const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];*/

// returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers, string) {
    const match = drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
    return match;
}

// returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, string) {
    const match = drivers.filter(function (driver) {
        return driver.substring(0, string.length) === string;
    });
    return match;
}

// return each element whose name property matches the provided string argument.
function matchName(drivers, name) {
    const match = drivers.filter(function (driver) {
        return driver.name === name;
    });
    return match;
}