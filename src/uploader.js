const uploader = (array) => {

  let textCSV = "";
  for (let i=0; i < array.length; i += 1) {
    console.log(array[i]);
    for (let j=0; j < array[i].length; j+=1) {
      if (j < array[i].length - 1) {
        const str = j + ',';
        textCSV += str; 
      } else {
        const str = j + '\n';
        textCSV += str; 
      }
    }
  }

  const a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(new Blob([textCSV], {type: 'text/csv'}));
  a.download = 'result.csv';

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
};

export default uploader;