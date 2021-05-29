export const getResultsCount = (arr) => {
  return arr.length;
};

export const insertDecimal = (num) => {
  return (num / 10).toFixed(1);
};

export const getData = (data, newData, clear) => {
  if (clear == true) {
    return newData;
  } else {
    return data.concat(newData);
  }
};

export const refreshPage = () => {
  window.location.reload(false);
};
