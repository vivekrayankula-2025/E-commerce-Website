// ========================================
// PRODUCT DETAILS PAGE
// ========================================

const productDetails =
    document.getElementById("productDetails");


// Get product ID from URL

const urlParams =
    new URLSearchParams(window.location.search);

const productId =
    Number(urlParams.get("id"));


// Find product

const product =
    products.find(item => item.id === productId);


// ========================================
// SPECIFICATIONS
// ========================================

function getSpecifications(product) {

    // If specifications already exist in data.js
    if (product.specifications) {
        return product.specifications;
    }

    if (product.specs) {
        return product.specs;
    }

    // Default specifications
    return {
        Category: product.category || "General",
        Rating: product.rating
            ? `${product.rating} / 5`
            : "Not available",

        Availability: "In Stock",

        Delivery: "Free Delivery",

        Material: "Premium Quality",

        Warranty: "1 Year",

        Return: "7 Days Replacement"
    };
}


// ========================================
// DISPLAY PRODUCT
// ========================================

function displayProduct() {

    if (!product) {

        productDetails.innerHTML = `
            <div style="text-align:center;padding:60px;">
                <h2>Product Not Found</h2>

                <p>
                    The product you are looking for
                    does not exist.
                </p>

                <a href="index.html#products">
                    Back to Products
                </a>
            </div>
        `;

        return;
    }


    const specifications =
        getSpecifications(product);


    let specificationHTML = "";


    Object.entries(specifications)
        .forEach(([key, value]) => {

            specificationHTML += `
                <div class="spec-item">

                    <span class="spec-name">
                        ${key}
                    </span>

                    <span class="spec-value">
                        ${value}
                    </span>

                </div>
            `;

        });


    productDetails.innerHTML = `

        <div class="product-detail">

            <!-- IMAGE -->

            <div>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-detail-image"
                    onerror="this.onerror=null;this.src='assests/images/' + product.category + '.svg';"
                >

            </div>


            <!-- INFORMATION -->

            <div>

                <span class="product-category">
                    ${product.category}
                </span>


                <h1>
                    ${product.name}
                </h1>


                <div class="product-rating">
                    ⭐ ${product.rating || "N/A"} / 5
                </div>


                <div class="product-price">
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </div>


                <p class="product-description">
                    ${
                        product.description ||
                        "This is a high-quality product available on Shopora."
                    }
                </p>


                <!-- SPECIFICATIONS -->

                <div class="specifications">

                    <h2>
                        Product Specifications
                    </h2>

                    <div class="spec-grid">

                        ${specificationHTML}

                    </div>

                </div>


                <!-- QUANTITY -->

                <div class="quantity-box">

                    <button
                        onclick="decreaseQuantity()"
                    >
                        −
                    </button>

                    <span id="quantity">
                        1
                    </span>

                    <button
                        onclick="increaseQuantity()"
                    >
                        +
                    </button>

                </div>


                <!-- BUTTONS -->

                <div class="action-buttons">

                    <button
                        class="add-cart"
                        onclick="addToCart()"
                    >
                        🛒 Add to Cart
                    </button>


                    <button
                        class="buy-now"
                        onclick="buyNow()"
                    >
                        Buy Now
                    </button>

                </div>


                <!-- BENEFITS -->

                <div class="benefits">

                    <div class="benefit">
                        🚚
                        <br>
                        Fast Delivery
                    </div>

                    <div class="benefit">
                        🔒
                        <br>
                        Secure Payment
                    </div>

                    <div class="benefit">
                        ✓
                        <br>
                        Quality Assured
                    </div>

                </div>

            </div>

        </div>

    `;
}


// ========================================
// QUANTITY
// ========================================

let quantity = 1;


function increaseQuantity() {

    quantity++;

    document.getElementById("quantity")
        .textContent = quantity;
}


function decreaseQuantity() {

    if (quantity > 1) {

        quantity--;

        document.getElementById("quantity")
            .textContent = quantity;

    }
}


// ========================================
// ADD TO CART
// ========================================

function addToCart() {

    if (!product) return;


    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existing =
        cart.find(item =>
            item.id === product.id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity: quantity

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(
        `${product.name} added to cart!`
    );
}


// ========================================
// BUY NOW
// ========================================

function buyNow() {

    if (!product) return;


    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existing =
        cart.find(item =>
            item.id === product.id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            ...product,

            quantity: quantity

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    window.location.href =
        "checkout.html";
}


// ========================================
// LOAD
// ========================================

displayProduct();