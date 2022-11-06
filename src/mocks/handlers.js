import { rest } from "msw";

const usersData = [
  {
    name: {
      title: "Miss",
      first: "Laura",
      last: "Woods",
    },
    location: {
      street: {
        number: 2479,
        name: "Henry Street",
      },
      city: "Blessington",
      state: "Wexford",
      country: "Ireland",
      postcode: 78276,
      coordinates: {
        latitude: "2.0565",
        longitude: "95.2422",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "laura.woods@example.com",
    phone: "031-623-5189",
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Marten",
      last: "Faber",
    },
    location: {
      street: {
        number: 6167,
        name: "Grüner Weg",
      },
      city: "Falkenberg/Elster",
      state: "Thüringen",
      country: "Germany",
      postcode: 99553,
      coordinates: {
        latitude: "89.4367",
        longitude: "135.6354",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "marten.faber@example.com",
    phone: "0100-8354415",
    picture: {
      large: "https://randomuser.me/api/portraits/men/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Kirstin",
      last: "Abraham",
    },
    location: {
      street: {
        number: 2100,
        name: "Feldstraße",
      },
      city: "Schwedt/Oder",
      state: "Niedersachsen",
      country: "Germany",
      postcode: 47489,
      coordinates: {
        latitude: "3.9825",
        longitude: "176.6213",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "kirstin.abraham@example.com",
    phone: "0695-7883065",
    picture: {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Erin",
      last: "Clarke",
    },
    location: {
      street: {
        number: 5249,
        name: "George Street",
      },
      city: "Roscrea",
      state: "Monaghan",
      country: "Ireland",
      postcode: 42422,
      coordinates: {
        latitude: "52.7455",
        longitude: "6.1478",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "erin.clarke@example.com",
    phone: "041-442-4356",
    picture: {
      large: "https://randomuser.me/api/portraits/women/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Hólger",
      last: "Nascimento",
    },
    location: {
      street: {
        number: 7949,
        name: "Rua Dois",
      },
      city: "Santana de Parnaíba",
      state: "Bahia",
      country: "Brazil",
      postcode: 79502,
      coordinates: {
        latitude: "-18.3929",
        longitude: "-5.5054",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "holger.nascimento@example.com",
    phone: "(23) 8464-1973",
    picture: {
      large: "https://randomuser.me/api/portraits/men/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Ava",
      last: "Black",
    },
    location: {
      street: {
        number: 8769,
        name: "Station Road",
      },
      city: "Cashel",
      state: "Leitrim",
      country: "Ireland",
      postcode: 67589,
      coordinates: {
        latitude: "-1.8238",
        longitude: "-38.6202",
      },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "ava.black@example.com",
    phone: "021-881-6963",
    picture: {
      large: "https://randomuser.me/api/portraits/women/37.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Kvitoslava",
      last: "Shunevich",
    },
    location: {
      street: {
        number: 2175,
        name: "Mikoli Zerova",
      },
      city: "Dolinska",
      state: "Kirovogradska",
      country: "Ukraine",
      postcode: 79121,
      coordinates: {
        latitude: "-35.4549",
        longitude: "149.0069",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "kvitoslava.shunevich@example.com",
    phone: "(068) M76-3812",
    picture: {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Jorge",
      last: "Deschamps",
    },
    location: {
      street: {
        number: 4913,
        name: "Place de L'Église",
      },
      city: "Schupfart",
      state: "Fribourg",
      country: "Switzerland",
      postcode: 5397,
      coordinates: {
        latitude: "73.3382",
        longitude: "-15.8943",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "jorge.deschamps@example.com",
    phone: "077 614 23 66",
    picture: {
      large: "https://randomuser.me/api/portraits/men/91.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Roswitha",
      last: "Straub",
    },
    location: {
      street: {
        number: 7076,
        name: "Gartenstraße",
      },
      city: "Bad Salzuflen",
      state: "Sachsen",
      country: "Germany",
      postcode: 22094,
      coordinates: {
        latitude: "-20.3448",
        longitude: "-114.4092",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "roswitha.straub@example.com",
    phone: "0812-2999318",
    picture: {
      large: "https://randomuser.me/api/portraits/women/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Nicky",
      last: "Reid",
    },
    location: {
      street: {
        number: 3676,
        name: "Church Street",
      },
      city: "Newcastle upon Tyne",
      state: "Gloucestershire",
      country: "United Kingdom",
      postcode: "EA87 1HL",
      coordinates: {
        latitude: "48.2435",
        longitude: "-61.3271",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "nicky.reid@example.com",
    phone: "017684 00027",
    picture: {
      large: "https://randomuser.me/api/portraits/women/78.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/78.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/78.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Bratislava",
      last: "Blažić",
    },
    location: {
      street: {
        number: 2671,
        name: "Radnička",
      },
      city: "Niš",
      state: "Pčinja",
      country: "Serbia",
      postcode: 87857,
      coordinates: {
        latitude: "-34.7592",
        longitude: "3.3898",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "bratislava.blazic@example.com",
    phone: "028-9674-234",
    picture: {
      large: "https://randomuser.me/api/portraits/women/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Dilermando",
      last: "Silva",
    },
    location: {
      street: {
        number: 9912,
        name: "Avenida D. Pedro Ii",
      },
      city: "Itu",
      state: "Rondônia",
      country: "Brazil",
      postcode: 39550,
      coordinates: {
        latitude: "-51.9113",
        longitude: "114.4710",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "dilermando.silva@example.com",
    phone: "(85) 5512-8676",
    picture: {
      large: "https://randomuser.me/api/portraits/men/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Reinhard",
      last: "Lefebvre",
    },
    location: {
      street: {
        number: 4007,
        name: "Rue du Moulin",
      },
      city: "Speicher",
      state: "Luzern",
      country: "Switzerland",
      postcode: 7641,
      coordinates: {
        latitude: "-8.3241",
        longitude: "178.4076",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "reinhard.lefebvre@example.com",
    phone: "076 967 56 12",
    picture: {
      large: "https://randomuser.me/api/portraits/men/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Vlatka",
      last: "Janković",
    },
    location: {
      street: {
        number: 9142,
        name: "Anastasije Spasić ",
      },
      city: "Babušnica",
      state: "Raška",
      country: "Serbia",
      postcode: 61097,
      coordinates: {
        latitude: "16.7985",
        longitude: "-17.8406",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "vlatka.jankovic@example.com",
    phone: "016-3267-373",
    picture: {
      large: "https://randomuser.me/api/portraits/women/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Madison",
      last: "Williams",
    },
    location: {
      street: {
        number: 4542,
        name: "Pages Road",
      },
      city: "Gisborne",
      state: "Northland",
      country: "New Zealand",
      postcode: 68589,
      coordinates: {
        latitude: "34.3307",
        longitude: "10.0601",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "madison.williams@example.com",
    phone: "(353)-943-7508",
    picture: {
      large: "https://randomuser.me/api/portraits/women/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Sophie",
      last: "Colin",
    },
    location: {
      street: {
        number: 7045,
        name: "Rue D'Abbeville",
      },
      city: "Villeurbanne",
      state: "Dordogne",
      country: "France",
      postcode: 23387,
      coordinates: {
        latitude: "-84.4183",
        longitude: "153.8337",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "sophie.colin@example.com",
    phone: "04-79-07-27-14",
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Fernão",
      last: "Aragão",
    },
    location: {
      street: {
        number: 6674,
        name: "Rua São Francisco ",
      },
      city: "Camaçari",
      state: "Paraná",
      country: "Brazil",
      postcode: 28707,
      coordinates: {
        latitude: "-87.5972",
        longitude: "-67.8460",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "fernao.aragao@example.com",
    phone: "(52) 6577-2599",
    picture: {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Emily",
      last: "Jørgensen",
    },
    location: {
      street: {
        number: 3276,
        name: "Grantofteparken",
      },
      city: "Bælum",
      state: "Sjælland",
      country: "Denmark",
      postcode: 83851,
      coordinates: {
        latitude: "19.4308",
        longitude: "-179.5970",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "emily.jorgensen@example.com",
    phone: "70830634",
    picture: {
      large: "https://randomuser.me/api/portraits/women/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Mendy",
      last: "Van Veldhuizen",
    },
    location: {
      street: {
        number: 45,
        name: "De Konick",
      },
      city: "Wetsinge",
      state: "Noord-Brabant",
      country: "Netherlands",
      postcode: "9438 JS",
      coordinates: {
        latitude: "69.5493",
        longitude: "178.1298",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "mendy.vanveldhuizen@example.com",
    phone: "(039) 6362203",
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Mia",
      last: "French",
    },
    location: {
      street: {
        number: 7457,
        name: "Main St",
      },
      city: "Chatham",
      state: "Nova Scotia",
      country: "Canada",
      postcode: "D5E 4N1",
      coordinates: {
        latitude: "25.6881",
        longitude: "-158.0529",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "mia.french@example.com",
    phone: "I21 G76-8542",
    picture: {
      large: "https://randomuser.me/api/portraits/women/54.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
    },
  },
  {
    name: {
      title: "Mademoiselle",
      first: "Raphaela",
      last: "Lefevre",
    },
    location: {
      street: {
        number: 5057,
        name: "Boulevard de Balmont",
      },
      city: "Marsens",
      state: "Valais",
      country: "Switzerland",
      postcode: 5081,
      coordinates: {
        latitude: "-76.0448",
        longitude: "-30.8710",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "raphaela.lefevre@example.com",
    phone: "076 606 75 78",
    picture: {
      large: "https://randomuser.me/api/portraits/women/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Natalia",
      last: "Jović",
    },
    location: {
      street: {
        number: 7052,
        name: "Ljubomira Zekavice",
      },
      city: "Priboj",
      state: "West Bačka",
      country: "Serbia",
      postcode: 57438,
      coordinates: {
        latitude: "37.7832",
        longitude: "71.6581",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "natalia.jovic@example.com",
    phone: "018-9591-712",
    picture: {
      large: "https://randomuser.me/api/portraits/women/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Ratnakar",
      last: "Andrade",
    },
    location: {
      street: {
        number: 125,
        name: "Kasturba Rd",
      },
      city: "Imphal",
      state: "Andhra Pradesh",
      country: "India",
      postcode: 10856,
      coordinates: {
        latitude: "-26.6878",
        longitude: "171.5018",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "ratnakar.andrade@example.com",
    phone: "9144175399",
    picture: {
      large: "https://randomuser.me/api/portraits/men/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Toivo",
      last: "Ahonen",
    },
    location: {
      street: {
        number: 8514,
        name: "Rotuaari",
      },
      city: "Toivakka",
      state: "Ostrobothnia",
      country: "Finland",
      postcode: 49269,
      coordinates: {
        latitude: "-46.5562",
        longitude: "83.7215",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "toivo.ahonen@example.com",
    phone: "07-459-251",
    picture: {
      large: "https://randomuser.me/api/portraits/men/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Holly",
      last: "Jackson",
    },
    location: {
      street: {
        number: 4881,
        name: "Park Road",
      },
      city: "Lichfield",
      state: "Wiltshire",
      country: "United Kingdom",
      postcode: "U32 6QX",
      coordinates: {
        latitude: "-17.2013",
        longitude: "103.7542",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "holly.jackson@example.com",
    phone: "019467 16371",
    picture: {
      large: "https://randomuser.me/api/portraits/women/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Kasper",
      last: "Luoma",
    },
    location: {
      street: {
        number: 9433,
        name: "Visiokatu",
      },
      city: "Nivala",
      state: "Central Finland",
      country: "Finland",
      postcode: 45969,
      coordinates: {
        latitude: "39.2967",
        longitude: "-16.4718",
      },
      timezone: {
        offset: "-4:00",
        description: "Atlantic Time (Canada), Caracas, La Paz",
      },
    },
    email: "kasper.luoma@example.com",
    phone: "09-339-866",
    picture: {
      large: "https://randomuser.me/api/portraits/men/92.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Yarema",
      last: "Shvachko",
    },
    location: {
      street: {
        number: 5445,
        name: "Naberezhno-Lugova",
      },
      city: "Brovari",
      state: "Zhitomirska",
      country: "Ukraine",
      postcode: 74067,
      coordinates: {
        latitude: "61.5039",
        longitude: "-103.7195",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "yarema.shvachko@example.com",
    phone: "(098) L83-5237",
    picture: {
      large: "https://randomuser.me/api/portraits/men/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Alexandre",
      last: "Sirko",
    },
    location: {
      street: {
        number: 6580,
        name: "Parliament St",
      },
      city: "Maidstone",
      state: "New Brunswick",
      country: "Canada",
      postcode: "O2B 0B1",
      coordinates: {
        latitude: "-84.2616",
        longitude: "88.7761",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "alexandre.sirko@example.com",
    phone: "X94 Y05-8726",
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Gabriel",
      last: "Bates",
    },
    location: {
      street: {
        number: 7398,
        name: "Frances Ct",
      },
      city: "Celina",
      state: "Wyoming",
      country: "United States",
      postcode: 95379,
      coordinates: {
        latitude: "42.4701",
        longitude: "175.6639",
      },
      timezone: {
        offset: "-7:00",
        description: "Mountain Time (US & Canada)",
      },
    },
    email: "gabriel.bates@example.com",
    phone: "(488) 423-5767",
    picture: {
      large: "https://randomuser.me/api/portraits/men/89.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Bianca",
      last: "Iglesias",
    },
    location: {
      street: {
        number: 5417,
        name: "Retorno Nayarit",
      },
      city: "Jiménez",
      state: "Chihuahua",
      country: "Mexico",
      postcode: 58661,
      coordinates: {
        latitude: "-48.9780",
        longitude: "-74.8831",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "bianca.iglesias@example.com",
    phone: "(670) 551 6166",
    picture: {
      large: "https://randomuser.me/api/portraits/women/77.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Lisa",
      last: "Walters",
    },
    location: {
      street: {
        number: 5724,
        name: "Westmoreland Street",
      },
      city: "Roscrea",
      state: "Roscommon",
      country: "Ireland",
      postcode: 59020,
      coordinates: {
        latitude: "-46.3659",
        longitude: "74.8084",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "lisa.walters@example.com",
    phone: "071-959-9878",
    picture: {
      large: "https://randomuser.me/api/portraits/women/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Eileen",
      last: "Bekkelund",
    },
    location: {
      street: {
        number: 1744,
        name: "Duehaugveien",
      },
      city: "Fossnes",
      state: "Sogn og Fjordane",
      country: "Norway",
      postcode: "7901",
      coordinates: {
        latitude: "-30.7274",
        longitude: "116.7008",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "eileen.bekkelund@example.com",
    phone: "36023950",
    picture: {
      large: "https://randomuser.me/api/portraits/women/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jared",
      last: "Scott",
    },
    location: {
      street: {
        number: 8357,
        name: "Park Lane",
      },
      city: "Canterbury",
      state: "Rutland",
      country: "United Kingdom",
      postcode: "KH7 3LG",
      coordinates: {
        latitude: "5.9678",
        longitude: "49.3395",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "jared.scott@example.com",
    phone: "017684 03333",
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "German",
      last: "González",
    },
    location: {
      street: {
        number: 7516,
        name: "Paseo de Zorrilla",
      },
      city: "Torrejón de Ardoz",
      state: "Cantabria",
      country: "Spain",
      postcode: 39953,
      coordinates: {
        latitude: "-73.4457",
        longitude: "165.6729",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "german.gonzalez@example.com",
    phone: "958-916-867",
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Jakob",
      last: "Lefevre",
    },
    location: {
      street: {
        number: 5508,
        name: "Rue de L'Abbé-Grégoire",
      },
      city: "Guggisberg",
      state: "Zürich",
      country: "Switzerland",
      postcode: 3737,
      coordinates: {
        latitude: "77.9826",
        longitude: "-108.0198",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "jakob.lefevre@example.com",
    phone: "078 888 89 16",
    picture: {
      large: "https://randomuser.me/api/portraits/men/86.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Afrim",
      last: "Francois",
    },
    location: {
      street: {
        number: 26,
        name: "Rue de Gerland",
      },
      city: "Venthône",
      state: "Luzern",
      country: "Switzerland",
      postcode: 4497,
      coordinates: {
        latitude: "-37.8509",
        longitude: "-41.8035",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "afrim.francois@example.com",
    phone: "079 943 18 37",
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Isabella",
      last: "Anderson",
    },
    location: {
      street: {
        number: 1817,
        name: "Mokoia Road",
      },
      city: "Rotorua",
      state: "Otago",
      country: "New Zealand",
      postcode: 96190,
      coordinates: {
        latitude: "18.3601",
        longitude: "158.2308",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "isabella.anderson@example.com",
    phone: "(745)-471-9116",
    picture: {
      large: "https://randomuser.me/api/portraits/women/46.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Justin",
      last: "Brewer",
    },
    location: {
      street: {
        number: 3002,
        name: "Victoria Street",
      },
      city: "Exeter",
      state: "County Antrim",
      country: "United Kingdom",
      postcode: "Z39 8DS",
      coordinates: {
        latitude: "-10.6379",
        longitude: "-37.3219",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "justin.brewer@example.com",
    phone: "019467 84032",
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Zackary",
      last: "Miller",
    },
    location: {
      street: {
        number: 6121,
        name: "Lake of Bays Road",
      },
      city: "Lumsden",
      state: "Québec",
      country: "Canada",
      postcode: "B9W 6B8",
      coordinates: {
        latitude: "80.9795",
        longitude: "39.1145",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "zackary.miller@example.com",
    phone: "Y10 O99-4185",
    picture: {
      large: "https://randomuser.me/api/portraits/men/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Victoria",
      last: "Sørensen",
    },
    location: {
      street: {
        number: 7996,
        name: "Åkandevej",
      },
      city: "Gjerlev",
      state: "Hovedstaden",
      country: "Denmark",
      postcode: 45852,
      coordinates: {
        latitude: "-50.6728",
        longitude: "-8.9150",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "victoria.sorensen@example.com",
    phone: "09786570",
    picture: {
      large: "https://randomuser.me/api/portraits/women/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Marta",
      last: "Adamović",
    },
    location: {
      street: {
        number: 8885,
        name: "Porodice Josipović",
      },
      city: "Ivanjica",
      state: "West Bačka",
      country: "Serbia",
      postcode: 73620,
      coordinates: {
        latitude: "7.0124",
        longitude: "176.4817",
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic",
      },
    },
    email: "marta.adamovic@example.com",
    phone: "024-2703-400",
    picture: {
      large: "https://randomuser.me/api/portraits/women/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Sharron",
      last: "Lawrence",
    },
    location: {
      street: {
        number: 2993,
        name: "Henry Street",
      },
      city: "Celbridge",
      state: "Roscommon",
      country: "Ireland",
      postcode: 35158,
      coordinates: {
        latitude: "55.1263",
        longitude: "-122.1816",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "sharron.lawrence@example.com",
    phone: "061-413-0578",
    picture: {
      large: "https://randomuser.me/api/portraits/women/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Belén",
      last: "Sanz",
    },
    location: {
      street: {
        number: 7876,
        name: "Calle de Alcalá",
      },
      city: "San Sebastián de Los Reyes",
      state: "Comunidad Valenciana",
      country: "Spain",
      postcode: 87506,
      coordinates: {
        latitude: "67.7688",
        longitude: "17.1184",
      },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "belen.sanz@example.com",
    phone: "948-082-032",
    picture: {
      large: "https://randomuser.me/api/portraits/women/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Gautam",
      last: "Rai",
    },
    location: {
      street: {
        number: 6885,
        name: "Linking Rd",
      },
      city: "Burhanpur",
      state: "Bihar",
      country: "India",
      postcode: 31939,
      coordinates: {
        latitude: "-11.0662",
        longitude: "65.0291",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "gautam.rai@example.com",
    phone: "7527943429",
    picture: {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Toni",
      last: "Ramos",
    },
    location: {
      street: {
        number: 3110,
        name: "Rua Vinte E Dois ",
      },
      city: "Pelotas",
      state: "Amazonas",
      country: "Brazil",
      postcode: 68509,
      coordinates: {
        latitude: "6.5554",
        longitude: "108.6988",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "toni.ramos@example.com",
    phone: "(18) 6794-6571",
    picture: {
      large: "https://randomuser.me/api/portraits/men/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Aada",
      last: "Lauri",
    },
    location: {
      street: {
        number: 6020,
        name: "Tahmelantie",
      },
      city: "Simo",
      state: "Southern Ostrobothnia",
      country: "Finland",
      postcode: 80996,
      coordinates: {
        latitude: "-86.9769",
        longitude: "75.0135",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "aada.lauri@example.com",
    phone: "05-465-643",
    picture: {
      large: "https://randomuser.me/api/portraits/women/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Salete",
      last: "Freitas",
    },
    location: {
      street: {
        number: 8980,
        name: "Rua Onze ",
      },
      city: "Cachoeirinha",
      state: "Rio Grande do Sul",
      country: "Brazil",
      postcode: 32489,
      coordinates: {
        latitude: "-10.8611",
        longitude: "12.7414",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "salete.freitas@example.com",
    phone: "(64) 9840-7215",
    picture: {
      large: "https://randomuser.me/api/portraits/women/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/48.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Salvatore",
      last: "Meunier",
    },
    location: {
      street: {
        number: 8812,
        name: "Rue Dumenge",
      },
      city: "Obergerlafingen",
      state: "Schwyz",
      country: "Switzerland",
      postcode: 5227,
      coordinates: {
        latitude: "5.9601",
        longitude: "76.3642",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "salvatore.meunier@example.com",
    phone: "079 515 53 40",
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jim",
      last: "Beck",
    },
    location: {
      street: {
        number: 3509,
        name: "Westmoreland Street",
      },
      city: "Ennis",
      state: "Galway",
      country: "Ireland",
      postcode: 85410,
      coordinates: {
        latitude: "-23.0736",
        longitude: "26.1721",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "jim.beck@example.com",
    phone: "051-883-7361",
    picture: {
      large: "https://randomuser.me/api/portraits/men/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Annerose",
      last: "Rieß",
    },
    location: {
      street: {
        number: 3531,
        name: "Rosenweg",
      },
      city: "Augustusburg",
      state: "Thüringen",
      country: "Germany",
      postcode: 43038,
      coordinates: {
        latitude: "-84.9086",
        longitude: "31.7024",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "annerose.riess@example.com",
    phone: "0908-3828267",
    picture: {
      large: "https://randomuser.me/api/portraits/women/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Clémentine",
      last: "Leclercq",
    },
    location: {
      street: {
        number: 6502,
        name: "Avenue Tony-Garnier",
      },
      city: "Marseille",
      state: "Haute-Saône",
      country: "France",
      postcode: 89102,
      coordinates: {
        latitude: "-24.0662",
        longitude: "-162.2317",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "clementine.leclercq@example.com",
    phone: "05-07-75-60-88",
    picture: {
      large: "https://randomuser.me/api/portraits/women/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Namitha",
      last: "Thampy",
    },
    location: {
      street: {
        number: 892,
        name: "Racecource Rd",
      },
      city: "Coimbatore",
      state: "Mizoram",
      country: "India",
      postcode: 68323,
      coordinates: {
        latitude: "-88.8358",
        longitude: "134.5728",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "namitha.thampy@example.com",
    phone: "7871163154",
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Salvatore",
      last: "Perrin",
    },
    location: {
      street: {
        number: 3087,
        name: "Place des 44 Enfants D'Izieu",
      },
      city: "Guttet-Feschel",
      state: "Bern",
      country: "Switzerland",
      postcode: 9002,
      coordinates: {
        latitude: "-15.8207",
        longitude: "131.0823",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "salvatore.perrin@example.com",
    phone: "079 253 88 13",
    picture: {
      large: "https://randomuser.me/api/portraits/men/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Marta",
      last: "Delgado",
    },
    location: {
      street: {
        number: 9679,
        name: "Calle de Toledo",
      },
      city: "Móstoles",
      state: "Comunidad Valenciana",
      country: "Spain",
      postcode: 23166,
      coordinates: {
        latitude: "3.0819",
        longitude: "51.7223",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "marta.delgado@example.com",
    phone: "907-961-457",
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Maria",
      last: "Kumar",
    },
    location: {
      street: {
        number: 8238,
        name: "Domain Road",
      },
      city: "Nelson",
      state: "Bay of Plenty",
      country: "New Zealand",
      postcode: 46325,
      coordinates: {
        latitude: "48.8270",
        longitude: "57.0666",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "maria.kumar@example.com",
    phone: "(331)-497-7118",
    picture: {
      large: "https://randomuser.me/api/portraits/women/15.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "دینا",
      last: "قاسمی",
    },
    location: {
      street: {
        number: 3410,
        name: "شهید شواخ",
      },
      city: "اصفهان",
      state: "کرمان",
      country: "Iran",
      postcode: 42057,
      coordinates: {
        latitude: "38.4995",
        longitude: "-52.9819",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "dyn.qsmy@example.com",
    phone: "078-56778409",
    picture: {
      large: "https://randomuser.me/api/portraits/women/96.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/96.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jakob",
      last: "Morgan",
    },
    location: {
      street: {
        number: 3209,
        name: "Church Road",
      },
      city: "Durham",
      state: "Cleveland",
      country: "United Kingdom",
      postcode: "HG6 3YN",
      coordinates: {
        latitude: "-65.1679",
        longitude: "-60.3280",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "jakob.morgan@example.com",
    phone: "015395 24423",
    picture: {
      large: "https://randomuser.me/api/portraits/men/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Lorenzo",
      last: "Domínguez",
    },
    location: {
      street: {
        number: 2911,
        name: "Paseo de Zorrilla",
      },
      city: "Burgos",
      state: "Galicia",
      country: "Spain",
      postcode: 74242,
      coordinates: {
        latitude: "65.5538",
        longitude: "-0.0013",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "lorenzo.dominguez@example.com",
    phone: "996-248-751",
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Tvorimir",
      last: "Dmitrishin",
    },
    location: {
      street: {
        number: 8662,
        name: "Mitropolita Vasilya Lipkivskogo",
      },
      city: "Odesa",
      state: "Hmelnicka",
      country: "Ukraine",
      postcode: 65213,
      coordinates: {
        latitude: "-23.5759",
        longitude: "13.4430",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "tvorimir.dmitrishin@example.com",
    phone: "(098) D24-8544",
    picture: {
      large: "https://randomuser.me/api/portraits/men/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Atanasije",
      last: "Đokanović",
    },
    location: {
      street: {
        number: 3428,
        name: "Kneza Mihajla Viševića",
      },
      city: "Kruševac",
      state: "Raška",
      country: "Serbia",
      postcode: 42111,
      coordinates: {
        latitude: "-55.3079",
        longitude: "-172.2178",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "atanasije.dokanovic@example.com",
    phone: "011-7564-178",
    picture: {
      large: "https://randomuser.me/api/portraits/men/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Anzhela",
      last: "Malkovich",
    },
    location: {
      street: {
        number: 5494,
        name: "Vigovskogo",
      },
      city: "Alupka",
      state: "Kirovogradska",
      country: "Ukraine",
      postcode: 61416,
      coordinates: {
        latitude: "-18.3762",
        longitude: "-142.4310",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "anzhela.malkovich@example.com",
    phone: "(066) L34-0264",
    picture: {
      large: "https://randomuser.me/api/portraits/women/4.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Becky",
      last: "Little",
    },
    location: {
      street: {
        number: 4602,
        name: "Queens Road",
      },
      city: "Armagh",
      state: "Rutland",
      country: "United Kingdom",
      postcode: "G2X 9RX",
      coordinates: {
        latitude: "-74.9329",
        longitude: "6.2215",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "becky.little@example.com",
    phone: "016977 88107",
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jules",
      last: "Leroy",
    },
    location: {
      street: {
        number: 2257,
        name: "Place du 8 Février 1962",
      },
      city: "Aix-En-Provence",
      state: "Martinique",
      country: "France",
      postcode: 16602,
      coordinates: {
        latitude: "15.2598",
        longitude: "135.7393",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "jules.leroy@example.com",
    phone: "01-67-73-40-86",
    picture: {
      large: "https://randomuser.me/api/portraits/men/3.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/3.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "رونیکا",
      last: "جعفری",
    },
    location: {
      street: {
        number: 1252,
        name: "نوفل لوشاتو",
      },
      city: "بوشهر",
      state: "خراسان شمالی",
      country: "Iran",
      postcode: 29420,
      coordinates: {
        latitude: "85.4134",
        longitude: "93.3117",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "rwnykh.jaafry@example.com",
    phone: "071-20723432",
    picture: {
      large: "https://randomuser.me/api/portraits/women/38.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/38.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "James",
      last: "Lavoie",
    },
    location: {
      street: {
        number: 7887,
        name: "Disputed Rd",
      },
      city: "Delisle",
      state: "Prince Edward Island",
      country: "Canada",
      postcode: "W7R 7V7",
      coordinates: {
        latitude: "-0.7825",
        longitude: "-131.4529",
      },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "james.lavoie@example.com",
    phone: "J46 W14-7972",
    picture: {
      large: "https://randomuser.me/api/portraits/men/7.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Montserrat",
      last: "Velasco",
    },
    location: {
      street: {
        number: 861,
        name: "Calle Mota",
      },
      city: "Torrejón de Ardoz",
      state: "Castilla y León",
      country: "Spain",
      postcode: 62043,
      coordinates: {
        latitude: "-64.6508",
        longitude: "69.1129",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "montserrat.velasco@example.com",
    phone: "984-145-057",
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Amanda",
      last: "Moilanen",
    },
    location: {
      street: {
        number: 822,
        name: "Hatanpään Valtatie",
      },
      city: "Koski",
      state: "Lapland",
      country: "Finland",
      postcode: 63010,
      coordinates: {
        latitude: "-87.5106",
        longitude: "-78.5573",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "amanda.moilanen@example.com",
    phone: "05-066-669",
    picture: {
      large: "https://randomuser.me/api/portraits/women/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Antonios",
      last: "Eckel",
    },
    location: {
      street: {
        number: 2404,
        name: "Hauptstraße",
      },
      city: "Lindenberg im Allgäu",
      state: "Baden-Württemberg",
      country: "Germany",
      postcode: 43893,
      coordinates: {
        latitude: "-3.3064",
        longitude: "-111.4758",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "antonios.eckel@example.com",
    phone: "0319-0239257",
    picture: {
      large: "https://randomuser.me/api/portraits/men/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Jonathan",
      last: "Molina",
    },
    location: {
      street: {
        number: 9412,
        name: "Calle de Téllez",
      },
      city: "Pozuelo de Alarcón",
      state: "La Rioja",
      country: "Spain",
      postcode: 25760,
      coordinates: {
        latitude: "2.2673",
        longitude: "-157.1077",
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic",
      },
    },
    email: "jonathan.molina@example.com",
    phone: "946-916-450",
    picture: {
      large: "https://randomuser.me/api/portraits/men/92.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Ernesto",
      last: "Renaud",
    },
    location: {
      street: {
        number: 2883,
        name: "Rue Abel-Ferry",
      },
      city: "Seon",
      state: "Zürich",
      country: "Switzerland",
      postcode: 1224,
      coordinates: {
        latitude: "-84.2236",
        longitude: "-15.7482",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "ernesto.renaud@example.com",
    phone: "077 141 86 88",
    picture: {
      large: "https://randomuser.me/api/portraits/men/82.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/82.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Lukas",
      last: "Le Gall",
    },
    location: {
      street: {
        number: 9459,
        name: "Place de L'Abbé-Jean-Lebeuf",
      },
      city: "Nantes",
      state: "Lot",
      country: "France",
      postcode: 27877,
      coordinates: {
        latitude: "-5.4454",
        longitude: "-162.5308",
      },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "lukas.legall@example.com",
    phone: "01-77-46-21-76",
    picture: {
      large: "https://randomuser.me/api/portraits/men/11.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Daniel",
      last: "Pedersen",
    },
    location: {
      street: {
        number: 1791,
        name: "Skovkrogen",
      },
      city: "Nørrebro",
      state: "Danmark",
      country: "Denmark",
      postcode: 23465,
      coordinates: {
        latitude: "-89.7689",
        longitude: "-40.1711",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "daniel.pedersen@example.com",
    phone: "68033030",
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Khadija",
      last: "Van Rijsbergen",
    },
    location: {
      street: {
        number: 4648,
        name: "Brunssumstraat",
      },
      city: "Zederik",
      state: "Groningen",
      country: "Netherlands",
      postcode: "8008 XJ",
      coordinates: {
        latitude: "85.6715",
        longitude: "-37.1208",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "khadija.vanrijsbergen@example.com",
    phone: "(059) 9315163",
    picture: {
      large: "https://randomuser.me/api/portraits/women/39.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/39.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/39.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "April",
      last: "Hall",
    },
    location: {
      street: {
        number: 63,
        name: "Railroad St",
      },
      city: "Dubbo",
      state: "Queensland",
      country: "Australia",
      postcode: 8908,
      coordinates: {
        latitude: "14.3693",
        longitude: "19.1881",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "april.hall@example.com",
    phone: "02-9392-3728",
    picture: {
      large: "https://randomuser.me/api/portraits/women/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Ceciliya",
      last: "Morozyuk",
    },
    location: {
      street: {
        number: 2889,
        name: "Simeyizkiy prospekt",
      },
      city: "Skvira",
      state: "Donecka",
      country: "Ukraine",
      postcode: 92146,
      coordinates: {
        latitude: "71.2411",
        longitude: "107.1322",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "ceciliya.morozyuk@example.com",
    phone: "(068) F39-9721",
    picture: {
      large: "https://randomuser.me/api/portraits/women/74.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Slavomir",
      last: "Sotnichenko",
    },
    location: {
      street: {
        number: 4967,
        name: "Troieshchinska",
      },
      city: "Vizhnicya",
      state: "Avtonomna Respublika Krim",
      country: "Ukraine",
      postcode: 91273,
      coordinates: {
        latitude: "-4.0452",
        longitude: "151.4928",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "slavomir.sotnichenko@example.com",
    phone: "(096) B65-9090",
    picture: {
      large: "https://randomuser.me/api/portraits/men/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "احسان",
      last: "موسوی",
    },
    location: {
      street: {
        number: 7262,
        name: "دکتر علی شریعتی",
      },
      city: "کرج",
      state: "خراسان رضوی",
      country: "Iran",
      postcode: 35751,
      coordinates: {
        latitude: "-39.4758",
        longitude: "156.5811",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "hsn.mwswy@example.com",
    phone: "043-36481827",
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Aaliyah",
      last: "Green",
    },
    location: {
      street: {
        number: 7397,
        name: "Stuart Street",
      },
      city: "Tauranga",
      state: "Marlborough",
      country: "New Zealand",
      postcode: 30215,
      coordinates: {
        latitude: "75.9343",
        longitude: "-51.5501",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "aaliyah.green@example.com",
    phone: "(799)-772-8299",
    picture: {
      large: "https://randomuser.me/api/portraits/women/59.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Iida",
      last: "Rautio",
    },
    location: {
      street: {
        number: 3572,
        name: "Visiokatu",
      },
      city: "Kokemäki",
      state: "Northern Ostrobothnia",
      country: "Finland",
      postcode: 12078,
      coordinates: {
        latitude: "76.2573",
        longitude: "-172.6971",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "iida.rautio@example.com",
    phone: "07-444-087",
    picture: {
      large: "https://randomuser.me/api/portraits/women/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Levi",
      last: "Morris",
    },
    location: {
      street: {
        number: 4292,
        name: "Avalon Drive",
      },
      city: "Invercargill",
      state: "Gisborne",
      country: "New Zealand",
      postcode: 98838,
      coordinates: {
        latitude: "-41.1781",
        longitude: "87.0087",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "levi.morris@example.com",
    phone: "(577)-047-5901",
    picture: {
      large: "https://randomuser.me/api/portraits/men/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Zakia",
      last: "Egas",
    },
    location: {
      street: {
        number: 7072,
        name: "Bokkenburg",
      },
      city: "Rozenburg Zh",
      state: "Gelderland",
      country: "Netherlands",
      postcode: "2954 ZD",
      coordinates: {
        latitude: "58.3632",
        longitude: "161.1526",
      },
      timezone: {
        offset: "-2:00",
        description: "Mid-Atlantic",
      },
    },
    email: "zakia.egas@example.com",
    phone: "(056) 1690676",
    picture: {
      large: "https://randomuser.me/api/portraits/women/60.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Cecilie",
      last: "Johansen",
    },
    location: {
      street: {
        number: 8106,
        name: "Røllikevej",
      },
      city: "Brøndby Strand",
      state: "Midtjylland",
      country: "Denmark",
      postcode: 81009,
      coordinates: {
        latitude: "-77.7730",
        longitude: "16.6022",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "cecilie.johansen@example.com",
    phone: "55123913",
    picture: {
      large: "https://randomuser.me/api/portraits/women/85.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Giray",
      last: "Biçer",
    },
    location: {
      street: {
        number: 9738,
        name: "Maçka Cd",
      },
      city: "Kütahya",
      state: "Uşak",
      country: "Turkey",
      postcode: 91259,
      coordinates: {
        latitude: "-39.8956",
        longitude: "-107.0910",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "giray.bicer@example.com",
    phone: "(106)-144-7381",
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Idhant",
      last: "Gamskar",
    },
    location: {
      street: {
        number: 4680,
        name: "Mall Rd",
      },
      city: "Guna",
      state: "Nagaland",
      country: "India",
      postcode: 10644,
      coordinates: {
        latitude: "34.6673",
        longitude: "0.8493",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "idhant.gamskar@example.com",
    phone: "7700678185",
    picture: {
      large: "https://randomuser.me/api/portraits/men/22.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/22.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Ceciliya",
      last: "Soldatenko",
    },
    location: {
      street: {
        number: 8812,
        name: "Podilskiy provulok",
      },
      city: "Suhodilsk",
      state: "Rivnenska",
      country: "Ukraine",
      postcode: 36958,
      coordinates: {
        latitude: "54.5200",
        longitude: "87.8729",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "ceciliya.soldatenko@example.com",
    phone: "(099) A96-1608",
    picture: {
      large: "https://randomuser.me/api/portraits/women/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Paige",
      last: "Flores",
    },
    location: {
      street: {
        number: 9998,
        name: "Richmond Road",
      },
      city: "Southampton",
      state: "Cumbria",
      country: "United Kingdom",
      postcode: "C2 6NT",
      coordinates: {
        latitude: "-77.1676",
        longitude: "37.3281",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "paige.flores@example.com",
    phone: "019467 13266",
    picture: {
      large: "https://randomuser.me/api/portraits/women/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Darren",
      last: "Terry",
    },
    location: {
      street: {
        number: 9284,
        name: "Tara Street",
      },
      city: "Tullamore",
      state: "Longford",
      country: "Ireland",
      postcode: 24512,
      coordinates: {
        latitude: "-41.9828",
        longitude: "-113.2651",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "darren.terry@example.com",
    phone: "011-318-4577",
    picture: {
      large: "https://randomuser.me/api/portraits/men/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Pablo",
      last: "Castellanos",
    },
    location: {
      street: {
        number: 7945,
        name: "Circuito Ledesma",
      },
      city: "Charcas",
      state: "Veracruz",
      country: "Mexico",
      postcode: 22115,
      coordinates: {
        latitude: "-2.6198",
        longitude: "-111.2825",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "pablo.castellanos@example.com",
    phone: "(614) 253 0474",
    picture: {
      large: "https://randomuser.me/api/portraits/men/47.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Fátima",
      last: "Prieto",
    },
    location: {
      street: {
        number: 8016,
        name: "Calle del Prado",
      },
      city: "Madrid",
      state: "Navarra",
      country: "Spain",
      postcode: 57652,
      coordinates: {
        latitude: "54.1497",
        longitude: "-176.6296",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "fatima.prieto@example.com",
    phone: "963-706-833",
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Viola",
      last: "Surdal",
    },
    location: {
      street: {
        number: 7612,
        name: "Schandorffs gate",
      },
      city: "Sundbyfoss",
      state: "Vestfold",
      country: "Norway",
      postcode: "9393",
      coordinates: {
        latitude: "32.7397",
        longitude: "27.4637",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "viola.surdal@example.com",
    phone: "24922060",
    picture: {
      large: "https://randomuser.me/api/portraits/women/0.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Johnny",
      last: "Fernandez",
    },
    location: {
      street: {
        number: 6758,
        name: "Plum St",
      },
      city: "Darwin",
      state: "Victoria",
      country: "Australia",
      postcode: 1345,
      coordinates: {
        latitude: "87.7160",
        longitude: "-47.8446",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "johnny.fernandez@example.com",
    phone: "04-9472-6884",
    picture: {
      large: "https://randomuser.me/api/portraits/men/78.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Isabela",
      last: "da Cunha",
    },
    location: {
      street: {
        number: 4001,
        name: "Rua Primeiro de Maio ",
      },
      city: "Açailândia",
      state: "Rio Grande do Norte",
      country: "Brazil",
      postcode: 58385,
      coordinates: {
        latitude: "63.7459",
        longitude: "78.3674",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "isabela.dacunha@example.com",
    phone: "(10) 4879-4403",
    picture: {
      large: "https://randomuser.me/api/portraits/women/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Mélissa",
      last: "Bernard",
    },
    location: {
      street: {
        number: 7233,
        name: "Montée Saint-Barthélémy",
      },
      city: "Paris",
      state: "Hautes-Alpes",
      country: "France",
      postcode: 29080,
      coordinates: {
        latitude: "34.4248",
        longitude: "-158.6566",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "melissa.bernard@example.com",
    phone: "05-77-13-93-81",
    picture: {
      large: "https://randomuser.me/api/portraits/women/86.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Théo",
      last: "Leroy",
    },
    location: {
      street: {
        number: 5945,
        name: "Place de L'Europe",
      },
      city: "Rueil-Malmaison",
      state: "Vienne",
      country: "France",
      postcode: 17508,
      coordinates: {
        latitude: "63.9769",
        longitude: "-32.1725",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "theo.leroy@example.com",
    phone: "04-89-08-52-09",
    picture: {
      large: "https://randomuser.me/api/portraits/men/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Salvador",
      last: "Diaz",
    },
    location: {
      street: {
        number: 5731,
        name: "Calle de Arganzuela",
      },
      city: "Sevilla",
      state: "Canarias",
      country: "Spain",
      postcode: 91596,
      coordinates: {
        latitude: "84.6133",
        longitude: "86.2953",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "salvador.diaz@example.com",
    phone: "949-691-209",
    picture: {
      large: "https://randomuser.me/api/portraits/men/73.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Anna",
      last: "Edwards",
    },
    location: {
      street: {
        number: 2977,
        name: "The Strand",
      },
      city: "Palmerston North",
      state: "Wellington",
      country: "New Zealand",
      postcode: 46575,
      coordinates: {
        latitude: "-25.4376",
        longitude: "110.8498",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "anna.edwards@example.com",
    phone: "(847)-887-0972",
    picture: {
      large: "https://randomuser.me/api/portraits/women/2.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mads",
      last: "Johansen",
    },
    location: {
      street: {
        number: 2873,
        name: "Søndergårds Haver",
      },
      city: "Saltum",
      state: "Danmark",
      country: "Denmark",
      postcode: 98391,
      coordinates: {
        latitude: "-63.6673",
        longitude: "-81.6057",
      },
      timezone: {
        offset: "-5:00",
        description: "Eastern Time (US & Canada), Bogota, Lima",
      },
    },
    email: "mads.johansen@example.com",
    phone: "15888157",
    picture: {
      large: "https://randomuser.me/api/portraits/men/48.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Shahistha",
      last: "Suvarna",
    },
    location: {
      street: {
        number: 6178,
        name: "Sitabuldi Main Rd",
      },
      city: "Bareilly",
      state: "Meghalaya",
      country: "India",
      postcode: 77214,
      coordinates: {
        latitude: "-86.0598",
        longitude: "-50.6295",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "shahistha.suvarna@example.com",
    phone: "7312146892",
    picture: {
      large: "https://randomuser.me/api/portraits/women/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Cristina",
      last: "González",
    },
    location: {
      street: {
        number: 6129,
        name: "Calle de La Almudena",
      },
      city: "Orense",
      state: "Región de Murcia",
      country: "Spain",
      postcode: 79587,
      coordinates: {
        latitude: "-61.8209",
        longitude: "-47.9555",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "cristina.gonzalez@example.com",
    phone: "974-445-369",
    picture: {
      large: "https://randomuser.me/api/portraits/women/36.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Ayşe",
      last: "Taşlı",
    },
    location: {
      street: {
        number: 7227,
        name: "Mevlana Cd",
      },
      city: "Sakarya",
      state: "Hatay",
      country: "Turkey",
      postcode: 94642,
      coordinates: {
        latitude: "-76.4584",
        longitude: "145.5010",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "ayse.tasli@example.com",
    phone: "(142)-914-7887",
    picture: {
      large: "https://randomuser.me/api/portraits/women/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Greg",
      last: "Freeman",
    },
    location: {
      street: {
        number: 2381,
        name: "Rectory Lane",
      },
      city: "Hereford",
      state: "Hertfordshire",
      country: "United Kingdom",
      postcode: "BS8R 5TZ",
      coordinates: {
        latitude: "-6.0433",
        longitude: "-122.6825",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "greg.freeman@example.com",
    phone: "016974 46554",
    picture: {
      large: "https://randomuser.me/api/portraits/men/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Rayisa",
      last: "Kondratyuk",
    },
    location: {
      street: {
        number: 5207,
        name: "Uzhgorodskiy provulok",
      },
      city: "Apostolove",
      state: "Hersonska",
      country: "Ukraine",
      postcode: 23800,
      coordinates: {
        latitude: "79.4653",
        longitude: "15.6638",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "rayisa.kondratyuk@example.com",
    phone: "(096) V17-3189",
    picture: {
      large: "https://randomuser.me/api/portraits/women/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Abigail",
      last: "Nguyen",
    },
    location: {
      street: {
        number: 3073,
        name: "Woodlawn Avenue",
      },
      city: "Ballina",
      state: "Meath",
      country: "Ireland",
      postcode: 30356,
      coordinates: {
        latitude: "14.1476",
        longitude: "-95.0261",
      },
      timezone: {
        offset: "+5:45",
        description: "Kathmandu",
      },
    },
    email: "abigail.nguyen@example.com",
    phone: "011-677-5174",
    picture: {
      large: "https://randomuser.me/api/portraits/women/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Joshua",
      last: "Smith",
    },
    location: {
      street: {
        number: 7165,
        name: "Lone Wolf Trail",
      },
      city: "Gladstone",
      state: "Western Australia",
      country: "Australia",
      postcode: 7103,
      coordinates: {
        latitude: "-21.0897",
        longitude: "-178.8984",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "joshua.smith@example.com",
    phone: "04-2868-3089",
    picture: {
      large: "https://randomuser.me/api/portraits/men/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Osnilda",
      last: "Cavalcanti",
    },
    location: {
      street: {
        number: 2335,
        name: "Rua Dezesseis de Maio",
      },
      city: "Viamão",
      state: "Rio Grande do Norte",
      country: "Brazil",
      postcode: 13370,
      coordinates: {
        latitude: "-9.0715",
        longitude: "-93.2328",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "osnilda.cavalcanti@example.com",
    phone: "(04) 5501-7195",
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Dulce María",
      last: "Luevano",
    },
    location: {
      street: {
        number: 7956,
        name: "Prolongación Puebla",
      },
      city: "La Venta del Astillero",
      state: "Aguascalientes",
      country: "Mexico",
      postcode: 28983,
      coordinates: {
        latitude: "-87.8498",
        longitude: "-82.4404",
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok",
      },
    },
    email: "dulcemaria.luevano@example.com",
    phone: "(676) 735 5800",
    picture: {
      large: "https://randomuser.me/api/portraits/women/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Hananja",
      last: "Verra",
    },
    location: {
      street: {
        number: 8123,
        name: "De Vuurdoorn",
      },
      city: "Goutum",
      state: "Flevoland",
      country: "Netherlands",
      postcode: "0250 RV",
      coordinates: {
        latitude: "29.8256",
        longitude: "47.9727",
      },
      timezone: {
        offset: "+1:00",
        description: "Brussels, Copenhagen, Madrid, Paris",
      },
    },
    email: "hananja.verra@example.com",
    phone: "(051) 2287221",
    picture: {
      large: "https://randomuser.me/api/portraits/women/42.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Alma",
      last: "Larsen",
    },
    location: {
      street: {
        number: 4263,
        name: "Fredensvej",
      },
      city: "Gjern",
      state: "Danmark",
      country: "Denmark",
      postcode: 61179,
      coordinates: {
        latitude: "77.9552",
        longitude: "151.4631",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "alma.larsen@example.com",
    phone: "08886285",
    picture: {
      large: "https://randomuser.me/api/portraits/women/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg",
    },
  },
  {
    name: {
      title: "Monsieur",
      first: "Hervé",
      last: "Leclerc",
    },
    location: {
      street: {
        number: 652,
        name: "Rue Dubois",
      },
      city: "Lens",
      state: "Uri",
      country: "Switzerland",
      postcode: 2276,
      coordinates: {
        latitude: "-15.9274",
        longitude: "-77.5625",
      },
      timezone: {
        offset: "+5:30",
        description: "Bombay, Calcutta, Madras, New Delhi",
      },
    },
    email: "herve.leclerc@example.com",
    phone: "079 997 19 13",
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Miloš",
      last: "Bajević",
    },
    location: {
      street: {
        number: 5459,
        name: "Gnjilanska",
      },
      city: "Bečej",
      state: "Jablanica",
      country: "Serbia",
      postcode: 56217,
      coordinates: {
        latitude: "-58.4594",
        longitude: "-153.1576",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "milos.bajevic@example.com",
    phone: "023-7617-150",
    picture: {
      large: "https://randomuser.me/api/portraits/men/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Lótus",
      last: "Almeida",
    },
    location: {
      street: {
        number: 7650,
        name: "Rua Dezessete ",
      },
      city: "Contagem",
      state: "Ceará",
      country: "Brazil",
      postcode: 79630,
      coordinates: {
        latitude: "8.9007",
        longitude: "-131.6467",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "lotus.almeida@example.com",
    phone: "(29) 8831-0604",
    picture: {
      large: "https://randomuser.me/api/portraits/men/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Silje",
      last: "Mortensen",
    },
    location: {
      street: {
        number: 3567,
        name: "Tingvejen",
      },
      city: "Hurup Thy",
      state: "Midtjylland",
      country: "Denmark",
      postcode: 15348,
      coordinates: {
        latitude: "6.9621",
        longitude: "68.9360",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "silje.mortensen@example.com",
    phone: "03103392",
    picture: {
      large: "https://randomuser.me/api/portraits/women/8.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Thomas",
      last: "Walker",
    },
    location: {
      street: {
        number: 6356,
        name: "New North Road",
      },
      city: "Palmerston North",
      state: "Canterbury",
      country: "New Zealand",
      postcode: 23963,
      coordinates: {
        latitude: "-11.2192",
        longitude: "-77.2138",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "thomas.walker@example.com",
    phone: "(298)-487-9989",
    picture: {
      large: "https://randomuser.me/api/portraits/men/18.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/18.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/18.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Edwin",
      last: "Jacobs",
    },
    location: {
      street: {
        number: 6126,
        name: "Prospect Rd",
      },
      city: "Hobart",
      state: "Victoria",
      country: "Australia",
      postcode: 4693,
      coordinates: {
        latitude: "6.7569",
        longitude: "15.7846",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "edwin.jacobs@example.com",
    phone: "05-0214-2837",
    picture: {
      large: "https://randomuser.me/api/portraits/men/5.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Yuridia",
      last: "Espinoza",
    },
    location: {
      street: {
        number: 5223,
        name: "Prolongación Albania",
      },
      city: "Chijol 17",
      state: "Quintana Roo",
      country: "Mexico",
      postcode: 85387,
      coordinates: {
        latitude: "47.1430",
        longitude: "-79.9533",
      },
      timezone: {
        offset: "-11:00",
        description: "Midway Island, Samoa",
      },
    },
    email: "yuridia.espinoza@example.com",
    phone: "(669) 059 9289",
    picture: {
      large: "https://randomuser.me/api/portraits/women/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Estefanía",
      last: "Tapia",
    },
    location: {
      street: {
        number: 7660,
        name: "Avenida Yucatán",
      },
      city: "Marcelino Rodríguez",
      state: "Guerrero",
      country: "Mexico",
      postcode: 69122,
      coordinates: {
        latitude: "-48.5507",
        longitude: "150.7656",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "estefania.tapia@example.com",
    phone: "(647) 721 7324",
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Katerina",
      last: "Artimovich",
    },
    location: {
      street: {
        number: 1089,
        name: "Mitropolita Lipkivskogo",
      },
      city: "Kahovka",
      state: "Ivano-Frankivska",
      country: "Ukraine",
      postcode: 56553,
      coordinates: {
        latitude: "-80.6051",
        longitude: "89.2916",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "katerina.artimovich@example.com",
    phone: "(097) R81-5654",
    picture: {
      large: "https://randomuser.me/api/portraits/women/96.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/96.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Allie",
      last: "Cooper",
    },
    location: {
      street: {
        number: 4739,
        name: "Park Lane",
      },
      city: "Lichfield",
      state: "Avon",
      country: "United Kingdom",
      postcode: "W3U 3PN",
      coordinates: {
        latitude: "-72.9477",
        longitude: "-119.3456",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "allie.cooper@example.com",
    phone: "01129 290036",
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Meral",
      last: "Orbay",
    },
    location: {
      street: {
        number: 8180,
        name: "Mevlana Cd",
      },
      city: "Tekirdağ",
      state: "Ardahan",
      country: "Turkey",
      postcode: 31583,
      coordinates: {
        latitude: "-82.4164",
        longitude: "-119.2766",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "meral.orbay@example.com",
    phone: "(172)-557-5751",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "Olivia",
      last: "Lemoine",
    },
    location: {
      street: {
        number: 4281,
        name: "Montée Saint-Barthélémy",
      },
      city: "Poitiers",
      state: "Ariège",
      country: "France",
      postcode: 63969,
      coordinates: {
        latitude: "14.7183",
        longitude: "-3.7359",
      },
      timezone: {
        offset: "-6:00",
        description: "Central Time (US & Canada), Mexico City",
      },
    },
    email: "olivia.lemoine@example.com",
    phone: "02-18-85-93-93",
    picture: {
      large: "https://randomuser.me/api/portraits/women/67.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    },
  },
];

export const handlers = [
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const results = req.url.searchParams.get("results");
    const sliceStart = (page - 1) * 12;
    const sliceEnd = sliceStart + results;
    const data = usersData.slice(sliceStart, sliceEnd);
    return res(ctx.json(data));
  }),
];
