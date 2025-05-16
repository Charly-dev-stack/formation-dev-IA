// Product data
const products = [
    {
        id: 1,
        name: "Cafetière Programmable",
        price: 75000,
        category: "appliances",
        image: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg",
        description: "Cafetière programmable avec minuterie intégrée"
    },
    {
        id: 2,
        name: "Brosse à Dents Électrique",
        price: 25000,
        category: "personal-care",
        image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
        description: "Technologie sonique avancée pour un nettoyage optimal"
    },
    {
        id: 3,
        name: "Set de Couteaux Premium",
        price: 45000,
        category: "kitchenware",
        image: "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg",
        description: "Couteaux en acier inoxydable de qualité professionnelle"
    },
    {
        id: 4,
        name: "Purificateur d'Air",
        price: 120000,
        category: "appliances",
        image: "https://images.pexels.com/photos/4429559/pexels-photo-4429559.jpeg",
        description: "Filtre HEPA avec moniteur de qualité d'air"
    },
    {
        id: 5,
        name: "Sèche-Cheveux Professionnel",
        price: 35000,
        category: "personal-care",
        image: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
        description: "Sèche-cheveux de qualité salon"
    },
    {
        id: 6,
        name: "Batterie de Cuisine Antiadhésive",
        price: 85000,
        category: "kitchenware",
        image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg",
        description: "Set complet de casseroles et poêles antiadhésives"
    },
    {
        id: 7,
        name: "Robot Mixeur Multifonction",
        price: 65000,
        category: "appliances",
        image: "https://images.pexels.com/photos/1080186/pexels-photo-1080186.jpeg",
        description: "Robot mixeur 3-en-1 pour tous vos besoins culinaires"
    },
    {
        id: 8,
        name: "Fer à Repasser Vapeur",
        price: 28000,
        category: "appliances",
        image: "https://images.pexels.com/photos/4439606/pexels-photo-4439606.jpeg",
        description: "Fer à repasser vapeur avec semelle céramique"
    },
    {
        id: 9,
        name: "Balance de Cuisine Digitale",
        price: 15000,
        category: "kitchenware",
        image: "https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg",
        description: "Balance précise avec grand écran LCD"
    },
    {
        id: 10,
        name: "Ventilateur sur Pied",
        price: 42000,
        category: "appliances",
        image: "https://images.pexels.com/photos/4226787/pexels-photo-4226787.jpeg",
        description: "Ventilateur silencieux avec télécommande"
    },
    {
        id: 11,
        name: "Set de Rangement Cuisine",
        price: 32000,
        category: "kitchenware",
        image: "https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg",
        description: "Ensemble de boîtes hermétiques pour conservation"
    },
    {
        id: 12,
        name: "Miroir LED Maquillage",
        price: 38000,
        category: "personal-care",
        image: "https://images.pexels.com/photos/4226784/pexels-photo-4226784.jpeg",
        description: "Miroir lumineux avec grossissement x5"
    }
];

// Shopping cart
let cart = [];

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');
const categoryButtons = document.querySelectorAll('.category-btn');

// Format price in FCFA
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
}

// Initialize the page
function init() {
    displayProducts(products);
    setupEventListeners();
}

// Display products
function displayProducts(productsToShow) {
    productsContainer.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p>${product.description}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Ajouter au Panier
                </button>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Category filter
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);
            
            displayProducts(filteredProducts);
        });
    });

    // Add to cart
    productsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            
            // Visual feedback
            const button = e.target;
            button.classList.add('added');
            button.textContent = 'Ajouté !';
            setTimeout(() => {
                button.classList.remove('added');
                button.textContent = 'Ajouter au Panier';
            }, 1500);
        }
    });

    // Toggle cart modal
    cartBtn.addEventListener('click', toggleCart);

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartModal.classList.contains('active') && 
            !cartModal.contains(e.target) && 
            !cartBtn.contains(e.target)) {
            toggleCart();
        }
    });

    // Handle cart item quantity changes and removal
    cartItems.addEventListener('click', (e) => {
        const cartItem = e.target.closest('.cart-item');
        if (!cartItem) return;

        const productId = parseInt(cartItem.dataset.id);

        if (e.target.classList.contains('quantity-btn')) {
            const action = e.target.dataset.action;
            updateCartItemQuantity(productId, action);
        } else if (e.target.classList.contains('remove-item')) {
            removeFromCart(productId);
        }
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification('Produit ajouté au panier');
}

// Update cart item quantity
function updateCartItemQuantity(productId, action) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    if (action === 'increase') {
        cartItem.quantity++;
    } else if (action === 'decrease') {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
    }

    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Produit retiré du panier');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Update cart display
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${formatPrice(item.price)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-action="decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase">+</button>
                </div>
            </div>
            <button class="remove-item" title="Retirer du panier">×</button>
        </div>
    `).join('');

    // Show empty cart message if needed
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Votre panier est vide</p>
                <p class="empty-cart-sub">Ajoutez des produits pour commencer vos achats</p>
            </div>
        `;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Toggle cart modal
function toggleCart() {
    cartModal.classList.toggle('active');
}

// Initialize the page
init();