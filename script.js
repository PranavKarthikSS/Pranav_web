// ==========================
// Sticky Navbar Shadow
// ==========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(13,13,13,0.95)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});


// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Project Filter
// ==========================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.innerText.toLowerCase();

        projects.forEach(card => {

            const cardCategory = card.dataset.category;

            if (category === "all" || cardCategory === category) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==========================
// Typing Effect
// ==========================

const roles = [

    "IoT Developer",

    "AI / ML Enthusiast",

    "Flutter Developer",

    "Full Stack Developer"

];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.createElement("span");

roleElement.style.color = "#18d26e";
roleElement.style.display = "block";
roleElement.style.marginTop = "15px";
roleElement.style.fontSize = "22px";

document.querySelector(".hero h2").appendChild(roleElement);

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 80);

    } else {

        setTimeout(eraseRole, 1800);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 40);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length)

            roleIndex = 0;

        setTimeout(typeRole, 400);

    }

}

typeRole();


// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==========================
// PROJECT MODAL
// ==========================

const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-project").forEach(btn => {

    btn.addEventListener("click", (e) => {

        e.preventDefault();

        modal.style.display = "flex";

    });

});

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};

// ==========================
// IMAGE SLIDER
// ==========================

const images = [
    "images/project1.jpeg",
    "images/project2.jpeg",
    "images/project3.jpeg"
];

let index = 0;

const img = document.getElementById("modalImage");
const dots = document.querySelectorAll(".dot");

function updateSlider(){

    img.src = images[index];

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");

}

document.querySelector(".next").onclick = () => {

    index++;

    if(index >= images.length)
        index = 0;

    updateSlider();

};

document.querySelector(".prev").onclick = () => {

    index--;

    if(index < 0)
        index = images.length-1;

    updateSlider();

};

updateSlider();