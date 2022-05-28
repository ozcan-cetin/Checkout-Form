//! I set variables to determine the amount of product.

const minus = document.querySelectorAll(".left")
const plus = document.querySelectorAll(".right")

//! I set variable to determine the quantity of total price.

const total = document.getElementById("total")
// console.log(total.innerHTML);

//! I set variable to adjust removing process.
const remove = document.querySelectorAll(".remove")
// console.log(remove);


//? I determined the amount of product and quantity of product using a function.

// INCREASE QUANTITY AND TOTAL PRICE

plus.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click", add)
    
})

function add(item){
    let amount = this.previousElementSibling
    amount.innerHTML = Number(amount.innerHTML) + 1

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1))+ parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)
  }


  // REDUCE THE QUANTITY AND TOTAL PRICE

minus.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click", substract)

})

function substract(item){
    let amount = this.nextElementSibling
    if(Number(amount.innerHTML) > 0){
    amount.innerHTML = Number(amount.innerHTML) - 1


    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)
    
}
  }

//* REMOVE *************
remove.forEach((item)=>{
    item.addEventListener("click", delet)
})

function delet(item){
    this.parentElement.parentElement.style.display = "none";

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - (Number(this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML) * parseFloat(this.previousElementSibling.previousElementSibling.firstElementChild.innerHTML.slice(1)))).toFixed(2)
}




console.log(plus[0].innerHTML);
