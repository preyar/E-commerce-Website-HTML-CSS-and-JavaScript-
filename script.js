document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    document.getElementById('search-input').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.includes("home")) {
            document.getElementById('home').scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("women")) {
            document.getElementById('women').scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("men")) {
            document.getElementById('men').scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("kids")) {
            document.getElementById('kids').scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("about")) {
            document.getElementById('about').scrollIntoView({ behavior: "smooth" });
        } else if (query.includes("contact")) {
            document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
        }
    });
});
