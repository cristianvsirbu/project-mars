import { CelestialData } from './types';

// Structured readable form
export const MARS = {
  id: 'mars',
  name: 'Mars',
  category: 'mars',
  cover: '/assets/covers/mars.webp',
  model3d: {
    path: '/assets/models/mars_compressed.glb',
    initialScale: 0.1,
    cameraPosition: [0, 0, 180],
  },
  characteristics: [
    {
      category: 'Orbital Characteristics',
      label: 'Aphelion',
      value: '249,261,000 km | 154,884,000 mi | 1.66621 AU',
    },
    {
      category: 'Orbital Characteristics',
      label: 'Perihelion',
      value: '206,650,000 km | 128,410,000 mi | 1.3814 AU',
    },
    {
      category: 'Orbital Characteristics',
      label: 'Semi-major Axis',
      value: '227,939,366 km | 141,634,956 mi | 1.52368055 AU',
    },
    { category: 'Orbital Characteristics', label: 'Eccentricity', value: '0.0934' },
    {
      category: 'Orbital Characteristics',
      label: 'Orbital Period (Sidereal)',
      value: '686.980 days | 1.88085 years | 668.5991 sols',
    },
    {
      category: 'Orbital Characteristics',
      label: 'Orbital Period (Synodic)',
      value: '779.94 days | 2.1354 years',
    },
    {
      category: 'Orbital Characteristics',
      label: 'Average Orbital Speed',
      value: '24.07 km/s | 86,700 km/h | 53,800 mph',
    },
    { category: 'Orbital Characteristics', label: 'Mean Anomaly', value: '19.412°' },
    { category: 'Orbital Characteristics', label: 'Inclination (To Ecliptic)', value: '1.850°' },
    { category: 'Orbital Characteristics', label: 'Inclination (To Sun Equator)', value: '5.65°' },
    {
      category: 'Orbital Characteristics',
      label: 'Inclination (To Invariable Plane)',
      value: '1.63°',
    },
    {
      category: 'Orbital Characteristics',
      label: 'Longitude of Ascending Node',
      value: '49.57854°',
    },
    { category: 'Orbital Characteristics', label: 'Time of Perihelion', value: '2022-Jun-21' },
    { category: 'Orbital Characteristics', label: 'Argument of Perihelion', value: '286.5°' },
    { category: 'Orbital Characteristics', label: 'Satellites', value: '2' },

    {
      category: 'Physical Characteristics',
      label: 'Mean Radius',
      value: '3,389.5 ± 0.2 km | 2,106.1 ± 0.1 mi',
    },
    {
      category: 'Physical Characteristics',
      label: 'Equatorial Radius',
      value: '3,396.2 ± 0.1 km | 2,110.3 ± 0.1 mi | 0.533 Earths',
    },
    {
      category: 'Physical Characteristics',
      label: 'Polar Radius',
      value: '3,376.2 ± 0.1 km | 2,097.9 ± 0.1 mi | 0.531 Earths',
    },
    { category: 'Physical Characteristics', label: 'Flattening', value: '0.00589' },
    {
      category: 'Physical Characteristics',
      label: 'Surface Area',
      value: '144.37×10⁶ km² | 5.574×10⁷ sq mi | 0.284 Earths',
    },
    {
      category: 'Physical Characteristics',
      label: 'Volume',
      value: '1.63118×10¹¹ km³ | 0.151 Earths',
    },
    { category: 'Physical Characteristics', label: 'Mass', value: '6.4171×10²³ kg | 0.107 Earths' },
    {
      category: 'Physical Characteristics',
      label: 'Mean Density',
      value: '3.9335 g/cm³ | 0.1421 lb/cu in',
    },
    {
      category: 'Physical Characteristics',
      label: 'Surface Gravity',
      value: '3.72076 m/s² | 12.2072 ft/s² | 0.3794 g',
    },
    { category: 'Physical Characteristics', label: 'Moment of Inertia Factor', value: '0.3644' },
    {
      category: 'Physical Characteristics',
      label: 'Escape Velocity',
      value: '5.027 km/s | 18,100 km/h | 11,250 mph',
    },
    {
      category: 'Physical Characteristics',
      label: 'Synodic Rotation Period',
      value: '1.02749125 days | 24h 39m 36s',
    },
    {
      category: 'Physical Characteristics',
      label: 'Sidereal Rotation Period',
      value: '1.025957 days | 24h 37m 22.7s',
    },
    {
      category: 'Physical Characteristics',
      label: 'Equatorial Rotation Velocity',
      value: '241 m/s | 870 km/h | 540 mph',
    },
    {
      category: 'Physical Characteristics',
      label: 'Axial Tilt',
      value: '25.19° to its orbital plane',
    },
    {
      category: 'Physical Characteristics',
      label: 'North Pole Right Ascension',
      value: '317.68143° | 21h 10m 44s',
    },
    { category: 'Physical Characteristics', label: 'North Pole Declination', value: '52.88650°' },
    { category: 'Physical Characteristics', label: 'Albedo (Geometric)', value: '0.17' },
    { category: 'Physical Characteristics', label: 'Albedo (Bond)', value: '0.25' },
    { category: 'Physical Characteristics', label: 'Temperature (Blackbody)', value: '−64°C' },
    { category: 'Physical Characteristics', label: 'Temperature (Surface Min)', value: '−110°C' },
    { category: 'Physical Characteristics', label: 'Temperature (Surface Mean)', value: '−60°C' },
    { category: 'Physical Characteristics', label: 'Temperature (Surface Max)', value: '35°C' },
    {
      category: 'Physical Characteristics',
      label: 'Surface Absorbed Dose Rate',
      value: '8.8 μGy/h',
    },
    {
      category: 'Physical Characteristics',
      label: 'Surface Equivalent Dose Rate',
      value: '27 μSv/h',
    },
    { category: 'Physical Characteristics', label: 'Apparent Magnitude', value: '−2.94 to +1.86' },
    { category: 'Physical Characteristics', label: 'Absolute Magnitude', value: '−1.5' },
    { category: 'Physical Characteristics', label: 'Angular Diameter', value: '3.5–25.1″' },

    { category: 'Atmosphere', label: 'Surface Pressure', value: '0.636 kPa | 0.00628 atm' },
    { category: 'Atmosphere', label: 'Carbon Dioxide', value: '95.97%' },
    { category: 'Atmosphere', label: 'Argon', value: '1.93%' },
    { category: 'Atmosphere', label: 'Nitrogen', value: '1.89%' },
    { category: 'Atmosphere', label: 'Oxygen', value: '0.146%' },
    { category: 'Atmosphere', label: 'Carbon Monoxide', value: '0.0557%' },
    { category: 'Atmosphere', label: 'Water Vapor', value: '0.0210%' },
  ],
};

export const MOONS = {
  name: 'Moons',
  category: 'moons',
  cover: '/assets/covers/moons.webp',
  children: [
    {
      id: 'phobos',
      category: 'moons',
      name: 'Phobos',
      cover: '/assets/covers/phobos.webp',
      model3d: {
        path: '/assets/models/phobos_compressed.glb',
        initialScale: 1,
        cameraPosition: [0, 0, 40],
      },
      description:
        'Phobos is the innermost and larger of the two natural satellites of Mars. It is named after Phobos, the Greek god of fear and panic, who is the son of Ares (Mars) and twin brother of Deimos.',
      characteristics: [
        { category: 'Discovery', label: 'Discovered by', value: 'Asaph Hall' },
        { category: 'Discovery', label: 'Discovery date', value: '18 August 1877' },

        { category: 'Designations', label: 'Designation', value: 'Mars I' },
        { category: 'Designations', label: 'Pronunciation', value: '/ˈfoʊbɒs/ or /ˈfoʊbəs/' },
        { category: 'Designations', label: 'Named after', value: 'Φόβος' },
        { category: 'Designations', label: 'Adjectives', value: 'Phobian /ˈfoʊbiən/' },

        { category: 'Orbital Characteristics', label: 'Periapsis', value: '9,234.42 km' },
        { category: 'Orbital Characteristics', label: 'Apoapsis', value: '9,517.58 km' },
        {
          category: 'Orbital Characteristics',
          label: 'Semi-major Axis',
          value: '9,376 km | 2.76 Mars radii | 1.472 Earth radii',
        },
        { category: 'Orbital Characteristics', label: 'Eccentricity', value: '0.0151' },
        {
          category: 'Orbital Characteristics',
          label: 'Orbital Period (Sidereal)',
          value: '0.31891023 days | 7h 39m 12s',
        },
        {
          category: 'Orbital Characteristics',
          label: 'Average Orbital Speed',
          value: '2.138 km/s',
        },
        {
          category: 'Orbital Characteristics',
          label: 'Inclination',
          value: "1.093° (to Mars's equator)",
        },

        { category: 'Physical Characteristics', label: 'Dimensions', value: '27 × 22 × 18 km' },
        {
          category: 'Physical Characteristics',
          label: 'Mean Radius',
          value: '11.2667 km | 1.76941 mEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Surface Area',
          value: '1,548.3 km² | 3.03545 µEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Volume',
          value: '5,783.61 km³ | 5.33933 nEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Mass',
          value: '1.0659×10¹⁶ kg | 1.78477 nEarths',
        },
        { category: 'Physical Characteristics', label: 'Mean Density', value: '1.876 g/cm³' },
        {
          category: 'Physical Characteristics',
          label: 'Surface Gravity',
          value: '0.0057 m/s² | 581.4 µg',
        },
        {
          category: 'Physical Characteristics',
          label: 'Escape Velocity',
          value: '11.39 m/s | 41 km/h',
        },
        {
          category: 'Physical Characteristics',
          label: 'Synodic Rotation Period',
          value: 'Synchronous',
        },
        {
          category: 'Physical Characteristics',
          label: 'Equatorial Rotation Velocity',
          value: '11.0 km/h | 6.8 mph (at longest axis)',
        },
        { category: 'Physical Characteristics', label: 'Axial Tilt', value: '0°' },
        {
          category: 'Physical Characteristics',
          label: 'Albedo',
          value: '0.071 ± 0.012 at 0.54 μm',
        },
        { category: 'Physical Characteristics', label: 'Temperature', value: '≈ 233 K' },
        { category: 'Physical Characteristics', label: 'Apparent Magnitude', value: '11.8' },
      ],
    },
    {
      id: 'deimos',
      category: 'moons',
      name: 'Deimos',
      cover: '/assets/covers/deimos.webp',
      model3d: {
        path: '/assets/models/deimos_compressed.glb',
        initialScale: 1,
        cameraPosition: [0, 0, 25],
      },
      description:
        'Deimos is the smaller and outermost of the two natural satellites of Mars. The moon is named after Deimos, a figure representing dread in Greek mythology. The name was suggested by academic Henry Madan, who drew from Book XV of the Iliad, where Ares (the Roman god Mars) summons Dread (Deimos) and Fear (Phobos).',
      characteristics: [
        { category: 'Discovery', label: 'Discovered by', value: 'Asaph Hall' },
        { category: 'Discovery', label: 'Discovery date', value: '12 August 1877' },

        { category: 'Designations', label: 'Designation', value: 'Mars II' },
        {
          category: 'Designations',
          label: 'Pronunciation',
          value: '/ˈdaɪməs/ to /ˈdiːməs/ or as Greek Δεῖμος (approximated /ˈdeɪmɒs/)',
        },
        { category: 'Designations', label: 'Named after', value: 'Δεῖμος' },
        { category: 'Designations', label: 'Adjectives', value: 'Deimian /ˈdaɪmiən/' },

        { category: 'Orbital Characteristics', label: 'Periapsis', value: '23,455.5 km' },
        { category: 'Orbital Characteristics', label: 'Apoapsis', value: '23,470.9 km' },
        {
          category: 'Orbital Characteristics',
          label: 'Semi-major Axis',
          value: '23,463.2 km | 6.92 Mars radii',
        },
        { category: 'Orbital Characteristics', label: 'Eccentricity', value: '0.00033' },
        {
          category: 'Orbital Characteristics',
          label: 'Orbital Period (Sidereal)',
          value: '1.263 days | 30.312 hours',
        },
        {
          category: 'Orbital Characteristics',
          label: 'Average Orbital Speed',
          value: '1.3513 km/s',
        },
        {
          category: 'Orbital Characteristics',
          label: "Inclination (to Mars's equator)",
          value: '0.93°',
        },
        {
          category: 'Orbital Characteristics',
          label: 'Inclination (to local Laplace plane)',
          value: '1.791°',
        },
        {
          category: 'Orbital Characteristics',
          label: 'Inclination (to the ecliptic)',
          value: '27.58°',
        },

        {
          category: 'Physical Characteristics',
          label: 'Dimensions',
          value: '15 km × 12.2 km × 11 km',
        },
        {
          category: 'Physical Characteristics',
          label: 'Mean Radius',
          value: '6.2 ± 0.18 km | 0.97316 mEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Surface Area',
          value: '495.1548 km² | 0.970755 µEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Volume',
          value: '999.78 km³ | 0.922979 nEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Mass',
          value: '1.4762×10¹⁵ kg | 0.247179 nEarths',
        },
        {
          category: 'Physical Characteristics',
          label: 'Mean Density',
          value: '1.471 ± 0.166 g/cm³',
        },
        {
          category: 'Physical Characteristics',
          label: 'Surface Gravity',
          value: '0.003 m/s² | 306 µg',
        },
        {
          category: 'Physical Characteristics',
          label: 'Escape Velocity',
          value: '5.556 m/s | 20 km/h',
        },
        {
          category: 'Physical Characteristics',
          label: 'Synodic Rotation Period',
          value: 'Synchronous',
        },
        { category: 'Physical Characteristics', label: 'Albedo', value: '0.068 ± 0.007' },
        { category: 'Physical Characteristics', label: 'Temperature', value: '≈ 233 K' },
        { category: 'Physical Characteristics', label: 'Apparent Magnitude', value: '12.89' },
      ],
    },
  ],
};

