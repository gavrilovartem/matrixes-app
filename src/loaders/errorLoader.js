const errorLoader = (code, message) => {
  const container = document.getElementById('multiply');
  container.innerHTML= '';
  const errorEl = document.createElement('p');
  const errorText = document.createTextNode(message);
  errorEl.classList.add('error-text');
  errorEl.append(errorText);
  container.append(errorEl);
};
export default errorLoader;