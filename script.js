// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const href = this.getAttribute("href");
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            } catch (err) {
                console.error("Invalid selector:", href, err);
            }
        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(2,6,23,0.95)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";

    }

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00d4ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log("🚀 Portfolio Loaded Successfully!");