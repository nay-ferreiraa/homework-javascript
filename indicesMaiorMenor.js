function encontrarIndices(array) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    }

    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return {
    indiceMaior,
    indiceMenor
  };
}

console.log(encontrarIndices([10, 5, 30, 2, 8]));