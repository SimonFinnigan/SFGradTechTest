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
    # declare empty medal table object
    medalTable = {}
    # declare position/points object
    positionAndPointsReference = {1:3, 2:2, 3:1}

    # first loop
    for sports in results:
        countriesCompetingInSport = sports['podium']
        # second loop
        for countries in countriesCompetingInSport:
            # split position and country name
            position = countries.split('.')[0]
            country = countries.split('.')[1]

            # global 'if' function
            isCountryInMedalTable(medalTable, country)

            # build data structure
            medalTable[country] += positionAndPointsReference[int(position)]

    # returns data structure
    return medalTable

# is country in the medal table?
def isCountryInMedalTable(medalTable, country):
    if not country in medalTable:
        medalTable[country] = 0
    

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
