 //responsive menu-icon on click event
 var menuList = document.getElementById("menuList");

 function togglemenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "200px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
 }
 
 /******************************************************************************************* */
 
 // click to add item to cart
 $(".add-to-cart").click(function(event){
    event.preventDefault(); //prevent click empty link jump to the top of the page
    var name = $(this).attr("data-name"); //this represents .add-to-cart
    var price = Number($(this).attr("data-price")); //convert sting price back to number

    addItemToCart(name, price, 1);
    displayCart();
});

//click clear cart button
$("#clear-cart").click(function(event){
    clearCart();
    displayCart();
})

//display items in the cart inside "show-cart" div
function displayCart() {
    var cartArray = listCart();
    var output = "";

    for (var i in cartArray) { // for loop through each items in cart
        output += "<div class='itemDetail'>" //use += here, means add an item on to output varaible each time
            +"<div class='cart-item cart-column'>"
            +cartArray[i].name 
            + "</div>"
            +"<div class='cart-price cart-column'>"
            +" $ "+cartArray[i].price
            +"</div>"
            +" <input class='item-count cart-column' type='number' data-name='"
            +cartArray[i].name
            +"' value='"+cartArray[i].count+"'>"
            +" <button class='delete-item cart-column' data-name='"
            +cartArray[i].name+"'>Remove</button>"
            +"<div class='subTotal cart-column'>"
            +" $ "+cartArray[i].total
            +"</div>"
            +"</div>";
    }
    $("#show-cart").html(output); // after loop through cart, pass value to html "show-cart" part for display
    $("#count-cart").html(countCart());
    $("#total-cart").html(totalCart());

}

//formula to write output in += way, e.g.:
/* var message = "Hello World";
var someText = "<h1>" +message+ "</h1>";
var anotherText = "<p>" +message+ "</P>";
console.log(someText);
console.log(anotherText);*/

$("#show-cart").on("click", ".delete-item", function(event){ // for delete item button, only exist when click delete button is on
    var name = $(this).attr("data-name"); // "this" here refer to .delete-item
    removeItemFromCartAll(name);
    displayCart();
});


$("#show-cart").on("change", ".item-count", function(event){ //for counting total number of items, 
                                                            //the change event happens inside #show-cart  a class name called item-count
    var name = $(this).attr("data-name"); // "this" here refer to .item-count
    var price = $(this).attr("data-price");
    var count = Number( $(this).val() ); // convert the string into number, using Number()

    setCountForItem(name, price, count); 
    displayCart();
});



//************************************
//Shopping Cart functions
var cart = []; //cart array to hold all cart items

var Item = function (name, price, count) { // this function will generate objects store to cart array
    this.name = name
    this.price = price
    this.count = count
};

//make a function to do add to cart repeatly instead
/***************************************************************/
///functions need for cart:

// addItemToCart(name, price, count)
function addItemToCart(name, price, count) {
    if(cart == null){
        cart = [];
    }
    for (var i in cart) { //combine items with same name
        if (cart[i].name === name && cart[i].price === price) {
            cart[i].count += count;

            saveCart();
            return; // found the item with same name, then quite the looping
        }
    
    }
    var item = new Item(name, price, count); // if no same name, then add
    cart.push(item);
    saveCart();
}
console.log("add to cart");
console.log(cart);

// count total for individual items
function setCountForItem(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count = count; 
            if (cart[i].count == 0 ) { // if count is 0, then remove the item
                cart.splice(i, 1);  // splice(name, number) to remove or add item to array 
            }
            break;
        }               
    }
    saveCart();
};
console.log("increased amount");
console.log(cart);

//removeItemFromCart(name)  //Removes one item by looking at the item name

function removeItemFromCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name ) { //"3" === 3 false , has to be same type
            cart[i].count --;
            if (cart[i].count == 0 ) { // if count is 0, then remove the item
                cart.splice(i, 1);  // splice(name, number) to remove or add item to array  
            }
            break;
        }
    }
    saveCart();
};

//removeItemFromCartAll(name) //removes all item name
function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
};


//clearCart()   //removes everything in the cart, so no need to have parameter
function clearCart() {
    cart = [];
    saveCart();
};


//countCart()   // it needs to look at each of the item numbers in the cart, doesn't need parameter as well, because it will return count to us in the end 
function countCart() {  // -> ruturn total count for all items
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
};


//totalCart()   // no need for parameter, it will look each of the item price and return us a total value                
function totalCart() {// -> return total cost of all items in cart
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price * cart[i].count;
    }
    return totalCost.toFixed(2); //2 digits after dot decimal;
};


// listCart()  // -> return array[Item], then can display the items
function listCart() {
    var cartCopy = []; //copy the original without change it
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        itemCopy.total = (item.price * item.count).toFixed(2);//total price for each item indivisuly in cart
        cartCopy.push(itemCopy);
    }
    return cartCopy;
};


// saveCart()
function saveCart(){
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
};


// loadCart()
function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart")); // what we get here is string,need to convert back to array object

};


loadCart();
displayCart();

