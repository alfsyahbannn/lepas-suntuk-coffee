// Toggle class active untuk Hamburger menu
const navbarNav = document.querySelector
('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu') .onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button') .onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// // Klik di luar elemen
// const hm = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');

// document.addEventListener('click', function (e)) {
//     if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
//         navbarNav.classList.remove('active');
//     }
// }

// document.addEventListener('click', function (e)) {
//     if (!sb.contains(e.target) && !searchForm.contains(e.target)){
//         searchForm.classList.remove('active');
//     }
// }

// // Klik diluar sidebar untuk menghilangkan nav
// const hamburger = document.querySelector('#hamburger-menu');

// document.addEventListener('click', function (e)) {
//     if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
//         navbarNav.classList.remove('active');
//     }
// }
// ;

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

document.querySelector('#order-button') .onclick = () => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
};


// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}

// klik diluar modal
// const modal = document,querySelector('#item-detail-modal');
// window.onclick = (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// };
