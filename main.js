const PACKAGE_DATA = [
  {
    id: 'baguio-city',
    title: 'Baguio City Tour',
    location: 'Baguio City, Benguet',
    durationLabel: 'Day Tour',
    durationType: 'day',
    category: 'Day Tour',
    price: 1799,
    priceLabel: 'PHP 1,799 / pax',
    pickupOptions: ['Baguio Pick-up & Drop'],
    image: 'assets/images/destinations/baguio-burnham.png',
    shortDescription:
      'A relaxed city route covering Baguio landmarks, parks, and food stops perfect for first-time visitors.',
    fullDescription:
      'This Baguio City Tour package is designed for travelers who want a complete yet comfortable city experience in one day. Expect a balanced itinerary with classic viewpoints, heritage stops, market visits, and flexible meal breaks.',
    inclusions: [
      'Roundtrip tour transport within Baguio city proper',
      'Driver guide and route coordination',
      'Fuel, parking, and environmental fees',
      'Photo-stop assistance and timing support'
    ],
    exclusions: [
      'Meals and personal snacks',
      'Entrance fees not listed by optional attractions',
      'Personal travel insurance',
      'Souvenirs and shopping expenses'
    ],
    itinerary: [
      '08:00 AM - Pickup at agreed meeting point in Baguio',
      '08:30 AM - Burnham Park and early city orientation',
      '10:00 AM - The Mansion and Wright Park stopover',
      '11:30 AM - Mines View area and souvenir center',
      '01:00 PM - Lunch break near city center',
      '02:30 PM - Botanical Garden and nearby scenic spots',
      '04:00 PM - Session Road free time and optional coffee stop',
      '05:30 PM - Drop-off at agreed location'
    ],
    reminders: [
      'Wear comfortable walking shoes for park and market stops.',
      'Bring a light jacket; weather may change quickly in the afternoon.',
      'Weekends are high traffic in Baguio, so keep itinerary flexibility.'
    ],
  },
  {
    id: 'atok-tour',
    title: 'Atok Tour',
    location: 'Atok, Benguet',
    durationLabel: 'Day Tour',
    durationType: 'day',
    category: 'Day Tour',
    price: 2399,
    priceLabel: 'PHP 2,399 / pax',
    pickupOptions: ['Baguio Pick-up & Drop'],
    image: 'assets/images/destinations/atok-flower-mountain.png',
    shortDescription:
      'Highland day trip featuring sea-of-clouds viewpoints, flower farms, and cool mountain landscapes.',
    fullDescription:
      'The Atok Tour package is a favorite among guests looking for dramatic mountain views and a cooler climate. The route includes scenic highland roads, sunrise-friendly viewpoints, and iconic flower farm stops with enough time for photography.',
    inclusions: [
      'Roundtrip transport from Baguio to Atok',
      'Driver guide and route timing assistance',
      'Municipal assistance and parking support',
      'Basic first-aid support during the trip'
    ],
    exclusions: [
      'Meals and coffee stops',
      'Attraction entrance fees where applicable',
      'Personal medicine and travel insurance',
      'Optional activity fees'
    ],
    itinerary: [
      '04:30 AM - Early pickup in Baguio',
      '06:00 AM - Northern Blossom welcome stop and sunrise window',
      '08:30 AM - Atok viewdeck circuit and farm walks',
      '11:30 AM - Lunch at a local highland eatery',
      '01:00 PM - Sakura Park and nearby attraction cluster',
      '03:00 PM - Final scenic stop and group photos',
      '05:30 PM - Return to Baguio'
    ],
    reminders: [
      'Bring layered clothing; mornings can be very cold.',
      'Departure is early to maximize sea-of-clouds chances.',
      'Roads are mountainous; motion-sickness medicine is recommended if needed.'
    ],
  },
  {
    id: 'sagada-tour',
    title: 'Sagada Tour',
    location: 'Sagada, Mountain Province',
    durationLabel: '2 Days / 1 Night - 3 Days / 2 Nights',
    durationType: '2d1n',
    category: 'Multiple Options',
    price: 4299,
    priceLabel: 'PHP 4,299 - PHP 5,899 / pax',
    pickupOptions: ['Baguio Pick-up & Drop', 'Manila Pick-up & Drop'],
    image: 'assets/images/destinations/sagada-sea-of-clouds.png',
    shortDescription:
      'Choose your perfect Sagada adventure: 3D2N complete tour or 2D1N from Manila/Baguio.',
    fullDescription:
      'Our Sagada Tour packages offer flexible options with private accommodation, guide fees included, and complimentary meals. Select your preferred duration and pickup location.',
    packageOptions: [
      {
        id: 'sagada-3d2n',
        title: '3D2N Sagada Joiners Tour Package',
        durationLabel: '3 Days / 2 Nights',
        durationType: '3d2n',
        price: 5199,
        priceLabel: 'PHP 5,199 - PHP 5,899 / pax',
        pickupOption: 'Manila Pick-up & Drop',
        groupPricing: [
          'PHP 5,199 per head for group of 3 & above',
          'PHP 5,399 per head for group of 2',
          'PHP 5,899 for solo joiner'
        ],
        inclusions: [
          'Roundtrip transfer Sagada Tour with Manila pickup and drop',
          '2 nights accommodation (Private room for every booking guest)',
          'Shuttle service to all tour sites',
          'Registration fees',
          'All Entrance fees',
          'Day 2 and 3 complimentary breakfast',
          'All GUIDE fees: Sumaguing cave, Hanging coffins, St Marys Church, Echo valley, Bomod-ok falls, Marlboro Hill',
          'Sidetrips: Banaue Arch, Banaue rice terraces viewpoint, Bayyo Viewdeck, Inverted house, Sagada weaving, Philippines highest point in Halsema, Strawberry Farm'
        ],
        exclusions: [
          'Other meals aside from the complimentary breakfast',
          'Any tour activity fee not in the itinerary'
        ],
        itinerary: [
          'Day 00 08:30 PM - Pick up @ MOA',
          'Day 00 09:30 PM - Pick up @ SM North',
          'Day 00 11:00 PM - Pick up Pampanga',
          'Day 01 06:00 AM - Estimated arrival in Banaue with Breakfast',
          'Day 01 06:00 AM - Banaue View Point (as seen in the old 1,000 peso bill)',
          'Day 01 07:30 AM - Departure to Sagada with stopover at Bayyo Viewdeck',
          'Day 01 10:30 AM - Arrival in Sagada with Inverted House stopover',
          'Day 01 10:30 AM - Sagada Weaving stopover, check in, freshen up, Lunch',
          'Day 01 01:30 PM - Sumaguing Spelunking/caving (includes rock climbing, rappelling and swimming)',
          'Day 01 05:00 PM - Back to hotel, Free Time onwards',
          'Day 02 04:00 AM - Ride to Marlboro Mountain for sunrise hike',
          'Day 02 08:30 AM - Breakfast',
          'Day 02 09:30 AM - Bomod-ok falls with stops at Fedilisan village and rice terraces',
          'Day 02 01:00 PM - Lunch',
          'Day 02 02:30 PM - Back to accommodation',
          'Day 02 03:30 PM - Town Tour: Saint Mary the Virgin Church, Echo Valley, Hanging Coffins',
          'Day 02 05:30 PM - Free Time onwards for souvenir hunt',
          'Day 03 07:00 AM - Breakfast',
          'Day 03 08:00 AM - Check out',
          'Day 03 08:30 AM - Departure to Baguio',
          'Day 03 11:00 AM - Lunch along Halsema Road',
          'Day 03 12:30 PM - Philippine Highest Point visit',
          'Day 03 02:30 PM - Arrival at Strawberry Farm for picture taking',
          'Day 03 04:00 PM - Departure from Baguio',
          'Day 03 10:00 PM - Estimated arrival Manila'
        ],
        reminders: [
          'All fees within our itinerary are included in our tour package',
          'For exclusive/private tours, we can arrange your tour on your preferred dates',
          'We also arrange exclusive tours to Ilocos Tricity, Baguio, Baler, Bolinao-100 Islands and other destinations',
          'Additional services available: Transport Service, Travel Insurance',
          '*Itinerary is only our guide for the tour, and it can change without prior notice to adapt in any uncontrollable circumstances'
        ]
      },
      {
        id: 'sagada-2d1n-manila',
        title: '2D1N Sagada Tour (Manila Pick-up)',
        durationLabel: '2 Days / 1 Night',
        durationType: '2d1n',
        price: 4299,
        priceLabel: 'PHP 4,299 - PHP 4,999 / pax',
        pickupOption: 'Manila Pick-up & Drop',
        groupPricing: [
          'PHP 4,299 per head for 3pax & more',
          'PHP 4,499 per head for 2pax',
          'PHP 4,999 per head for solo'
        ],
        inclusions: [
          'Roundtrip Transfer Manila to Sagada',
          'Overnight accommodation (private room)',
          'Shuttle services to all tour sites per itinerary',
          'Registration fees',
          'All Entrance fees in Sagada',
          'Day 2 breakfast',
          'All Guide Fees: Sumaguing cave spelunking, Hanging coffins, St Marys Church, Echo valley, Marlboro Hills, Blue Soil'
        ],
        exclusions: [
          'Meals not mentioned',
          'Fees for optional activities like Northern Blossom (Registration: P50/head, Entrance fee: P250/head)',
          'All fees availed not in our itinerary'
        ],
        itinerary: [
          'Day 00 10:30 PM - Assembly time, Pick up MOA',
          'Day 01 03:30 AM - Breakfast Baguio, Pick up Baguio',
          'Day 01 04:00 AM - Departure to Atok',
          'Day 01 06:00 AM - Arrival in Atok with optional Northern Blossom exploration',
          'Day 01 07:30 AM - Departure to Sagada',
          'Day 01 11:00 AM - Arrival in Sagada with picture taking at Inverted house and Sagada weaving',
          'Day 01 11:00 AM - Lunch and check-in at accommodation',
          'Day 01 01:30 PM - Town Tour: Saint Mary the Virgin Church, Echo Valley, Hanging Coffins',
          'Day 01 02:45 PM - Sumaguing Spelunking/caving (includes rock climbing, rappelling and swimming)',
          'Day 01 05:00 PM - Back to hotel, Free Time onwards',
          'Day 02 04:00 AM - Ride to Marlboro Mountain for sunrise hike',
          'Day 02 07:00 AM - Traverse hike to blue soil',
          'Day 02 10:00 AM - Breakfast',
          'Day 02 11:00 AM - Check out and departure',
          'Day 02 12:00 PM - Drop by at Amgeleygey View Deck',
          'Day 02 12:30 PM - Drop at Philippine Highest Point',
          'Day 02 01:00 PM - Lunch',
          'Day 02 05:30 PM - Estimated arrival Baguio',
          'Day 02 11:30 PM - Estimated arrival Manila'
        ],
        reminders: [
          '100% Guaranteed No Additional Charges Within the Activities in Our Itinerary',
          'Bring comfortable trekking shoes and layered clothing',
          'Early departure for sunrise viewing opportunities',
          '*Itinerary is only our guide for the tour, and it can change without prior notice to adapt in any uncontrollable circumstances'
        ]
      },
      {
        id: 'sagada-2d1n-baguio',
        title: '2D1N Sagada Tour (Baguio Pick-up)',
        durationLabel: '2 Days / 1 Night',
        durationType: '2d1n',
        price: 4299,
        priceLabel: 'PHP 4,299 - PHP 4,999 / pax',
        pickupOption: 'Baguio Pick-up & Drop',
        groupPricing: [
          'PHP 4,299 per head for 3pax & more',
          'PHP 4,499 per head for 2pax',
          'PHP 4,999 per head for solo'
        ],
        inclusions: [
          'Roundtrip transfer from Baguio to Sagada (includes fuel, parking fees, driver)',
          'Transfers to all tour sites per itinerary',
          '1 night accommodation (Private Rooms)',
          '2 days 1 night Sagada Tour',
          'All Guides fees: Town tour package, Hanging Coffins, Marlboro Sunrise, Sumaguing Cave Spelunking',
          'Registration fees',
          'All Entrance fees',
          'Breakfast (day 02)'
        ],
        exclusions: [
          'Meals not mentioned above'
        ],
        itinerary: [
          'Day 01 04:00 AM - Pick up & departure to Atok from Mcdo Insular',
          'Day 01 06:00 AM - Arrival in Atok with optional Northern Blossom exploration (Registration: P50/head, Entrance fee: P250/head)',
          'Day 01 07:30 AM - Departure to Sagada',
          'Day 01 11:00 AM - Arrival in Sagada with picture taking at Inverted house and Sagada weaving',
          'Day 01 11:00 AM - Lunch and check-in at accommodation',
          'Day 01 01:30 PM - Town Tour: Saint Mary the Virgin Church, Echo Valley, Hanging Coffins',
          'Day 01 02:45 PM - Sumaguing Spelunking/caving (includes rock climbing, rappelling and swimming)',
          'Day 01 05:00 PM - Back to hotel, Free Time onwards',
          'Day 02 04:00 AM - Ride to Marlboro Mountain for sunrise hike',
          'Day 02 07:00 AM - Traverse hike to blue soil',
          'Day 02 10:00 AM - Breakfast',
          'Day 02 11:00 AM - Check out and departure',
          'Day 02 12:00 PM - Drop by at Amgeleygey View Deck',
          'Day 02 12:30 PM - Drop at Philippine Highest Point',
          'Day 02 01:00 PM - Lunch',
          'Day 02 05:30 PM - Estimated arrival Baguio'
        ],
        reminders: [
          'Bring comfortable trekking shoes and layered clothing for mountain activities',
          'Early morning departure for optimal sunrise and sea-of-clouds experience',
          'Some attractions require local guide dispatch and queue time',
          '*Itinerary is only our guide for the tour, and it can change without prior notice to adapt in any uncontrollable circumstances'
        ]
      }
    ],
    inclusions: [
      'See selected package details'
    ],
    exclusions: [
      'See selected package details'
    ],
    itinerary: [
      'See selected package details'
    ],
    reminders: [
      'See selected package details'
    ],
  },
  {
    id: 'ilocos-tour',
    title: 'Ilocos Tour',
    location: 'Ilocos Region',
    durationLabel: '3 Days / 2 Nights',
    durationType: '3d2n',
    category: '3 Days / 2 Nights',
    price: 5199,
    priceLabel: 'PHP 5,199 / pax',
    pickupOptions: ['Baguio Pick-up & Drop'],
    image: 'assets/images/destinations/Patar.png',
    shortDescription:
      'Complete Ilocos tour package with comfortable transport, accommodations, and major sightseeing stops.',
    fullDescription:
      'This 3D2N Ilocos Tour package includes van transfer, two nights private air-conditioned room accommodation, and a complete region tour itinerary with route coordination and environmental fee.',
    inclusions: [
      'Round trip van transfer',
      'Driver/coordinator, gas, toll & parking fee',
      'Two nights private air-conditioned room accommodation',
      'Environmental fee',
      'Complete Ilocos tour package'
    ],
    exclusions: [
      'All meals',
      'Entrance fees',
      'All payment for optional activity such as 4x4 ride at Sand Dunes, Kalesa ride in Vigan, Ride inside Baluarte Zoo'
    ],
    itinerary: [
      'Day 1 05:00 AM - Departure from Baguio to Ilocos',
      'Day 1 10:00 AM - Laoag and heritage route',
      'Day 1 01:00 PM - Lunch stop and local market quick tour',
      'Day 1 03:00 PM - Paoay Church and sand dunes photo stop',
      'Day 1 07:00 PM - Check-in and evening rest',
      'Day 2 08:00 AM - Vigan city tour and heritage walk',
      'Day 2 12:00 PM - Lunch and optional kalesa sight-seeing',
      'Day 2 03:00 PM - Local attractions and leisure time',
      'Day 3 08:00 AM - Final local tour and departure back to Baguio'
    ],
    reminders: [
      'Bring hats, sunscreen, and comfortable footwear.',
      'Optional activities are paid separately onsite.',
      'Carry cash for small local fees and meals.'
    ],
  },
  {
    id: 'bolinao-100-islands',
    title: 'Bolinao - 100 Islands',
    location: 'Bolinao, Pangasinan',
    durationLabel: '2 Days / 1 Night',
    durationType: '2d1n',
    category: '2 Days / 1 Night',
    price: 4499,
    priceLabel: 'PHP 4,499 / pax',
    pickupOptions: ['Baguio Pick-up & Drop', 'Manila Pick-up & Drop'],
    image: 'assets/images/destinations/Bolinao.png',
    shortDescription:
      'Island-hopping escape to Bolinao with overnight accommodation and boat rental included.',
    fullDescription:
      'Enjoy a coastal Bolinao adventure with boat island-hopping, private overnight accommodation, and convenient trip coordination for a relaxed 2-day escape.',
    inclusions: [
      'Round trip van transfer',
      'Driver, gas, parking fee',
      'Overnight private accommodation',
      'Boat rental for island hopping',
      'Registration fee'
    ],
    exclusions: [
      'All meals',
      'Rentals of swimming gears (optional)',
      'Entrance fees at Enchanted Cave and Bolinao Falls 1 (optional)',
      'Anything not mentioned in the inclusions'
    ],
    itinerary: [
      'Day 1 05:00 AM - Pickup and transfer to Bolinao',
      'Day 1 11:00 AM - Arrival and check-in at accommodation',
      'Day 1 01:00 PM - Afternoon island hopping around the 100 Islands',
      'Day 1 05:00 PM - Sunset and dinner at the bay',
      'Day 2 08:00 AM - Optional local sightseeing and cave visit',
      'Day 2 12:00 PM - Checkout and return travel to Baguio'
    ],
    reminders: [
      'Bring swimwear, towel, and sun protection.',
      'Optional swimming gear rentals are available onsite.',
      'Keep a copy of registration and boat rental details for convenience.'
    ],
  },
  {
    id: 'banaue-batad',
    title: 'Banaue / Batad Tour',
    location: 'Ifugao Province',
    durationLabel: '3 Days / 2 Nights',
    durationType: '3d2n',
    category: '3 Days / 2 Nights',
    price: 7699,
    priceLabel: 'PHP 7,699 / pax',
    pickupOptions: ['Baguio Pick-up & Drop', 'Manila Pick-up & Drop'],
    image: 'assets/images/destinations/download.png',
    shortDescription:
      'Multi-day Cordillera heritage journey featuring iconic rice terraces and mountain village immersion.',
    fullDescription:
      'The Banaue and Batad package offers a deeper mountain experience for guests who want heritage landscapes and long-form travel. Across 3 Days / 2 Nights, your group explores rice terrace viewpoints, village routes, and scenic mountain communities with enough rest and pacing.',
    inclusions: [
      'Roundtrip transport from Baguio to Ifugao',
      '2-night accommodation (shared standard rooms)',
      'Route guidance and destination coordination',
      'Trip support for viewpoint and village schedules'
    ],
    exclusions: [
      'Meals and personal food orders',
      'Guide fees for trekking-heavy optional routes',
      'Entrance and municipal fees not bundled',
      'Personal travel insurance and medication'
    ],
    itinerary: [
      'Day 1 03:00 AM - Departure from Baguio to Banaue',
      'Day 1 11:00 AM - Arrival, lunch, and viewpoint circuit',
      'Day 1 03:00 PM - Museum and town walk',
      'Day 1 07:00 PM - Check-in and rest',
      'Day 2 06:30 AM - Batad route transfer and village orientation',
      'Day 2 10:00 AM - Terrace viewpoints and local stopovers',
      'Day 2 05:00 PM - Return to accommodation and dinner',
      'Day 3 07:00 AM - Final photos and departure to Baguio'
    ],
    reminders: [
      'Expect cooler evenings and occasional rain in mountain areas.',
      'Some areas require moderate walking on sloped terrain.',
      'Carry cash for local fees and small community stores.'
    ],
  }
];

