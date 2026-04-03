export interface WeatherData {
  dateSol: string;
  dateUTC: string;
  highCelsius: string;
  lowCelsius: string;
  pressure?: string;
  sunrise?: string;
  sunset?: string;
}

export interface WeatherCardProps {
  weather: WeatherData;
}

export interface CelestialCategory {
  name: string;
  category: string;
  cover: string;
  children: CelestialSubcategory[] | CelestialBody[];
}

export interface CelestialSubcategory {
  name: string;
  category: string;
  subcategory: string;
  cover: string;
  children: CelestialBody[];
}
export interface CelestialBody {
  id: string;
  name: string;
  category: string;
  cover: string;
  model3d?: {
    path: string;
    initialScale: number;
    cameraPosition: number[];
  };
  description?: string;
  characteristics: Characteristic[];
}

export interface Characteristic {
  category: string;
  label: string;
  value: string;
}

export interface Mission {
  mission: string;
  spacecraft: string;
  launchDate: string;
  operator: string;
  missionType: string;
  outcome: string;
  remarks?: string;
  carrierRocket: string;
  logo: string;
}

export interface Model3DProps {
  modelPath: string;
  initialScale: number;
  cameraPosition: number[];
}

interface Camera {
  full_name: string;
}

interface Rover {
  name: string;
}

interface Photo {
  camera: Camera;
  earth_date: string;
  img_src: string;
  rover: Rover;
}

export interface PhotoCardProps {
  photo: Photo;
}

export interface ParallaxCardProps {
  link: string;
  imgSrc: string;
  title: string;
}

export interface Partner {
  name: string;
  url: string;
  logo: string;
}

export type Category = CelestialCategory | CelestialBody;
export type CelestialData = Record<string, CelestialCategory | CelestialBody>;
export type IndexableNode = CelestialBody | CelestialCategory | CelestialSubcategory;
