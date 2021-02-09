const getArrayOfNumbers = (length) => {
  let array = [];

  for (let i = 1; i <= length; i++) {
    array.push(i);
  }

  return array;
};

export default getArrayOfNumbers;
