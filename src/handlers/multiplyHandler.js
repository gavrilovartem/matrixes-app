import { matrixes } from '../index.js';
import uploader from '../uploader.js';
import multiplyMatrix from '../matrixWorkers/miltipliyMatrix.js';

function multiplyHandler() {
  const matrixKeys = Object.keys(matrixes);
  if (matrixKeys.length === 2) {
    console.log(matrixKeys);
  const a = matrixes[matrixKeys[0]];
  const b = matrixes[matrixKeys[1]];
  const resMatrix = multiplyMatrix(a, b);
  matrixes['resultMatrix'] = resMatrix;
  if (resMatrix !== false) {
  uploader(resMatrix);
  }
  else {
    const cont = document.getElementById('multiply');
    const errorP = document.createElement('p');
    const errorText = document.createTextNode("Что-то пошло не так, проверь, что матрицы выбраны и подходят по размерностям");
    errorP.classList.add('error-text');
    errorP.append(errorText);
    cont.append(errorP);
    return false;
  }
}
};

export default multiplyHandler;