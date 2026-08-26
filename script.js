let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert("Product added to cart!");
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("search").addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let productName = product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

});