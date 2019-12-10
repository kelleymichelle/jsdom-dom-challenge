document.addEventListener('DOMContentLoaded', function() {
  const counterId = countCounter();
  const pauseBtn = document.getElementById('pause')
  pauseBtn.addEventListener('click', function() {
    if (pauseBtn.innerText === "pause") {
      pauseCounter(counterId);
    } else {
      resumeCounter();  
    }
  })
  const addBtn = document.getElementById('plus')
  addBtn.addEventListener('click', function() {
    addCounter();
  })  
  const minusBtn = document.getElementById('minus')
  minusBtn.addEventListener('click', function() {
    minusCounter();
  })
  const form = document.getElementById('comment-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.target["0"].form["0"].form["0"].nextSibling.previousElementSibling.value)
    const comment = event.target["0"].form["0"].form["0"].nextSibling.previousElementSibling.value
    addComment(comment);
  })
  
});

function addComment(comment) {
  listDiv = document.getElementById('list')
  const p = document.createElement('p')
  p.innerText = comment
  listDiv.appendChild(p)
  const commentForm = document.getElementById('comment-form')
  commentForm.reset();
}

function countCounter() {
  return setInterval(() => {
    const count = document.getElementById('counter')
    let num = parseInt(count.innerText)
    num++
    count.innerText = num
  }, 1000);
};

function pauseCounter(counterId) {
  console.log("paused", counterId, event);
  const pauseBtn = document.getElementById("pause")
  pauseBtn.innerText = "Resume"
  clearInterval(counterId);
  disableButtons();
};

function resumeCounter() {
  const pauseBtn = document.getElementById('pause')
  pauseBtn.addEventListener('click', function() {
    console.log("Resume counter");
    pauseBtn.innerText = "pause"
    reenableButtons();
    countCounter();
  })
}

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

function disableButtons() {
  const minusBtn = document.getElementById("minus")
  const plusBtn = document.getElementById("plus")
  const heartBtn = document.getElementById("heart")
  const submitBtn = document.getElementById("submit")
  minusBtn.disabled = true
  plusBtn.disabled = true
  heartBtn.disabled = true
  submitBtn.disabled = true
}

function reenableButtons() {
  const minusBtn = document.getElementById("minus")
  const plusBtn = document.getElementById("plus")
  const heartBtn = document.getElementById("heart")
  const submitBtn = document.getElementById("submit")
  minusBtn.disabled = false
  plusBtn.disabled = false
  heartBtn.disabled = false
  submitBtn.disabled = false
}
