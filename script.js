const topButton = document.getElementById("topButton");

// Show or hide Back to Top button
window.addEventListener("scroll", () => {
    topButton.style.display =
        window.scrollY > 500 ? "grid" : "none";
});

// Scroll to top when clicked
topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.12
});

// Apply animation to all reveal elements
document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});