let cartCount = 0;

const cartCountElement = document.getElementById("cart-count");
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");
const noResults = document.getElementById("no-results");


// ================= CART =================

function addToCart(productName) {

    cartCount++;

    cartCountElement.textContent = cartCount;

    console.log(`${productName} added to cart`);

}


// ================= SCROLL TO PRODUCTS =================

function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= PRODUCT SEARCH =================

searchInput.addEventListener("input", function () {

    const searchValue = this.value.trim().toLowerCase();

    let visibleProducts = 0;

    products.forEach(function (product) {

        const productName =
            product.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});
