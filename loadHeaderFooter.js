async function loadHTML(file, elementId) {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
}

const headerFile = document.body.classList.contains('signin-page') ? 'signinheader.html' : 'header.html';
loadHTML(headerFile, 'header-placeholder').then(() => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const contactButton = document.getElementById('contact-button');
    const contactMenu = document.getElementById('contact-menu');

    if (hamburgerMenu && document.body.classList.contains('signin-page')) {
        hamburgerMenu.style.display = 'none';
    }

    if (contactButton && (document.body.classList.contains('signin-page') || document.body.classList.contains('index-page'))) {
        contactButton.style.display = 'none';
    }

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function(event) {
            event.stopPropagation();
            navMenu.classList.toggle('show');
            if (contactMenu && contactMenu.classList.contains('show')) {
                contactMenu.classList.remove('show');
            }
        });

        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
                navMenu.classList.remove('show');
            }
        });
    }

    if (contactButton && contactMenu) {
        contactButton.addEventListener('click', function(event) {
            event.stopPropagation();
            contactMenu.classList.toggle('show');
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });

        document.addEventListener('click', function(event) {
            if (!contactMenu.contains(event.target) && !contactButton.contains(event.target)) {
                contactMenu.classList.remove('show');
            }
        });
    }

    loadHTML('contact.html', 'contact-info-placeholder');
});
loadHTML('footer.html', 'footer-placeholder');