export const SATELLITES = {
  name: 'Satellites',
  category: 'satellites',
  cover: '/assets/covers/satellites.webp',
  children: [
    {
      name: 'Functional Satellites',
      category: 'satellites',
      subcategory: 'functional',
      cover: '/assets/covers/functional_satellites.webp',
      children: [
        {
          id: 'mars-odyssey',
          category: 'satellites',
          subcategory: 'functional',
          name: '2001 Mars Odyssey',
          cover: '/assets/satellites/mars_odyssey.webp',
          model3d: {
            path: '/assets/models/odyssey_compressed.glb',
            initialScale: 0.5,
            cameraPosition: [0, 0, 17],
          },
          description:
            "2001 Mars Odyssey is a robotic spacecraft orbiting the planet Mars. The project was developed by NASA, and contracted out to Lockheed Martin, with an expected cost for the entire mission of US$297 million. Its mission is to use spectrometers and a thermal imager to detect evidence of past or present water and ice, as well as study the planet's geology and radiation environment. It also acts as a relay for communications between the Curiosity rover, and previously the Mars Exploration Rovers and Phoenix lander, to Earth. The mission was named as a tribute to Arthur C. Clarke, evoking the name of his and Stanley Kubrick's 1968 film 2001: A Space Odyssey.",
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA / JPL' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2001-013A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '26734' },

            {
              category: 'Mission Duration',
              label: 'Elapsed from launch',
              value: '22 years, 4 months and 28 days',
            },
            { category: 'Mission Duration', label: 'En route', value: '6 months, 17 days' },
            {
              category: 'Mission Duration',
              label: 'Primary mission',
              value: '32 months (1007 sols)',
            },
            {
              category: 'Mission Duration',
              label: 'Extended mission',
              value: '19 years and 10 days (6763 sols) elapsed',
            },

            {
              category: 'Mission Objectives',
              label: 'Objective 1',
              value: 'Mapping the levels of elements across the entire Martian surface.',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 2',
              value: "Determine how much hydrogen exists within the 'shallow subsurface'.",
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 3',
              value:
                'Develop a library of high-resolution images and spectroscopy for the mineral composition of the Martian surface.',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 4',
              value: 'Provide information on the morphology of the Martian surface.',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 5',
              value:
                "Identify the 'radiation-induced risk to human explorers' through a characterization of the 'near-space radiation environment' on the Martian surface.",
            },

            { category: 'Spacecraft Properties', label: 'Manufacturer', value: 'Lockheed Martin' },
            { category: 'Spacecraft Properties', label: 'Launch mass', value: '725 kg' },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '376.3 kg | 830 lb' },
            { category: 'Spacecraft Properties', label: 'Power', value: '750 W' },

            { category: 'Launch', label: 'Launch date', value: 'April 7, 2001, 15:02:22 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Delta II 7925-9.5' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral SLC-17A' },
            { category: 'Launch', label: 'Contractor', value: 'Boeing' },

            { category: 'End of Mission', label: 'Last contact', value: 'Q4 2025 (planned)' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Regime', value: 'Sun-synchronous' },
            {
              category: 'Orbital Parameters',
              label: 'Semi-major axis',
              value: '3,793.4 km | 2,357.1 mi',
            },
            { category: 'Orbital Parameters', label: 'Eccentricity', value: '0.0' },
            { category: 'Orbital Parameters', label: 'Altitude', value: '400 km | 250 mi' },
            { category: 'Orbital Parameters', label: 'Inclination', value: '93.064°' },
            { category: 'Orbital Parameters', label: 'Period', value: '2 hours' },
            { category: 'Orbital Parameters', label: 'RAAN', value: '34.98°' },
            { category: 'Orbital Parameters', label: 'Argument of periareion', value: '0°' },
            { category: 'Orbital Parameters', label: 'Mean anomaly', value: '0°' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: 'October 24, 2001',
            },
          ],
        },
        {
          id: 'mars-express',
          category: 'satellites',
          subcategory: 'functional',
          name: 'Mars Express',
          cover: '/assets/satellites/mars_express.webp',
          description:
            'Mars Express is a space exploration mission being conducted by the European Space Agency (ESA). The Mars Express mission is exploring the planet Mars, and is the first planetary mission attempted by the agency."Express" originally referred to the speed and efficiency with which the spacecraft was designed and built. However, "Express" also describes the spacecraft\'s relatively short interplanetary voyage, a result of being launched when the orbits of Earth and Mars brought them closer than they had been in about 60,000 years.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'ESA' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2003-022A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '27816' },

            {
              category: 'Mission Duration',
              label: 'Elapsed since launch',
              value: '20 years and 3 months',
            },

            { category: 'Spacecraft Properties', label: 'Launch mass', value: '1,123 kg' },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '666 kg | 1,468 lb' },
            { category: 'Spacecraft Properties', label: 'Power', value: '460 watts' },

            { category: 'Launch', label: 'Launch date', value: 'June 2, 2003, 17:45 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Soyuz-FG/Fregat' },
            { category: 'Launch', label: 'Launch site', value: 'Baikonur 31/6' },
            { category: 'Launch', label: 'Contractor', value: 'Starsem' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Eccentricity', value: '0.571' },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude',
              value: '298 km | 185 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude',
              value: '10,107 km | 6,280 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '86.3 degrees' },
            { category: 'Orbital Parameters', label: 'Period', value: '7.5 hours' },
            {
              category: 'Orbital Parameters',
              label: 'Spacecraft component',
              value: 'Mars Express',
            },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: 'December 25, 2003, 03:00 UTC',
            },
          ],
        },
        {
          id: 'mro',
          category: 'satellites',
          subcategory: 'functional',
          name: 'Mars Reconnaissance Orbiter',
          cover: '/assets/satellites/mro.webp',
          model3d: {
            path: '/assets/models/mro_compressed.glb',
            initialScale: 0.5,
            cameraPosition: [0, 0, 17],
          },
          description:
            "The Mars Reconnaissance Orbiter (MRO) is a spacecraft designed to search for the existence of water on Mars and provide support for missions to Mars, as part of NASA's Mars Exploration Program. It was launched from Cape Canaveral on August 12, 2005, at 11:43 UTC and reached Mars on March 10, 2006, at 21:24 UTC. In November 2006, after six months of aerobraking, it entered its final science orbit and began its primary science phase. MRO played a key role in choosing safe landing sites for the Phoenix lander in 2008, Mars Science Laboratory / Curiosity rover in 2012, InSight lander in 2018, and the Mars 2020 / Perseverance rover in 2021.",
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            {
              category: 'Mission Info',
              label: 'Operator',
              value: 'NASA / Jet Propulsion Laboratory',
            },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2005-029A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '28788' },

            {
              category: 'Mission Duration',
              label: 'Duration from launch',
              value: '18 years and 21 days',
            },

            {
              category: 'Mission Objectives',
              label: 'Objective 1',
              value:
                'Observe the present climate, particularly its atmospheric circulation and seasonal variations',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 2',
              value: 'Search for signs of water, both past and present',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 3',
              value: "Understand how it altered the planet's surface",
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 4',
              value: 'Map and characterize the geological forces that shaped the surface',
            },

            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer',
              value:
                'Lockheed Martin / University of Arizona / Applied Physics Laboratory / Italian Space Agency / Malin Space Science Systems',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '2,180 kg | 4,810 lb',
            },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '1,031 kg | 2,273 lb' },
            { category: 'Spacecraft Properties', label: 'Payload mass', value: '139 kg | 306 lb' },
            { category: 'Spacecraft Properties', label: 'Power', value: '600–2000 watts' },

            { category: 'Launch', label: 'Launch date', value: 'August 12, 2005, 11:43:00 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Atlas V 401' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral SLC-41' },
            { category: 'Launch', label: 'Contractor', value: 'Lockheed Martin' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Regime', value: 'Sun-synchronous' },
            { category: 'Orbital Parameters', label: 'Inclination', value: '93 degrees' },
            { category: 'Orbital Parameters', label: 'Period', value: '111 minutes' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: 'March 10, 2006, 21:24:00 UTC',
            },
          ],
        },
        {
          id: 'maven',
          category: 'satellites',
          subcategory: 'functional',
          name: 'MAVEN',
          cover: '/assets/satellites/maven.webp',
          model3d: {
            path: '/assets/models/maven_compressed.glb',
            initialScale: 0.5,
            cameraPosition: [0, 0, 17],
          },
          description:
            'MAVEN (Mars Atmosphere and Volatile Evolution) is a NASA spacecraft orbiting Mars to study the loss of that planet\'s atmospheric gases to space, providing insight into the history of the planet\'s climate and water.The name is an acronym for "Mars Atmosphere and Volatile Evolution" while the word maven also denotes "a person who has special knowledge or experience, an expert".',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars atmospheric research' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2013-063A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '39378' },

            { category: 'Mission Duration', label: 'Planned', value: '2 years' },
            {
              category: 'Mission Duration',
              label: 'Elapsed',
              value:
                '8 years, 11 months, 12 days (in progress with science phase extended indefinitely)',
            },

            {
              category: 'Mission Objectives',
              label: 'Objective 1',
              value:
                'Measure the composition and structure of the upper atmosphere and ionosphere and determine the processes responsible for controlling them',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 2',
              value:
                'Measure the rate of loss of gas from the top of the atmosphere to space, and determine the processes responsible for controlling them',
            },
            {
              category: 'Mission Objectives',
              label: 'Objective 3',
              value:
                'Determine properties and characteristics that will allow us to extrapolate backwards in time to determine the integrated loss to space over the four-billion-year history recorded in the geological record',
            },

            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer',
              value: 'Lockheed Martin Space Systems',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '2,454 kg | 5,410 lb',
            },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '809 kg | 1,784 lb' },
            { category: 'Spacecraft Properties', label: 'Payload mass', value: '65 kg | 143 lb' },
            {
              category: 'Spacecraft Properties',
              label: 'Dimensions',
              value: '2.3 m × 2.3 m × 2 m',
            },
            { category: 'Spacecraft Properties', label: 'Power', value: '1135 watts' },

            { category: 'Launch', label: 'Launch date', value: '18 November 2013, 18:28:00 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Atlas V 401 (AV-038)' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral, SLC-41' },
            { category: 'Launch', label: 'Contractor', value: 'United Launch Alliance' },

            {
              category: 'Orbital Parameters',
              label: 'Reference system',
              value: 'Areocentric orbit',
            },
            { category: 'Orbital Parameters', label: 'Regime', value: 'Elliptic orbit' },
            {
              category: 'Orbital Parameters',
              label: 'Periareon altitude',
              value: '150 km | 93 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareon altitude',
              value: '6,200 km | 3,900 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '75°' },
            { category: 'Orbital Parameters', label: 'Period', value: '4.5 hours' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '22 September 2014, 02:24 UTC',
            },
          ],
        },
        {
          id: 'exomars',
          category: 'satellites',
          subcategory: 'functional',
          name: 'ExoMars',
          cover: '/assets/satellites/exo_mars.webp',
          description:
            'The ExoMars Trace Gas Orbiter (TGO or ExoMars Orbiter) is a collaborative project between the European Space Agency (ESA) and the Russian Roscosmos agency that sent an atmospheric research orbiter and the Schiaparelli demonstration lander to Mars in 2016 as part of the European-led ExoMars programme.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'ESA · Roscosmos' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2016-017A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '41388' },

            { category: 'Mission Duration', label: 'Planned', value: '7 years' },
            { category: 'Mission Duration', label: 'Elapsed', value: '7 years, 5 months, 19 days' },

            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer',
              value: 'Thales Alenia Space',
            },
            { category: 'Spacecraft Properties', label: 'Launch mass', value: '4,332 kg' },
            {
              category: 'Spacecraft Properties',
              label: 'Payload mass (Instruments)',
              value: '113.8 kg | 251 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Payload mass (Schiaparelli)',
              value: '577 kg | 1,272 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Dimensions',
              value: '3.2 × 2 × 2 m | 10.5 × 6.6 × 6.6 ft',
            },
            { category: 'Spacecraft Properties', label: 'Power', value: '~2000 W' },

            { category: 'Launch', label: 'Launch date', value: '14 March 2016, 09:31 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Proton-M/Briz-M' },
            { category: 'Launch', label: 'Launch site', value: 'Baikonur 200/39' },
            { category: 'Launch', label: 'Contractor', value: 'Khrunichev' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Regime', value: 'Circular' },
            { category: 'Orbital Parameters', label: 'Eccentricity', value: '0' },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude',
              value: '400 km | 250 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude',
              value: '400 km | 250 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '74 degrees' },
            { category: 'Orbital Parameters', label: 'Period', value: '2 hours' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '19 October 2016, 15:24 UTC',
            },

            { category: 'Transponders', label: 'Band', value: 'X band & UHF band' },
            { category: 'Transponders', label: 'Frequency', value: '390–450 MHz' },
            { category: 'Transponders', label: 'TWTA power', value: '65 W' },
          ],
        },
        {
          id: 'hope',
          category: 'satellites',
          subcategory: 'functional',
          name: 'Emirates Mars Mission',
          cover: '/assets/satellites/hope.webp',
          description:
            "The Emirates Mars Mission (Hope Probe) is a United Arab Emirates Space Agency uncrewed space exploration mission to Mars.The mission design, development, and operations are led by the Mohammed bin Rashid Space Centre(MBRSC).The spacecraft was assembled in the United States at the University of Colorado Boulder's Laboratory for Atmospheric and Space Physics (LASP) by the Emirati engineers, assisted by their American counterparts, with support from Arizona State University (ASU) and the University of California, Berkeley. The project was led by MBRSC at every stage.",
          characteristics: [
            {
              category: 'Mission Info',
              label: 'Operator',
              value: 'Mohammed bin Rashid Space Centre',
            },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2020-047A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '45918' },

            { category: 'Mission Duration', label: 'Planned', value: '2 years' },
            { category: 'Mission Duration', label: 'Elapsed', value: '935 days' },

            {
              category: 'Spacecraft Properties',
              label: 'Spacecraft',
              value: 'Hope (Arabic: الأمل, Al-Amal)',
            },
            { category: 'Spacecraft Properties', label: 'Manufacturer', value: 'MBRSC' },
            {
              category: 'Spacecraft Properties',
              label: 'Partners',
              value: 'LASP (CU Boulder) | UC Berkeley | ASU',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '1350 kg, including 800 kg hydrazine fuel',
            },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '550 kg' },
            { category: 'Spacecraft Properties', label: 'Dimensions', value: '2.37 m × 2.90 m' },
            {
              category: 'Spacecraft Properties',
              label: 'Power',
              value: '1800 watts from two solar panels',
            },

            { category: 'Launch', label: 'Launch date', value: '19 July 2020, 21:58:14 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'H-IIA' },
            { category: 'Launch', label: 'Launch site', value: 'Tanegashima, LP-1' },
            { category: 'Launch', label: 'Contractor', value: 'Mitsubishi Heavy Industries' },

            {
              category: 'Orbital Parameters',
              label: 'Periareon altitude',
              value: '20,000 km | 12,000 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareon altitude',
              value: '43,000 km | 27,000 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Inclination',
              value: 'Supersynchronous orbit',
            },
            { category: 'Orbital Parameters', label: 'Period', value: '55 hours' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '9 February 2021, 15:30 UTC',
            },

            {
              category: 'Instruments',
              label: 'Instrument 1',
              value: 'EXI (Emirates eXploration Imager)',
            },
            {
              category: 'Instruments',
              label: 'Instrument 2',
              value: 'EMIRS (Emirates Mars InfraRed Spectrometer)',
            },
            {
              category: 'Instruments',
              label: 'Instrument 3',
              value: 'EMUS (Emirates Mars Ultraviolet Spectrometer)',
            },
          ],
        },
        {
          id: 'tianwen-1',
          category: 'satellites',
          subcategory: 'functional',
          name: 'Tianwen-1',
          cover: '/assets/satellites/tianwen_1.webp',
          description:
            'Tianwen-1 is an interplanetary mission by the China National Space Administration (CNSA) which sent a robotic spacecraft to Mars, consisting of 6 spacecraft: an orbiter, two deployable cameras, lander, remote camera, and the Zhurong rover. The spacecraft, with a total mass of nearly five tons, is one of the heaviest probes launched to Mars and carries 14 scientific instruments. It is the first in a series of planned missions undertaken by CNSA as part of its Planetary Exploration of China program.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars exploration' },
            { category: 'Mission Info', label: 'Operator', value: 'CNSA' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2020-049A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '45935' },

            { category: 'Mission Duration', label: 'Elapsed', value: '1138 days' },
            { category: 'Mission Duration', label: 'Orbiter Planned', value: '2 Earth years' },
            {
              category: 'Mission Duration',
              label: 'Orbiter Since orbit insertion',
              value: '935 days',
            },
            {
              category: 'Mission Duration',
              label: 'Zhurong Planned',
              value: '90 sols (93 earth days)',
            },
            { category: 'Mission Duration', label: 'Zhurong Since deployment', value: '835 days' },

            { category: 'Spacecraft Properties', label: 'Manufacturer', value: 'CNSA' },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Total)',
              value: '5,000 kg | 11,000 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Orbiter)',
              value: '3,715 kg | 8,190 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Zhurong)',
              value: '240 kg | 530 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Dimensions (Zhurong)',
              value: '2.6 m × 3 m × 1.85 m | 8 ft 6 in × 9 ft 10 in × 6 ft 1 in',
            },

            { category: 'Launch', label: 'Launch date', value: '23 July 2020, 04:41:15 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Long March 5 (Y4)' },
            { category: 'Launch', label: 'Launch site', value: 'Wenchang LC-101' },
            {
              category: 'Launch',
              label: 'Contractor',
              value: 'China Aerospace Science and Technology Corporation',
            },
            { category: 'Launch', label: 'Spacecraft component', value: 'Tianwen-1 Orbiter' },
            {
              category: 'Launch',
              label: 'Orbital insertion',
              value: '10 February 2021, 11:52 UTC',
            },

            {
              category: 'Components',
              label: 'Flyby of Mars (TDC-1)',
              value: '~10 February 2021 (deployed from Tianwen-1 Orbiter in September 2020)',
            },
            {
              category: 'Components',
              label: 'Mars lander - Landing date',
              value: '14 May 2021, 23:18 UTC',
            },
            {
              category: 'Components',
              label: 'Mars lander - Landing site',
              value: 'Utopia Planitia',
            },
            {
              category: 'Components',
              label: 'Mars lander - Coordinates',
              value: '25.066°N 109.925°E',
            },
            {
              category: 'Components',
              label: 'Zhurong Rover - Landing date',
              value: '14 May 2021, 23:18 UTC (deployed from lander on 22 May 2021, 02:40 UTC)',
            },
            {
              category: 'Components',
              label: 'Zhurong Rover - Distance driven',
              value: '1.921 km | 1.194 mi as of 5 May 2022',
            },
            {
              category: 'Components',
              label: 'Remote Camera (TRC) - Landing date',
              value: '14 May 2021, 23:18 UTC (deployed from Zhurong rover on 1 June 2021)',
            },
            {
              category: 'Components',
              label: 'Deployable Camera 2 (TDC-2)',
              value:
                '10 February 2021, 11:52 UTC (entered orbit with the orbiter but was released on 31 December 2021)',
            },
          ],
        },
      ],
    },
    {
      name: 'Non-Functional Satellites',
      category: 'satellites',
      subcategory: 'non-functional',
      cover: '/assets/covers/non_functional_satellites.webp',
      children: [
        {
          id: 'viking-1',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Viking 1',
          cover: '/assets/satellites/viking.webp',
          description:
            "Viking 1 was the first of two spacecraft, along with Viking 2, each consisting of an orbiter and a lander, sent to Mars as part of NASA's Viking program. The lander touched down on Mars on July 20, 1976, the first successful Mars lander in history. Viking 1 operated on Mars for 2,307 days or 2245 Martian solar days, the longest Mars surface mission until the record was broken by the Opportunity rover on May 19, 2010.",
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Orbiter and lander' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA' },
            { category: 'Mission Info', label: 'COSPAR ID (Orbiter)', value: '1975-075A' },
            { category: 'Mission Info', label: 'COSPAR ID (Lander)', value: '1975-075C' },
            { category: 'Mission Info', label: 'SATCAT no. (Orbiter)', value: '8108' },
            { category: 'Mission Info', label: 'SATCAT no. (Lander)', value: '9024' },

            { category: 'Mission Duration', label: 'Orbiter', value: '1,846 days (1797 sols)' },
            { category: 'Mission Duration', label: 'Lander', value: '2,306 days (2,245 sols)' },
            { category: 'Mission Duration', label: 'Launch to last contact', value: '2,642 days' },

            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer (Orbiter)',
              value: 'NASA JPL',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer (Lander)',
              value: 'Martin Marietta',
            },
            { category: 'Spacecraft Properties', label: 'Launch mass', value: '3,530 kg' },
            {
              category: 'Spacecraft Properties',
              label: 'Dry mass (Orbiter)',
              value: '883 kg | 1,947 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Dry mass (Lander)',
              value: '572 kg | 1,261 lb',
            },
            { category: 'Spacecraft Properties', label: 'Power (Orbiter)', value: '620 W' },
            { category: 'Spacecraft Properties', label: 'Power (Lander)', value: '70 W' },

            { category: 'Launch', label: 'Launch date', value: '21:22, August 20, 1975 (UTC)' },
            { category: 'Launch', label: 'Rocket', value: 'Titan IIIE/Centaur' },
            { category: 'Launch', label: 'Launch site', value: 'LC-41, Cape Canaveral' },

            { category: 'End of Mission', label: 'Last contact', value: 'November 11, 1982' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion (Orbiter)',
              value: 'June 19, 1976',
            },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude (Orbiter)',
              value: '320 km | 200 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude (Orbiter)',
              value: '56,000 km | 35,000 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination (Orbiter)', value: '39.3°' },
            {
              category: 'Orbital Parameters',
              label: 'Landing date (Lander)',
              value: 'July 20, 1976, 11:53:06 UTC',
            },
          ],
        },
        {
          id: 'viking-2',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Viking 2',
          cover: '/assets/satellites/viking.webp',
          description:
            'The Viking 2 mission was part of the American Viking program to Mars, and consisted of an orbiter and a lander essentially identical to that of the Viking 1 mission. Viking 2 was operational on Mars for 1281 sols (3 years, 221 days). The Viking 2 lander operated on the surface for 1,316 days, or 1281 sols, and was turned off on April 12, 1980, when its batteries failed. The orbiter worked until July 25, 1978, returning almost 16,000 images in 706 orbits around Mars.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Orbiter and Lander' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA' },
            { category: 'Mission Info', label: 'COSPAR ID (Orbiter)', value: '1975-083A' },
            { category: 'Mission Info', label: 'COSPAR ID (Lander)', value: '1975-083C' },
            { category: 'Mission Info', label: 'SATCAT no. (Orbiter)', value: '8199' },
            { category: 'Mission Info', label: 'SATCAT no. (Lander)', value: '9408' },

            { category: 'Mission Duration', label: 'Orbiter', value: '1050 days (1022 sol)' },
            { category: 'Mission Duration', label: 'Lander', value: '1316 days (1281 sol)' },
            { category: 'Mission Duration', label: 'Launch to last contact', value: '1,676 days' },

            { category: 'Spacecraft Properties', label: 'Manufacturer (Orbiter)', value: 'JPL' },
            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer (Lander)',
              value: 'Martin Marietta',
            },
            { category: 'Spacecraft Properties', label: 'Launch mass', value: '3,530 kg' },
            {
              category: 'Spacecraft Properties',
              label: 'Dry mass (Orbiter)',
              value: '883 kg | 1,947 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Dry mass (Lander)',
              value: '572 kg | 1,261 lb',
            },
            { category: 'Spacecraft Properties', label: 'Power (Orbiter)', value: '620 W' },
            { category: 'Spacecraft Properties', label: 'Power (Lander)', value: '70 W' },

            { category: 'Launch', label: 'Launch date', value: '18:39, September 9, 1975 (UTC)' },
            { category: 'Launch', label: 'Rocket', value: 'Titan IIIE with Centaur upper stage' },
            { category: 'Launch', label: 'Launch site', value: 'LC-41, Cape Canaveral' },

            { category: 'End of Mission', label: 'Last contact', value: 'April 12, 1980' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion (Orbiter)',
              value: 'August 7, 1976',
            },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude (Orbiter)',
              value: '302 km | 188 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude (Orbiter)',
              value: '33,176 km | 20,615 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination (Orbiter)', value: '80.5°' },
            {
              category: 'Orbital Parameters',
              label: 'Landing date (Lander)',
              value: 'September 3, 1976, 22:37:50 UTC',
            },
          ],
        },
        {
          id: 'mariner-9',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Mariner 9',
          cover: '/assets/satellites/mariner_9.webp',
          description:
            'Mariner 9 was a robotic spacecraft that contributed greatly to the exploration of Mars and was part of the NASA Mariner program. Mariner 9 was launched toward Mars on May 30, 1971, from LC-36B at Cape Canaveral Air Force Station, Florida, and reached the planet on November 14 of the same year, becoming the first spacecraft to orbit another planet – only narrowly beating the Soviet probes Mars 2 (launched May 19) and Mars 3 (launched May 28), which both arrived at Mars only weeks later. After the occurrence of dust storms on the planet for several months following its arrival, the orbiter managed to send back clear pictures of the surface.Mariner 9 successfully returned 7, 329 images over the course of its mission, which concluded in October 1972.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA / JPL' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '1971-051A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '5261' },

            { category: 'Mission Duration', label: 'Duration', value: '51 years and 5 months' },

            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer',
              value: 'Jet Propulsion Laboratory',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '997.9 kg | 2,200 lb',
            },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '558.8 kg | 1,232 lb' },
            { category: 'Spacecraft Properties', label: 'Power', value: '500 watts' },

            { category: 'Launch', label: 'Launch date', value: 'May 30, 1971, 22:23:04 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Atlas SLV-3C Centaur-D' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral' },

            { category: 'End of Mission', label: 'Disposal', value: 'Decommissioned' },
            { category: 'End of Mission', label: 'Deactivated', value: 'October 27, 1972' },
            { category: 'End of Mission', label: 'Decay date', value: 'Around October 2022' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Eccentricity', value: '0.6014' },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude',
              value: '1,650 km | 1,030 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude',
              value: '16,860 km | 10,480 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '64.4 degrees' },
            {
              category: 'Orbital Parameters',
              label: 'Period',
              value: '11.9 hours | 719.47 minutes',
            },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: 'November 14, 1971, 00:42:00 UTC',
            },

            {
              category: 'Instruments',
              label: 'Instrument 1',
              value: 'Ultraviolet Spectrometer (UVS)',
            },
            {
              category: 'Instruments',
              label: 'Instrument 2',
              value: 'Infrared Interferometer Spectrometer (IRIS)',
            },
            {
              category: 'Instruments',
              label: 'Instrument 3',
              value:
                'Celestial Mechanics (not a separate instrument; relied upon tracking measurements)',
            },
            {
              category: 'Instruments',
              label: 'Instrument 4',
              value:
                'S-Band Occultation (not a separate instrument; observed attenuation of communication signal)',
            },
            { category: 'Instruments', label: 'Instrument 5', value: 'Infrared Radiometer (IRR)' },
            {
              category: 'Instruments',
              label: 'Instrument 6',
              value: 'Visual Imaging System (achieved a resolution of 98 meters per pixel)',
            },
          ],
        },
        {
          id: 'mgs',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Mars Global Surveyor',
          cover: '/assets/satellites/mgs.webp',
          description:
            "MGS (Mars Global Surveyor) was an American robotic space probe developed by NASA's Jet Propulsion Laboratory and launched November 1996. MGS was a global mapping mission that examined the entire planet, from the ionosphere down through the atmosphere to the surface. As part of the larger Mars Exploration Program, Mars Global Surveyor performed atmospheric monitoring for sister orbiters during aerobraking, and helped Mars rovers and lander missions by identifying potential landing sites and relaying surface telemetry.",
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'NASA / JPL' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '1996-062A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '24648' },

            {
              category: 'Mission Duration',
              label: 'Duration',
              value: '10 years, 2 months, and 20 days',
            },

            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 1',
              value: 'Characterize the surface features and geological processes on Mars.',
            },
            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 2',
              value:
                'Determine the composition, distribution, and physical properties of surface minerals, rocks, and ice.',
            },
            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 3',
              value: 'Determine the global topography, planet shape, and gravitational field.',
            },
            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 4',
              value:
                'Establish the nature of the magnetic field and map the crustal remnant field.',
            },
            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 5',
              value: 'Monitor global weather and the thermal structure of the atmosphere.',
            },
            {
              category: 'Mission Objectives (Primary)',
              label: 'Objective 6',
              value:
                "Study interactions between Mars' surface and the atmosphere by monitoring surface features, polar caps, the polar energy balance, and dust and clouds over a seasonal cycle.",
            },

            {
              category: 'Mission Objectives (Extended)',
              label: 'Objective 1',
              value:
                "Continued weather monitoring in collaboration with NASA's Mars Reconnaissance Orbiter.",
            },
            {
              category: 'Mission Objectives (Extended)',
              label: 'Objective 2',
              value:
                'Imaging of possible landing sites for the 2007 Phoenix spacecraft and the 2011 Curiosity rover.',
            },
            {
              category: 'Mission Objectives (Extended)',
              label: 'Objective 3',
              value:
                'Observation and analysis of key sites of scientific interest, such as sedimentary-rock outcrop sites.',
            },
            {
              category: 'Mission Objectives (Extended)',
              label: 'Objective 4',
              value: 'Continued monitoring of surface changes due to wind and ice.',
            },

            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '1,030.5 kg | 2,272 lb',
            },
            { category: 'Spacecraft Properties', label: 'Power', value: '980 watts' },

            { category: 'Launch', label: 'Launch date', value: '7 November 1996, 17:00 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Delta II 7925' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral LC-17A' },
            { category: 'Launch', label: 'Contractor', value: 'Boeing IDS' },

            { category: 'End of Mission', label: 'Disposal', value: 'Decommissioned' },
            { category: 'End of Mission', label: 'Last contact', value: '2 November 2006' },
            { category: 'End of Mission', label: 'Decay date', value: '2050 (estimated)' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            { category: 'Orbital Parameters', label: 'Regime', value: 'Sun-synchronous' },
            {
              category: 'Orbital Parameters',
              label: 'Semi-major axis',
              value: '3,769 km | 2,342 mi',
            },
            { category: 'Orbital Parameters', label: 'Eccentricity', value: '0.008' },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude',
              value: '372.8 km | 231.6 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude',
              value: '436.5 km | 271.2 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '92.9 degrees' },
            { category: 'Orbital Parameters', label: 'Period', value: '1.95 hours' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '11 September 1997, 01:17 UTC',
            },
          ],
        },
        {
          id: 'mars-2',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Mars 2',
          cover: '/assets/satellites/mars_235.webp',
          description:
            'The Mars 2 was an uncrewed space probe of the Mars program, a series of uncrewed Mars landers and orbiters launched by the Soviet Union beginning 19 May 1971. The Mars 2 and Mars 3 missions consisted of identical spacecraft, each with an orbiter and an attached lander. The orbiter is identical to the Venera 9 bus. The type of bus/orbiter is the 4MV. They were launched by a Proton-K heavy launch vehicle with a Blok D upper stage. The lander of Mars 2 became the first human-made object to reach the surface of Mars, although the landing system failed and the lander was lost.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Orbiter and lander' },
            { category: 'Mission Info', label: 'Operator', value: 'Soviet Union' },
            { category: 'Mission Info', label: 'COSPAR ID (Orbiter)', value: '1971-045A' },
            { category: 'Mission Info', label: 'COSPAR ID (Lander)', value: '1971-045D' },
            { category: 'Mission Info', label: 'SATCAT no. (Orbiter)', value: '5234' },
            { category: 'Mission Info', label: 'SATCAT no. (Lander)', value: '5739' },

            { category: 'Mission Duration', label: 'Duration', value: '461 days' },

            { category: 'Spacecraft Properties', label: 'Manufacturer', value: 'OKB-1' },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Combined)',
              value: '4,650 kg | 10,250 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Orbiter)',
              value: '3,440 kg | 7,580 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Lander)',
              value: '1,210 kg | 2,670 lb',
            },

            { category: 'Launch', label: 'Launch date', value: '16:22:44, May 19, 1971 (UTC)' },
            { category: 'Launch', label: 'Rocket', value: 'Proton K with Blok D upper stage' },

            { category: 'End of Mission', label: 'Disposal', value: 'Decommissioned' },
            { category: 'End of Mission', label: 'Deactivated', value: 'August 22, 1972' },
            {
              category: 'End of Mission',
              label: 'Last contact',
              value: 'Last data transmission July 1972',
            },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '27 November 1971',
            },
            { category: 'Orbital Parameters', label: 'Orbits', value: '362' },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude',
              value: '1,380 km | 860 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude',
              value: '24,940 km | 15,500 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '48.9°' },
            {
              category: 'Orbital Parameters',
              label: 'Landing date (Lander)',
              value: '27 November 1971',
            },
          ],
        },
        {
          id: 'mars-3',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Mars 3',
          cover: '/assets/satellites/mars_235.webp',
          description:
            'Mars 3 was a robotic space probe of the Soviet Mars program, launched May 28, 1971, nine days after its twin spacecraft Mars 2. The probes were identical robotic spacecraft launched by Proton-K rockets with a Blok D upper stage, each consisting of an orbiter and an attached lander. After the Mars 2 lander crashed on the Martian surface, the Mars 3 lander became the first spacecraft to attain a soft landing on Mars, on December 2, 1971. It failed 110 seconds after landing, having transmitted only a gray image with no details. The Mars 2 orbiter and Mars 3 orbiter continued to circle Mars and transmit images back to Earth for another eight months.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Orbiter and lander' },
            { category: 'Mission Info', label: 'Operator', value: 'Soviet Union' },
            { category: 'Mission Info', label: 'COSPAR ID (Orbiter)', value: '1971-049A' },
            { category: 'Mission Info', label: 'COSPAR ID (Lander)', value: '1971-049C' },
            { category: 'Mission Info', label: 'SATCAT no. (Orbiter)', value: '5252' },
            { category: 'Mission Info', label: 'SATCAT no. (Lander)', value: '5667' },

            { category: 'Mission Duration', label: 'Orbiter', value: '452 days' },

            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Combined)',
              value: '4,650 kg | 10,250 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Orbiter)',
              value: '3,440 kg | 7,580 lb',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Lander)',
              value: '1,210 kg | 2,670 lb',
            },

            { category: 'Launch', label: 'Launch date', value: '15:26:30, May 28, 1971 (UTC)' },
            { category: 'Launch', label: 'Rocket', value: 'Proton-K with Blok D upper stage' },

            { category: 'End of Mission', label: 'Disposal', value: 'Decommissioned' },
            {
              category: 'End of Mission',
              label: 'Deactivated',
              value: 'August 22, 1972 (orbiter)',
            },
            {
              category: 'End of Mission',
              label: 'Last contact',
              value: 'Last data transmission July 1972',
            },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion (Orbiter)',
              value: 'December 2, 1971',
            },
            {
              category: 'Orbital Parameters',
              label: 'Periareion altitude (Orbiter)',
              value: '1,500 km | 930 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareion altitude (Orbiter)',
              value: '211,400 km | 131,400 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination (Orbiter)', value: '60°' },
            {
              category: 'Orbital Parameters',
              label: 'Landing date (Lander)',
              value: 'December 2, 1971 (11 Libra 192 Darian)',
            },
            {
              category: 'Orbital Parameters',
              label: 'Time of Landing (Lander)',
              value: '13:52 UTC SCET (MSD 34809 03:06 AMT)',
            },
          ],
        },
        {
          id: 'mars-5',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Mars 5',
          cover: '/assets/satellites/mars_235.webp',
          description:
            'Mars 5 also known as 3MS No.53S was a Soviet spacecraft launched to explore Mars.A 3MS spacecraft launched as part of the Mars programme, it successfully entered orbit around Mars in 1974. However, it failed a few weeks later.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'Lavochkin' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '1973-049A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '6754' },

            {
              category: 'Mission Duration',
              label: 'In Mars Orbit',
              value: '49 years, 6 months and 20 days',
            },

            { category: 'Spacecraft Properties', label: 'Spacecraft', value: '3MS No.53S' },
            { category: 'Spacecraft Properties', label: 'Manufacturer', value: 'Lavochkin' },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '3,440 kg | 7,580 lb',
            },

            { category: 'Launch', label: 'Launch date', value: '25 July 1973, 18:55:48 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Proton-K/D' },
            { category: 'Launch', label: 'Launch site', value: 'Baikonur 81/24' },

            { category: 'End of Mission', label: 'Last contact', value: '28 February 1974' },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Periareon altitude',
              value: '1,760 km | 1,090 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareon altitude',
              value: '35,300 km | 21,900 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '35.3 degrees' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '12 February 1974, 15:45 UTC',
            },
          ],
        },
        {
          id: 'phobos-2',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'Phobos 2',
          cover: '/assets/satellites/phobos_2.webp',
          description:
            'Phobos 2 was the last space probe designed by the Soviet Union. It was designed to explore the moons of Mars, Phobos and Deimos. It was launched on 12 July 1988, and entered orbit on 29 January 1989. Phobos 2 operated nominally throughout its cruise and Mars orbital insertion phase on 29 January 1989, gathering data on the Sun, interplanetary medium, Mars, and Phobos. Phobos 2 investigated the Mars surface and atmosphere and returned 37 images of Phobos with a resolution of up to 40 meters.',
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'Soviet Union' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '1988-059A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '19287' },

            {
              category: 'Mission Duration',
              label: 'Duration',
              value: '8 months, 15 days (launch until comm failure)',
            },

            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '6,220 kg (with orbital insertion hardware)',
            },

            { category: 'Launch', label: 'Launch date', value: '17:01:43, 12 July 1988 (UTC)' },
            { category: 'Launch', label: 'Rocket', value: 'Proton-K rocket' },

            {
              category: 'End of Mission',
              label: 'Last contact',
              value: '27 March 1989 (spacecraft signal failed to be reacquired)',
            },

            { category: 'Orbital Parameters', label: 'Reference system', value: 'Areocentric' },
            {
              category: 'Orbital Parameters',
              label: 'Orbital insertion',
              value: '29 January 1989',
            },
          ],
        },
        {
          id: 'mangalyaan',
          category: 'satellites',
          subcategory: 'non-functional',
          name: 'The Mars Orbiter Mission',
          cover: '/assets/logos/mom_logo.webp',
          description:
            "The Mars Orbiter Mission, unofficially known as Mangalyaan, was a space probe orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO).  It was India's first interplanetary mission and it made ISRO the fourth space agency to achieve Mars orbit, after Roscosmos, NASA, and the European Space Agency.It made India the first Asian nation to reach the Martian orbit and the first nation in the world to do so on its maiden attempt.",
          characteristics: [
            { category: 'Mission Info', label: 'Mission type', value: 'Mars orbiter' },
            { category: 'Mission Info', label: 'Operator', value: 'ISRO' },
            { category: 'Mission Info', label: 'COSPAR ID', value: '2013-060A' },
            { category: 'Mission Info', label: 'SATCAT no.', value: '39370' },

            { category: 'Mission Duration', label: 'Planned', value: '6 months' },
            { category: 'Mission Duration', label: 'Elapsed', value: '7 years, 6 months, 8 days' },

            { category: 'Spacecraft Properties', label: 'Bus', value: 'I-1K' },
            {
              category: 'Spacecraft Properties',
              label: 'Manufacturer',
              value: 'U R Rao Satellite Centre',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass',
              value: '1,337.2 kg | 2,948 lb',
            },
            { category: 'Spacecraft Properties', label: 'BOL mass', value: '≈550 kg | 1,210 lb' },
            { category: 'Spacecraft Properties', label: 'Dry mass', value: '482.5 kg | 1,064 lb' },
            { category: 'Spacecraft Properties', label: 'Payload mass', value: '13.4 kg | 30 lb' },
            {
              category: 'Spacecraft Properties',
              label: 'Dimensions',
              value: '1.5 m | 4.9 ft cube',
            },
            { category: 'Spacecraft Properties', label: 'Power', value: '840 watts' },

            { category: 'Launch', label: 'Launch date', value: '5 November 2013, 09:08 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'PSLV-XL C25' },
            { category: 'Launch', label: 'Launch site', value: 'Satish Dhawan Space Centre, FLP' },
            { category: 'Launch', label: 'Contractor', value: 'ISRO' },

            { category: 'End of Mission', label: 'Last contact', value: 'April 2022' },
            {
              category: 'End of Mission',
              label: 'Orbital insertion',
              value: '24 September 2014, 02:10 UTC (7:40 IST)',
            },

            {
              category: 'Orbital Parameters',
              label: 'Periareon altitude',
              value: '421.7 km | 262.0 mi',
            },
            {
              category: 'Orbital Parameters',
              label: 'Apoareon altitude',
              value: '76,993.6 km | 47,841.6 mi',
            },
            { category: 'Orbital Parameters', label: 'Inclination', value: '150.0°' },
          ],
        },
      ],
    },
  ],
};

