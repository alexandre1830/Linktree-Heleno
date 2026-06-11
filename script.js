/* Staggered card entrance */
document.querySelectorAll('.card').forEach((card, i) => {
    card.style.animation = `cardIn .5s cubic-bezier(.4,0,.2,1) ${.2 + i * .09}s forwards`;
});

/* Logo fallback to text */
const logo = document.querySelector('.logo-wrap img');
if (logo) {
    logo.addEventListener('error', () => {
        logo.replaceWith(Object.assign(document.createElement('span'), {
            textContent: 'Heleno Imóveis',
            style: 'font-family:"Playfair Display",serif;font-size:1.5rem;font-weight:600;color:#fff;letter-spacing:-.01em;'
        }));
    });
}