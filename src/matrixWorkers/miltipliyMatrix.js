const multiplyMatrix = (a, b) => {
  let rowsA = a.length;
  let colsA = a[0].length;
  let rowsB = b.length;
  let colsB = b[0].length;
  let c = [];
    if (colsA != rowsB) return false;
    for (let i = 0; i < rowsA; i++) {
      c[i] = [];
    } 
    for (let k = 0; k < colsB; k++)
     {
        for (let i = 0; i < rowsA; i++) { 
          let t = 0;
          for (let j = 0; j < rowsB; j++) {
            t += a[ i ][j]*b[j][k];
          } 
          c[ i ][k] = t;
        }
     }
    return c;
};
export default multiplyMatrix;