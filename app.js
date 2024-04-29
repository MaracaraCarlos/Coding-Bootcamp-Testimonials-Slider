const izquierda = document.getElementById('izq');
const derecha = document.getElementById('der');
const tanya = document.getElementById('container_main1');
const jonh = document.getElementById('container_main2');

izquierda.addEventListener('click', handlerClickLeft);
derecha.addEventListener('click', handlerClickRigth);


function handlerClickRigth(){
  tanya.style.display = 'none';
  jonh.style.display = 'flex';
}

function handlerClickLeft(){
  tanya.style.display = 'flex';
  jonh.style.display = 'none';
}