const FEATURED_HOME_REVIEWS = [
  {
    fullName: 'Maricel D.',
    rating: 5,
    packageName: 'Baguio City Tour',
    message:
      'Smooth and organized Baguio tour. The ride was comfortable and the team was very accommodating.',
    dateLabel: 'Verified Guest • Recent Trip',
    status: 'approved'
  },
  {
    fullName: 'Jayson P.',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'Our Sagada trip was memorable. Clear instructions, friendly coordination, and hassle-free travel.',
    dateLabel: 'Verified Guest • Recent Trip',
    status: 'approved'
  },
  {
    fullName: 'Lea M.',
    rating: 5,
    packageName: 'Baler Tour',
    message:
      'Affordable and reliable service. Perfect for group travel and family trips.',
    dateLabel: 'Verified Guest • Recent Trip',
    status: 'approved'
  },
  {
    fullName: 'Kevin R.',
    rating: 5,
    packageName: 'Atok Tour',
    message:
      'Very responsive team and practical itinerary pacing. Our group enjoyed the full day without stress.',
    dateLabel: 'Verified Guest • Recent Trip',
    status: 'approved'
  }
];

const REVIEW_DATA = [
  {
    fullName: 'Feljun Razo',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Sulit! Friendly drivers, comfy and clean vans, smooth transaction, and looking forward to travel with you again with new destinations!',
    dateLabel: 'Facebook Recommendation • May 13, 2026',
    status: 'approved'
  },
  {
    fullName: 'Celestial Cago',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message: 'Highly recommended, quality service.',
    dateLabel: 'Facebook Recommendation • February 19, 2026',
    status: 'approved'
  },
  {
    fullName: 'Sheen Irish Badio',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      '10/10, highly recommended! Our Sagada trip was super fun. Massive thanks to our driver Kuya Jeboni and our guides Kuya Ezra, Kuya Arnel, and Ate Lorna for the smooth, safe, and unforgettable experience.',
    dateLabel: 'Facebook Recommendation • February 17, 2026',
    status: 'approved'
  },
  {
    fullName: 'Kën Cäsülla',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'Valentines trip in Sagada was made possible by Kielan Travels. Friendly and informative guides, safe drop-off, and very protective team support during our trip.',
    dateLabel: 'Facebook Recommendation • February 17, 2026',
    status: 'approved'
  },
  {
    fullName: 'AnNe LM',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'We had an amazing time on our Sagada tour. The team was very accommodating and made every destination memorable, from the caves to the sunrise views.',
    dateLabel: 'Facebook Recommendation • January 25, 2026',
    status: 'approved'
  },
  {
    fullName: 'The Tara Diaries',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'Heartfelt thanks to Kielan Travels for our Sagada-Buscalan-Baguio adventure. Great guides, very safe driver, and a smooth trip all throughout.',
    dateLabel: 'Facebook Recommendation • January 6, 2026',
    status: 'approved'
  },
  {
    fullName: 'Mabel Reyes Linco',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'First time in Sagada and we had a great experience. Kudos to driver Jeboni and guide Omnada. Highly recommended.',
    dateLabel: 'Facebook Recommendation • January 6, 2026',
    status: 'approved'
  },
  {
    fullName: 'Sak En Na Gnewamo',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Legit agency staff and guides. They remind guests before the tour starts, and they are cool, friendly, and motivating on challenging tour days.',
    dateLabel: 'Facebook Recommendation • December 21, 2025',
    status: 'approved'
  },
  {
    fullName: 'Samantha Balite Lauron',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Thank you Kielan Travels team, especially Kuya Marlon and Kuya Meliton, plus our tour guide. Very accommodating and highly recommended.',
    dateLabel: 'Facebook Recommendation • December 2, 2025',
    status: 'approved'
  },
  {
    fullName: 'Ladyann Layug',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Kudos to the team for being patient and hassle-free. The service was excellent and we felt safe and comfortable throughout the trip.',
    dateLabel: 'Facebook Recommendation • November 24, 2025',
    status: 'approved'
  },
  {
    fullName: 'Dianne Pentecostes',
    rating: 5,
    packageName: 'Banaue / Batad Tour',
    message:
      'Worry-free and fun trip covering Banaue, Sagada, and Baguio. Friendly driver, warm guides, and very informative sharing during the tour.',
    dateLabel: 'Facebook Recommendation • May 19, 2025',
    status: 'approved'
  },
  {
    fullName: 'Vangie Polgab',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Very accommodating staff, friendly driver, and entertaining tour guides who kept us safe during our adventures. Legit agency.',
    dateLabel: 'Facebook Recommendation • May 18, 2025',
    status: 'approved'
  },
  {
    fullName: 'Tara Maria',
    rating: 5,
    packageName: 'Sagada Tour',
    message:
      'Excellent services and superb experiences. Hassle-free accommodation, capable and funny tour guides, and a very safe and skilled driver.',
    dateLabel: 'Facebook Recommendation • May 5, 2025',
    status: 'approved'
  },
  {
    fullName: 'Arlvira Rovi',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Very affordable for hassle-free travel. Helpful and energetic guides, very capable driver, and consistent support from the team.',
    dateLabel: 'Facebook Recommendation • May 5, 2025',
    status: 'approved'
  },
  {
    fullName: 'Eugene Carlos Paragas',
    rating: 5,
    packageName: 'Kielan Travels Travel and Tours',
    message:
      'Very accommodating, affordable price, and looking forward to having my next tour with them.',
    dateLabel: 'Facebook Recommendation • March 8, 2020',
    status: 'approved'
  },
  {
    fullName: 'Sheryl Micu Valencia',
    rating: 5,
    packageName: 'Minalungao Tour',
    message:
      'First-time joiner for Minalungao and we had a great trip. Thanks to the driver and local tour guide for being very accommodating.',
    dateLabel: 'Facebook Recommendation • March 2, 2020',
    status: 'approved'
  },
  {
    fullName: 'Marriane Claire Lopez',
    rating: 5,
    packageName: 'Dingalan Day Tour',
    message:
      'Wonderful and fulfilling Dingalan day tour. Kind and accommodating team, and we will surely book again for our next tour.',
    dateLabel: 'Facebook Recommendation • March 1, 2020',
    status: 'approved'
  },
  {
    fullName: 'So Gaile',
    rating: 5,
    packageName: 'Baguio City Tour',
    message:
      'One of the most convenient and stress-free Baguio day tours we have had. Very honest and helpful guide, smooth trip, and very affordable rates.',
    dateLabel: 'Facebook Recommendation • February 28, 2020',
    status: 'approved'
  },
  {
    fullName: 'Rose May',
    rating: 5,
    packageName: 'Ilocos Tour',
    message:
      'Thank you Kielan Travels. Our unforgettable Ilocos tour was made possible despite last-minute booking, and it stayed affordable.',
    dateLabel: 'Facebook Recommendation • February 16, 2020',
    status: 'approved'
  },
  {
    fullName: 'Fely Dongpoen',
    rating: 5,
    packageName: 'Sagada Day Tour',
    message:
      'Kielan Travels was very accommodating during our Sagada day tour despite our group concerns. Enjoyed the stories from Kuya Carlysk and the helpful support of the team.',
    dateLabel: 'Facebook Recommendation • October 5, 2019',
    status: 'approved'
  }
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatPrice(amount) {
  return `PHP ${amount.toLocaleString('en-PH')}`;
}

function getPackageById(id) {
  // First, look for a direct match
  const directMatch = PACKAGE_DATA.find((item) => item.id === id);
  if (directMatch) {
    return directMatch;
  }
  
  // If not found, search in packageOptions (nested variants)
  for (const pkg of PACKAGE_DATA) {
    if (pkg.packageOptions && Array.isArray(pkg.packageOptions)) {
      const variantMatch = pkg.packageOptions.find((opt) => opt.id === id);
      if (variantMatch) {
        // Return the parent package with variants, so dropdown works
        return pkg;
      }
    }
  }
  
  return undefined;
}

function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function getInitials(fullName) {
  return String(fullName)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function getApprovedReviews() {
  return REVIEW_DATA.filter((review) => review.status === 'approved');
}

function chunkItems(items, size) {
  const groups = [];
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }
  return groups;
}

function buildReviewCardMarkup(review, useRevealClass = true) {
  return `
    <article class="testimonial review-card${useRevealClass ? ' reveal' : ''}">
      <header class="review-head">
        <span class="review-avatar" aria-hidden="true">${escapeHtml(getInitials(review.fullName))}</span>
        <div class="review-title-block">
          <h3>${escapeHtml(review.fullName)}</h3>
          <p class="review-package">${escapeHtml(review.packageName)}</p>
        </div>
        <span class="review-rating" aria-label="${review.rating} out of 5 stars">${renderStars(review.rating)}</span>
      </header>
      <p class="review-content">${escapeHtml(review.message)}</p>
      <footer class="review-meta">
        <span>${escapeHtml(review.dateLabel)}</span>
      </footer>
    </article>
  `;
}

function initReviewCarousel(carousel) {
  if (!carousel) {
    return;
  }

  const viewport = carousel.querySelector('[data-review-viewport]');
  const track = carousel.querySelector('[data-review-track]');
  const slides = Array.from(carousel.querySelectorAll('[data-review-slide]'));
  const prevButton = carousel.querySelector('[data-review-prev]');
  const nextButton = carousel.querySelector('[data-review-next]');
  const dots = Array.from(carousel.querySelectorAll('[data-review-dot]'));

  if (!viewport || !track || !slides.length) {
    return;
  }

  let activeIndex = 0;
  let touchStartX = 0;
  let touchDeltaX = 0;

  const renderSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  if (slides.length > 1) {
    prevButton?.addEventListener('click', () => renderSlide(activeIndex - 1));
    nextButton?.addEventListener('click', () => renderSlide(activeIndex + 1));

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => renderSlide(dotIndex));
    });

    viewport.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchDeltaX = 0;
    }, { passive: true });

    viewport.addEventListener('touchmove', (event) => {
      touchDeltaX = event.changedTouches[0].clientX - touchStartX;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      if (Math.abs(touchDeltaX) < 36) {
        return;
      }
      if (touchDeltaX < 0) {
        renderSlide(activeIndex + 1);
        return;
      }
      renderSlide(activeIndex - 1);
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        renderSlide(activeIndex + 1);
      }
      if (event.key === 'ArrowLeft') {
        renderSlide(activeIndex - 1);
      }
    });
  }

  renderSlide(0);
}

