import { Matrix } from 'ml-matrix';
import csvParser from './readers/csvParser.js';
import menuloader from './loaders/menuLoader.js';
import errorLoader from './loaders/errorLoader.js';

export let matrixes = {};
const app = document.getElementById("app");
const matrixLoader = document.getElementById("matrixA");
const matrixId = matrixLoader.id;


function readFile(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
  });
};

matrixLoader.addEventListener("change", handleFileLoader, false);
function handleFileLoader() {
  let file = this.files[0];
  readFile(file).then(result => csvParser(result))
  .then(result => {
    const [ res, code, message ] = result;
    matrixes[matrixId] = res;
    if (code === "00") {
      menuloader();
    }
    else {
      errorLoader(code, message);
    }
  });
};
