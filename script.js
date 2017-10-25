let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);

// function getFactAjax(){
//   let number = numberInput.value;
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://numbersapi.com/' + number);

//   xhr.onload = function(){
//     if(this.status == 200 && number != ''){
//       fact.style.display = 'block';
//       factText.innerHTML = this.responseText;
//     }
//   }

//   xhr.send();
// }

function getFactFetch(){
  let number = numberInput.value;
  fetch('http://numbersapi.com/' + number)
    .then(res => res.text())
    .then(data => {
      if(number != ''){
        fact.style.display = 'block';
        factText.innerHTML = data;
      }
    })
    .catch(err => console.log(err))
}

setInterval(clearData, 1);

function clearData(){
  let number = numberInput.value;
  if(!number) fact.style.display = 'none';
}