async function loadHTML(file, elementId) {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
}

loadHTML('signinheader.html', 'header-placeholder');
loadHTML('footer.html', 'footer-placeholder');
