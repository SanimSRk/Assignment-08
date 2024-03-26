import { getLockalStroges } from './usLockalStroges';

const getWishLockalStroges = () => {
  const getWishStroges = localStorage.getItem('Book-wish');
  if (getWishStroges) {
    return JSON.parse(getWishStroges);
  }
  return [];
};

const saveWishLockalStroges = id => {
  const storeData = getLockalStroges();
  const saveWishStroges = getWishLockalStroges();
  const isExists = saveWishStroges.find(strog => strog === id);
  const isData = storeData.find(str => str === id);

  if (!isExists && !isData) {
    saveWishStroges.push(id);
    localStorage.setItem('Book-wish', JSON.stringify(saveWishStroges));
  }
};
export { getWishLockalStroges, saveWishLockalStroges };
