// Scroll smoothly to the Menu section when the button is clicked
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}
// Book Table Form Submission
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting (for demo purposes)

    // Get the form values
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    // Display confirmation message (you can also send this to a server in a real application)
    alert(`Thank you, ${name}! Your table for ${people} people has been reserved for ${date} at ${time}.`);
});
// Switch to Sign In form
function showSignIn() {
    document.getElementById("sign-in-form").style.display = "block";
    document.getElementById("sign-up-form").style.display = "none";
    document.getElementById("sign-in-btn").style.backgroundColor = "#e67e22"; // Highlight Sign In button
    document.getElementById("sign-up-btn").style.backgroundColor = "#f39c12"; // Dull Sign Up button
}

// Switch to Sign Up form
function showSignUp() {
    document.getElementById("sign-in-form").style.display = "none";
    document.getElementById("sign-up-form").style.display = "block";
    document.getElementById("sign-up-btn").style.backgroundColor = "#e67e22"; // Highlight Sign Up button
    document.getElementById("sign-in-btn").style.backgroundColor = "#f39c12"; // Dull Sign In button
}

// Initially show Sign In form
showSignIn();
// Get modal and button elements
const orderBtns = document.querySelectorAll('.order-btn');
const modal = document.getElementById('order-modal');
const closeModal = document.getElementById('close-modal');
const foodName = document.getElementById('food-name');
const foodPrice = document.getElementById('food-price');
const quantityInput = document.getElementById('quantity');
const addToCartBtn = document.getElementById('add-to-cart');

// Add event listener to each food item button
orderBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Get food item details from button data attributes
        const itemName = btn.getAttribute('data-item');
        const itemPrice = btn.getAttribute('data-price');
        
        // Set modal content
        foodName.textContent = `Order ${itemName}`;
        foodPrice.textContent = `$${itemPrice}`;
        
        // Show the modal
        modal.style.display = 'block';
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Add item to cart logic
addToCartBtn.addEventListener('click', function() {
    const itemName = foodName.textContent.replace('Order ', '');  // Get the item name
    const itemPrice = parseFloat(foodPrice.textContent.replace('$', '')); // Get the item price
    const quantity = parseInt(quantityInput.value); // Get the selected quantity

    // Here, you can store the order in a cart (localStorage, array, etc.)
    const order = {
        name: itemName,
        price: itemPrice,
        quantity: quantity,
        total: itemPrice * quantity
    };

    console.log(order);  // For now, just log the order

    // Optionally, show a confirmation message or update a cart summary

    // Close the modal after adding to cart
    modal.style.display = 'none';
});
let cart = [];  // Array to hold cart items

// Update cart summary
function updateCartSummary() {
    const cartItems = document.getElementById('cart-items');
    cartItems.textContent = `${cart.length} items`;
}

// Add item to cart logic
addToCartBtn.addEventListener('click', function() {
    const itemName = foodName.textContent.replace('Order ', '');  // Get the item name
    const itemPrice = parseFloat(foodPrice.textContent.replace('$', '')); // Get the item price
    const quantity = parseInt(quantityInput.value); // Get the selected quantity

    // Add to cart
    cart.push({
        name: itemName,
        price: itemPrice,
        quantity: quantity,
        total: itemPrice * quantity
    });

    updateCartSummary();  // Update cart count

    // Close the modal after adding to cart
    modal.style.display = 'none';
});
