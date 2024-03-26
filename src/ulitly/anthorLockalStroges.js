const getWishLockalStroges = () => {
  const getWishStroges = localStorage.getItem('Book-wish');
  if (getWishStroges) {
    return JSON.parse(getWishStroges);
  }
  return [];
};

const saveWishLockalStroges = id => {
  const saveWishStroges = getWishLockalStroges();
  const isExists = saveWishStroges.find(strog => strog === id);
  if (!isExists) {
    saveWishStroges.push(id);
    localStorage.setItem('Book-wish', JSON.stringify(saveWishStroges));
  }
};
export { getWishLockalStroges, saveWishLockalStroges };
