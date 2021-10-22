var carouselImg = document.querySelector(".carousel-images");

function navigateLeft() {
    carouselImg.src = "images/stonepunk.png";
}

function navigateRight() {
    carouselImg.src = "images/pixel-ninjas-2.png";
}

function addToCart() {
    var CartItems = document.querySelector("#item-number").innerHTML;
    CartItems++;
    document.querySelector("#item-number").innerHTML = CartItems
}