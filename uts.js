document.addEventListener("DOMContentLoaded", function () {
    alert("Selamat datang di portofolio saya!");

    const links = document.querySelectorAll(".nav-link");
    
    links.forEach(link => {
        link.addEventListener("click", function () {
            const page = this.getAttribute("data-page");
            showPage(page);
            
            const navbarCollapse = document.querySelector("#navbarNav");
            if (navbarCollapse.classList.contains("show")) {
                document.querySelector(".navbar-toggler").click();
            }
        });
    });

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Pesan Anda telah terkirim");
        this.reset();
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.classList.remove("active");
    });
    
    document.getElementById(pageId).classList.add("active");
    
    window.scrollTo(0, 0);
}