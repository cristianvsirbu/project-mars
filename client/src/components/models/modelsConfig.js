const modelsConfig = [

    // Mars
    {
        id: 'mars',
        name: 'Mars',
        type: 'planet',
        category: 'mars',
        image: 'assets/M.png',
        isCategory: false,
    },

    // Moons
    {
        name: 'Moons',
        type: 'moons',
        category: 'moons',
        isCategory: true,
        children: [
            {
                id: 'phobos',
                name: 'Phobos',
                type: 'moons',
                category: 'phobos',
                isCategory: false,
            },
            {
                id: 'deimos',
                name: 'Deimos',
                type: 'moons',
                category: 'deimos',
                isCategory: false,
            }
        ],
    },

    // Rovers
    {
        name: 'Rovers',
        type: 'rovers',
        category: 'rovers',
        isCategory: true,
        children: [
            {
                name: 'Active Rovers',
                type: 'rovers',
                category: 'active',
                isCategory: true,
                children: [
                    {
                        id: 'curiosity',
                        name: 'Curiosity',
                        type: 'rovers',
                        category: 'active',
                        isCategory: false,
                    },
                ],
            },
            {
                name: 'Inactive Rovers',
                type: 'rovers',
                category: 'inactive',
                isCategory: true,
                children: [
                    {
                        id: 'curiosity',
                        name: 'Curiosity',
                        type: 'rovers',
                        category: 'inactive',
                        isCategory: false,
                    },
                ],
            },
            {
                name: 'Failed Rovers',
                type: 'rovers',
                category: 'failed',
                isCategory: true,
                children: [
                    {
                        id: 'curiosity',
                        name: 'Curiosity',
                        type: 'rovers',
                        category: 'failed',
                        isCategory: false,
                    },
                ],
            },
            {
                name: 'Planned Rovers',
                type: 'rovers',
                category: 'planned',
                isCategory: true,
                children: [
                    {
                        id: 'curiosity',
                        name: 'Curiosity',
                        type: 'rovers',
                        category: 'planned',
                        isCategory: false,
                    },
                ],
            },
        ],
    },

    // Satellites
    {
        name: 'Satellites',
        type: 'satellites',
        category: 'satellites',
        isCategory: true,
        children: [
            {
                name: 'Functional Satellites',
                type: 'satellites',
                category: 'functional',
                isCategory: true,
                children: [
                    {
                        id: 'maven',
                        name: 'Maven',
                        type: 'satellites',
                        category: 'functional',
                        isCategory: false,
                    },
                ],
            },
            {
                name: 'Non-Functional Satellites',
                type: 'satellites',
                category: 'non-functional',
                isCategory: true,
                children: [
                    {
                        id: 'maven',
                        name: 'Maven',
                        type: 'satellites',
                        category: 'functional',
                        isCategory: false,
                    },
                ],
            },
        ],
    },


    // Missions
    {
        id: 'missions',
        name: 'Missions',
        type: 'missions',
        category: 'missions',
        isCategory: false,
    },
    // ... Other missions
];

export default modelsConfig;
