// ========================================
// PRODUCTS PAGE
// ========================================

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const cartCount = document.getElementById("cartCount");

function getWishlist(){ return JSON.parse(localStorage.getItem("wishlist") || "[]"); }
function toggleWishlist(id){ const list=getWishlist(); const i=list.indexOf(id); if(i>=0) list.splice(i,1); else list.push(id); localStorage.setItem("wishlist",JSON.stringify(list)); renderProducts(); }

// Pagination container
const pagination = document.createElement("div");

pagination.className = "pagination";

if (productGrid) {
    productGrid.after(pagination);
}


// ========================================
// STATE
// ========================================

let filteredProducts = [...products];
const initialCategory = new URLSearchParams(location.search).get("category");
if(categoryFilter && ["electronics","fashion","home"].includes(initialCategory)) categoryFilter.value = initialCategory;

let currentPage = 1;

const productsPerPage = 12;


// ========================================
// CART FUNCTIONS
// ========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function updateCartCount() {

    if (!cartCount) return;

    const cart = getCart();

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = count;
}


// ========================================
// ADD TO CART
// ========================================

function addToCart(productId) {

    const cart = getCart();

    const product = products.find(
        product => product.id === productId
    );

    if (!product) return;


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart(cart);

    updateCartCount();

    showToast(
        `${product.name} added to cart`
    );
}


// ========================================
// TOAST MESSAGE
// ========================================

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.classList.add("show");

    }, 10);


    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2000);
}


// ========================================
// RENDER PRODUCTS
// ========================================

function renderProducts() {

    if (!productGrid) return;


    productGrid.innerHTML = "";


    const totalProducts =
        filteredProducts.length;


    resultCount.textContent =
        `${totalProducts} product${totalProducts !== 1 ? "s" : ""}`;


    // Empty state
    if (totalProducts === 0) {

        emptyState.classList.remove("hidden");

        pagination.innerHTML = "";

        return;

    }


    emptyState.classList.add("hidden");


    // ========================================
    // PAGINATION CALCULATION
    // ========================================

    const startIndex =
        (currentPage - 1) *
        productsPerPage;


    const endIndex =
        startIndex +
        productsPerPage;


    const pageProducts =
        filteredProducts.slice(
            startIndex,
            endIndex
        );


    // ========================================
    // CREATE PRODUCT CARDS
    // ========================================

    pageProducts.forEach(product => {

        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-wrapper">
                <button class="wishlist-btn ${getWishlist().includes(product.id)?"active":""}" onclick="event.preventDefault();toggleWishlist(${product.id})" aria-label="Wishlist">${getWishlist().includes(product.id)?"♥":"♡"}</button>
                <a href="product.html?id=${product.id}">

                <img
                    src="${product.image}?auto=format&fit=crop&w=700&q=80"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='assests/images/' + product.category + '.svg';" 
                >

                </a>
            </div>

            <div class="product-content">

                <span class="category">
                    ${product.category}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <div class="rating">
                    ⭐ ${product.rating}
                </div>


                <div class="product-bottom">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>


                    <button
                        class="add-btn"
                        data-id="${product.id}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        `;


        productGrid.appendChild(card);

    });


    // ========================================
    // ADD BUTTON EVENTS
    // ========================================

    document
        .querySelectorAll(".add-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const productId =
                        Number(button.dataset.id);

                    addToCart(productId);

                }
            );

        });


    renderPagination();

}


// ========================================
// PAGINATION
// ========================================

function renderPagination() {

    pagination.innerHTML = "";


    const totalPages =
        Math.ceil(
            filteredProducts.length /
            productsPerPage
        );


    if (totalPages <= 1) {
        return;
    }


    // Previous button
    const previousButton =
        document.createElement("button");


    previousButton.textContent =
        "← Previous";


    previousButton.disabled =
        currentPage === 1;


    previousButton.addEventListener(
        "click",
        () => {

            if (currentPage > 1) {

                currentPage--;

                renderProducts();

                window.scrollTo({
                    top: 500,
                    behavior: "smooth"
                });

            }

        }
    );


    pagination.appendChild(
        previousButton
    );


    // Page numbers
    for (
        let page = 1;
        page <= totalPages;
        page++
    ) {

        const pageButton =
            document.createElement("button");


        pageButton.textContent =
            page;


        if (page === currentPage) {

            pageButton.classList.add(
                "active"
            );

        }


        pageButton.addEventListener(
            "click",
            () => {

                currentPage = page;

                renderProducts();

                window.scrollTo({
                    top: 500,
                    behavior: "smooth"
                });

            }
        );


        pagination.appendChild(
            pageButton
        );

    }


    // Next button
    const nextButton =
        document.createElement("button");


    nextButton.textContent =
        "Next →";


    nextButton.disabled =
        currentPage === totalPages;


    nextButton.addEventListener(
        "click",
        () => {

            if (currentPage < totalPages) {

                currentPage++;

                renderProducts();

                window.scrollTo({
                    top: 500,
                    behavior: "smooth"
                });

            }

        }
    );


    pagination.appendChild(
        nextButton
    );
}


// ========================================
// FILTER + SEARCH + SORT
// ========================================

function applyFilters() {

    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";


    const sort =
        sortFilter
            ? sortFilter.value
            : "default";


    // Search + category
    filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =
                category === "all" ||
                product.category === category;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    // Sorting
    switch (sort) {

        case "price-low":

            filteredProducts.sort(
                (a, b) =>
                    a.price - b.price
            );

            break;


        case "price-high":

            filteredProducts.sort(
                (a, b) =>
                    b.price - a.price
            );

            break;


        case "rating":

            filteredProducts.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;


        default:

            // Restore original order
            filteredProducts.sort(
                (a, b) =>
                    a.id - b.id
            );

    }


    // Always go back to first page
    currentPage = 1;

    renderProducts();
}


// ========================================
// EVENT LISTENERS
// ========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        applyFilters
    );

}


if (sortFilter) {

    sortFilter.addEventListener(
        "change",
        applyFilters
    );

}


// ========================================
// INITIALIZE
// ========================================

if(initialCategory && categoryFilter) applyFilters(); else renderProducts();

updateCartCount();
