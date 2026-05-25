/**
 * Pexels CDN URLs — free to use per Pexels license.
 * https://www.pexels.com
 */
export function pexelsPhoto(photoId: number, width = 1200): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Jaipur heritage landmarks on Pexels */
export const PEXELS = {
  hawaMahal: 19195945,
  hawaMahalAlt: 1586337,
  amerFort: 3010635,
  jalMahal: 2330937,
  jalMahalAlt: 1569347,
  nahargarhView: 6207591,
  jaigarhFort: 7673882,
  rajasthanFort: 1190919,
  jaipurCity: 3220921,
  pinkCityStreet: 10898453,
  albertHall: 2567468,
  museumBuilding: 1275667,
  patrikaGate: 10892423,
  colorfulGate: 1190693,
  indiaPalace: 1190919,
} as const;