export const ROVERS = {
  name: 'Rovers',
  category: 'rovers',
  cover: '/assets/covers/rovers.webp',
  children: [
    {
      name: 'Active Rovers',
      category: 'rovers',
      subcategory: 'active',
      cover: '/assets/covers/active_rovers.webp',
      children: [
        {
          id: 'curiosity',
          category: 'rovers',
          subcategory: 'active',
          name: 'Curiosity',
          cover: '/assets/rovers/curiosity.webp',
          model3d: {
            path: '/assets/models/curiosity_compressed.glb',
            initialScale: 1,
            cameraPosition: [0, 0, 6],
          },
          description:
            "Curiosity is a car-sized Mars rover exploring Gale crater and Mount Sharp on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on November 26, 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on August 6, 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.Adjusted for inflation, Curiosity has a life-cycle cost of US$3.2 billion in 2020 dollars.",
          characteristics: [
            { category: 'General Info', label: 'Owner', value: 'NASA' },
            { category: 'General Info', label: 'Manufacturer', value: 'Jet Propulsion Laboratory' },

            {
              category: 'Specifications',
              label: 'Dimensions',
              value: '2.9 m × 2.7 m × 2.2 m | 9 ft 6 in × 8 ft 10 in × 7 ft 3 in',
            },
            { category: 'Specifications', label: 'Dry mass', value: '899 kg | 1,982 lb' },

            {
              category: 'Objectives (Biological)',
              label: 'Objective 1',
              value: 'Determine the nature and inventory of organic carbon compounds',
            },
            {
              category: 'Objectives (Biological)',
              label: 'Objective 2',
              value:
                'Investigate the chemical building blocks of life (carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur)',
            },
            {
              category: 'Objectives (Biological)',
              label: 'Objective 3',
              value:
                'Identify features that may represent the effects of biological processes (biosignatures and biomolecules)',
            },

            {
              category: 'Objectives (Geological and geochemical)',
              label: 'Objective 1',
              value:
                'Investigate the chemical, isotopic, and mineralogical composition of the Martian surface and near-surface geological materials',
            },
            {
              category: 'Objectives (Geological and geochemical)',
              label: 'Objective 2',
              value: 'Interpret the processes that have formed and modified rocks and soils',
            },

            {
              category: 'Objectives (Planetary process)',
              label: 'Objective 1',
              value:
                'Assess long-timescale (i.e., 4-billion-year) Martian atmospheric evolution processes',
            },
            {
              category: 'Objectives (Planetary process)',
              label: 'Objective 2',
              value:
                'Determine present state, distribution, and cycling of water and carbon dioxide',
            },

            {
              category: 'Objectives (Surface radiation)',
              label: 'Objective 1',
              value:
                'Characterize the broad spectrum of surface radiation, including galactic and cosmic radiation, solar proton events and secondary neutrons.',
            },
            {
              category: 'Objectives (Surface radiation)',
              label: 'Objective 2',
              value:
                'Measure radiation exposure in the interior of the spacecraft during travel to Mars and on the surface, valuable for future crewed missions.',
            },

            { category: 'Communication', label: 'UHF', value: '~400 MHz, 2 Mbit/s' },
            { category: 'Communication', label: 'X band', value: '7–8 GHz, 800 bit/s' },

            { category: 'Power & Launch', label: 'Power', value: 'MMRTG: ~100 W (0.13 hp)' },
            { category: 'Power & Launch', label: 'Rocket', value: 'Atlas V 541' },

            { category: 'Instruments', label: 'Instrument 1', value: 'APXS' },
            { category: 'Instruments', label: 'Instrument 2', value: 'ChemCam' },
            { category: 'Instruments', label: 'Instrument 3', value: 'CheMin' },
            { category: 'Instruments', label: 'Instrument 4', value: 'DAN' },
            { category: 'Instruments', label: 'Instrument 5', value: 'Hazcam' },
            { category: 'Instruments', label: 'Instrument 6', value: 'MAHLI' },
            { category: 'Instruments', label: 'Instrument 7', value: 'MARDI' },
            { category: 'Instruments', label: 'Instrument 8', value: 'MastCam' },
            { category: 'Instruments', label: 'Instrument 9', value: 'Navcam' },
            { category: 'Instruments', label: 'Instrument 10', value: 'RAD' },
            { category: 'Instruments', label: 'Instrument 11', value: 'REMS' },
            { category: 'Instruments', label: 'Instrument 12', value: 'SAM' },

            {
              category: 'History',
              label: 'Launched',
              value: 'November 26, 2011, 15:02 UTC from Cape Canaveral SLC-41',
            },
            {
              category: 'History',
              label: 'Deployed',
              value: 'August 6, 2012, 05:17 UTC from the MSL EDLS',
            },
            { category: 'History', label: 'Location', value: 'Gale crater, Mars' },
            {
              category: 'History',
              label: 'Travelled',
              value: '30.00 km | 18.64 mi on Mars as of 30 May 2023',
            },
          ],
        },
        {
          id: 'perseverance',
          category: 'rovers',
          subcategory: 'active',
          name: 'Perseverance',
          cover: '/assets/rovers/perseverance.webp',
          model3d: {
            path: '/assets/models/perseverance_compressed.glb',
            initialScale: 1,
            cameraPosition: [0, 0, 6],
          },
          description:
            "Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission. It was manufactured by the Jet Propulsion Laboratory and launched on July 30, 2020, at 11:50 UTC.Confirmation that the rover successfully landed on Mars was received on February 18, 2021, at 20:55 UTC. As of 2 September 2023, Perseverance has been active on Mars for 901 sols (926 Earth days, or 2 years, 6 months and 15 days) since its landing. Following the rover's arrival, NASA named the landing site Octavia E. Butler Landing.Perseverance has a similar design to its predecessor rover, Curiosity, although it was moderately upgraded. It carries seven primary payload instruments, nineteen cameras, and two microphones.The rover also carried the mini-helicopter Ingenuity to Mars, an experimental aircraft and technology testbed that made the first powered flight on another planet on April 19, 2021. As of May 26, 2023, it has made 52 successful flights and continues to break its own records for speed, distance and altitude.",
          characteristics: [
            { category: 'General Info', label: 'Owner', value: 'NASA' },
            { category: 'General Info', label: 'Manufacturer', value: 'Jet Propulsion Laboratory' },

            {
              category: 'Specifications',
              label: 'Dimensions',
              value: '2.9 m × 2.7 m × 2.2 m | 9 ft 6 in × 8 ft 10 in × 7 ft 3 in',
            },
            { category: 'Specifications', label: 'Dry mass', value: '1,025 kg | 2,260 lb' },

            {
              category: 'Objectives (Looking for habitability)',
              label: 'Objective',
              value: 'Identify past environments that were capable of supporting microbial life.',
            },

            {
              category: 'Objectives (Seeking biosignatures)',
              label: 'Objective',
              value:
                'Seek signs of possible past microbial life in those habitable environments, particularly in specific rock types known to preserve signs over time.',
            },

            {
              category: 'Objectives (Caching samples)',
              label: 'Objective',
              value:
                "Collect core rock and regolith ('soil') samples and store them within the rover and on the Martian surface (as a backup) for delivery to a future sample return rocket.",
            },

            {
              category: 'Objectives (Preparing for humans)',
              label: 'Objective',
              value: 'Test oxygen production from the Martian atmosphere.',
            },

            { category: 'Communication', label: 'UHF', value: '~400 MHz, 2 Mbit/s' },
            { category: 'Communication', label: 'X band', value: '7–8 GHz, 800-bit/s' },

            { category: 'Power & Launch', label: 'Power', value: 'MMRTG; 110 watt' },
            { category: 'Power & Launch', label: 'Rocket', value: 'Atlas V 541' },

            { category: 'Instruments', label: 'Instrument 1', value: 'Cachecam' },
            { category: 'Instruments', label: 'Instrument 2', value: 'EDLC × 2' },
            { category: 'Instruments', label: 'Instrument 3', value: 'Hazcam × 8' },
            { category: 'Instruments', label: 'Instrument 4', value: 'Mastcam-Z' },
            { category: 'Instruments', label: 'Instrument 5', value: 'MEDA' },
            { category: 'Instruments', label: 'Instrument 6', value: 'Microphones' },
            { category: 'Instruments', label: 'Instrument 7', value: 'MOXIE' },
            { category: 'Instruments', label: 'Instrument 8', value: 'Navcam × 2' },
            { category: 'Instruments', label: 'Instrument 9', value: 'PIXL' },
            { category: 'Instruments', label: 'Instrument 10', value: 'RIMFAX' },
            { category: 'Instruments', label: 'Instrument 11', value: 'SHERLOC' },
            { category: 'Instruments', label: 'Instrument 12', value: 'SuperCam' },

            {
              category: 'History',
              label: 'Launched',
              value: 'July 30, 2020, 11:50 UTC from Cape Canaveral SLC-41',
            },
            {
              category: 'History',
              label: 'Deployed',
              value: 'February 18, 2021, 20:55 UTC from the Mars 2020 EDLS',
            },
            {
              category: 'History',
              label: 'Location',
              value: '18.447°N 77.402°E, Jezero crater, Mars',
            },
            {
              category: 'History',
              label: 'Travelled',
              value: '19.97 km | 12.41 mi as of 31 August 2023',
            },
          ],
        },
      ],
    },
    {
      name: 'Inactive Rovers',
      category: 'rovers',
      subcategory: 'inactive',
      cover: '/assets/covers/inactive_rovers.webp',
      children: [
        {
          id: 'sojourner',
          category: 'rovers',
          subcategory: 'inactive',
          name: 'Sojourner',
          cover: '/assets/rovers/sojourner.webp',
          description:
            'Sojourner is a robotic Mars rover that landed in the Ares Vallis channel in the Chryse Planitia region of the Oxia Palus quadrangle on July 4, 1997. Sojourner was operational on Mars for 92 sols (95 Earth days). It was the first wheeled vehicle to rove on a planet other than Earth and formed part of the Mars Pathfinder mission.',
          characteristics: [
            { category: 'Mission Duration', label: 'Planned', value: '7 sols (7 days)' },
            {
              category: 'Mission Duration',
              label: 'Mission end',
              value: '83 sols (85 days) from arrival on Mars',
            },

            {
              category: 'Spacecraft Properties',
              label: 'Dry mass',
              value: '11.5 kg | 25 lb (rover only)',
            },

            { category: 'Launch', label: 'Launch date', value: 'December 4, 1996, 06:58:07 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Delta II 7925 D240' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral LC-17B' },
            { category: 'Launch', label: 'Contractor', value: 'McDonnell Douglas' },

            { category: 'Deployment', label: 'Deployed from', value: 'Mars Pathfinder' },
            { category: 'Deployment', label: 'Deployment date', value: 'July 5, 1997' },

            { category: 'End of Mission', label: 'Last contact', value: 'September 27, 1997' },

            { category: 'Landing Info', label: 'Landing date', value: 'July 4, 1997 16:56:55 UTC' },
            {
              category: 'Landing Info',
              label: 'Landing site',
              value: 'Ares Vallis, Chryse Planitia, Mars',
            },
            { category: 'Landing Info', label: 'Coordinates', value: '19°7′48″N 33°13′12″W' },
            { category: 'Landing Info', label: 'Distance driven', value: '100 m | 330 ft' },
          ],
        },
        {
          id: 'spirit',
          category: 'rovers',
          subcategory: 'inactive',
          name: 'Spirit',
          cover: '/assets/rovers/spirit.webp',
          description:
            'Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (6 years, 77 days). It was one of two rovers of NASA\'s Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover got stuck in a "sand trap" in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010.',
          characteristics: [
            {
              category: 'Mission Duration',
              label: 'Planned',
              value: '90 Martian solar days (~92 Earth days)',
            },
            {
              category: 'Mission Duration',
              label: 'Operational',
              value: '2269 days from landing to last contact (2208 sols)',
            },
            {
              category: 'Mission Duration',
              label: 'Mobile',
              value: '1944 Earth days landing to final embedding (1892 sols)',
            },
            {
              category: 'Mission Duration',
              label: 'Total',
              value: '2695 days from landing to mission end (2623 sols)',
            },
            {
              category: 'Mission Duration',
              label: 'Launch to last contact',
              value: '6 years, 9 months, 12 days',
            },

            {
              category: 'Objectives',
              label: 'Objective 1',
              value:
                'Search for and characterize rocks and soils with clues to past water activity.',
            },
            {
              category: 'Objectives',
              label: 'Objective 2',
              value:
                'Determine the distribution and composition of minerals, rocks, and soils at landing sites.',
            },
            {
              category: 'Objectives',
              label: 'Objective 3',
              value: 'Study geologic processes that shaped the terrain and influenced chemistry.',
            },
            {
              category: 'Objectives',
              label: 'Objective 4',
              value:
                'Calibrate and validate observations made by Mars Reconnaissance Orbiter (MRO) instruments.',
            },
            {
              category: 'Objectives',
              label: 'Objective 5',
              value:
                'Search for iron-containing minerals and identify water-related mineral types.',
            },
            {
              category: 'Objectives',
              label: 'Objective 6',
              value:
                'Characterize mineralogy and textures of rocks and soils to understand their formation processes.',
            },
            {
              category: 'Objectives',
              label: 'Objective 7',
              value:
                'Look for geological clues about past environmental conditions when liquid water was present.',
            },
            {
              category: 'Objectives',
              label: 'Objective 8',
              value: 'Assess whether those environments were conducive to life.',
            },

            { category: 'Launch', label: 'Launch date', value: 'June 10, 2003, 17:58:47 UTC' },
            { category: 'Launch', label: 'Rocket', value: 'Delta II 7925-9.5' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral SLC-17A' },

            { category: 'End of Mission', label: 'Declared', value: 'May 25, 2011' },
            { category: 'End of Mission', label: 'Last contact', value: 'March 22, 2010' },

            { category: 'Spacecraft Properties', label: 'Launch mass (Total)', value: '1,063 kg' },
            { category: 'Spacecraft Properties', label: 'Launch mass (Rover)', value: '185 kg' },
            { category: 'Spacecraft Properties', label: 'Launch mass (Lander)', value: '348 kg' },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Backshell/parachute)',
              value: '209 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Heat shield)',
              value: '78 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Cruise stage)',
              value: '193 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Propellant)',
              value: '50 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Dry mass (Rover only)',
              value: '185 kg | 408 lb',
            },
            { category: 'Spacecraft Properties', label: 'Power', value: '140 watts' },

            {
              category: 'Orbital Parameters',
              label: 'Reference system',
              value: 'Heliocentric (transfer)',
            },
            { category: 'Orbital Parameters', label: 'Spacecraft component', value: 'Rover' },

            {
              category: 'Landing Info',
              label: 'Landing date',
              value: 'January 4, 2004, 04:35 UTC SCET',
            },
            { category: 'Landing Info', label: 'Landing site', value: '14.5684°S 175.472636°E' },
            { category: 'Landing Info', label: 'Distance driven', value: '7.73 km | 4.8 mi' },
          ],
        },
        {
          id: 'opportunity',
          category: 'rovers',
          subcategory: 'inactive',
          name: 'Opportunity',
          cover: '/assets/rovers/opportunity.webp',
          model3d: {
            path: '/assets/models/opportunity_compressed.glb',
            initialScale: 1,
            cameraPosition: [0, 0, 6],
          },
          description:
            "Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018. Opportunity was operational on Mars for 5111 sols (14 years, 138 days on Earth). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet.With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 47 days (in Earth time). By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles).",
          characteristics: [
            { category: 'Mission Duration', label: 'Planned', value: '90 sols (92.5 Earth days)' },
            {
              category: 'Mission Duration',
              label: 'Actual',
              value: '5,352 sols (8 Mars years) | 5,498 days (15 Earth years)',
            },

            {
              category: 'Launch',
              label: 'Launch date',
              value: 'July 8, 2003, 03:18 UTC; 20 years ago',
            },
            { category: 'Launch', label: 'Rocket', value: 'Delta II Heavy' },
            { category: 'Launch', label: 'Launch site', value: 'Cape Canaveral SLC-17B' },
            { category: 'Launch', label: 'Contractor', value: 'Boeing' },

            { category: 'End of Mission', label: 'Declared', value: 'February 13, 2019' },
            { category: 'End of Mission', label: 'Last contact', value: 'June 10, 2018' },

            {
              category: 'Objectives',
              label: 'Objective 1',
              value:
                'Search for and characterize rocks and soils with clues to past water activity.',
            },
            {
              category: 'Objectives',
              label: 'Objective 2',
              value:
                'Determine the distribution and composition of minerals, rocks, and soils at landing sites.',
            },
            {
              category: 'Objectives',
              label: 'Objective 3',
              value:
                'Study geologic processes that shaped the terrain and influenced the chemistry.',
            },
            {
              category: 'Objectives',
              label: 'Objective 4',
              value:
                'Calibrate and validate observations made by Mars Reconnaissance Orbiter (MRO) instruments.',
            },
            {
              category: 'Objectives',
              label: 'Objective 5',
              value:
                'Search for iron-containing minerals and identify water-related mineral types.',
            },
            {
              category: 'Objectives',
              label: 'Objective 6',
              value:
                'Characterize the mineralogy and textures of rocks and soils to understand their formation processes.',
            },
            {
              category: 'Objectives',
              label: 'Objective 7',
              value:
                'Look for geological clues about past environmental conditions when liquid water was present.',
            },
            {
              category: 'Objectives',
              label: 'Objective 8',
              value: 'Assess whether those environments were conducive to life.',
            },

            { category: 'Spacecraft Properties', label: 'Launch mass (Total)', value: '1,063 kg' },
            { category: 'Spacecraft Properties', label: 'Launch mass (Rover)', value: '185 kg' },
            { category: 'Spacecraft Properties', label: 'Launch mass (Lander)', value: '348 kg' },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Backshell and parachute)',
              value: '209 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Heat shield)',
              value: '78 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Cruise stage)',
              value: '193 kg',
            },
            {
              category: 'Spacecraft Properties',
              label: 'Launch mass (Propellant)',
              value: '50 kg',
            },

            {
              category: 'Landing Info',
              label: 'Landing date',
              value: 'January 25, 2004, 05:05 UTC SCET',
            },
            {
              category: 'Landing Info',
              label: 'Landing site',
              value: '1.9462°S 354.4734°E, Eagle, Meridiani Planum',
            },
            { category: 'Landing Info', label: 'Distance driven', value: '45.16 km | 28.06 mi' },
          ],
        },
        {
          id: 'zhurong',
          category: 'rovers',
          subcategory: 'inactive',
          name: 'Zhurong',
          cover: '/assets/rovers/zhurong_2.webp',
          description:
            'Zhurong is a Chinese rover on Mars, the country\'s first to land on another planet after it previously landed two rovers on the Moon. The rover is part of the Tianwen-1 mission to Mars conducted by the China National Space Administration (CNSA).Designed for a lifespan of 90 sols (93 Earth days), Zhurong was active for 347 sols (356.5 days) after its deployment on Mars\'s surface. The rover became inactive on 20 May 2022 due to approaching sandstorms and Martian winter, pending its self-awakening with appropriate temperature and sunlight conditions. Zhurong never woke up from its hibernation. The rover was expected to wake in December 2022 as winter in the Martian northern hemisphere drew to a close and sunlight increased, but did not. NASA images showed the rover in the same position where it had entered its hibernation period, almost a year earlier. Zhurong is named after a Chinese mytho-historical figure usually associated with fire and light, as Mars is called "the Planet of Fire" in China and some other countries in East Asia. It was selected by a public online vote held between 20 January 2021 and 28 February 2021, with Zhurong ranking first with 504,466 votes. The name was chosen with the meanings of "igniting the fire of interstellar exploration in China" and "to symbolize the Chinese people\'s determination to explore the stars and to uncover unknowns in the universe".',
          characteristics: [
            { category: 'General Info', label: 'Owner', value: 'CNSA' },
            {
              category: 'General Info',
              label: 'Manufacturer',
              value: 'China Academy of Space Technology',
            },

            {
              category: 'Specifications',
              label: 'Dimensions',
              value: '2.6 m × 3 m × 1.85 m | 8 ft 6 in × 9 ft 10 in × 6 ft 1 in',
            },
            { category: 'Specifications', label: 'Launch mass', value: '240 kg | 530 lb' },
            { category: 'Specifications', label: 'Power', value: 'Solar arrays' },
            { category: 'Specifications', label: 'Rocket', value: 'Long March 5' },

            { category: 'Instruments', label: 'Instrument 1', value: 'MarSCoDe' },
            { category: 'Instruments', label: 'Instrument 2', value: 'MCS' },
            { category: 'Instruments', label: 'Instrument 3', value: 'MSCam' },
            { category: 'Instruments', label: 'Instrument 4', value: 'NaTeCam' },
            { category: 'Instruments', label: 'Instrument 5', value: 'RoMAG' },
            { category: 'Instruments', label: 'Instrument 6', value: 'RoPeR' },

            {
              category: 'History',
              label: 'Launched',
              value: '23 July 2020, 23:18 UTC from Wenchang LC-101',
            },
            {
              category: 'History',
              label: 'Deployed',
              value: '22 May 2021, 02:40 UTC from Tianwen-1 lander',
            },
            {
              category: 'History',
              label: 'Location',
              value: '25.102°N 109.914°E, Utopia Planitia, Mars',
            },
            {
              category: 'History',
              label: 'Travelled',
              value: '1.921 km | 1.194 mi on Mars as of 5 May 2022',
            },
          ],
        },
      ],
    },
  ],
};

