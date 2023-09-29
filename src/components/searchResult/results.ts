export type resultType = {
    busId: number,
    origin: string,
    destination: string,
    day: number,
}

export type resultsType = resultType[]


// busIds range is from 1 to 10
/*
origin and destination is in ['Alameda', 'Alhambra', 'Anaheim', 'Antioch', 'Arcadia', 'Bakersfield', 'Barstow', 'Belmont', 'Berkeley',
    'Beverly Hills', 'Brea', 'Buena Park', 'Burbank', 'Calexico', 'Calistoga', 'Carlsbad', 'Carmel', 'Chico',
    'Chula Vista', 'Claremont', 'Compton', 'Concord', 'Corona', 'Coronado', 'Costa Mesa', 'Culver City', 'Daly City']
*/
// day is from 1 to 30
// the number of results is 102!
export const results: resultsType = [
    // The first three results are the same
    {
        "busId": 7,
        "origin": "Claremont",
        "destination": "Calistoga",
        "day": 11
    },
    {
        "busId": 7,
        "origin": "Claremont",
        "destination": "Calistoga",
        "day": 11
    },
    {
        "busId": 7,
        "origin": "Claremont",
        "destination": "Calistoga",
        "day": 11
    },

    {
        "busId": 8,
        "origin": "Compton",
        "destination": "Barstow",
        "day": 26
    },
    {
        "busId": 3,
        "origin": "Corona",
        "destination": "Brea",
        "day": 11
    },
    {
        "busId": 8,
        "origin": "Compton",
        "destination": "Antioch",
        "day": 8
    },
    {
        "busId": 8,
        "origin": "Anaheim",
        "destination": "Concord",
        "day": 21
    },
    {
        "busId": 2,
        "origin": "Coronado",
        "destination": "Buena Park",
        "day": 30
    },
    {
        "busId": 6,
        "origin": "Alhambra",
        "destination": "Compton",
        "day": 1
    },
    {
        "busId": 10,
        "origin": "Concord",
        "destination": "Buena Park",
        "day": 25
    },
    {
        "busId": 1,
        "origin": "Daly City",
        "destination": "Daly City",
        "day": 10
    },
    {
        "busId": 3,
        "origin": "Buena Park",
        "destination": "Corona",
        "day": 20
    },
    {
        "busId": 9,
        "origin": "Anaheim",
        "destination": "Arcadia",
        "day": 19
    },
    {
        "busId": 7,
        "origin": "Compton",
        "destination": "Berkeley",
        "day": 7
    },
    {
        "busId": 2,
        "origin": "Antioch",
        "destination": "Costa Mesa",
        "day": 28
    },
    {
        "busId": 2,
        "origin": "Culver City",
        "destination": "Berkeley",
        "day": 26
    },
    {
        "busId": 5,
        "origin": "Alhambra",
        "destination": "Claremont",
        "day": 28
    },
    {
        "busId": 7,
        "origin": "Buena Park",
        "destination": "Belmont",
        "day": 15
    },
    {
        "busId": 3,
        "origin": "Calexico",
        "destination": "Carmel",
        "day": 4
    },
    {
        "busId": 2,
        "origin": "Belmont",
        "destination": "Antioch",
        "day": 2
    },
    {
        "busId": 6,
        "origin": "Concord",
        "destination": "Beverly Hills",
        "day": 4
    },
    {
        "busId": 6,
        "origin": "Chico",
        "destination": "Culver City",
        "day": 12
    },
    {
        "busId": 2,
        "origin": "Beverly Hills",
        "destination": "Antioch",
        "day": 14
    },
    {
        "busId": 8,
        "origin": "Calexico",
        "destination": "Corona",
        "day": 28
    },
    {
        "busId": 9,
        "origin": "Belmont",
        "destination": "Compton",
        "day": 16
    },
    {
        "busId": 2,
        "origin": "Calistoga",
        "destination": "Compton",
        "day": 24
    },
    {
        "busId": 10,
        "origin": "Costa Mesa",
        "destination": "Burbank",
        "day": 9
    },
    {
        "busId": 1,
        "origin": "Costa Mesa",
        "destination": "Barstow",
        "day": 9
    },
    {
        "busId": 8,
        "origin": "Alameda",
        "destination": "Buena Park",
        "day": 8
    },
    {
        "busId": 8,
        "origin": "Brea",
        "destination": "Chula Vista",
        "day": 17
    },
    {
        "busId": 8,
        "origin": "Anaheim",
        "destination": "Anaheim",
        "day": 1
    },
    {
        "busId": 5,
        "origin": "Beverly Hills",
        "destination": "Barstow",
        "day": 26
    },
    {
        "busId": 9,
        "origin": "Barstow",
        "destination": "Berkeley",
        "day": 8
    },
    {
        "busId": 2,
        "origin": "Alameda",
        "destination": "Carlsbad",
        "day": 23
    },
    {
        "busId": 7,
        "origin": "Coronado",
        "destination": "Arcadia",
        "day": 3
    },
    {
        "busId": 8,
        "origin": "Concord",
        "destination": "Daly City",
        "day": 3
    },
    {
        "busId": 1,
        "origin": "Anaheim",
        "destination": "Arcadia",
        "day": 15
    },
    {
        "busId": 3,
        "origin": "Alameda",
        "destination": "Arcadia",
        "day": 26
    },
    {
        "busId": 7,
        "origin": "Calexico",
        "destination": "Barstow",
        "day": 27
    },
    {
        "busId": 9,
        "origin": "Calistoga",
        "destination": "Calistoga",
        "day": 26
    },
    {
        "busId": 10,
        "origin": "Burbank",
        "destination": "Chula Vista",
        "day": 7
    },
    {
        "busId": 1,
        "origin": "Claremont",
        "destination": "Antioch",
        "day": 30
    },
    {
        "busId": 5,
        "origin": "Corona",
        "destination": "Barstow",
        "day": 13
    },
    {
        "busId": 4,
        "origin": "Burbank",
        "destination": "Barstow",
        "day": 27
    },
    {
        "busId": 3,
        "origin": "Concord",
        "destination": "Alhambra",
        "day": 10
    },
    {
        "busId": 9,
        "origin": "Compton",
        "destination": "Bakersfield",
        "day": 28
    },
    {
        "busId": 4,
        "origin": "Brea",
        "destination": "Culver City",
        "day": 23
    },
    {
        "busId": 9,
        "origin": "Barstow",
        "destination": "Alameda",
        "day": 1
    },
    {
        "busId": 9,
        "origin": "Daly City",
        "destination": "Costa Mesa",
        "day": 20
    },
    {
        "busId": 9,
        "origin": "Anaheim",
        "destination": "Barstow",
        "day": 6
    },
    {
        "busId": 8,
        "origin": "Daly City",
        "destination": "Berkeley",
        "day": 30
    },
    {
        "busId": 5,
        "origin": "Alameda",
        "destination": "Chula Vista",
        "day": 10
    },
    {
        "busId": 8,
        "origin": "Calistoga",
        "destination": "Daly City",
        "day": 22
    },
    {
        "busId": 8,
        "origin": "Berkeley",
        "destination": "Claremont",
        "day": 17
    },
    {
        "busId": 1,
        "origin": "Culver City",
        "destination": "Claremont",
        "day": 12
    },
    {
        "busId": 7,
        "origin": "Alhambra",
        "destination": "Anaheim",
        "day": 17
    },
    {
        "busId": 5,
        "origin": "Carmel",
        "destination": "Coronado",
        "day": 17
    },
    {
        "busId": 1,
        "origin": "Alhambra",
        "destination": "Alhambra",
        "day": 28
    },
    {
        "busId": 6,
        "origin": "Corona",
        "destination": "Arcadia",
        "day": 1
    },
    {
        "busId": 1,
        "origin": "Chula Vista",
        "destination": "Alhambra",
        "day": 21
    },
    {
        "busId": 10,
        "origin": "Bakersfield",
        "destination": "Corona",
        "day": 4
    },
    {
        "busId": 7,
        "origin": "Brea",
        "destination": "Coronado",
        "day": 27
    },
    {
        "busId": 1,
        "origin": "Bakersfield",
        "destination": "Coronado",
        "day": 5
    },
    {
        "busId": 4,
        "origin": "Alhambra",
        "destination": "Bakersfield",
        "day": 22
    },
    {
        "busId": 1,
        "origin": "Berkeley",
        "destination": "Daly City",
        "day": 6
    },
    {
        "busId": 3,
        "origin": "Claremont",
        "destination": "Daly City",
        "day": 4
    },
    {
        "busId": 3,
        "origin": "Culver City",
        "destination": "Anaheim",
        "day": 19
    },
    {
        "busId": 4,
        "origin": "Barstow",
        "destination": "Claremont",
        "day": 9
    },
    {
        "busId": 1,
        "origin": "Belmont",
        "destination": "Barstow",
        "day": 18
    },
    {
        "busId": 8,
        "origin": "Alameda",
        "destination": "Brea",
        "day": 28
    },
    {
        "busId": 9,
        "origin": "Costa Mesa",
        "destination": "Chico",
        "day": 23
    },
    {
        "busId": 10,
        "origin": "Anaheim",
        "destination": "Barstow",
        "day": 28
    },
    {
        "busId": 10,
        "origin": "Carlsbad",
        "destination": "Costa Mesa",
        "day": 20
    },
    {
        "busId": 1,
        "origin": "Alhambra",
        "destination": "Alameda",
        "day": 16
    },
    {
        "busId": 5,
        "origin": "Arcadia",
        "destination": "Daly City",
        "day": 23
    },
    {
        "busId": 9,
        "origin": "Berkeley",
        "destination": "Anaheim",
        "day": 19
    },
    {
        "busId": 3,
        "origin": "Claremont",
        "destination": "Coronado",
        "day": 22
    },
    {
        "busId": 8,
        "origin": "Alameda",
        "destination": "Coronado",
        "day": 20
    },
    {
        "busId": 1,
        "origin": "Belmont",
        "destination": "Antioch",
        "day": 6
    },
    {
        "busId": 8,
        "origin": "Claremont",
        "destination": "Anaheim",
        "day": 16
    },
    {
        "busId": 9,
        "origin": "Anaheim",
        "destination": "Costa Mesa",
        "day": 29
    },
    {
        "busId": 2,
        "origin": "Calexico",
        "destination": "Chico",
        "day": 2
    },
    {
        "busId": 6,
        "origin": "Anaheim",
        "destination": "Carlsbad",
        "day": 29
    },
    {
        "busId": 9,
        "origin": "Antioch",
        "destination": "Alameda",
        "day": 4
    },
    {
        "busId": 1,
        "origin": "Calexico",
        "destination": "Compton",
        "day": 16
    },
    {
        "busId": 4,
        "origin": "Coronado",
        "destination": "Belmont",
        "day": 7
    },
    {
        "busId": 3,
        "origin": "Carmel",
        "destination": "Alameda",
        "day": 16
    },
    {
        "busId": 3,
        "origin": "Concord",
        "destination": "Corona",
        "day": 22
    },
    {
        "busId": 6,
        "origin": "Bakersfield",
        "destination": "Burbank",
        "day": 19
    },
    {
        "busId": 6,
        "origin": "Belmont",
        "destination": "Daly City",
        "day": 27
    },
    {
        "busId": 2,
        "origin": "Compton",
        "destination": "Alameda",
        "day": 28
    },
    {
        "busId": 1,
        "origin": "Arcadia",
        "destination": "Carlsbad",
        "day": 19
    },
    {
        "busId": 4,
        "origin": "Anaheim",
        "destination": "Carmel",
        "day": 17
    },
    {
        "busId": 5,
        "origin": "Bakersfield",
        "destination": "Anaheim",
        "day": 28
    },
    {
        "busId": 9,
        "origin": "Arcadia",
        "destination": "Coronado",
        "day": 29
    },
    {
        "busId": 1,
        "origin": "Calexico",
        "destination": "Compton",
        "day": 3
    },
    {
        "busId": 1,
        "origin": "Claremont",
        "destination": "Compton",
        "day": 23
    },
    {
        "busId": 1,
        "origin": "Anaheim",
        "destination": "Chico",
        "day": 25
    },
    {
        "busId": 10,
        "origin": "Concord",
        "destination": "Culver City",
        "day": 3
    },
    {
        "busId": 8,
        "origin": "Calexico",
        "destination": "Coronado",
        "day": 18
    },
    {
        "busId": 6,
        "origin": "Corona",
        "destination": "Alhambra",
        "day": 27
    },
    {
        "busId": 10,
        "origin": "Alhambra",
        "destination": "Culver City",
        "day": 17
    }

]