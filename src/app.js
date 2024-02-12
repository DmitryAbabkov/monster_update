document.addEventListener('DOMContentLoaded', () => {
  const goblin = document.querySelectorAll('.container-row');
  const arrGoblins = [];
  const arrToGenerate = [];
  const body = document.querySelector('body');
  let counterWin = 0;
  let counterLose = 5;

  goblin.forEach((item) => arrGoblins.push(item));

  function getRandomInt() {
      const min = Math.ceil(0);
      const max = Math.floor(15);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generationPosition() {
      if (counterLose !== 0) {
          const numberGenerate = getRandomInt();
          if (numberGenerate !== arrToGenerate[arrToGenerate.length]) {
              arrGoblins.forEach((item) => item.classList.remove('container-goblin'));
              arrGoblins[numberGenerate].classList.add('container-goblin');
              arrToGenerate.push(numberGenerate);
              --counterLose;
          }
      } else {
          alert('Вы проиграли');
          clearInterval(interval);
      }
  }

  generationPosition();

  if (counterLose == 0) {
      clearInterval(interval);
      alert('Вы проиграли')
  }

  const interval = setInterval(() => {
      body.classList.remove('bodyCursor')
      generationPosition();
  }, 1000);


  goblin.forEach(item => {
      item.addEventListener('click', (e) => {
          if (counterWin <= 4) {
              if (item.classList.contains('container-goblin')) {
                  body.classList.add('bodyCursor');
                  ++counterWin;
                  counterLose = 5;
                  console.log('Попал');
              }

          } else {
              alert('Вы выиграли')
          }
      })
  })
});
