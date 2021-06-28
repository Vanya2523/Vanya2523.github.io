let favouritesMobile = document.querySelector('.favouritesMobile');

favouritesMobile.addEventListener('click', () => {
    document.querySelector('.site_content-content-favorites').style.display = 'block';
    document.querySelector('.elastic').style.display = 'none';
})