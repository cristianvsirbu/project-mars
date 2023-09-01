
export const modelsData = [
    {
        id: "mars",
        name: "Mars",
        category: "mars",
        characteristics: [
            {
                orbitalCharacteristics: {
                    name: "Orbital Characteristics",
                    aphelion: {
                        km: "249261000 km",
                        mi: "154884000 mi",
                        AU: "1.66621 AU"
                    },
                    perihelion: {
                        km: "206650000 km",
                        mi: "128410000",
                        AU: "1.3814 AU"
                    },
                    semiMajorAxis: {
                        km: "227939366 km",
                        mi: "141634956 mi",
                        AU: "1.52368055 AU"
                    },
                    eccentricity: 0.0934,
                    orbitalPeriodSidereal: {
                        days: "686.980 days",
                        years: "1.88085 years",
                        sols: "668.5991 sols"
                    },
                    orbitalPeriodSynodic: {
                        days: "779.94 days",
                        years: "2.1354 years"
                    },
                    averageOrbitalSpeed: {
                        kmPerSec: "24.07 km/s",
                        kmPerHour: "86700 km/h",
                        mph: "53800 mph"
                    },
                    meanAnomaly: "19.412°",
                    inclination: {
                        toEcliptic: "1.850°",
                        toSunEquator: "5.65°",
                        toInvariablePlane: "1.63°"
                    },
                    longitudeOfAscendingNode: "49.57854°",
                    timeOfPerihelion: "2022-Jun-21",
                    argumentOfPerihelion: "286.5°",
                    satellites: 2
                },
                physicalCharacteristics: {
                    name: "Physical Characteristics",
                    meanRadius: {
                        km: "3389.5 ± 0.2 km",
                        mi: "2106.1 ± 0.1 mi"
                    },
                    equatorialRadius: {
                        km: "3396.2 ± 0.1 km",
                        mi: "2110.3 ± 0.1 mi",
                        earths: "0.533 Earths"
                    },
                    polarRadius: {
                        km: "3376.2 ± 0.1 km",
                        mi: "2097.9 ± 0.1 mi",
                        earths: "0.531 Earths"
                    },
                    flattening: 0.00589,
                    surfaceArea: {
                        km2: "144.37×106 km2",
                        sqMi: "5.574×107 sq mi",
                        earths: "0.284 Earths"
                    },
                    volume: {
                        km3: "1.63118×1011 km3",
                        earths: "0.151 Earths"
                    },
                    mass: {
                        kg: "6.4171×1023 kg",
                        earths: "0.107 Earths"
                    },
                    meanDensity: {
                        gPerCm3: "3.9335 g/cm3",
                        lbPerCuIn: "0.1421 lb/cu in"
                    },
                    surfaceGravity: {
                        mPerS2: "3.72076 m/s2",
                        ftPerS2: "12.2072 ft/s2",
                        g: "0.3794 g"
                    },
                    momentOfInertiaFactor: 0.3644,
                    escapeVelocity: {
                        kmPerS: "5.027 km/s",
                        kmPerH: "18100 km/h",
                        mph: "11250 mph"
                    },
                    synodicRotationPeriod: {
                        days: "1.02749125 d",
                        time: "24h 39m 36s"
                    },
                    siderealRotationPeriod: {
                        days: "1.025957 d",
                        time: "24h 37m 22.7s"
                    },
                    equatorialRotationVelocity: {
                        mPerS: "241 m/s",
                        kmPerH: "870 km/h",
                        mph: "540 mph"
                    },
                    axialTilt: "25.19° to its orbital plane",
                    northPoleRightAscension: {
                        degrees: "317.68143°",
                        time: "21h 10m 44s"
                    },
                    northPoleDeclination: "52.88650°",
                    albedo: {
                        geometric: 0.170,
                        bond: 0.25
                    },
                    temperature: {
                        name: "Temperature",
                        blackbody: "−64°C",
                        surface: {
                            min: "−110°C",
                            mean: "−60°C",
                            max: "35°C"
                        },
                    },
                    surfaceAbsorbedDoseRate: "8.8 μGy/h",
                    surfaceEquivalentDoseRate: "27 μSv/h",
                    apparentMagnitude: "−2.94 to +1.86",
                    absoluteMagnitude: "−1.5",
                    angularDiameter: "3.5–25.1″"
                },
                atmosphere: {
                    name: "Atmosphere",
                    surfacePressure: {
                        kPa: "0.636 kPa",
                        atm: "0.00628 atm"
                    },
                    compositionByVolume: {
                        carbonDioxide: "95.97%",
                        argon: "1.93%",
                        nitrogen: "1.89%",
                        oxygen: "0.146%",
                        carbonMonoxide: "0.0557%",
                        waterVapor: "0.0210%"
                    }
                }
            }

        ]

    },
    //Moons
    {
        name: 'Moons',
        category: 'moons',
        children: [
            {
                id: 'phobos',
                category: 'moons',
                name: 'Phobos',
                description: 'Phobos is a moon of Mars',
            },
            {
                id: 'deimos',
                category: 'moons',
                name: 'Deimos',
                description: `Deimos is a moon of Mars`,
            }
        ],
    },
    // Rovers
    {
        name: 'Rovers',
        category: 'rovers',
        children: [
            {
                name: 'Active Rovers',
                category: 'rovers',
                subcategory: 'active',
                children: [
                    {
                        id: 'curiosity',
                        category: 'rovers',
                        subcategory: 'active',
                        name: 'Curiosity',
                    },
                    {
                        id: 'perseverance',
                        category: 'rovers',
                        subcategory: 'active',
                        name: 'Perseverance',
                    },
                ],
            },
            {
                name: 'Inactive Rovers',
                category: 'rovers',
                subcategory: 'inactive',
                children: [
                    {
                        id: 'sojourner',
                        category: 'rovers',
                        subcategory: 'inactive',
                        name: 'Sojourner',
                    },
                ],
            },
            {
                name: 'Failed Rovers',
                category: 'rovers',
                subcategory: 'failed',
                children: [
                    {
                        id: 'mars2',
                        category: 'rovers',
                        subcategory: 'failed',
                        name: 'Mars 2',
                    },
                ],
            },
            {
                name: 'Planned Rovers',
                category: 'rovers',
                subcategory: 'planned',
                children: [
                    {
                        id: 'exomars',
                        category: 'rovers',
                        subcategory: 'planned',
                        name: 'ExoMars',
                    },
                ],
            },
        ],
    },
    // Satellites
    {
        name: 'Satellites',
        category: 'satellites',
        children: [
            {
                name: 'Functional Satellites',
                category: 'satellites',
                subcategory: 'functional',
                children: [
                    {
                        id: 'maven',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'Maven',
                    },
                ],
            },
            {
                name: 'Non-Functional Satellites',
                category: 'satellites',
                subcategory: 'non-functional',
                children: [
                    {
                        id: 'maven2',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Maven 2',
                    },
                ],
            },
        ],
    },
    // Missions
    {
        id: 'missions',
        category: 'missions',
        name: 'Missions',
    },

]


