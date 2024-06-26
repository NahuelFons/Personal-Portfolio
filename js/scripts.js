// Load animation
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Navbar blur effect
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('blur');
    } else {
        navbar.classList.remove('blur');
    }
});

// Navigation offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop - 70,
        });
    });
});

// Logo effect
let text = "Nahuel Fons.";
let i = 0;
let speed = 120;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("logo").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function() {
    setTimeout(typeWriter, 1000);
};

// Copiar Email
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
    }).catch(function(err) {
        console.error('No se pudo copiar el texto: ', err);
    });
}

document.querySelector('.copy-button').addEventListener('click', function() {
    const tooltip = this.querySelector('.copy-tooltip');
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';

    setTimeout(function() {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }, 1500);

    copyToClipboard('nahuelfons@gmail.com'); 
});

// Modal Gallery
let modal = document.getElementById("imageModal");
let navbar = document.getElementById("navbar");
let images = document.querySelectorAll(".search-icon");
let modalImg = document.getElementById("fullImage");

modal.style.display = "none";

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "flex";
        setTimeout(function() {
            modal.classList.add("show");
        }, 10);
        modalImg.src = this.closest(".image-container").querySelector(".site-img").src;
        navbar.style.display = "none";
    });
});

function closeModal() {
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
        navbar.style.display = "flex";
    }, 300);
}

let span = document.getElementsByClassName("close")[0];

span.onclick = closeModal;

modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === "flex") {
        closeModal();
    }
});


