import { matrixes } from '../index.js';
import gaussMatrix from '../matrixWorkers/gaussMatrix.js';
import uploader from '../uploader.js';

function multiplyHandler() {
  const matrixKeys = Object.keys(matrixes);
  if (matrixKeys.length === 1) {
    const a = matrixes[matrixKeys[0]];
    const resMatrix = gaussMatrix(a);
    matrixes['resultGaussMatrix'] = resMatrix;
    uploader(resMatrix);
  }
  else return false;
};

export default multiplyHandler;