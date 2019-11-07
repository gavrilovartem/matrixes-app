const csvParser = (file) => {
  const res = [];
  const allRows = file.split(/\r?\n|\r/);
  const [ code, message ] = checkLength(allRows);
  if (code == '00') {
    for (let i=0; i < allRows.length; i += 1 ) {
      const allCols = allRows[i].split(',');
      res.push([]);
      for (let j=0; j < allCols.length; j += 1 ) {
        try {
        const num = Number(allCols[j]);
        if (isNaN(num)) {
          throw new Error('NaN');
        }
        res[i].push(num);
        }
        catch {
          return [[], "01", "Матрица должна содержать только рациональные числа"];
        }
      }
    }
    return [res, code, message];
  }
  return [[], code, message];
};


const checkLength = (array) => {
  console.log(typeof array[0]);
  if (array.length <= 1 && array[0].length === 0) {
    return (['01', 'Передан пустой файл']);
  }
  const firstRowElements = array[0].split(',');
  const firstRowLength = firstRowElements.length;
  for (let i=1; i < array.length; i += 1) {
    const rowElements = array[i].split(',');
    const rowLength = rowElements.length;
    if (rowLength !== firstRowLength) {
      console.log(array[i].length);
      console.log(firstRowLength);
      return (['02', 'Передан файл с непрямоугольной матрицей, исправьте']);
    }
  }
  return (['00', 'correct']);

};
export default csvParser;