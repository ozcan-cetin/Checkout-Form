//! I set variables to determine the amount of product.

const minus = document.querySelectorAll(".left")
const plus = document.querySelectorAll(".right")

//! ***********************

const total = document.getElementById("total")
console.log(total.innerHTML);


//? I determined the amount of product using a function.

// INCREASE QUANTITY

plus.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click", add)
    
// SET PRICE   
    
    // item.addEventListener("click", priceup)
})

function add(item){
    let amount = this.previousElementSibling
    amount.innerHTML = Number(amount.innerHTML) + 1

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1))+ parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)
  }

console.log(plus[0].parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1));

  // REDUCE THE QUANTITY

minus.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click", substract)

    // SET PRICE 

    // item.addEventListener("click", pricedown)
})

function substract(item){
    let amount = this.nextElementSibling
    if(Number(amount.innerHTML) > 0){
    amount.innerHTML = Number(amount.innerHTML) - 1


    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)
    
}
  }





console.log(plus[0].innerHTML);
