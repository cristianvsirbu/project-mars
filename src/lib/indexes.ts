import { buildIndex } from './utils';
import { MARS, MOONS, SATELLITES, ROVERS } from './constants';

// Indexed for fast search
export const MARS_INDEX = buildIndex(MARS);
export const MOONS_INDEX = buildIndex(MOONS);
export const SATELLITES_INDEX = buildIndex(SATELLITES);
export const ROVERS_INDEX = buildIndex(ROVERS);

export const INDEXES = {
  mars: MARS_INDEX,
  moons: MOONS_INDEX,
  satellites: SATELLITES_INDEX,
  rovers: ROVERS_INDEX,
};
