const isLocalStorageAvailable = () => {
  try {
    return (
      typeof window !== 'undefined' &&
      'setItem' in localStorage &&
      'getItem' in localStorage
    );
  } catch (error) {
    return false;
  }
};
export default isLocalStorageAvailable;
