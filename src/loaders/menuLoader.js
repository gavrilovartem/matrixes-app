import { directoryReader, staticMatrixes } from '../readers/directoryReader.js';
import multiplyHandler from '../handlers/multiplyHandler.js';
import gaussHandler from '../handlers/gaussHandler.js';
import csvParser from '../readers/csvParser.js';
import { matrixes } from '../index.js';

const menuLoader = () => {
  const task = document.getElementById('task');
  task.remove();

  const container = document.getElementById('multiply');
  container.innerHTML= '';
  const greetingEl = document.createElement('p');
  const greetingText = document.createTextNode('Отлично, входная матрица загружена. ');
  const actionText = document.createTextNode('Теперь выбери, какое действие будет производиться с матрицей.');
  const multiplyEl = document.createElement('p');
  const multiplyText = document.createTextNode('Умножить на одну из предложенных матриц (не забывай про размерность)');
  greetingEl.append(greetingText, actionText);
  container.append(greetingEl);
  multiplyEl.append(multiplyText);
  container.append(multiplyEl);


  const csvFiles = directoryReader();

  const selectEl = document.createElement('select');
  const emptyOption = document.createElement('option');
  emptyOption.setAttribute('value', 'Выбери матрицу');
  selectEl.append(emptyOption);

  Object.keys(csvFiles)
    .forEach(function eachKey(key) {
      const option = document.createElement('option');
      option.setAttribute('value', key);
      const optionText = document.createTextNode(key);
      option.append(optionText);
      selectEl.append(option);
    });
  selectEl.setAttribute('id', 'select-multiple');
  container.append(selectEl);
  

  const btn = document.createElement('button');
  const btnText = document.createTextNode('Умножить!');
  btn.append(btnText);
  container.append(btn);

  const containerGauss = document.getElementById('gauss');
  const gaussEl = document.createElement('p');
  const gaussText = document.createTextNode('Преобразовать твою матрицу по Гауссу');
  gaussEl.append(gaussText);
  containerGauss.append(gaussEl);
  const btnGauss = document.createElement('button');
  const btnGaussText = document.createTextNode('Преобразовать по Гауссу!');
  btnGauss.append(btnGaussText);
  containerGauss.append(btnGauss);
  
  selectEl.onchange = function () {
    const value = selectEl.value;
    matrixes[value] = staticMatrixes[value];
    alert("Выбранная матрица:" + matrixes[value]);
  };
 

  btn.addEventListener('click', multiplyHandler, false);
  btnGauss.addEventListener('click', gaussHandler, false);
};



export default menuLoader;