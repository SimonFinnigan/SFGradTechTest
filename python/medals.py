medalResults = [
    {
        "sport": "cycling",
        "podium": ["1.China", "2.Germany", "3.ROC"]
    },
    {
        "sport": "fencing",
        "podium": ["1.ROC", "2.France", "3.Italy"]
    },
    {
        "sport": "high jump",
        "podium": ["1.Italy", "1.Qatar", "3.Belarus"]
    },
    {
        "sport": "swimming",
        "podium": ["1.USA", "2.France", "3.Brazil"]
    }
]

def createMedalTable(results):
    medalTable = {
    }
    for sport in results:
        countriesCompetingInSport = sport["podium"]
        for countries in countriesCompetingInSport:
            (country, points) = tableEntry(countries)
            isCountryInMedalTable(medalTable, country, points)  
    return medalTable

def tableEntry(text):
    points = 0
    [position, country] = text.split(".")
    if int(position) == 1:
        points = 3
    elif int(position) == 2:
        points = 2
    else:
        points = 1
    entry = (country, points)
    return entry

def isCountryInMedalTable(medalTable, country, points):
    if country in medalTable:
        medalTable[country] = medalTable[country] + points
    else:
        medalTable[country] = points

def test_function():
    #This it the test function, please don't change me
    medalTable = createMedalTable(medalResults)
    expectedTable = {
        "Italy": 4,
        "France": 4,
        "ROC": 4,
        "USA": 3,
        "Qatar": 3,
        "China": 3,
        "Germany": 2,
        "Brazil": 1,
        "Belarus": 1,
    }
    assert medalTable == expectedTable
