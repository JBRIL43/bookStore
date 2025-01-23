import { books } from "../DB/books.js";

const bookContainer = document.getElementById('catalog-books');
// const cartContainer = document.getElementById('cart-book');

books.forEach(element => {
    const bookElement = document.createElement('div');
    bookElement.className = 'catalog-book';
    bookElement.innerHTML = `
        <img src=${element.image} alt="${element.name}">
        <div class="catalog-book-info">
            <div class="catalog-book-title">
                <h4>${element.name}</h4>
                <p>${element.author}</p>
            </div>
            <span class="available-tag">available</span>
            <div class="catalog-book-price">
                <div class="buy-price">Buy: $${element.purchasedPrice}</div>
                <div class="rent-price">Rent: $${element.rentPrice}/month</div>
            </div>
            <div class="catalog-book-btns">
                <button class="catalog-book__btn details">Details</button>
                <button class="catalog-book__btn add-to-cart">Add to Cart</button>
            </div>
        </div>`;
    bookContainer.appendChild(bookElement);
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('#menu-toggle');
    const navCenter = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.menu-close');
    // Toggle navigation menu
    toggleButton.addEventListener('click', function() {
        navCenter.style.display = navCenter.style.display === 'none' ? 'flex' : 'none';
            navCenter.style.animation = 'slideIn 0.5s ease-in-out';
            toggleButton.style.display = 'none';
            closeBtn.style.display = 'block';
    });

    // Close navigation menu
    closeBtn.addEventListener('click', function() {
        navCenter.style.display = 'none';
        closeBtn.style.display = 'none';
        toggleButton.style.display = 'block';
        
    });
});