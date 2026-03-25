import { WeatherData } from './types';

export function buildIndex(object) {
  if (object.id) {
    return { [object.id]: object };
  } else if (object.children) {
    return object.children
      .map((obj) => buildIndex(obj))
      .reduce((acc, curr) => Object.assign(acc, curr), {});
  } else {
    throw new Error(`buildIndex: Object must have either 'id' or 'children' property. `);
  }
}

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
      // The data is still valid
      return data;
    }
  }
  return null;
}
