function changeColor(id) {
  document.querySelector('#' + id).style.fill = '#4354a4';
}

function moveCar() {
  document.querySelector('.car svg').style.transform = 'translateX(1000px)';
}

function moveCarStartPosition() {
  document.querySelector('.car svg').style.transform = 'translateX(0px)';
}
