[Click here](https://ozcan-cetin.github.io/Checkout-Form/)

![Preview](https://github.com/ozcan-cetin/Checkout-Form/blob/master/Check%20Out%20Js.gif)

### I tried to make a shopping cart project for the first time.
#### 1. How did I plan the HTML part?
  * My project consists of 2 parts.
  * The first section is the form section where the user will enter their information.
  * The second section is the section that shows the products selected by the user.
  * I put these two divisions into a division named container.
  * I created separate divisions by naming the first division as container_left and the other as container_right.
  * I determined the classes using the BEM method and created the relevant sections.
  * I've put each picture into a division so I can organize pictures more easily. <hr>
#### 2. How did I do the CSS part?
  * First of all, the way I wanted my project to appear on big screens was the first part on the left and the second part on the right.
  * By giving the container display:flex, I ensured that the left and right sections are placed in the appropriate places.
  * I made use of the flex method for almost the entire CSS section.
  * I wanted my project to be responsive. For this reason, I tried to use media queries effectively. <hr>
#### 3. How did I do the javascript part?
  * I tried to use javascript codes effectively for the first time in a project.
  * There were some basic operations I had to do. These:
      - Problem-1: The user can increase or decrease the amount of product. Accordingly, I must assign the necessary functions to the increase and decrease buttons.
      - Problem-2: When the user changes the product quantity, the total price must also change. For this, I need to assign functions to the increase and decrease buttons.
      - Problem-3: The user can give up buying the product and remove it from the cart. Therefore, I must assign the required function to the remove button.
      - Problem-4: If the user refuses to buy the product and removes the product from the cart, the price of that product must be subtracted from the total price. For this, I have to assign the necessary function to the remove button. <hr>
###### PROBLEM-1 
1. I assigned the increment and decrement buttons to the variables with the document.querySelectorAll(".classname") method.
2. The document.querySelectorAll(".classname") command returned me a list of elements with the same class name.
3. Since the task of the elements in this list is to determine the amount of products, I had to give orders to each of them separately.
4. I preferred to access all elements with a single command using the forEach method. plus.forEach((item)=>{}
5. I used the item.addEventListener("click", function) method because I wanted to add a function to every element I reach.
6. Since I want my function to be used for every element, I used this statement inside the function. This expression refers to whatever element the function is assigned to.
7. To access the relevant elements in my HTML page I used methods that;
    * previousElementSibling
	* nextElementSibling
	* parentElement
	* firstElementChild 
8. Since the element I'm going to replace is in string state, I changed it to Number.
9. I defined 1 increment function for increment button.
10. For the decrease button, I defined a 1 subtract function if the element to be changed is greater than 0. <hr>
###### PROBLEM-2
1. I need to add another function to the increase and decrease buttons that I have reached with the operations I have mentioned in Problem-1.
2. I assigned the total price to a variable with the methods I specified in Problem-1.
3. I reached the price of the product with the methods I mentioned in Problem-1.
4. Since I will be adding or subtracting the total price, I had to set the total price to float. However, I should not have taken the dollar sign at the beginning. I used the slice method for this.
5. I adjusted the product price in the same way as the total price.
6. I added the dollar sign to the result of addition or subtraction.
7. I used the toFixed(2) method to have two digits after the comma. <hr>
###### PROBLEM-3
1. I assigned the remove button to a variable with the methods I mentioned in Problem-1.
2. The task of the remove button will be to remove the division in which the relevant product is located.
3. I reached the division where the product is located, with the methods I specified in Problem-1.
4. .style.display = "none"; I used the command in the function inside remove. <hr>
###### PROBLEM-4
1. Using the methods in Problem-1, I reached the total price, product price and product quantity.
2. Using the methods in Problem-3, I multiplied the product quantity to be removed from the card and the product price. I added the function that subtracts the multiplication result from the total price to the remove button. <hr>
### It was a tiring but good job for me. I want to do better projects.😉



