//! I set variables to determine the amount of product.

const minus = document.querySelectorAll(".left")
const plus = document.querySelectorAll(".right")

//! I determined the amount of product using a function.

// INCREASE QUANTITY

plus.forEach((item)=>{
    console.log(item);
    item.addEventListener("click", add)
})

function add(item){
    let amount = this.previousElementSibling
    amount.innerHTML = Number(amount.innerHTML) + 1
  }

  // REDUCE THE QUANTITY

minus.forEach((item)=>{
    console.log(item);
    item.addEventListener("click", substract)
})

function substract(item){
    let amount = this.nextElementSibling
    if(Number(amount.innerHTML) > 0){
    amount.innerHTML = Number(amount.innerHTML) - 1
}
  }

console.log(plus[0].innerHTML);
