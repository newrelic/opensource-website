import placeholderProjectIcon from '../images/page-heading-icon-placeholder.jpg';

/*
 * Generic utilities
 */
export const isEmptyObject = obj => {
  return !Object.values(obj).some(x => x !== null && x !== '');
};

// # Handle Broken Images
// ## Usage examples:
// 1. Use the default placeholder image:
// <img src="a-bad-link.png" onError={e => handleBrokenImages(e)} />
//
// 2. You can specify your own placeholder image
// <img src="a-bad-link.png" onError={e => handleBrokenImages(e, backupImage)} />\

export const handleBrokenImages = (e, replacementImage) => {
  e.target.src = replacementImage || placeholderProjectIcon;
};