function renderReviewCards(targetSelector, options = {}) {
  const { limit, carousel = false, perSlide = 3, sourceReviews, gridClass = 'cards-3' } = options;
  const target = document.querySelector(targetSelector);
  if (!target) {
    return;
  }

  const approvedReviews = Array.isArray(sourceReviews) ? sourceReviews : getApprovedReviews();
  const items = typeof limit === 'number' ? approvedReviews.slice(0, limit) : approvedReviews;

  if (!items.length) {
    target.innerHTML = `
      <article class="content-card review-card review-card-empty reveal visible">
        <h3>No approved reviews yet</h3>
        <p>Be the first to share your travel experience with Kielan Travels.</p>
      </article>
    `;
    return;
  }

  if (carousel) {
    const slideSize = Math.max(1, Number(perSlide) || 3);
    const reviewGroups = chunkItems(items, slideSize);

    target.classList.add('review-carousel-host');
    target.classList.remove('grid', 'cards-3');

    target.innerHTML = `
      <div class="review-carousel" data-review-carousel tabindex="0" aria-label="Traveler review carousel">
        <div class="review-viewport" data-review-viewport>
          <div class="review-track" data-review-track>
            ${reviewGroups
              .map(
                (group, slideIndex) => `
                  <section class="review-slide${slideIndex === 0 ? ' is-active' : ''}" data-review-slide role="group" aria-label="Slide ${slideIndex + 1} of ${reviewGroups.length}">
                    ${group.map((review) => buildReviewCardMarkup(review, false)).join('')}
                  </section>
                `
              )
              .join('')}
          </div>
        </div>
        ${reviewGroups.length > 1 ? `
          <button class="review-control review-prev" type="button" aria-label="Previous reviews" data-review-prev>‹</button>
          <button class="review-control review-next" type="button" aria-label="Next reviews" data-review-next>›</button>
          <div class="review-dots" role="tablist" aria-label="Review slide controls">
            ${reviewGroups
              .map(
                (_, dotIndex) => `
                  <button class="review-dot${dotIndex === 0 ? ' is-active' : ''}" type="button" aria-label="Show review slide ${dotIndex + 1}" aria-selected="${dotIndex === 0}" data-review-dot="${dotIndex}"></button>
                `
              )
              .join('')}
          </div>
        ` : ''}
      </div>
    `;

    initReviewCarousel(target.querySelector('[data-review-carousel]'));
    return;
  }

  target.classList.remove('review-carousel-host');
  target.classList.remove('cards-3', 'cards-4');
  target.classList.add('grid', gridClass);

  target.innerHTML = items
    .map((review) => buildReviewCardMarkup(review))
    .join('');

  if (typeof window.observeRevealElements === 'function') {
    window.observeRevealElements();
  }
}

