const getLockalStroges = () => {
  const getStroges = localStorage.getItem('Book-data');
  if (getStroges) {
    return JSON.parse(getStroges);
  }
  return [];
};

const saveLockalStroges = id => {
  const saveStroges = getLockalStroges();
  const isExists = saveStroges.find(strog => strog === id);
  if (!isExists) {
    saveStroges.push(id);
    localStorage.setItem('Book-data', JSON.stringify(saveStroges));
  }
};

export { getLockalStroges, saveLockalStroges };
