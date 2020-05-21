import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';
import placeholderProjectIconLight from '../images/page-heading-icon-placeholder-light.png';

/*
 * Generic utilities
 */
export const isEmptyObject = obj => {
  return !Object.values(obj).some(x => x !== null && x !== '');
};

// # Handle Broken Images
// ## Usage examples:
// 1. Use the default placeholder image:
// <img src="a-bad-link.png" onError={e => handleBrokenImages({event})} />
//
// 2. You can specify your own placeholder image
// <img src="a-bad-link.png" onError={e => handleBrokenImages(e, backupImage)} />\

export const handleBrokenImages = data => {
  const { replacementImage, darkModeActive } = data;
  const defaultReplacementImage = darkModeActive
    ? placeholderProjectIconLight
    : placeholderProjectIcon;
  return replacementImage || defaultReplacementImage;
};
