import matrix2x2 from '../assets/staticMatrixes/2x2';
import matrix10x10 from '../assets/staticMatrixes/10x10';
import ones from '../assets/staticMatrixes/ones';
import sparse from '../assets/staticMatrixes/sparse';

//для добавления статичной матрицы - добавить новый файл, импортировать его и добавить в массив
export const staticMatrixes = {
  "Матрица 2х2": matrix2x2,
  "Матрица 10х10": matrix10x10,
  "Единичная": ones,
  "Разреженная": sparse };

export const directoryReader = () => {
  return staticMatrixes;
};