function createInclusionsPreview(items) {
  return items.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join('');
}

function renderPackageCards(items) {
  const grid = document.querySelector('#packages-grid');
  if (!grid) {
    return;
  }

  if (!items.length) {
    grid.innerHTML = `
      <article class="package-card package-card-empty reveal visible">
        <h3>No packages matched your filters yet.</h3>
        <p>Try a wider search keyword or reset the filter options to explore all available tours.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = items
    .map(
      (pkg) => `
      <article class="package-card package-browser-card reveal">
        <img src="${escapeHtml(pkg.image)}" alt="${escapeHtml(pkg.title)} destination view" loading="lazy" decoding="async" />
        <div class="package-browser-content">
          <span class="tag">${escapeHtml(pkg.durationLabel)}</span>
          <h3>${escapeHtml(pkg.title)}</h3>
          <p>${escapeHtml(pkg.shortDescription)}</p>
          <dl class="package-meta">
            <div>
              <dt>Location</dt>
              <dd>${escapeHtml(pkg.location)}</dd>
            </div>
            <div>
              <dt>Package type</dt>
              <dd>${escapeHtml(pkg.category)}</dd>
            </div>
            <div>
              <dt>Days / Nights</dt>
              <dd>${escapeHtml(pkg.durationLabel)}</dd>
            </div>
            <div>
              <dt>Rate</dt>
              <dd>${escapeHtml(pkg.priceLabel)}</dd>
            </div>
          </dl>
          <div class="card-content">
            <h4>Inclusions Preview</h4>
            <ul class="preview-list">${createInclusionsPreview(pkg.inclusions)}</ul>
          </div>
          <div class="card-actions">
            <a class="btn btn-outline" href="package-details.html?id=${encodeURIComponent(pkg.id)}">View Details</a>
            <button class="btn btn-primary package-book-btn" type="button" data-package-id="${escapeHtml(pkg.id)}">Book Now</button>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  if (typeof window.observeRevealElements === 'function') {
    window.observeRevealElements();
  }

  attachPackageBookingHandlers();
}

function attachPackageBookingHandlers() {
  document.querySelectorAll('.package-book-btn').forEach((button) => {
    if (button.dataset.packageBookingBound === 'true') {
      return;
    }

    button.addEventListener('click', (event) => {
      const packageId = button.dataset.packageId;
      const card = button.closest('.package-browser-card');
      const pickupSelect = card?.querySelector('.package-book-select');
      const pickupValue = pickupSelect?.value || '';
      const bookingUrl = new URL('booking.html', window.location.href);

      bookingUrl.searchParams.set('package', packageId || '');
      if (pickupValue) {
        bookingUrl.searchParams.set('pickup', pickupValue);
      }

      window.location.assign(bookingUrl.toString());
      event.preventDefault();
    });

    button.dataset.packageBookingBound = 'true';
  });
}

function initPackageFilters() {
  const searchInput = document.querySelector('#search-input');
  const locationFilter = document.querySelector('#location-filter');
  const durationFilter = document.querySelector('#duration-filter');
  const clearFiltersBtn = document.querySelector('#clear-filters');

  if (!searchInput || !locationFilter || !durationFilter || !clearFiltersBtn) {
    return;
  }

  const uniqueLocations = [...new Set(PACKAGE_DATA.map((item) => item.location))];
  uniqueLocations.forEach((location) => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });

  const applyFilters = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedLocation = locationFilter.value;
    const selectedDuration = durationFilter.value;

    const filtered = PACKAGE_DATA.filter((pkg) => {
      const inKeyword =
        !keyword ||
        pkg.title.toLowerCase().includes(keyword) ||
        pkg.location.toLowerCase().includes(keyword) ||
        pkg.shortDescription.toLowerCase().includes(keyword);
      const inLocation = selectedLocation === 'all' || pkg.location === selectedLocation;
      const inDuration = selectedDuration === 'all' || pkg.durationType === selectedDuration;
      return inKeyword && inLocation && inDuration;
    });

    renderPackageCards(filtered);
  };

  searchInput.addEventListener('input', applyFilters);
  locationFilter.addEventListener('change', applyFilters);
  durationFilter.addEventListener('change', applyFilters);

  clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    locationFilter.value = 'all';
    durationFilter.value = 'all';
    renderPackageCards(PACKAGE_DATA);
  });

  renderPackageCards(PACKAGE_DATA);
}

