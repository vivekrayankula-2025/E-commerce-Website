const products = [
    // =========================
    // ELECTRONICS
    // =========================

    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 2499,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        description: "Premium wireless headphones with deep bass, clear sound and long battery life."
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "electronics",
        price: 3999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Modern smartwatch with fitness tracking, notifications and health monitoring."
    },

    {
        id: 3,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 1899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        description: "Portable Bluetooth speaker with powerful sound and long battery life."
    },

    {
        id: 4,
        name: "Wireless Mouse",
        category: "electronics",
        price: 799,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
        description: "Ergonomic wireless mouse designed for comfortable everyday use."
    },

    {
        id: 5,
        name: "Mechanical Keyboard",
        category: "electronics",
        price: 3499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        description: "RGB mechanical keyboard with responsive keys and durable construction."
    },

    {
        id: 6,
        name: "USB-C Hub",
        category: "electronics",
        price: 1299,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761",
        description: "Multi-port USB-C hub for laptops, tablets and other modern devices."
    },

    {
        id: 7,
        name: "Laptop Stand",
        category: "electronics",
        price: 1599,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        description: "Adjustable laptop stand designed to improve posture and workspace comfort."
    },

    {
        id: 8,
        name: "Webcam HD",
        category: "electronics",
        price: 2299,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
        description: "Full HD webcam for online meetings, streaming and video calls."
    },

    {
        id: 9,
        name: "Power Bank",
        category: "electronics",
        price: 1199,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1609592424846-9e5d6e4d4e2b",
        description: "High-capacity portable power bank with fast charging support."
    },

    {
        id: 10,
        name: "Wireless Charger",
        category: "electronics",
        price: 999,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1591290619762-c5887e5d4f6b",
        description: "Fast wireless charging pad compatible with supported smartphones."
    },

    {
        id: 11,
        name: "Smartphone",
        category: "electronics",
        price: 24999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        description: "Modern smartphone with a vibrant display, powerful processor and advanced camera."
    },

    {
        id: 12,
        name: "Tablet",
        category: "electronics",
        price: 18999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        description: "Lightweight tablet suitable for entertainment, study and productivity."
    },

    {
        id: 13,
        name: "Digital Camera",
        category: "electronics",
        price: 32999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "High-quality digital camera for photography enthusiasts and creators."
    },

    {
        id: 14,
        name: "Gaming Controller",
        category: "electronics",
        price: 2999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
        description: "Comfortable wireless gaming controller with responsive controls."
    },

    {
        id: 15,
        name: "Noise Cancelling Earbuds",
        category: "electronics",
        price: 2799,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
        description: "Compact earbuds with active noise cancellation and rich audio."
    },


    // =========================
    // FASHION
    // =========================

    {
        id: 16,
        name: "Running Shoes",
        category: "fashion",
        price: 2999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        description: "Lightweight running shoes designed for everyday comfort and performance."
    },

    {
        id: 17,
        name: "Classic Backpack",
        category: "fashion",
        price: 1499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        description: "Durable everyday backpack with multiple compartments."
    },

    {
        id: 18,
        name: "Denim Jacket",
        category: "fashion",
        price: 2499,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        description: "Classic denim jacket with a modern fit for casual outfits."
    },

    {
        id: 19,
        name: "Cotton T-Shirt",
        category: "fashion",
        price: 699,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        description: "Soft cotton T-shirt designed for everyday comfort."
    },

    {
        id: 20,
        name: "Casual Sneakers",
        category: "fashion",
        price: 2199,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
        description: "Comfortable casual sneakers suitable for everyday wear."
    },

    {
        id: 21,
        name: "Leather Wallet",
        category: "fashion",
        price: 899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        description: "Compact leather wallet with multiple card and cash compartments."
    },

    {
        id: 22,
        name: "Sunglasses",
        category: "fashion",
        price: 1299,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        description: "Stylish sunglasses with UV protection for everyday outdoor use."
    },

    {
        id: 23,
        name: "Leather Belt",
        category: "fashion",
        price: 999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc",
        description: "Classic leather belt suitable for formal and casual outfits."
    },

    {
        id: 24,
        name: "Hoodie",
        category: "fashion",
        price: 1799,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        description: "Warm and comfortable hoodie with a relaxed modern fit."
    },

    {
        id: 25,
        name: "Formal Shirt",
        category: "fashion",
        price: 1599,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        description: "Elegant formal shirt suitable for office and professional occasions."
    },

    {
        id: 26,
        name: "Women's Handbag",
        category: "fashion",
        price: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        description: "Stylish handbag with spacious compartments for everyday essentials."
    },

    {
        id: 27,
        name: "Sports Cap",
        category: "fashion",
        price: 599,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
        description: "Lightweight sports cap suitable for outdoor activities."
    },

    {
        id: 28,
        name: "Winter Jacket",
        category: "fashion",
        price: 3999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f",
        description: "Warm winter jacket designed to provide comfort in cold weather."
    },

    {
        id: 29,
        name: "Casual Shorts",
        category: "fashion",
        price: 899,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
        description: "Comfortable casual shorts made for everyday activities."
    },

    {
        id: 30,
        name: "Classic Watch",
        category: "fashion",
        price: 1999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
        description: "Elegant classic watch with a timeless design."
    },


    // =========================
    // HOME
    // =========================

    {
        id: 31,
        name: "Minimal Desk Lamp",
        category: "home",
        price: 999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        description: "Minimal LED desk lamp suitable for workspaces and bedrooms."
    },

    {
        id: 32,
        name: "Coffee Maker",
        category: "home",
        price: 4499,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6",
        description: "Easy-to-use coffee maker for preparing fresh coffee at home."
    },

    {
        id: 33,
        name: "Modern Sofa",
        category: "home",
        price: 24999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        description: "Comfortable modern sofa with a stylish design for your living room."
    },

    {
        id: 34,
        name: "Ceramic Vase",
        category: "home",
        price: 799,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427",
        description: "Decorative ceramic vase for flowers and home decoration."
    },

    {
        id: 35,
        name: "Wall Clock",
        category: "home",
        price: 1199,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c",
        description: "Modern wall clock with a clean minimalist design."
    },

    {
        id: 36,
        name: "Table Fan",
        category: "home",
        price: 1799,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1620428268482-cf1851a36764",
        description: "Compact table fan providing powerful and quiet airflow."
    },

    {
        id: 37,
        name: "Bedside Table",
        category: "home",
        price: 2999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d",
        description: "Compact bedside table with convenient storage space."
    },

    {
        id: 38,
        name: "Indoor Plant",
        category: "home",
        price: 499,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
        description: "Beautiful indoor plant that adds a natural touch to your home."
    },

    {
        id: 39,
        name: "Decorative Mirror",
        category: "home",
        price: 1899,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013",
        description: "Elegant decorative mirror designed for modern interiors."
    },

    {
        id: 40,
        name: "Floor Lamp",
        category: "home",
        price: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        description: "Stylish floor lamp that creates a warm and comfortable atmosphere."
    },

    {
        id: 41,
        name: "Kitchen Blender",
        category: "home",
        price: 2299,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b",
        description: "Powerful kitchen blender for smoothies, sauces and everyday cooking."
    },

    {
        id: 42,
        name: "Dinner Plate Set",
        category: "home",
        price: 1599,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0",
        description: "Elegant dinner plate set suitable for everyday meals and special occasions."
    },

    {
        id: 43,
        name: "Kitchen Toaster",
        category: "home",
        price: 1399,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64",
        description: "Compact toaster with multiple browning settings."
    },

    {
        id: 44,
        name: "Electric Kettle",
        category: "home",
        price: 1299,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1594213114663-d94db9b171ca",
        description: "Fast-boiling electric kettle with a simple modern design."
    },

    {
        id: 45,
        name: "Cotton Bedsheet",
        category: "home",
        price: 1199,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
        description: "Soft cotton bedsheet with a comfortable and breathable finish."
    },


    // =========================
    // ADDITIONAL PRODUCTS
    // =========================

    {
        id: 46,
        name: "Gaming Laptop",
        category: "electronics",
        price: 74999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
        description: "High-performance gaming laptop designed for demanding games and applications."
    },

    {
        id: 47,
        name: "4K Monitor",
        category: "electronics",
        price: 28999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        description: "High-resolution 4K monitor with vibrant colors for work and entertainment."
    },

    {
        id: 48,
        name: "Fitness Tracker",
        category: "electronics",
        price: 1999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
        description: "Compact fitness tracker for monitoring daily activity and workouts."
    },

    {
        id: 49,
        name: "Travel Backpack",
        category: "fashion",
        price: 2199,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1622260614153-03223fb72052",
        description: "Spacious travel backpack with multiple compartments and durable material."
    },

    {
        id: 50,
        name: "Canvas Shoes",
        category: "fashion",
        price: 1299,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
        description: "Comfortable canvas shoes suitable for casual everyday wear."
    },

    {
        id: 51,
        name: "Yoga Mat",
        category: "home",
        price: 899,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
        description: "Non-slip yoga mat designed for yoga, stretching and home workouts."
    },

    {
        id: 52,
        name: "Air Purifier",
        category: "home",
        price: 8999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
        description: "Modern air purifier designed to improve indoor air quality."
    },

    {
        id: 53,
        name: "Portable SSD",
        category: "electronics",
        price: 6999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b",
        description: "Fast portable SSD for storing and transferring large files."
    },

    {
        id: 54,
        name: "LED Strip Lights",
        category: "electronics",
        price: 899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89",
        description: "Colorful LED strip lights for bedrooms, desks and entertainment spaces."
    },

    {
        id: 55,
        name: "Office Chair",
        category: "home",
        price: 7999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
        description: "Ergonomic office chair designed for comfortable long working sessions."
    },

    {
        id: 56,
        name: "Smart TV",
        category: "electronics",
        price: 32999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        description: "4K smart TV with streaming apps and immersive picture quality."
    },

    {
        id: 57,
        name: "Travel Suitcase",
        category: "fashion",
        price: 3499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1565026057447-bc90a39d2c84",
        description: "Durable travel suitcase with spacious storage and smooth wheels."
    },

    {
        id: 58,
        name: "Electric Toothbrush",
        category: "home",
        price: 1799,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
        description: "Rechargeable electric toothbrush with multiple cleaning modes."
    },

    {
        id: 59,
        name: "Action Camera",
        category: "electronics",
        price: 9999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
        description: "Compact action camera designed for travel, sports and outdoor adventures."
    },

    {
        id: 60,
        name: "Water Bottle",
        category: "home",
        price: 699,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        description: "Reusable stainless steel water bottle designed to keep drinks fresh."
    }
];
