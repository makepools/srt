import { PaginatedSpeakers } from '../speaker.model';

export const MOCK_PAGINATED_SPEAKERS: PaginatedSpeakers = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Hans-Christian',
        last: 'Welter',
      },
      location: {
        street: {
          number: 3095,
          name: 'Mozartstraße',
        },
        city: 'Buxtehude',
        state: 'Hamburg',
        country: 'Germany',
        postcode: 47874,
        coordinates: {
          latitude: '-49.3885',
          longitude: '-60.3713',
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska',
        },
      },
      email: 'hans-christian.welter@example.com',
      dob: {
        date: '1978-12-12T16:26:45.917Z',
        age: 45,
      },
      phone: '0245-5965643',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Batur',
        last: 'Durmaz',
      },
      location: {
        street: {
          number: 9423,
          name: 'Tunalı Hilmi Cd',
        },
        city: 'Balıkesir',
        state: 'Bursa',
        country: 'Turkey',
        postcode: 40238,
        coordinates: {
          latitude: '-12.8518',
          longitude: '-52.5139',
        },
        timezone: {
          offset: '+2:00',
          description: 'Kaliningrad, South Africa',
        },
      },
      email: 'batur.durmaz@example.com',
      dob: {
        date: '1946-04-22T06:06:39.278Z',
        age: 78,
      },
      phone: '(374)-731-3301',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Winston',
        last: 'Hilgersom',
      },
      location: {
        street: {
          number: 9190,
          name: 'Beekvlietstraat',
        },
        city: 'Tienhoven Zh',
        state: 'Noord-Holland',
        country: 'Netherlands',
        postcode: '8338 PM',
        coordinates: {
          latitude: '49.3842',
          longitude: '-16.6160',
        },
        timezone: {
          offset: '+6:00',
          description: 'Almaty, Dhaka, Colombo',
        },
      },
      email: 'winston.hilgersom@example.com',
      dob: {
        date: '1977-01-14T20:50:54.651Z',
        age: 47,
      },
      phone: '(0946) 681721',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Douglas',
        last: 'Allen',
      },
      location: {
        street: {
          number: 5879,
          name: 'York Road',
        },
        city: 'Tuam',
        state: 'Offaly',
        country: 'Ireland',
        postcode: 98609,
        coordinates: {
          latitude: '-81.8250',
          longitude: '-76.2474',
        },
        timezone: {
          offset: '+5:00',
          description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
        },
      },
      email: 'douglas.allen@example.com',
      dob: {
        date: '1983-12-12T16:39:50.740Z',
        age: 40,
      },
      phone: '051-351-2187',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Erika',
        last: 'Newman',
      },
      location: {
        street: {
          number: 1442,
          name: 'Sunset St',
        },
        city: 'Edgewood',
        state: 'New Jersey',
        country: 'United States',
        postcode: 10002,
        coordinates: {
          latitude: '27.8904',
          longitude: '147.7375',
        },
        timezone: {
          offset: '+3:00',
          description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
        },
      },
      email: 'erika.newman@example.com',
      dob: {
        date: '1993-08-24T13:21:28.067Z',
        age: 30,
      },
      phone: '(335) 831-7226',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Brennan',
        last: 'Green',
      },
      location: {
        street: {
          number: 7807,
          name: 'Grange Road',
        },
        city: 'Longford',
        state: 'Galway City',
        country: 'Ireland',
        postcode: 32390,
        coordinates: {
          latitude: '36.6191',
          longitude: '-104.3272',
        },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia',
        },
      },
      email: 'brennan.green@example.com',
      dob: {
        date: '1994-01-23T10:41:52.254Z',
        age: 30,
      },
      phone: '051-984-7551',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Bruce',
        last: 'Boyd',
      },
      location: {
        street: {
          number: 2851,
          name: 'E Pecan St',
        },
        city: 'Mackay',
        state: 'Northern Territory',
        country: 'Australia',
        postcode: 3689,
        coordinates: {
          latitude: '-28.8333',
          longitude: '-123.8513',
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca',
        },
      },
      email: 'bruce.boyd@example.com',
      dob: {
        date: '1975-12-03T20:53:29.693Z',
        age: 48,
      },
      phone: '02-6266-0015',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Daniela',
        last: 'Peralta',
      },
      location: {
        street: {
          number: 1351,
          name: 'Calzada Hidalgo',
        },
        city: 'La Reforma',
        state: 'Tabasco',
        country: 'Mexico',
        postcode: 12559,
        coordinates: {
          latitude: '-35.3173',
          longitude: '-143.1549',
        },
        timezone: {
          offset: '+4:00',
          description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
        },
      },
      email: 'daniela.peralta@example.com',
      dob: {
        date: '1988-09-09T14:12:31.421Z',
        age: 35,
      },
      phone: '(687) 062 3885',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Lesa',
        last: 'Bradley',
      },
      location: {
        street: {
          number: 8721,
          name: 'Harrison Ct',
        },
        city: 'Rockhampton',
        state: 'South Australia',
        country: 'Australia',
        postcode: 6483,
        coordinates: {
          latitude: '2.2839',
          longitude: '-141.4999',
        },
        timezone: {
          offset: '-1:00',
          description: 'Azores, Cape Verde Islands',
        },
      },
      email: 'lesa.bradley@example.com',
      dob: {
        date: '1975-09-15T04:07:10.101Z',
        age: 48,
      },
      phone: '05-0358-9737',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Iag',
        last: 'Moura',
      },
      location: {
        street: {
          number: 1068,
          name: 'Rua José Bonifácio ',
        },
        city: 'Mogi das Cruzes',
        state: 'Bahia',
        country: 'Brazil',
        postcode: 98568,
        coordinates: {
          latitude: '-76.3087',
          longitude: '-13.5014',
        },
        timezone: {
          offset: '+11:00',
          description: 'Magadan, Solomon Islands, New Caledonia',
        },
      },
      email: 'iag.moura@example.com',
      dob: {
        date: '1971-09-07T05:02:04.753Z',
        age: 52,
      },
      phone: '(38) 9288-4792',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'پارسا',
        last: 'سلطانی نژاد',
      },
      location: {
        street: {
          number: 2035,
          name: 'میدان سلماس',
        },
        city: 'قدس',
        state: 'گلستان',
        country: 'Iran',
        postcode: 86998,
        coordinates: {
          latitude: '22.3925',
          longitude: '-116.5692',
        },
        timezone: {
          offset: '+5:30',
          description: 'Bombay, Calcutta, Madras, New Delhi',
        },
      },
      email: 'prs.sltnynjd@example.com',
      dob: {
        date: '1947-03-26T22:54:39.406Z',
        age: 77,
      },
      phone: '097-56332606',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'آرش',
        last: 'حسینی',
      },
      location: {
        street: {
          number: 4880,
          name: 'جمال الدین اسدآبادی',
        },
        city: 'بوشهر',
        state: 'یزد',
        country: 'Iran',
        postcode: 53152,
        coordinates: {
          latitude: '-9.3200',
          longitude: '-28.5167',
        },
        timezone: {
          offset: '-7:00',
          description: 'Mountain Time (US & Canada)',
        },
      },
      email: 'arsh.hsyny@example.com',
      dob: {
        date: '1995-02-10T07:26:26.574Z',
        age: 29,
      },
      phone: '059-32598150',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Vishata',
        last: 'Matiyko',
      },
      location: {
        street: {
          number: 1576,
          name: 'Kahovskiy provulok',
        },
        city: 'Bobrovicya',
        state: 'Zaporizka',
        country: 'Ukraine',
        postcode: 50509,
        coordinates: {
          latitude: '67.4880',
          longitude: '75.1071',
        },
        timezone: {
          offset: '-6:00',
          description: 'Central Time (US & Canada), Mexico City',
        },
      },
      email: 'vishata.matiyko@example.com',
      dob: {
        date: '1995-01-14T15:31:32.672Z',
        age: 29,
      },
      phone: '(066) I97-1997',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Onur',
        last: 'Yorulmaz',
      },
      location: {
        street: {
          number: 6326,
          name: 'Tunalı Hilmi Cd',
        },
        city: 'Erzurum',
        state: 'Van',
        country: 'Turkey',
        postcode: 61100,
        coordinates: {
          latitude: '-23.9912',
          longitude: '29.8532',
        },
        timezone: {
          offset: '+7:00',
          description: 'Bangkok, Hanoi, Jakarta',
        },
      },
      email: 'onur.yorulmaz@example.com',
      dob: {
        date: '1962-12-21T08:21:51.096Z',
        age: 61,
      },
      phone: '(222)-497-1738',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Roy',
        last: 'Byrd',
      },
      location: {
        street: {
          number: 70,
          name: 'Karen Dr',
        },
        city: 'Albany',
        state: 'New Hampshire',
        country: 'United States',
        postcode: 65724,
        coordinates: {
          latitude: '-58.2517',
          longitude: '174.2742',
        },
        timezone: {
          offset: '-5:00',
          description: 'Eastern Time (US & Canada), Bogota, Lima',
        },
      },
      email: 'roy.byrd@example.com',
      dob: {
        date: '1979-09-03T18:24:10.173Z',
        age: 44,
      },
      phone: '(878) 582-9028',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Lenita',
        last: 'Sales',
      },
      location: {
        street: {
          number: 7451,
          name: 'Rua Dezessete ',
        },
        city: 'Resende',
        state: 'Goiás',
        country: 'Brazil',
        postcode: 58000,
        coordinates: {
          latitude: '59.5513',
          longitude: '-151.4654',
        },
        timezone: {
          offset: '-1:00',
          description: 'Azores, Cape Verde Islands',
        },
      },
      email: 'lenita.sales@example.com',
      dob: {
        date: '1952-10-20T13:02:25.982Z',
        age: 71,
      },
      phone: '(56) 6494-8997',
    },
    {
      gender: 'female',
      name: {
        title: 'Ms',
        first: 'Sophia',
        last: 'Campbell',
      },
      location: {
        street: {
          number: 9040,
          name: 'Oak St',
        },
        city: 'Dorchester',
        state: 'British Columbia',
        country: 'Canada',
        postcode: 'F0K 6C2',
        coordinates: {
          latitude: '2.3545',
          longitude: '100.3974',
        },
        timezone: {
          offset: '-3:00',
          description: 'Brazil, Buenos Aires, Georgetown',
        },
      },
      email: 'sophia.campbell@example.com',
      dob: {
        date: '1999-06-06T16:54:31.258Z',
        age: 24,
      },
      phone: 'I63 T55-5106',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Matej',
        last: 'Vriend',
      },
      location: {
        street: {
          number: 575,
          name: 'Betjesweg',
        },
        city: 'Steenbergen Dr',
        state: 'Flevoland',
        country: 'Netherlands',
        postcode: '4221 EJ',
        coordinates: {
          latitude: '-39.6511',
          longitude: '178.1057',
        },
        timezone: {
          offset: '+8:00',
          description: 'Beijing, Perth, Singapore, Hong Kong',
        },
      },
      email: 'matej.vriend@example.com',
      dob: {
        date: '1960-11-10T21:00:57.438Z',
        age: 63,
      },
      phone: '(046) 8807062',
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Metin',
        last: 'Van Braak',
      },
      location: {
        street: {
          number: 843,
          name: 'Distelbrink',
        },
        city: 'Stokkum',
        state: 'Gelderland',
        country: 'Netherlands',
        postcode: '5852 LR',
        coordinates: {
          latitude: '48.6898',
          longitude: '159.2165',
        },
        timezone: {
          offset: '-11:00',
          description: 'Midway Island, Samoa',
        },
      },
      email: 'metin.vanbraak@example.com',
      dob: {
        date: '1948-07-31T09:15:51.580Z',
        age: 75,
      },
      phone: '(042) 1435334',
    },
    {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Thomas',
        last: 'Guillot',
      },
      location: {
        street: {
          number: 5075,
          name: 'Avenue de la République',
        },
        city: 'Yvorne',
        state: 'Basel-Landschaft',
        country: 'Switzerland',
        postcode: 6862,
        coordinates: {
          latitude: '-58.1716',
          longitude: '163.1232',
        },
        timezone: {
          offset: '-9:00',
          description: 'Alaska',
        },
      },
      email: 'thomas.guillot@example.com',
      dob: {
        date: '1997-10-10T06:50:23.474Z',
        age: 26,
      },
      phone: '077 338 57 04',
    },
  ],
  info: {
    seed: 'srt',
    results: 20,
    page: 1,
    version: '1.4',
  },
};