function initBookingPackageOptions() {
  const packageSelect = document.querySelector('#booking-package');
  if (!packageSelect) {
    return;
  }

  const groupedPackages = PACKAGE_DATA.reduce((groups, pkg) => {
    if (!groups[pkg.category]) {
      groups[pkg.category] = [];
    }
    groups[pkg.category].push(pkg);
    return groups;
  }, {});

  packageSelect.innerHTML = `
    <option value="">Select a package</option>
    ${Object.entries(groupedPackages)
      .map(
        ([category, packages]) => `
          <optgroup label="${escapeHtml(category)}">
            ${packages
              .map(
                (pkg) => `<option value="${escapeHtml(pkg.id)}">${escapeHtml(pkg.title)}</option>`
              )
              .join('')}
          </optgroup>
        `
      )
      .join('')}
  `;

  initBookingPackagePrefill();
}

function buildDetailsSection(pkg, selectedOptionId = null) {
  // If package has options, select the specified one or the first one by default
  const activeOption = pkg.packageOptions && pkg.packageOptions.length > 0
    ? (selectedOptionId 
        ? pkg.packageOptions.find(opt => opt.id === selectedOptionId) 
        : pkg.packageOptions[0]
      ) || pkg.packageOptions[0]
    : null;
  
  const displayPkg = activeOption || pkg;
  
  return `
    <article class="details-banner reveal">
      <img src="${escapeHtml(displayPkg.image || pkg.image)}" alt="${escapeHtml(displayPkg.title)} banner image" loading="eager" decoding="async" />
      <div class="details-banner-content">
        <p class="eyebrow">Package Overview</p>
        <h1>${escapeHtml(displayPkg.title)}</h1>
        <p>${escapeHtml(displayPkg.fullDescription || pkg.fullDescription)}</p>
        <div class="details-top-meta">
          ${!pkg.packageOptions ? `<span><strong>Package type:</strong> ${escapeHtml(displayPkg.category)}</span>` : ''}
          <span><strong>Duration:</strong> ${escapeHtml(displayPkg.durationLabel)}</span>
          <span><strong>Rate:</strong> ${escapeHtml(displayPkg.priceLabel)}</span>
        </div>
        ${displayPkg.groupPricing ? `
        <div class="pricing-breakdown reveal" style="margin-top: 15px; padding: 15px; background: #f9f9f9; border-radius: 4px;">
          <h4 style="margin: 0 0 10px 0; font-size: 14px;">Group Pricing:</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            ${displayPkg.groupPricing.map(price => `<li>${escapeHtml(price)}</li>`).join('')}
          </ul>
        </div>
        ` : ''}
      </div>
    </article>

    <section class="details-grid section-inner">
      <div class="details-main">
        <article class="details-card reveal">
          <h2>Package Inclusions</h2>
          <ul>
            ${displayPkg.inclusions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>

        <article class="details-card reveal">
          <h2>Package Exclusions</h2>
          <ul>
            ${displayPkg.exclusions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>

        <article class="details-card reveal">
          <h2>${activeOption ? 'Itinerary' : 'Sites to Visit'}</h2>
          <ul>
            ${displayPkg.itinerary.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
          </ul>
        </article>

        <article class="details-card reveal">
          <h2>Important Notes</h2>
          <ul>
            ${displayPkg.reminders.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            ${!activeOption ? `<li>All site visits are planned to fit the itinerary, but may change due to traffic, weather, or guest timing.</li>` : ''}
          </ul>
        </article>
      </div>

      <aside class="details-side">
        <article class="details-card reveal">
          <h2>Booking Information</h2>
          <p>Choose your preferred travel date and group size in the booking inquiry. Our team will confirm availability and next steps after submission.</p>
          <a class="btn btn-primary" href="booking.html?package=${encodeURIComponent(pkg.id)}">Book This Package</a>
        </article>
      </aside>
    </section>

    <section class="section-inner">
      <article class="details-card reveal">
        <h2>Reviews for This Package</h2>
        <div id="package-review-grid" class="grid cards-3" aria-live="polite"></div>
      </article>
    </section>
  `;
}