export const MISSIONS = {
  id: 'missions',
  name: 'Missions',
  category: 'missions',
  cover: '/assets/covers/missions.webp',
  description:
    'This is a list of spacecraft missions (including unsuccessful ones) relating to the planet Mars, such as orbiters and rovers.',
  launchesByDecade: [
    { decade: '1960s', launches: 12 },
    { decade: '1970s', launches: 11 },
    { decade: '1980s', launches: 2 },
    { decade: '1990s', launches: 6 },
    { decade: '2000s', launches: 8 },
    { decade: '2010s', launches: 6 },
    { decade: '2020s', launches: 3 },
  ],
  missionsList: [
    {
      mission: '1M No.1',
      spacecraft: '1M No.1',
      launchDate: '10 October 1960',
      operator: 'OKB-1 Soviet Union',
      missionType: 'Flyby',
      outcome: 'Launch failure',
      remarks: 'Failed to achieve Earth orbit',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/okb_1_logo.webp',
    },
    {
      mission: '1M No.2',
      spacecraft: '1M No.2',
      launchDate: '14 October 1960',
      operator: 'OKB-1 Soviet Union',
      missionType: 'Flyby',
      outcome: 'Launch failure',
      remarks: 'Failed to achieve Earth orbit',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/okb_1_logo.webp',
    },
    {
      mission: '2MV-4 No.1',
      spacecraft: '2MV-4 No.1',
      launchDate: '24 October 1962',
      operator: 'Soviet Union',
      missionType: 'Flyby',
      outcome: 'Launch failure',
      remarks: 'Booster stage ("Block L") disintegrated in LEO',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 1',
      spacecraft: 'Mars 1 (2MV-4 No.2)',
      launchDate: '1 November 1962',
      operator: 'Soviet Union',
      missionType: 'Flyby',
      outcome: 'Spacecraft failure',
      remarks: 'Communications lost before first flyby',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/mars_1_logo.webp',
    },
    {
      mission: '2MV-3 No.1',
      spacecraft: '2MV-3 No.1',
      launchDate: '4 November 1962',
      operator: 'Soviet Union',
      missionType: 'Lander',
      outcome: 'Launch failure',
      remarks: 'Never left LEO',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mariner 3',
      spacecraft: 'Mariner 3',
      launchDate: '5 November 1964',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Launch failure',
      remarks: 'Payload fairing failed to separate',
      carrierRocket: 'Atlas LV-3 Agena-D',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: 'Mariner 4',
      spacecraft: 'Mariner 4',
      launchDate: '28 November 1964',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Successful',
      remarks: 'First successful flyby of Mars on 15 July 1965',
      carrierRocket: 'Atlas LV-3 Agena-D',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: 'Zond 2',
      spacecraft: 'Zond 2 (3MV-4A No.2)',
      launchDate: '30 November 1964',
      operator: 'Soviet Union',
      missionType: 'Flyby',
      outcome: 'Spacecraft failure',
      remarks: 'Communications lost before flyby',
      carrierRocket: 'Molniya',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mariner 6',
      spacecraft: 'Mariner 6',
      launchDate: '25 February 1969',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Successful',
      carrierRocket: 'Atlas SLV-3C Centaur-D',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: '2M No.521 (1969A)',
      spacecraft: '2M No.521 (1969A)',
      launchDate: '27 March 1969',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Launch failure',
      remarks: 'Failed to achieve Earth orbit',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mariner 7',
      spacecraft: 'Mariner 7',
      launchDate: '27 March 1969',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Successful',
      carrierRocket: 'Atlas SLV-3C Centaur-D',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: '2M No.522 (1969B)',
      spacecraft: '2M No.522 (1969B)',
      launchDate: '2 April 1969',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Launch failure',
      remarks: 'Failed to achieve Earth orbit',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mariner 8',
      spacecraft: 'Mariner 8',
      launchDate: '9 May 1971',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Launch failure',
      remarks: 'Failed to achieve Earth orbit',
      carrierRocket: 'Atlas SLV-3C Centaur-D',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: 'Kosmos 419 (3MS No.170)',
      spacecraft: 'Kosmos 419 (3MS No.170)',
      launchDate: '10 May 1971',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Launch failure',
      remarks: 'Never left LEO; booster stage burn timer set incorrectly',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 2 (4M No.171)',
      spacecraft: 'Mars 2 (4M No.171)',
      launchDate: '19 May 1971',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Operated for 362 orbits',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/mars2_3_logo.webp',
    },
    {
      mission: 'Mars 2 lander (SA 4M No.171)',
      spacecraft: 'Mars 2 lander (SA 4M No.171)',
      launchDate: '19 May 1971',
      operator: 'Soviet Union',
      missionType: 'Lander',
      outcome: 'Spacecraft failure',
      remarks: 'First lander to impact Mars. Deployed from Mars 2, failed to land during attempt',
      logo: '/assets/logos/mars2_3_logo.webp',
    },
    {
      mission: 'Mars 4 (3MS No.52S)',
      spacecraft: 'Mars 4 (3MS No.52S)',
      launchDate: '21 July 1973',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Partial success',
      remarks:
        'Failed to perform orbital insertion burn. Returned photographs of Mars during flyby.',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 5 (3MS No.53S)',
      spacecraft: 'Mars 5 (3MS No.53S)',
      launchDate: '25 July 1973',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Contact lost after 9 days in Mars orbit. Returned 180 frames',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 6 (3MP No.50P)',
      spacecraft: 'Mars 6 (3MP No.50P)',
      launchDate: '5 August 1973',
      operator: 'Soviet Union',
      missionType: 'Flyby',
      outcome: 'Successful',
      remarks: 'Flyby bus collected data.',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 6 lander',
      spacecraft: 'Mars 6 lander',
      launchDate: '5 August 1973',
      operator: 'Soviet Union',
      missionType: 'Lander',
      outcome: 'Spacecraft failure',
      remarks: 'Contact lost upon landing, atmospheric data mostly unusable.',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 7 (3MP No.51P)',
      spacecraft: 'Mars 7 (3MP No.51P)',
      launchDate: '9 August 1973',
      operator: 'Soviet Union',
      missionType: 'Flyby',
      outcome: 'Successful',
      remarks: 'Flyby bus collected data.',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars 7 lander',
      spacecraft: 'Mars 7 lander',
      launchDate: '9 August 1973',
      operator: 'Soviet Union',
      missionType: 'Lander',
      outcome: 'Spacecraft failure',
      remarks: 'Separated from coast stage prematurely, failed to enter Martian atmosphere.',
      carrierRocket: 'Proton-K/D',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Viking 1 orbiter',
      spacecraft: 'Viking 1 orbiter',
      launchDate: '20 August 1975',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Operated for 1385 orbits. Entered Mars orbit on 19 June 1976.',
      carrierRocket: 'Titan IIIE Centaur-D1T',
      logo: '/assets/logos/nasa_worm_logo.svg',
    },
    {
      mission: 'Viking 1 lander',
      spacecraft: 'Viking 1 lander',
      launchDate: '20 August 1975',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks:
        'First successful Mars lander. Deployed from Viking 1 orbiter. Landed on Mars on 20 July 1976. Operated for 2245 sols.',
      carrierRocket: 'Titan IIIE Centaur-D1T',
      logo: '/assets/logos/nasa_worm_logo.svg',
    },
    {
      mission: 'Viking 2 orbiter',
      spacecraft: 'Viking 2 orbiter',
      launchDate: '9 September 1975',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Operated for 700 orbits. Entered Mars orbit on 7 August 1976.',
      carrierRocket: 'Titan IIIE Centaur-D1T',
      logo: '/assets/logos/nasa_worm_logo.svg',
    },
    {
      mission: 'Viking 2 lander',
      spacecraft: 'Viking 2 lander',
      launchDate: '9 September 1975',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks:
        'Deployed from Viking 2 orbiter. Landed on Mars on September 1976. Operated for 1281 sols (11 April 1980).',
      carrierRocket: 'Titan IIIE Centaur-D1T',
      logo: '/assets/logos/nasa_worm_logo.svg',
    },
    {
      mission: 'Phobos 1 (1F No.101)',
      spacecraft: 'Phobos 1 (1F No.101)',
      launchDate: '7 July 1988',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Spacecraft failure',
      remarks: 'Communications lost before reaching Mars; failed to enter orbit',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Phobos 1 DAS',
      spacecraft: 'Phobos 1 DAS',
      launchDate: '7 July 1988',
      operator: 'Soviet Union',
      missionType: 'Phobos lander',
      outcome: 'Failure',
      remarks: 'Lost with Phobos 1. To have been deployed by Phobos 1',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Phobos 2 (1F No.102)',
      spacecraft: 'Phobos 2 (1F No.102)',
      launchDate: '12 July 1988',
      operator: 'Soviet Union',
      missionType: 'Orbiter',
      outcome: 'Mostly successful',
      remarks: 'Orbital observations successful, communications lost before lander deployment.',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Phobos 2 Prop-F',
      spacecraft: 'Phobos 2 Prop-F',
      launchDate: '12 July 1988',
      operator: 'Soviet Union',
      missionType: 'Phobos rover',
      outcome: 'Failure',
      remarks: 'Lost with Phobos 2. To have been deployed by Phobos 2',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Phobos 2',
      spacecraft: 'DAS',
      launchDate: '12 July 1988',
      operator: 'Soviet Union',
      missionType: 'Phobos lander',
      outcome: 'Failure',
      remarks: 'Lost with Phobos 2',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/ussr_logo.svg',
    },
    {
      mission: 'Mars Observer',
      spacecraft: 'Mars Observer',
      launchDate: '25 September 1992',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Spacecraft failure',
      remarks: 'Lost communications before orbital insertion',
      carrierRocket: 'Commercial Titan III',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: 'Mars Global Surveyor',
      spacecraft: 'Mars Global Surveyor',
      launchDate: '7 November 1996',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Operated for ten years',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/mgs_logo.webp',
    },
    {
      mission: 'Mars 96',
      spacecraft: 'Mars 96',
      launchDate: '16 November 1996',
      operator: 'Rosaviakosmos Russia',
      missionType: 'Orbiter Penetrators',
      outcome: 'Spacecraft failure',
      remarks: 'Never left LEO',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/rosaviacosmos_logo.webp',
    },
    {
      mission: 'Mars 96',
      spacecraft: 'Mars 96 lander',
      launchDate: '16 November 1996',
      operator: 'Rosaviakosmos Russia',
      missionType: 'Lander',
      outcome: 'Failure',
      remarks: 'Lost with Mars 96. Two Mars landers to have been deployed by Mars 96.',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/rosaviacosmos_logo.webp',
    },
    {
      mission: 'Mars 96',
      spacecraft: 'Mars 96 penetrator',
      launchDate: '16 November 1996',
      operator: 'Rosaviakosmos Russia',
      missionType: 'Penetrator',
      outcome: 'Failure',
      remarks: 'Lost with Mars 96. Two Mars Penetrators to have been deployed by Mars 96.',
      carrierRocket: 'Proton-K/D-2',
      logo: '/assets/logos/rosaviacosmos_logo.webp',
    },
    {
      mission: 'Mars Pathfinder',
      spacecraft: 'Mars Pathfinder',
      launchDate: '4 December 1996',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks: 'Landed at 19.13°N 33.22°W on 4 July 1997. Last contact on 27 September 1997.',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/mp_logo.webp',
    },
    {
      mission: 'Mars Pathfinder',
      spacecraft: 'Sojourner',
      launchDate: '4 December 1996',
      operator: 'NASA United States',
      missionType: 'Rover',
      outcome: 'Successful',
      remarks: 'First rover to operate on another planet. Operated for 84 days.',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/mp_logo.webp',
    },
    {
      mission: 'Nozomi',
      spacecraft: 'Nozomi',
      launchDate: '3 July 1998',
      operator: 'ISAS Japan',
      missionType: 'Orbiter',
      outcome: 'Spacecraft failure',
      remarks: 'Performed a Mars flyby. Later contact lost due to loss of fuel.',
      carrierRocket: 'M-V',
      logo: '/assets/logos/isas_logo.webp',
    },
    {
      mission: 'Mars Climate Orbiter',
      spacecraft: 'Mars Climate Orbiter',
      launchDate: '11 December 1998',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Spacecraft failure',
      remarks:
        'Approached Mars too closely during orbit insertion attempt due to a software interface bug involving different units for impulse and either burned up in the atmosphere or entered solar orbit.',
      carrierRocket: 'Delta II 7425',
      logo: '/assets/logos/nasa_logo.svg',
    },
    {
      mission: 'Mars Polar Lander / Deep Space 2',
      spacecraft: 'Mars Polar Lander',
      launchDate: '3 January 1999',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Spacecraft failure',
      remarks: 'Failed to function after landing.',
      carrierRocket: 'Delta II 7425',
      logo: '/assets/logos/m98_logo.webp',
    },
    {
      mission: 'Mars Polar Lander / Deep Space 2',
      spacecraft: 'Deep Space 2',
      launchDate: '3 January 1999',
      operator: 'NASA United States',
      missionType: 'Penetrator',
      outcome: 'Spacecraft failure',
      remarks: 'No data transmitted after deployment from MPL.',
      carrierRocket: 'Delta II 7425',
      logo: '/assets/logos/m98_logo.webp',
    },
    {
      mission: 'Mars Odyssey',
      spacecraft: 'Mars Odyssey',
      launchDate: '7 April 2001',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Expected to remain operational until 2025.',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/2001_mars_odyssey_logo.webp',
    },
    {
      mission: 'Mars Express',
      spacecraft: 'Mars Express',
      launchDate: '2 June 2003',
      operator: 'ESA',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Enough fuel to remain operational until 2035.',
      carrierRocket: 'Soyuz-FG / Fregat',
      logo: '/assets/logos/mars_express_logo.webp',
    },
    {
      mission: 'Mars Express',
      spacecraft: 'Beagle 2',
      launchDate: '2 June 2003',
      operator: 'ESA United Kingdom',
      missionType: 'Lander',
      outcome: 'Lander failure',
      remarks:
        'No communications received after release from Mars Express. Orbital images of landing site suggest a successful landing, but two solar panels failed to deploy, obstructing its communications.',
      carrierRocket: 'Soyuz-FG / Fregat',
      logo: '/assets/logos/mars_express_logo.webp',
    },
    {
      mission: 'Spirit (MER-A)',
      spacecraft: 'Spirit (MER-A)',
      launchDate: '10 June 2003',
      operator: 'NASA United States',
      missionType: 'Rover',
      outcome: 'Successful',
      remarks: 'Landed on 4 January 2004. Operated for 2208 sols',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/mer_a_logo.webp',
    },
    {
      mission: 'Opportunity (MER-B)',
      spacecraft: 'Opportunity (MER-B)',
      launchDate: '8 July 2003',
      operator: 'NASA United States',
      missionType: 'Rover',
      outcome: 'Successful',
      remarks: 'Landed on 25 January 2004. Operated for 5351 sols',
      carrierRocket: 'Delta II 7925H',
      logo: '/assets/logos/mer_b_logo.webp',
    },
    {
      mission: 'Rosetta',
      spacecraft: 'Rosetta',
      launchDate: '2 March 2004',
      operator: 'ESA',
      missionType: 'Flyby (Gravity assist)',
      outcome: 'Successful',
      remarks: 'Flyby in February 2007 en route to 67P/Churyumov–Gerasimenko',
      carrierRocket: 'Ariane 5G+',
      logo: '/assets/logos/rosetta_logo.webp',
    },
    {
      mission: 'Rosetta Philae',
      spacecraft: 'Rosetta Philae',
      launchDate: '2 March 2004',
      operator: 'ESA',
      missionType: 'Flyby (Gravity assist)',
      outcome: 'Successful',
      remarks: 'Flyby in February 2007 en route to 67P/Churyumov–Gerasimenko',
      carrierRocket: 'Ariane 5G+',
      logo: '/assets/logos/rosetta_logo.webp',
    },
    {
      mission: 'Mars Reconnaissance Orbiter',
      spacecraft: 'Mars Reconnaissance Orbiter',
      launchDate: '12 August 2005',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Entered orbit on 10 March 2006',
      carrierRocket: 'Atlas V 401',
      logo: '/assets/logos/mro_logo.webp',
    },
    {
      mission: 'Phoenix',
      spacecraft: 'Phoenix',
      launchDate: '4 August 2007',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks: 'Landed on 25 May 2008. End of mission 2 November 2008',
      carrierRocket: 'Delta II 7925',
      logo: '/assets/logos/phoenix_logo.webp',
    },
    {
      mission: 'Dawn',
      spacecraft: 'Dawn',
      launchDate: '27 September 2007',
      operator: 'NASA United States',
      missionType: 'Flyby (Gravity assist)',
      outcome: 'Successful',
      remarks: 'Flyby in February 2009 en route to 4 Vesta and Ceres',
      carrierRocket: 'Delta II 7925H',
      logo: '/assets/logos/dawn_logo.webp',
    },
    {
      mission: 'Fobos-Grunt / Yinghuo-1 Fobos-Grunt',
      spacecraft: 'Fobos-Grunt / Yinghuo-1 Fobos-Grunt',
      launchDate: '8 November 2011',
      operator: 'Roskosmos Russia',
      missionType: 'Orbiter Phobos sample return',
      outcome: 'Spacecraft failure',
      remarks: 'Never left LEO (intended to depart under own power)',
      carrierRocket: 'Zenit-2M',
      logo: '/assets/logos/roscosmos_logo.svg',
    },
    {
      mission: 'Fobos-Grunt / Yinghuo-1 Yinghuo-1',
      spacecraft: 'Fobos-Grunt / Yinghuo-1 Yinghuo-1',
      launchDate: '8 November 2011',
      operator: 'CNSA China',
      missionType: 'Orbiter',
      outcome: 'Failure',
      remarks: 'Lost with Fobos-Grunt. To have been deployed by Fobos-Grunt',
      carrierRocket: 'Zenit-2M',
      logo: '/assets/logos/cnsa_logo.svg',
    },
    {
      mission: 'Mars Science Laboratory Curiosity (Mars Science Laboratory)',
      spacecraft: 'Mars Science Laboratory Curiosity (Mars Science Laboratory)',
      launchDate: '26 November 2011',
      operator: 'NASA United States',
      missionType: 'Rover',
      outcome: 'Operational',
      remarks: 'Landed on 6 August 2012',
      carrierRocket: 'Atlas V 541',
      logo: '/assets/logos/msl_logo.webp',
    },
    {
      mission: 'Mars Orbiter Mission',
      spacecraft: 'Mars Orbiter Mission',
      launchDate: '5 November 2013',
      operator: 'ISRO India',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks:
        'Entered orbit on 24 September 2014. Mission extended to 2022, where the mission concluded on September 27, 2022 after contact was lost.[20]',
      carrierRocket: 'PSLV-XL',
      logo: '/assets/logos/mom_logo.webp',
    },
    {
      mission: 'MAVEN',
      spacecraft: 'MAVEN',
      launchDate: '18 November 2013',
      operator: 'NASA United States',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Orbit insertion on 22 September 2014',
      carrierRocket: 'Atlas V 401',
      logo: '/assets/logos/maven_logo.webp',
    },
    {
      mission: 'ExoMars 2016 ExoMars Trace Gas Orbiter',
      spacecraft: 'ExoMars 2016 ExoMars Trace Gas Orbiter',
      launchDate: '14 March 2016',
      operator: 'ESA/Roscosmos ESA/ Russia',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Entered orbit on 19 October 2016',
      carrierRocket: 'Proton-M / Briz-M',
      logo: '/assets/logos/exomars_logo.webp',
    },
    {
      mission: 'ExoMars 2016 Schiaparelli EDM lander',
      spacecraft: 'ExoMars 2016 Schiaparelli EDM lander',
      launchDate: '14 March 2016',
      operator: 'ESA',
      missionType: 'Lander',
      outcome: 'Spacecraft failure',
      remarks:
        'Carried by the ExoMars Trace Gas Orbiter. Although the lander crashed, engineering data on the first five minutes of entry was successfully retrieved.',
      carrierRocket: 'Proton-M / Briz-M',
      logo: '/assets/logos/exomars_logo.webp',
    },
    {
      mission: 'InSight',
      spacecraft: 'InSight',
      launchDate: '5 May 2018',
      operator: 'NASA United States',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks: 'Landed on 26 November 2018. Last contact 15 December 2022.',
      carrierRocket: 'Atlas V 401',
      logo: '/assets/logos/insight_logo.webp',
    },
    {
      mission: 'InSight MarCO A',
      spacecraft: 'InSight MarCO A',
      launchDate: '5 May 2018',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Successful',
      remarks: 'Flyby 26 November 2018. Last contact 29 December 2018.',
      carrierRocket: 'Atlas V 401',
      logo: '/assets/logos/insight_logo.webp',
    },
    {
      mission: 'InSight MarCO B',
      spacecraft: 'InSight MarCO B',
      launchDate: '5 May 2018',
      operator: 'NASA United States',
      missionType: 'Flyby',
      outcome: 'Successful',
      remarks: 'Flyby 26 November 2018. Last contact 4 January 2019.',
      carrierRocket: 'Atlas V 401',
      logo: '/assets/logos/insight_logo.webp',
    },
    {
      mission: 'Emirates Mars Mission Hope',
      spacecraft: 'Emirates Mars Mission Hope',
      launchDate: '19 July 2020',
      operator: 'MBRSC United Arab Emirates',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Entered orbit on 9 February 2021.',
      carrierRocket: 'H-IIA',
      logo: '/assets/logos/hope_logo.webp',
    },
    {
      mission: 'Tianwen-1 Tianwen-1 orbiter',
      spacecraft: 'Tianwen-1 Tianwen-1 orbiter',
      launchDate: '23 July 2020',
      operator: 'CNSA China',
      missionType: 'Orbiter',
      outcome: 'Operational',
      remarks: 'Entered orbit on 10 February 2021',
      carrierRocket: 'Long March 5',
      logo: '/assets/logos/tianwen_1_logo.webp',
    },
    {
      mission: 'Tianwen-1 Tianwen-1 lander',
      spacecraft: 'Tianwen-1 Tianwen-1 lander',
      launchDate: '23 July 2020',
      operator: 'CNSA China',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks: 'Landed on 14 May 2021',
      carrierRocket: 'Long March 5',
      logo: '/assets/logos/tianwen_1_logo.webp',
    },
    {
      mission: 'Tianwen-1 Zhurong rover',
      spacecraft: 'Tianwen-1 Zhurong rover',
      launchDate: '23 July 2020',
      operator: 'CNSA China',
      missionType: 'Rover',
      outcome: 'Operational',
      remarks: 'Landed on 14 May 2021. Deployed by the Tianwen-1 lander on 22 May 2021.',
      carrierRocket: 'Long March 5',
      logo: '/assets/logos/tianwen_1_logo.webp',
    },
    {
      mission: 'Tianwen-1 Tianwen-1 Remote Camera',
      spacecraft: 'Tianwen-1 Tianwen-1 Remote Camera',
      launchDate: '23 July 2020',
      operator: 'CNSA China',
      missionType: 'Lander',
      outcome: 'Successful',
      remarks: 'Landed on 14 May 2021. Deployed by the Zhurong rover on 1 June 2021.',
      carrierRocket: 'Long March 5',
      logo: '/assets/logos/tianwen_1_logo.webp',
    },
    {
      mission: 'Tianwen-1 Tianwen-1 Deployable Camera 2',
      spacecraft: 'Tianwen-1 Tianwen-1 Deployable Camera 2',
      launchDate: '23 July 2020',
      operator: 'CNSA China',
      missionType: 'Orbiter',
      outcome: 'Successful',
      remarks: 'Entered orbit on 10 February 2021, deployed 31 December 2021',
      carrierRocket: 'Long March 5',
      logo: '/assets/logos/tianwen_1_logo.webp',
    },
    {
      mission: 'Mars 2020 Perseverance',
      spacecraft: 'Mars 2020 Perseverance',
      launchDate: '30 July 2020',
      operator: 'NASA United States',
      missionType: 'Rover',
      outcome: 'Operational',
      remarks: 'Landed on 18 February 2021',
      carrierRocket: 'Atlas V 541',
      logo: '/assets/logos/mars_2020_logo.svg',
    },
    {
      mission: 'Mars 2020 Ingenuity',
      spacecraft: 'Mars 2020 Ingenuity',
      launchDate: '30 July 2020',
      operator: 'NASA United States',
      missionType: 'Helicopter',
      outcome: 'Operational',
      remarks:
        'First aerodynamic flight on another planet. Landed with Perseverance rover on 18 February 2021. Deployed from rover on 3 April 2021. First flight achieved on April 19, 2021.',
      carrierRocket: 'Atlas V 541',
      logo: '/assets/logos/mars_2020_jpl_logo.svg',
    },
  ],
};

export const CELESTIAL_DATA: CelestialData = {
  mars: MARS,
  moons: MOONS,
  satellites: SATELLITES,
  rovers: ROVERS,
};
