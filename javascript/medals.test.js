const createMedalTable = (medals) => {
  // declare empty medal table object
  const medalTable = {}
  // declare position/points object
  const positionAndPointsReference = {
    1: 3,
    2: 2,
    3: 1,
  }

  // first loop
  medals.forEach((sport) => {
    const countriesCompetingInSport = sport.podium
    // second loop
    countriesCompetingInSport.forEach((countries) => {
      // split position and country name
      const position = countries.split('.')[0]
      const country = countries.split('.')[1]

      // global 'if' function
      isCountryInMedalTable(medalTable, country)

      // build data structure
      medalTable[country] += positionAndPointsReference[position]
    })
  })
  //returns data structure
  return medalTable
}

// is country in the medal table?
const isCountryInMedalTable = (medalTable, country) => {
  if (!medalTable[country]) medalTable[country] = 0
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
