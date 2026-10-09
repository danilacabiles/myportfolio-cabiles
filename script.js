/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topButton = document.getElementById("topButton");


// Show or hide Back to Top button.
window.addEventListener("scroll", () => {
    if (topButton) {
        topButton.style.display =
            window.scrollY > 500 ? "grid" : "none";
    }
});


// Scroll smoothly to the top when clicked.
if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing after the element appears.
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    // Apply animation to all reveal elements.
    document.querySelectorAll(".reveal").forEach(element => {
        observer.observe(element);
    });

} else {

    // Fallback for browsers without IntersectionObserver.
    document.querySelectorAll(".reveal").forEach(element => {
        element.classList.add("show");
    });

}