document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Hívjuk meg az inicializálást az oldal betöltésekor

    function revealOnScroll() {
        var sections = document.querySelectorAll(".hidden");

        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add("visible");
                section.classList.remove("hidden");
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});