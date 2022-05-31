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

    const product_price = this.closest(".display").querySelector("span").innerHTML.slice(1)

    // total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1))+ parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1))+ parseFloat(product_price)).toFixed(2)
  }

//   const product_price = plus[0].closest(".display").querySelector("span").innerHTML
//   console.log(product_price);


  // REDUCE THE QUANTITY AND TOTAL PRICE

minus.forEach((item)=>{
    // console.log(item);
    item.addEventListener("click", substract)

})

function substract(item){
    let amount = this.nextElementSibling

    if(Number(amount.innerHTML) > 1){
    amount.innerHTML = Number(amount.innerHTML) - 1

    const product_price = this.closest(".display").querySelector("span").innerHTML.slice(1)


    // total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - parseFloat(this.parentElement.previousElementSibling.firstElementChild.innerHTML.slice(1))).toFixed(2)

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - parseFloat(product_price)).toFixed(2)
    
}
  }

//* REMOVE *************
remove.forEach((item)=>{
    item.addEventListener("click", delet)
})

function delet(item){
    this.parentElement.parentElement.style.display = "none";

    const product_price = this.closest(".display").querySelector("span").innerHTML.slice(1)

    const product_amount = this.closest(".display").querySelector("label").innerHTML

    // total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - (Number(this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML) * parseFloat(this.previousElementSibling.previousElementSibling.firstElementChild.innerHTML.slice(1)))).toFixed(2)

    total.innerHTML ="$" + (parseFloat(total.innerHTML.slice(1)) - (Number(product_amount) * parseFloat(product_price))).toFixed(2)
}
// const product_amount = plus[0].closest(".display").querySelector("label").innerHTML
// console.log(product_amount);




console.log(plus[0].innerHTML);
