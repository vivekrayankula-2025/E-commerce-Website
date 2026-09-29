document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutItems = document.getElementById("checkoutItems");
    const checkoutSubtotal = document.getElementById("checkoutSubtotal");
    const checkoutDelivery = document.getElementById("checkoutDelivery");
    const checkoutTax = document.getElementById("checkoutTax");
    const checkoutTotal = document.getElementById("checkoutTotal");
    const cardDetails = document.getElementById("cardDetails");

    const DELIVERY_LIMIT = 999;
    const STANDARD_DELIVERY = 49;
    const EXPRESS_DELIVERY = 149;
    const TAX = 0;

    const formatPrice = (value) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(Number(value) || 0);
    };

    function getCart() {
        try {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            return Array.isArray(cart) ? cart : [];
        } catch {
            return [];
        }
    }

    function getDiscount(subtotal) {
        const discount =
            Number(localStorage.getItem("shoporaDiscount")) || 0;

        return Math.min(Math.max(discount, 0), subtotal);
    }

    function calculateTotals(cart) {
        const subtotal = cart.reduce((sum, item) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 1;

            return sum + price * quantity;
        }, 0);

        const discount = getDiscount(subtotal);

        const deliveryType =
            document.querySelector(
                'input[name="delivery"]:checked'
            )?.value || "standard";

        let delivery = 0;

        if (deliveryType === "express") {
            delivery = EXPRESS_DELIVERY;
        } else if (
            subtotal > 0 &&
            subtotal < DELIVERY_LIMIT
        ) {
            delivery = STANDARD_DELIVERY;
        }

        const total =
            subtotal -
            discount +
            delivery +
            TAX;

        return {
            subtotal,
            discount,
            delivery,
            tax: TAX,
            total: Math.max(0, total),
            deliveryType
        };
    }

    function renderCheckout() {
        const cart = getCart();

        if (!cart.length) {
            checkoutItems.innerHTML = `
                <div class="checkout-empty">
                    <div class="checkout-empty-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add products before checking out.</p>
                    <a href="index.html" class="checkout-shop-btn">
                        Shop Now
                    </a>
                </div>
            `;

            checkoutSubtotal.textContent = formatPrice(0);
            checkoutDelivery.textContent = "FREE";
            checkoutTax.textContent = formatPrice(0);
            checkoutTotal.textContent = formatPrice(0);

            if (checkoutForm) {
                checkoutForm.style.display = "none";
            }

            return;
        }

        checkoutItems.innerHTML = cart.map(item => {
            const quantity = Number(item.quantity) || 1;
            const price = Number(item.price) || 0;
            const itemTotal = price * quantity;

            return `
                <div class="checkout-item">

                    <div class="checkout-image-wrap">

                        <img
                            src="${item.image || ""}"
                            alt="${item.name || "Product"}"
                            onerror="this.style.display='none'"
                        >

                        <span class="checkout-qty-badge">
                            ${quantity}
                        </span>

                    </div>

                    <div class="checkout-item-info">

                        <strong>
                            ${item.name || "Product"}
                        </strong>

                        <span>
                            ${formatPrice(price)} × ${quantity}
                        </span>

                    </div>

                    <strong class="checkout-item-price">
                        ${formatPrice(itemTotal)}
                    </strong>

                </div>
            `;
        }).join("");

        updateTotals();
    }

    function updateTotals() {
        const cart = getCart();
        const totals = calculateTotals(cart);

        checkoutSubtotal.textContent =
            formatPrice(totals.subtotal);

        if (totals.deliveryType === "express") {
            checkoutDelivery.textContent =
                formatPrice(EXPRESS_DELIVERY);
        } else if (totals.delivery === 0) {
            checkoutDelivery.textContent = "FREE";
        } else {
            checkoutDelivery.textContent =
                formatPrice(totals.delivery);
        }

        checkoutTax.textContent =
            formatPrice(totals.tax);

        checkoutTotal.textContent =
            formatPrice(totals.total);
    }

    document
        .querySelectorAll('input[name="delivery"]')
        .forEach(radio => {
            radio.addEventListener(
                "change",
                updateTotals
            );
        });

    document
        .querySelectorAll('input[name="payment"]')
        .forEach(radio => {
            radio.addEventListener("change", () => {

                const selected =
                    document.querySelector(
                        'input[name="payment"]:checked'
                    )?.value;

                if (cardDetails) {
                    cardDetails.style.display =
                        selected === "card"
                            ? "block"
                            : "none";
                }
            });
        });

    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const cart = getCart();

                if (!cart.length) {
                    alert("Your cart is empty.");
                    return;
                }

                if (!checkoutForm.checkValidity()) {
                    checkoutForm.reportValidity();
                    return;
                }

                const formData =
                    new FormData(checkoutForm);

                const totals =
                    calculateTotals(cart);

                const customer = {
                    name:
                        formData.get("fullName") || "",

                    email:
                        formData.get("email") || "",

                    phone:
                        formData.get("phone") || "",

                    address:
                        formData.get("address") || "",

                    city:
                        formData.get("city") || "",

                    state:
                        formData.get("state") || "",

                    pincode:
                        formData.get("pincode") || ""
                };

                const paymentValue =
                    formData.get("payment") || "cod";

                const paymentLabels = {
                    card: "Credit / Debit Card",
                    upi: "UPI",
                    cod: "Cash on Delivery"
                };

                const order = {

                    id:
                        `ORD-${Date.now()}`,

                    customer,

                    items: cart,

                    subtotal:
                        totals.subtotal,

                    discount:
                        totals.discount,

                    shipping:
                        totals.delivery,

                    tax:
                        totals.tax,

                    total:
                        totals.total,

                    deliveryType:
                        totals.deliveryType,

                    payment:
                        paymentLabels[paymentValue] ||
                        paymentValue,

                    paymentValue,

                    status:
                        "confirmed",

                    createdAt:
                        new Date().toISOString()
                };

                localStorage.setItem(
                    "lastOrder",
                    JSON.stringify(order)
                );

                const history =
                    JSON.parse(
                        localStorage.getItem(
                            "orderHistory"
                        )
                    ) || [];

                history.unshift(order);

                localStorage.setItem(
                    "orderHistory",
                    JSON.stringify(history)
                );

                localStorage.removeItem("cart");

                localStorage.removeItem(
                    "shoporaDiscount"
                );

                window.location.href =
                    "success.html";
            }
        );
    }

    renderCheckout();
});