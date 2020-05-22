/*
 * Generic utilities
 */
export const isEmptyObject = obj => {
  return !Object.values(obj).some(x => x !== null && x !== '');
};
