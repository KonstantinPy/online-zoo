const donate = document.querySelector(".donate__amount");
let selectedLi = document.getElementById('radio6');
console.log(selectedLi);

donate.onclick = function (event) {
  let target = event.target;
  console.log(target);
  if (!event.target.classList.contains("donate__radio")) {
    return;
  }
  document.querySelector(".donate__input").value = target.value;
  active(target);
}
function active(el){
 if(selectedLi){
     selectedLi.classList.remove('active');
 }
   selectedLi = el;
   selectedLi.classList.add('active')
}

const amountInput = document.querySelector(".donate__input");
const donateRadio = document.querySelectorAll(".donate__radio");
console.log(donateRadio);
function maxLength() {
  if (amountInput.value.length > 4)
    amountInput.value = amountInput.value.substr(0, 4);
}

function checkAmount(e){
    let amount = e.target.value;
    console.log(amount);
    for(let i = 0; i < donateRadio.length; i++){
        if(donateRadio[i].value == amount){
            donateRadio[i].classList.toggle('active');
        }else{donateRadio[i].classList.remove('active');}
    }
}
amountInput.addEventListener('input', maxLength);
amountInput.addEventListener('input', checkAmount);