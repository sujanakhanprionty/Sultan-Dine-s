function togglePanel() {
    var panel = document.querySelector(".panel");

    if (panel.style.display === "none" || panel.style.display === "") {
        panel.style.display = "block"; // Show the panel
    } else {
        panel.style.display = "none"; // Hide the panel
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-container img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change every 3 seconds
    images[0].classList.add('active');
});