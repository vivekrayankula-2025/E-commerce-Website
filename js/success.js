// ========================================
// SHOPORA SUCCESS PAGE
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Get saved order
    let order = JSON.parse(localStorage.getItem("lastOrder"));

    // If lastOrder is not available, try orderHistory
    if (!order) {
        const history =
            JSON.parse(localStorage.getItem("orderHistory")) || [];

        if (history.length > 0) {
            order = history[history.length - 1];
        }
    }

    // If still no order, create empty object
    if (!order) {
        order = {};
    }

    console.log("Success page order:", order);


    // ========================================
    // ORDER NUMBER
    // ========================================

    const orderNumber =
        document.getElementById("orderNumber");

    if (orderNumber) {

        orderNumber.textContent =
            order.orderNumber ||
            order.orderId ||
            order.id ||
            "#ORD-" + Date.now();

    }


    // ========================================
    // ORDER DATE
    // ========================================

    const orderDate =
        document.getElementById("orderDate");

    if (orderDate) {

        if (order.date) {

            orderDate.textContent =
                new Date(order.date).toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                );

        } else {

            orderDate.textContent =
                new Date().toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                );

        }
    }


    // ========================================
    // PAYMENT METHOD
    // ========================================

    const paymentMethod =
        document.getElementById("paymentMethod");

    if (paymentMethod) {

        paymentMethod.textContent =
            order.paymentMethod ||
            order.payment ||
            "Cash on Delivery";

    }


    // ========================================
    // CALCULATE TOTAL
    // ========================================

    let total = 0;

    // First try saved total
    if (
        order.total !== undefined &&
        order.total !== null &&
        order.total !== ""
    ) {

        total = Number(order.total);

    }

    // Try grandTotal
    else if (
        order.grandTotal !== undefined &&
        order.grandTotal !== null
    ) {

        total = Number(order.grandTotal);

    }

    // Try checkoutTotal
    else if (
        order.checkoutTotal !== undefined &&
        order.checkoutTotal !== null
    ) {

        total = Number(order.checkoutTotal);

    }

    // ========================================
    // IF TOTAL IS NOT SAVED,
    // CALCULATE FROM ITEMS
    // ========================================

    else {

        const items =
            order.items ||
            order.cart ||
            [];

        if (Array.isArray(items)) {

            total = items.reduce(function (sum, item) {

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 1;

                return sum + (price * quantity);

            }, 0);

        }

    }


    // ========================================
    // DELIVERY CHARGE
    // ========================================

    let delivery =
        Number(order.delivery) ||
        Number(order.deliveryFee) ||
        0;


    // ========================================
    // TAX
    // ========================================

    let tax =
        Number(order.tax) ||
        Number(order.gst) ||
        0;


    // If total only contains subtotal,
    // add delivery + tax when available
    if (
        order.subtotal !== undefined &&
        order.total === undefined &&
        order.grandTotal === undefined
    ) {

        total =
            Number(order.subtotal) +
            delivery +
            tax;

    }


    // Make sure total is valid
    if (isNaN(total)) {
        total = 0;
    }


    // ========================================
    // DISPLAY TOTAL
    // ========================================

    const orderTotal =
        document.getElementById("orderTotal");

    if (orderTotal) {

        orderTotal.textContent =
            "₹" +
            total.toLocaleString("en-IN");

    }


    // ========================================
    // DELIVERY DATE
    // ========================================

    const deliveryDate =
        document.getElementById("deliveryDate");

    if (deliveryDate) {

        deliveryDate.textContent =
            order.deliveryDate ||
            "2–4 business days";

    }

});


// ========================================
// VIEW ORDER DETAILS
// ========================================

function viewOrderDetails() {

    const order =
        JSON.parse(localStorage.getItem("lastOrder"));

    if (!order) {

        alert("Order details are not available.");

        return;

    }

    let message = "ORDER DETAILS\n\n";

    message +=
        "Order Number: " +
        (
            order.orderNumber ||
            order.orderId ||
            order.id ||
            "N/A"
        ) +
        "\n";

    message +=
        "Payment: " +
        (
            order.paymentMethod ||
            order.payment ||
            "Cash on Delivery"
        ) +
        "\n";

    let total =
        Number(order.total) ||
        Number(order.grandTotal) ||
        0;

    message +=
        "Total: ₹" +
        total.toLocaleString("en-IN");

    alert(message);
}