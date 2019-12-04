document.addEventListener('DOMContentLoaded', function() {
  const counterId = countCounter();
  const pauseBtn = document.getElementById('pause')
  pauseBtn.addEventListener('click', function() {
    pauseCounter(counterId);
  })
  const addBtn = document.getElementById('plus')
  addBtn.addEventListener('click', function() {
    addCounter();
  })  
  const minusBtn = document.getElementById('minus')
  minusBtn.addEventListener('click', function() {
    minusCounter();
  })
  
});

function countCounter() {
  return setInterval(() => {
    const count = document.getElementById('counter')
    let num = parseInt(count.innerText)
    num++
    count.innerText = num
  }, 1000);
};

function pauseCounter(counterId) {
  console.log("clicked", counterId);
  clearInterval(counterId);
};

function addCounter() {
  const count = document.getElementById('counter')
  let num = parseInt(count.innerText)
  num++
  count.innerText = num
};

function minusCounter() {
  const count = document.getElementById('counter')
  let num = parseInt(count.innerText)
  num--
  count.innerText = num
}
