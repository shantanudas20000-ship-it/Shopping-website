// ================= CART DATA =================

let cart = [];


// ================= ELEMENTS =================

const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");

const cartCountElement =
    document.getElementById("cart-count");

const cartItems =
    document.getElementById("cart-items");

const cartTotal =
    document.getElementById("cart-total");

const checkoutButton =
    document.getElementById("checkout-btn");

const searchInput =
    document.getElementById("search");

const products =
    document.querySelectorAll(".product");

const noResults =
    document.getElementById("no-results");


// ================= ADD TO CART =================

function addToCart(productName) {

    const product =
        [...products].find(
            item => item.dataset.name === productName
        );

    if (!product) {
        return;
    }


    const price =
        Number(product.dataset.price);


    const existingProduct =
        cart.find(
            item => item.name === productName
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });

    }


    updateCart();

    openCart();

}


// ================= UPDATE CART =================

function updateCart() {

    // Total quantity

    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCountElement.textContent =
        totalItems;


    // Clear cart

    cartItems.innerHTML = "";


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                🛒 Your cart is empty.
            </p>
        `;

    } else {

        // Display cart items

        cart.forEach(
            (item, index) => {

                const cartItem =
                    document.createElement("div");

                cartItem.className =
                    "cart-item";


                cartItem.innerHTML = `
                    <div>
                        <h4>${item.name}</h4>

                        <p>
                            ₹${item.price.toLocaleString("en-IN")}
                            × ${item.quantity}
                        </p>
                    </div>

                    <button
                        type="button"
                        class="remove-btn"
                        onclick="removeFromCart(${index})"
                    >
                        Remove
                    </button>
                `;


                cartItems.appendChild(cartItem);

            }
        );

    }


    // Calculate total price

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    cartTotal.textContent =
        `₹${total.toLocaleString("en-IN")}`;
}


// ================= REMOVE FROM CART =================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// ================= OPEN CART =================

function openCart() {

    cartPanel.classList.add("active");

    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ================= CLOSE CART =================

function closeCartPanel() {

    cartPanel.classList.remove("active");

    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";
}


// ================= CART BUTTON =================

cartButton.addEventListener(
    "click",
    openCart
);


// ================= CLOSE BUTTON =================

closeCart.addEventListener(
    "click",
    closeCartPanel
);


// ================= OVERLAY =================

cartOverlay.addEventListener(
    "click",
    closeCartPanel
);


// ================= ESC KEY =================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCartPanel();

        }

    }
);


// ================= SHOP NOW =================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================= SEARCH =================

searchInput.addEventListener(
    "input",
    function () {

        const searchValue =
            this.value
                .trim()
                .toLowerCase();


        let visibleProducts = 0;


        products.forEach(
            function (product) {

                const productName =
                    product.dataset.name
                        .toLowerCase();


                if (
                    productName.includes(
                        searchValue
                    )
                ) {

                    product.style.display = "";

                    visibleProducts++;

                } else {

                    product.style.display = "none";

                }

            }
        );


        if (visibleProducts === 0) {

            noResults.style.display = "block";

        } else {

            noResults.style.display = "none";

        }

    }
);


// ================= CHECKOUT =================

checkoutButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;
        }


        alert(
            "Checkout feature coming soon! 🚀"
        );

    }
);


// ================= INITIAL CART =================

updateCart();
