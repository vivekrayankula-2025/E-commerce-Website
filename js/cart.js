/* =====================================================
   SHOPORA - CART SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------------
    // ELEMENTS
    // -----------------------------------------------

    const cartItemsContainer = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");

    const cartSubtotal = document.getElementById("cartSubtotal");
    const cartTotal = document.getElementById("cartTotal");
    const cartDiscount = document.getElementById("cartDiscount");
    const deliveryCharge = document.getElementById("deliveryCharge");

    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");

    const couponInput = document.getElementById("couponInput");
    const applyCouponBtn = document.getElementById("applyCouponBtn");
    const couponMessage = document.getElementById("couponMessage");

    const cartSubtitle = document.getElementById("cartSubtitle");


    // -----------------------------------------------
    // CART DATA
    // -----------------------------------------------

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let discount = Number(localStorage.getItem("shoporaDiscount")) || 0;

    const DELIVERY_LIMIT = 999;
    const DELIVERY_CHARGE = 49;


    // -----------------------------------------------
    // FORMAT PRICE
    // -----------------------------------------------

    function formatPrice(price) {

        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(price);

    }


    // -----------------------------------------------
    // SAVE CART
    // -----------------------------------------------

    function saveCart() {

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }


    // -----------------------------------------------
    // RENDER CART
    // -----------------------------------------------

    function renderCart() {

        cartItemsContainer.innerHTML = "";


        // EMPTY CART

        if (cart.length === 0) {

            emptyCart.classList.remove("hidden");

            cartItemsContainer.style.display = "none";

            clearCartBtn.style.display = "none";

            checkoutBtn.disabled = true;

            checkoutBtn.style.opacity = "0.5";

            checkoutBtn.style.cursor = "not-allowed";

            cartSubtotal.textContent = "₹0";

            cartTotal.textContent = "₹0";

            cartDiscount.textContent = "- ₹0";

            deliveryCharge.textContent = "FREE";

            cartSubtitle.textContent =
                "Your cart is currently empty.";

            return;

        }


        // CART HAS ITEMS

        emptyCart.classList.add("hidden");

        cartItemsContainer.style.display = "block";

        clearCartBtn.style.display = "block";

        checkoutBtn.disabled = false;

        checkoutBtn.style.opacity = "1";

        checkoutBtn.style.cursor = "pointer";


        let totalItems = 0;


        cart.forEach((item, index) => {

            const quantity = Number(item.quantity) || 1;

            totalItems += quantity;


            const itemTotal =
                Number(item.price) * quantity;


            const cartItem = document.createElement("article");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image"
                    onerror="this.src='https://via.placeholder.com/300x300?text=Shopora'"
                >


                <div class="cart-item-details">

                    <span class="cart-item-category">
                        ${item.category || "Product"}
                    </span>


                    <h3 class="cart-item-name">
                        ${item.name}
                    </h3>


                    <div class="cart-item-rating">

                        ★ ${item.rating || "4.5"}

                    </div>


                    <div class="cart-item-stock">
                        ✓ In Stock
                    </div>


                    <div class="cart-item-actions">

                        <div class="quantity-control">

                            <button
                                class="decrease-btn"
                                data-index="${index}"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>


                            <span>
                                ${quantity}
                            </span>


                            <button
                                class="increase-btn"
                                data-index="${index}"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="remove-item"
                            data-index="${index}"
                        >
                            Remove
                        </button>

                    </div>

                </div>


                <div class="cart-item-price">

                    <strong>
                        ${formatPrice(itemTotal)}
                    </strong>

                    <small>
                        ${formatPrice(item.price)} each
                    </small>

                </div>

            `;


            cartItemsContainer.appendChild(cartItem);

        });


        cartSubtitle.textContent =
            `${totalItems} item${totalItems !== 1 ? "s" : ""} in your cart.`;


        calculateTotals();

    }


    // -----------------------------------------------
    // CALCULATE TOTALS
    // -----------------------------------------------

    function calculateTotals() {

        let subtotal = 0;


        cart.forEach(item => {

            const price = Number(item.price) || 0;

            const quantity = Number(item.quantity) || 1;

            subtotal += price * quantity;

        });


        // DISCOUNT

        const discountAmount = Math.min(
            discount,
            subtotal
        );


        // DELIVERY

        let delivery = 0;

        if (
            subtotal > 0 &&
            subtotal < DELIVERY_LIMIT
        ) {

            delivery = DELIVERY_CHARGE;

        }


        // FINAL TOTAL

        const total =
            subtotal -
            discountAmount +
            delivery;


        // DISPLAY

        cartSubtotal.textContent =
            formatPrice(subtotal);


        cartDiscount.textContent =
            `- ${formatPrice(discountAmount)}`;


        deliveryCharge.textContent =
            delivery === 0
                ? "FREE"
                : formatPrice(delivery);


        cartTotal.textContent =
            formatPrice(total);

    }


    // -----------------------------------------------
    // INCREASE QUANTITY
    // -----------------------------------------------

    cartItemsContainer.addEventListener(
        "click",
        event => {

            const increaseButton =
                event.target.closest(".increase-btn");


            if (!increaseButton) {
                return;
            }


            const index =
                Number(increaseButton.dataset.index);


            if (!cart[index]) {
                return;
            }


            cart[index].quantity =
                (Number(cart[index].quantity) || 1) + 1;


            saveCart();

            renderCart();

        }
    );


    // -----------------------------------------------
    // DECREASE QUANTITY
    // -----------------------------------------------

    cartItemsContainer.addEventListener(
        "click",
        event => {

            const decreaseButton =
                event.target.closest(".decrease-btn");


            if (!decreaseButton) {
                return;
            }


            const index =
                Number(decreaseButton.dataset.index);


            if (!cart[index]) {
                return;
            }


            const currentQuantity =
                Number(cart[index].quantity) || 1;


            if (currentQuantity > 1) {

                cart[index].quantity =
                    currentQuantity - 1;

            } else {

                cart.splice(index, 1);

            }


            saveCart();

            renderCart();

        }
    );


    // -----------------------------------------------
    // REMOVE PRODUCT
    // -----------------------------------------------

    cartItemsContainer.addEventListener(
        "click",
        event => {

            const removeButton =
                event.target.closest(".remove-item");


            if (!removeButton) {
                return;
            }


            const index =
                Number(removeButton.dataset.index);


            if (!cart[index]) {
                return;
            }


            cart.splice(index, 1);


            saveCart();

            renderCart();

        }
    );


    // -----------------------------------------------
    // CLEAR CART
    // -----------------------------------------------

    clearCartBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {
                return;
            }


            const confirmClear =
                confirm(
                    "Are you sure you want to remove all items from your cart?"
                );


            if (!confirmClear) {
                return;
            }


            cart = [];

            discount = 0;


            localStorage.removeItem("cart");

            localStorage.removeItem(
                "shoporaDiscount"
            );


            if (couponInput) {
                couponInput.value = "";
            }


            if (couponMessage) {
                couponMessage.textContent = "";
            }


            renderCart();

        }
    );


    // -----------------------------------------------
    // COUPON SYSTEM
    // -----------------------------------------------

    applyCouponBtn.addEventListener(
        "click",
        () => {

            const coupon =
                couponInput.value
                    .trim()
                    .toUpperCase();


            if (!coupon) {

                couponMessage.textContent =
                    "Please enter a coupon code.";

                couponMessage.style.color =
                    "#b12704";

                return;

            }


            /*
                Available demo coupons:

                SHOPORA10
                SHOPORA20
                WELCOME500
            */


            let newDiscount = 0;


            if (coupon === "SHOPORA10") {

                const subtotal =
                    calculateSubtotal();

                newDiscount =
                    Math.round(subtotal * 0.10);

            }


            else if (coupon === "SHOPORA20") {

                const subtotal =
                    calculateSubtotal();

                newDiscount =
                    Math.round(subtotal * 0.20);

            }


            else if (coupon === "WELCOME500") {

                newDiscount = 500;

            }


            else {

                discount = 0;

                localStorage.removeItem(
                    "shoporaDiscount"
                );


                couponMessage.textContent =
                    "Invalid coupon code.";

                couponMessage.style.color =
                    "#b12704";

                calculateTotals();

                return;

            }


            discount = newDiscount;


            localStorage.setItem(
                "shoporaDiscount",
                discount
            );


            couponMessage.textContent =
                `Coupon applied! You saved ${formatPrice(discount)}.`;

            couponMessage.style.color =
                "#067d62";


            calculateTotals();

        }
    );


    // -----------------------------------------------
    // CALCULATE SUBTOTAL
    // -----------------------------------------------

    function calculateSubtotal() {

        return cart.reduce(
            (total, item) => {

                return total +
                    (Number(item.price) || 0) *
                    (Number(item.quantity) || 1);

            },
            0
        );

    }


    // -----------------------------------------------
    // CHECKOUT
    // -----------------------------------------------

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            const subtotal =
                calculateSubtotal();


            const discountAmount =
                Math.min(
                    discount,
                    subtotal
                );


            const delivery =
                subtotal >= DELIVERY_LIMIT
                    ? 0
                    : DELIVERY_CHARGE;


            const total =
                subtotal -
                discountAmount +
                delivery;


            const checkoutData = {

                subtotal,

                discount: discountAmount,

                delivery,

                total,

                items: cart

            };


            localStorage.setItem(
                "shoporaCheckout",
                JSON.stringify(checkoutData)
            );


            window.location.href =
                "checkout.html";

        }
    );


    // -----------------------------------------------
    // INITIAL LOAD
    // -----------------------------------------------

    renderCart();

});