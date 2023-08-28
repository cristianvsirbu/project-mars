const modelsConfig = [
    // ... Other models
    {
        id: 'curiosity',
        name: 'Curiosity',
        description: 'Mars Rover Curiosity...',
        type: 'rover',
        category: 'active', // For example
        isCategory: false, // This indicates it's not an intermediary category
    },
    // ... Other models
    {
        id: 'active',
        name: 'Active Rovers',
        description: 'Rovers currently active on Mars...',
        type: 'rover',
        category: 'active', // For example
        isCategory: true, // This indicates it's an intermediary category
    },
    // ... Other models
];

export default modelsConfig;