export const mockPeople = {
	"count": 87,
	"next": "http://swapi.co/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"homeworld": "http://swapi.co/api/planets/1/",
			"species": [
				"http://swapi.co/api/species/1/"
			],
		},
		{
			"name": "C-3PO",
			"homeworld": "http://swapi.co/api/planets/1/",
			"species": [
				"http://swapi.co/api/species/1/"
			],
		},
		{
			"name": "R2-D2",
			"homeworld": "http://swapi.co/api/planets/1/",
			"species": [
				"http://swapi.co/api/species/1/"
			],
		},
		{
			"name": "Darth Vader",
			"homeworld": "http://swapi.co/api/planets/1/",
			"species": [
				"http://swapi.co/api/species/1/"
			],
		}
	]
}

export const mockHomeworld = {
	"name": "Tatooine",
	"population": "200000",
}

export const mockSpecies =
{
	"name": "Human",
	"classification": "mammal",
	"designation": "sentient",
	"language": "Galactic Basic",
}

export const mockPlanets = {
	"count": 61,
	"next": "http://swapi.co/api/planets/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Alderaan",
			"climate": "temperate",
			"terrain": "grasslands, mountains",
			"population": "2000000000",
			"residents": [
				"http://swapi.co/api/people/1/",
				"http://swapi.co/api/people/1/",
				"http://swapi.co/api/people/1/"
			],
		},
		{
			"name": "Yavin IV",
			"climate": "temperate, tropical",
			"terrain": "jungle, rainforests",
			"population": "1000",
			"residents": [],
		},
  ]
}

export const mockResident = {
  "name": "Luke Skywalker",
}


export const mockFilms = {
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
    },
    {
      "title": "Attack of the Clones",
      "episode_id": 2,
      "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
      "director": "George Lucas",
      "producer": "Rick McCallum",
      "release_date": "2002-05-16",
    },
  ]
}




export const mockVehicles = {
  "count": 37,
  "next": "http://swapi.co/api/starships/?page=2",
  "previous": null,
  "results": [
    {
        "name": "Executor",
        "model": "Executor-class star dreadnought",
        "passengers": "38000",
        "starship_class": "Star dreadnought",
    },
    {
        "name": "Sentinel-class landing craft",
        "model": "Sentinel-class landing craft",
        "passengers": "75",
        "starship_class": "landing craft",
    },
    {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "passengers": "843342",
        "starship_class": "Deep Space Mobile Battlestation",
    },
  ]
}
