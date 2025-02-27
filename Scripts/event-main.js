let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function () {
    showSlider('next');
};
prevButton.onclick = function () {
    showSlider('prev');
};

let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        backButton.innerText = "Back";
    };
});

backButton.onclick = function () {
    if (backButton.innerText === "Back") {
        // Go back to the main events section
        carousel.classList.remove('showDetail');
        backButton.innerText = "See All ↗";
    } else {
        // Navigate to the "See All" page
        window.location.href = "pages/gallery.html"; 
    }
};
let eventPhotoButtons = document.querySelectorAll('.eventPhotos');
eventPhotoButtons.forEach((button) => {
    button.onclick = function () {
        let eventKey = button.getAttribute('data-event');
        // Redirect to the specific gallery page
        window.location.href = `pages/eventgallery/${eventKey}.html`; // Example: gallery/zenith24.html
    };
});