function renderPackageDetails() {
  const root = document.querySelector('#package-details-root');
  if (!root) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const packageId = params.get('id');

  if (!packageId) {
    root.innerHTML = `
      <article class="fallback-card reveal visible">
        <h1>No package selected yet</h1>
        <p>Please choose a package from the listings page to view complete itinerary and rates.</p>
        <a href="packages.html" class="btn btn-primary">Browse Packages</a>
      </article>
    `;
    return;
  }

  const selectedPackage = getPackageById(packageId);
  if (!selectedPackage) {
    root.innerHTML = `
      <article class="fallback-card reveal visible">
        <h1>Package not found</h1>
        <p>That package link may be outdated. Visit the package listings to continue browsing.</p>
        <a href="packages.html" class="btn btn-primary">Back to Packages</a>
      </article>
    `;
    return;
  }

  // If packageId is a nested variant, use that. Otherwise use first option or the package itself.
  let selectedVariantId = null;
  if (selectedPackage.packageOptions && Array.isArray(selectedPackage.packageOptions)) {
    const isNestedVariant = selectedPackage.packageOptions.some(opt => opt.id === packageId);
    if (isNestedVariant) {
      selectedVariantId = packageId;
    }
  }

  const activeOption = selectedPackage.packageOptions && selectedPackage.packageOptions.length > 0
    ? (selectedVariantId 
        ? selectedPackage.packageOptions.find(opt => opt.id === selectedVariantId)
        : selectedPackage.packageOptions[0]
      ) || selectedPackage.packageOptions[0]
    : selectedPackage;
  
  document.title = `${activeOption.title} | Kielan Travels`;
  
  // Build the dropdown selector if package has options
  let selectorMarkup = '';
  if (selectedPackage.packageOptions && selectedPackage.packageOptions.length > 0) {
    selectorMarkup = `
    <div class="package-option-selector reveal" style="margin-bottom: 30px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
      <label for="package-option-select" style="display: block; margin-bottom: 10px; font-weight: 600; font-size: 16px;">Choose Your Package Type:</label>
      <select id="package-option-select" class="package-option-select" style="width: 100%; max-width: 500px; padding: 12px; font-size: 16px; border: 2px solid #0066cc; border-radius: 4px; cursor: pointer; font-weight: 500;">
        ${selectedPackage.packageOptions.map((opt) => `<option value="${escapeHtml(opt.id)}" ${opt.id === (selectedVariantId || selectedPackage.packageOptions[0].id) ? 'selected' : ''}>${escapeHtml(opt.title)}</option>`).join('')}
      </select>
    </div>
    `;
  }
  
  root.innerHTML = selectorMarkup + buildDetailsSection(selectedPackage, selectedVariantId);
  renderReviewCards('#package-review-grid', { limit: 3 });

  if (typeof window.observeRevealElements === 'function') {
    window.observeRevealElements();
  }
  
  // Attach dropdown handler if package has options
  if (selectedPackage.packageOptions && selectedPackage.packageOptions.length > 0) {
    const selector = document.querySelector('#package-option-select');
    if (selector) {
      selector.addEventListener('change', (event) => {
        const selectedOptionId = event.target.value;
        const banner = root.querySelector('.details-banner');
        const detailsGrid = root.querySelector('.details-grid');
        const reviewsSection = root.querySelector('.section-inner:last-of-type');
        
        if (banner) banner.remove();
        if (detailsGrid) detailsGrid.remove();
        if (reviewsSection) reviewsSection.remove();
        
        // Update URL to reflect selected variant
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('id', selectedOptionId);
        window.history.replaceState({}, '', newUrl);
        
        const newContent = buildDetailsSection(selectedPackage, selectedOptionId);
        root.insertAdjacentHTML('beforeend', newContent);
        renderReviewCards('#package-review-grid', { limit: 3 });
        
        if (typeof window.observeRevealElements === 'function') {
          window.observeRevealElements();
        }
      });
    }
  }
}

function initFeaturedMomentsCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) {
    return;
  }

  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));

  if (slides.length < 2 || !prevButton || !nextButton) {
    return;
  }

  let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (activeIndex < 0) {
    activeIndex = 0;
  }

  let autoSlideTimer;
  let touchStartX = 0;
  let touchDeltaX = 0;

  const renderSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  const startAutoSlide = () => {
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = window.setInterval(() => {
      renderSlide(activeIndex + 1);
    }, 4800);
  };

  const moveSlide = (step) => {
    renderSlide(activeIndex + step);
    startAutoSlide();
  };

  prevButton.addEventListener('click', () => moveSlide(-1));
  nextButton.addEventListener('click', () => moveSlide(1));

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      renderSlide(dotIndex);
      startAutoSlide();
    });
  });

  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  carousel.addEventListener('touchmove', (event) => {
    touchDeltaX = event.changedTouches[0].clientX - touchStartX;
  }, { passive: true });

  carousel.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) < 36) {
      return;
    }

    if (touchDeltaX < 0) {
      moveSlide(1);
      return;
    }

    moveSlide(-1);
  });

  carousel.addEventListener('mouseenter', () => {
    window.clearInterval(autoSlideTimer);
  });

  carousel.addEventListener('mouseleave', () => {
    startAutoSlide();
  });

  carousel.addEventListener('focusin', () => {
    window.clearInterval(autoSlideTimer);
  });

  carousel.addEventListener('focusout', () => {
    startAutoSlide();
  });

  renderSlide(activeIndex);
  startAutoSlide();
}

