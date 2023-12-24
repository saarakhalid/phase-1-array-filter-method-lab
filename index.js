// Code your solution here
// find matching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }

  //Fuzzy match
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }

  //match name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }

  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },

  ];
  
  const matchingDrivers = findMatching(["John", "Jane", "Bob"], "john");
  console.log(matchingDrivers); 
  
  const fuzzyMatchingDrivers = fuzzyMatch(["John", "Jane", "Bob"], "j");
  console.log(fuzzyMatchingDrivers); 
  
  const matchedByName = matchName(drivers, "John");
  console.log(matchedByName); 
  