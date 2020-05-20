import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';

/*
 * Generic utilities
 */
export const isEmptyObject = obj => {
  return !Object.values(obj).some(x => x !== null && x !== '');
};

export const handleBrokenImages = (e, replacementImage) => {
  e.target.src = replacementImage || placeholderProjectIcon;
};