function initApprovedReviewsSection() {
  const targetSelector = '#approved-reviews-grid';
  const target = document.querySelector(targetSelector);
  if (!target) {
    return;
  }

  const approvedReviews = getApprovedReviews();
  const mobileQuery = window.matchMedia('(max-width: 700px)');
  const parent = target.parentElement;

  if (!parent) {
    return;
  }

  let visibleCount = 3;
  let firstExpandDone = false;

  let seeMoreWrap = parent.querySelector('[data-reviews-more-wrap]');
  if (!seeMoreWrap) {
    seeMoreWrap = document.createElement('div');
    seeMoreWrap.className = 'reviews-cta';
    seeMoreWrap.setAttribute('data-reviews-more-wrap', 'true');
    seeMoreWrap.innerHTML = '<button type="button" class="btn btn-outline reviews-more-btn" data-reviews-more>See More Reviews</button>';
    parent.appendChild(seeMoreWrap);
  }

  const seeMoreButton = seeMoreWrap.querySelector('[data-reviews-more]');

  const renderMobileFeed = () => {
    renderReviewCards(targetSelector, {
      limit: visibleCount,
      sourceReviews: approvedReviews,
      gridClass: 'cards-3'
    });

    if (!seeMoreButton) {
      return;
    }

    const hasMore = visibleCount < approvedReviews.length;
    seeMoreWrap.hidden = !hasMore;
    seeMoreButton.textContent = hasMore ? 'See More Reviews' : 'All Reviews Shown';
    seeMoreButton.disabled = !hasMore;
  };

  const renderDesktopCarousel = () => {
    renderReviewCards(targetSelector, {
      carousel: true,
      perSlide: 3,
      sourceReviews: approvedReviews
    });
    seeMoreWrap.hidden = true;
  };

  const renderByViewport = () => {
    if (mobileQuery.matches) {
      renderMobileFeed();
      return;
    }

    renderDesktopCarousel();
  };

  seeMoreButton?.addEventListener('click', () => {
    if (!mobileQuery.matches) {
      return;
    }

    const nextBatch = firstExpandDone ? 6 : 3;
    visibleCount = Math.min(approvedReviews.length, visibleCount + nextBatch);
    firstExpandDone = true;
    renderMobileFeed();
  });

  mobileQuery.addEventListener('change', () => {
    if (!mobileQuery.matches) {
      visibleCount = 3;
      firstExpandDone = false;
    }

    renderByViewport();
  });

  renderByViewport();
}

document.addEventListener('DOMContentLoaded', () => {
  initPackageFilters();
  initBookingPackageOptions();
  renderReviewCards('#home-reviews-grid', { limit: 4, sourceReviews: FEATURED_HOME_REVIEWS, gridClass: 'cards-4' });
  initApprovedReviewsSection();
  renderPackageDetails();
  initFeaturedMomentsCarousel();
});
