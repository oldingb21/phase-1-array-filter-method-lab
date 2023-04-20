const findMatching = (array, name) => {
    const matches = array.filter((driver) => {
       return driver.toLowerCase() === name.toLowerCase()
       })
    return matches  
  }

const fuzzyMatch = (array, letters) => {
    const matches = array.filter((driver) => {
      return driver.toLowerCase().substring(0,2) === letters.toLowerCase() || driver.toLowerCase().substring(0,1) === letters.toLowerCase()})
    return matches;
}

const matchName = (array, person) => {
    const matches = array.filter((driver) => {
        return driver.name.toLowerCase() === person.toLowerCase();
    })
    return matches;
}