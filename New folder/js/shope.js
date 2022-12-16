const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

let suggestions = [
    "iphone 14 pro max",
    "iphone 13 pro max",
    "iphone 11 pro max",
     "mac book pro",
    "mac book 2020",
    "lenovo",
    "samsung",
    "ibad",
    "hawai",
   
];
// ending seacrch
// cart slid
let cartIcon = document.querySelector('#carticon'); 
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};
// img1
function changeImageSrc(anything){
    document.querySelector('.phonee').src = anything;}

    
function changeImageSrcs(anything){
    document.querySelector('.gal').src = anything;}



    
function changeImageSrce(anything){
    document.querySelector('.watch').src = anything;}

function changeImageSr(anything){
    document.querySelector('.air').src = anything;}






    if(document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', ready)
    }else{
        ready()
    }
    
    // Making Function
    function ready(){
        var removeCartButtons = document.getElementsByClassName('remove-cart')
        
        for (var i = 0; i < removeCartButtons.length; i++){
            var button =removeCartButtons[i]
            button.addEventListener('click', removeCartItem)
        }
        // quantity chang
        var quantityInputs = document.getElementsByClassName('cart-quantity')
        for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
        }
        // add card
        var addCart = document.getElementsByClassName('add-cart')
        for (var i = 0; i < addCart.length; i++){
            var button = addCart[i];
            button.addEventListener('click',addCartClicked)
        }
    
    // ?buy button work
    document.getElementsByClassName('btn-buy')[0]
    .addEventListener('click',buyButtonClicked)
    }
    // ?buy button work
    function buyButtonClicked(){
    alert('Your Order Is Aready')
    var carcontent = document.getElementsByClassName( 'cart-content' )[0]
    while(carcontent.hasChildNodes()){
        carcontent.removeChild(carcontent.firstChild)
    }
    updatetotal()
    }
    
    // remove item
    function removeCartItem (event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updatetotal()
    }
    // quantity 
    function quantityChanged(event){
        var input = event.target
        if (isNaN(input.value) || input.value <= 0){
        input.value = 1
        }
        updatetotal()
    }
    // add to cart
    function addCartClicked (event){
        var button = event.target
        var shopProducts = button.parentElement.parentElement
        var tit = shopProducts.getElementsByClassName('titles')[0].innerText
        var price = shopProducts.getElementsByClassName('pricess')[0].innerText
        var productImg = shopProducts.getElementsByClassName('mam')[0].src
        addProductToCart( tit, price, productImg)
        updatetotal()
    }
    
    function addProductToCart(tit, price, productImg) {
        var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cat-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('card-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == tit){
            alert('You Have Aready Add This Item')
            return
        }
    }
    var  cartBoxContent = `
    <img src="${productImg}" width="120px" alt="">
    <div class="detail-box ">
    <div class="card-title ">${tit}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
  
    <!-- remove cart -->
    <i class='bx bxs-trash remove-cart ' ></i>
    `;
            
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('remove-cart')[0].addEventListener('click',removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged)
    
    }
    // updatetotal
    function updatetotal() {
        var carcontent =  document.getElementsByClassName('cart-content')[0]
        var cartBoxes =  carcontent.getElementsByClassName('cat-box')
        var total = 0
        for (var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i]
            var priceElement = cartBox.getElementsByClassName('cart-price')[0]
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
            var price = parseFloat(priceElement.innerText.replace('$',''))
            var quantity = quantityElement.value
            total = total + (price * quantity)
            
        }
        total = Math.round(total*100) / 100;
            document.getElementsByClassName('total-price')[0].innerText = '$'+ total
    
    }
    
    
    
    