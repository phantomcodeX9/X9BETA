document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.nav-links a');
    const ctaButton = document.querySelector('.cta-button');

    if (searchInput && cards) {
        searchInput.addEventListener('input', function () {
            const searchText = searchInput.value.toLowerCase();
            cards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                card.style.display = cardText.includes(searchText) ? 'block' : 'none';
            });
        });
    }

    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = document.getElementById('movies');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    }
});
