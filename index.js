const output= document.querySelector('.output');
const addBtn = document.querySelector('button');

let num =0;

const addBtnHandler = () => {
  num += 1;
  output.innerHTML = num;
}

addBtn.addEventListener('click', addBtnHandler);