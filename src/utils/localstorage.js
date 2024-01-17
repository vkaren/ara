const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  const value = localStorage.getItem(key);

  return JSON.parse(value);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };
