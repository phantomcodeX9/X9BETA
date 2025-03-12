
// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Close Sidebar when clicking outside
document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Create aurora layers
const auroraBackground = document.querySelector('.aurora-background');

function createAuroraLayer(color, size) {
    const layer = document.createElement('div');
    layer.classList.add('aurora-layer');
    layer.style.background = `radial-gradient(circle at var(--x) var(--y), ${color}, transparent)`;
    layer.style.width = `${size}%`;
    layer.style.height = `${size}%`;
    auroraBackground.appendChild(layer);
}

// Add multiple layers for depth and realism
// Create aurora layers with greenish and bluish colors
createAuroraLayer('rgba(96, 209, 196, 0.3)', 150); // Teal (greenish-blue)
createAuroraLayer('rgba(52, 152, 219, 0.3)', 200); // Blue
createAuroraLayer('rgba(46, 204, 113, 0.3)', 250); // Green

// Make the aurora react to cursor movement
document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 50 + 25; // Reduce range to 25%-75%
    const y = (event.clientY / window.innerHeight) * 50 + 25; // Reduce range to 25%-75%

    // Update the position of the aurora layers
    const layers = document.querySelectorAll('.aurora-layer');
    layers.forEach((layer) => {
        layer.style.setProperty('--x', `${x}%`);
        layer.style.setProperty('--y', `${y}%`);
    });
});

let targetX = 50, targetY = 50; // Initial position
let currentX = 50, currentY = 50; // Current position

document.addEventListener('mousemove', (event) => {
    targetX = (event.clientX / window.innerWidth) * 50 + 25; // Reduced range
    targetY = (event.clientY / window.innerHeight) * 50 + 25; // Reduced range
});

function updateAuroraPosition() {
    // Smoothly interpolate towards the target position
    currentX += (targetX - currentX) * 0.1; // Adjust the 0.1 for smoother/faster movement
    currentY += (targetY - currentY) * 0.1;

    // Update the position of the aurora layers
    const layers = document.querySelectorAll('.aurora-layer');
    layers.forEach((layer) => {
        layer.style.setProperty('--x', `${currentX}%`);
        layer.style.setProperty('--y', `${currentY}%`);
    });

    requestAnimationFrame(updateAuroraPosition);
}

updateAuroraPosition();

// Search Functionality
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
if (searchInput && cards) {
    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            card.style.display = cardText.includes(searchText) ? 'block' : 'none';
        });
    });
}

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500);
});

const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiIndex = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert("🦇 You found the Dark Knight's secret! Redirecting to the Batcave... 🦇");
            window.location.href = "https://phantomcodex9.github.io/phantom/"; // Replace with your link
        }
    } else {
        konamiIndex = 0; // Reset if the sequence is broken
    }
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to Section Function
function scrollToSection(sectionId) {
    console.log(`Scrolling to section: ${sectionId}`); // Debugging
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Attach Event Listeners to Buttons
document.getElementById('moviesButton').addEventListener('click', () => {
    scrollToSection('movies');
});

document.getElementById('jeeneetButton').addEventListener('click', () => {
    scrollToSection('jeeneet');
});

document.getElementById('btechButton').addEventListener('click', () => {
    scrollToSection('btech');
});

document.getElementById('infoButton').addEventListener('click', () => {
    scrollToSection('info');
});

console.log("%c🦇 I'm Batman. 🦇", "font-size: 20px; color: #000; background: #FFD700; padding: 10px; border-radius: 5px;");
console.log("%cWelcome to PirateHive, where the Dark Knight keeps watch.", "font-size: 14px; color: #2c3e50;");
console.log("%cRemember: 'It's not who I am underneath, but what I do that defines me.'", "font-size: 14px; color: #2c3e50; font-style: italic;");
