window.onload = function () {
  const bongos = document.getElementsByClassName('cat-bongo')[0];


  const pawLeft = document.getElementsByClassName('cat-paw--left')[0];
  const pawRight = document.getElementsByClassName('cat-paw--right')[0];
  const hitLeft = document.getElementsByClassName('cat-hit--left')[0];
  const hitRight = document.getElementsByClassName('cat-hit--right')[0];

  bongos.classList.add('show');

  document.addEventListener('keydown', (ev) => {
    switch (ev.code) {
      case 'ArrowLeft':
        pawLeft.classList.remove('hide');
        hitLeft.classList.remove('hide');
        break;
      case 'ArrowRight':
        pawRight.classList.remove('hide');
        hitRight.classList.remove('hide');
        break;
    }
  });

  document.addEventListener('keyup', (ev) => {
    switch (ev.code) {
      case 'ArrowLeft':
        pawLeft.classList.add('hide');
        hitLeft.classList.add('hide');
        break;
      case 'ArrowRight':
        pawRight.classList.add('hide');
        hitRight.classList.add('hide');
        break;
    }
  });


};