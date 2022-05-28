function createMedalTable(medals) {
  const medalTable = {}
  // declare empty object as medalTable

  medals.forEach((sports) => {
    // loop through medals array
    const competingCountries = sports.podium
    // declare competingCountries variable which has access to podium keys of the sports loop
    competingCountries.forEach((countries) => {
      // loop through the competingCountries variable
      const positionPoints = {
        1: 3,
        2: 2,
        3: 1,
      }
      // declare positionPoints variable as an object showing that 1st position awards 3 points, 2nd position awards 2 points and that 3rd position awards 1 point
      const positionAndCountry = countries.split('.')
      // after looping through the competingCountries loop, we create an array which splits the string between the decimal point, giving 2 positions.
      const position = positionAndCountry[0]
      // access the first position of the array which will represent the countries finishing placement
      const country = positionAndCountry[1]
      // access the second position of the array which will represent the country name

      if (!medalTable[country]) {
        medalTable[country] = 0
      }
      // check if country is in medalTable

      medalTable[country] = medalTable[country] + positionPoints[position]
      // inject data into medalTable object
    })
  })
  return medalTable
  // returns medalTable object with both country and points
}

describe('Medal Table Generator', () => {
  // Test function, please do not edit
  it('creates correct data structure ', () => {
    // Input data
    const medals = [
      {
        sport: 'cycling',
        podium: ['1.China', '2.Germany', '3.ROC'],
      },
      {
        sport: 'fencing',
        podium: ['1.ROC', '2.France', '3.Italy'],
      },
      {
        sport: 'high jump',
        podium: ['1.Italy', '1.Qatar', '3.Belarus'],
      },
      {
        sport: 'swimming',
        podium: ['1.USA', '2.France', '3.Brazil'],
      },
    ]

    // Expected output data
    const medalTable = {
      Italy: 4,
      France: 4,
      ROC: 4,
      USA: 3,
      Qatar: 3,
      China: 3,
      Germany: 2,
      Brazil: 1,
      Belarus: 1,
    }

    const actualResult = createMedalTable(medals)
    expect(actualResult).toMatchObject(medalTable)
  })
})
