document.addEventListener('DOMContentLoaded', function () {
    const cartBtns = document.querySelectorAll('.add-to-cart');

    cartBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const bookElement = btn.closest('.catalog-book');
            const book = {
                name: bookElement.querySelector('.catalog-book-title h4').textContent,
                author: bookElement.querySelector('.catalog-book-title p').textContent,
                price: bookElement.querySelector('.buy-price').textContent.replace('Buy: $', ''),
                image: bookElement.querySelector('img').src
            };

            addToCart(book);
        });
    });

    function addToCart(book) {
        const cartCount = document.querySelector('.cart-count');
        const notification = document.createElement('div');
        notification.className = 'notification';

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(book);
        localStorage.setItem('cart', JSON.stringify(cart));
        // notify the added book 
        notification.textContent = `${book.name} is added to cart `;
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
        console.log("first")
        cartCount.textContent = cart.length;
        console.log('Cart updated:', cart);
        
        // Update cart count in the  .cart-count content
        cartCount.textContent = cart.length;
        if (!cartCount) {
            console.error('Element with id="cart-count" not found');
            return;
        }

        // Retrieve cart data from localStorage
        console.log('Cart data loaded:', cart.length);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded triggered');

    // Get the container where cart items will be displayed
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementsByClassName('.cart-count');
    const cartTotal = document.querySelector('.total-price-amount');
    if (!cartItemsContainer) {
        console.error('Element with id="cart-items" not found');
        return;
    }

    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart data loaded:', cart);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cart.forEach((item, index) => {
            try {
                console.log(`Adding item ${index + 1}:`, item);
                
                // Create a cart item element
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.author}</p>
                        <p>Price: $${item.price}</p>
                    </div>
                    <button class="remove-item">Remove</button>
                `;

                // Append the item to the container
                cartItemsContainer.appendChild(cartItem);
                console.log(`Item ${index + 1} added successfully`);
                cartCount.textContent = cart.length;

                // Calculate the total price
                let totalPrice = 0;
                cart.forEach(item => {
                    totalPrice += parseFloat(item.price);
                    cartTotal.textContent = '$'+totalPrice
                });
                console.log('Total price:', totalPrice);



                
            } catch (error) {
                console.error(`Error adding item ${index + 1}:`, error);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.querySelector('.cart-count');
    const removeItemBtns = document.querySelectorAll('.remove-item');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart data loaded:', cart.length);
    
    removeItemBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            console.log('Removing item:', index);
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Item removed:', index);
            location.reload();
            cartCount.textContent = cart.length;
        });
    });
    cartCount.textContent = cart.length;
    
}
);
