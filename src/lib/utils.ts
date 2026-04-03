import { WeatherData, IndexableNode, CelestialBody } from './types';

// Transforms data from constants.ts from a multi-level deep structure into an indexed object with id as key and object itself as value to offer a O(1) search in Celestial.tsx
export function buildIndex(object: IndexableNode): Record<string, CelestialBody> {
  if ('id' in object) {
    return { [object.id]: object as CelestialBody };
  } else if (object.children) {
    return object.children
      .map((obj) => buildIndex(obj))
      .reduce((acc, curr) => Object.assign(acc, curr), {});
  } else {
    throw new Error(`buildIndex: Object must have either 'id' or 'children' property. `);
  }
}

// ------------------ Weather Data -------------------------

export function storeDataInLocalStorage(data: WeatherData[]) {
  const currentTime = new Date().getTime();
  const dataToStore = {
    data: data,
    timestamp: currentTime,
  };
  localStorage.setItem('weatherData', JSON.stringify(dataToStore));
}

export function getAndCheckDataFromLocalStorage(): WeatherData[] | null {
  const storedData = localStorage.getItem('weatherData');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    const { data, timestamp } = parsedData;
    const currentTime = new Date().getTime();
    const expirationTime = 24 * 60 * 60 * 1000; // 24 hours

    if (currentTime - timestamp <= expirationTime) {
      return data;
    }
  }
  return null;
}
// --------------------------------------------------------------

// Gets correct colors for different mission outcomes
export const getColorClass = (value: string) => {
  const lowerValue = value.toLowerCase();
  if (lowerValue.includes('fail')) {
    return 'text-red-500';
  } else if (lowerValue.includes('mostly') || lowerValue.includes('partial')) {
    return 'text-yellow-500';
  } else if (lowerValue.includes('success') || lowerValue.includes('operational')) {
    return 'text-green-500';
  }
  return '';
};
