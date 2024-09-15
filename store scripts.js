const products = [
    { name: "Smartphone X", price: 599.99, image: "https://via.placeholder.com/300x200.png?text=Smartphone+X" },
    { name: "Laptop Pro", price: 1299.99, image: "https://via.placeholder.com/300x200.png?text=Laptop+Pro" },
    { name: "Wireless Earbuds", price: 129.99, image: "https://via.placeholder.com/300x200.png?text=Wireless+Earbuds" },
    { name: "4K Smart TV", price: 799.99, image: "https://via.placeholder.com/300x200.png?text=4K+Smart+TV" },
    { name: "Gaming Console", price: 499.99, image: "https://via.placeholder.com/300x200.png?text=Gaming+Console" },
    { name: "Fitness Tracker", price: 79.99, image: "https://via.placeholder.com/300x200.png?text=Fitness+Tracker" },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productName) {
    alert(`Added ${productName} to cart!`);
    // Implement actual cart functionality here
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (message.trim() === '') return;

    addMessage('User', message);
    respondToMessage(message);
    input.value = '';
}

function addMessage(sender, message) {
    const chatbox = document.getElementById('chatbot-messages');
    chatbox.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}

function respondToMessage(message) {
    const responses = {
        'hello': 'Hi there! How can I help you today?',
        'how are you': 'I'm doing well, thank you for asking!',
        'bye': 'Goodbye! Have a great day!',
        'default': 'I'm sorry, I don't understand. Can you please rephrase your question?'
    };

    const lowercaseMessage = message.toLowerCase();
    let response = responses['default'];

    for (let key in responses) {
        if (lowercaseMessage.includes(key)) {
            response = responses[key];
            break;
        }
    }

    setTimeout(() => addMessage('AI', response), 1000);
}

// Display products when the page loads
window.onload = displayProducts;