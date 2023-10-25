const toggleButton = document.getElementsByClassName('toggle-button')[0]
const links = document.getElementsByClassName('top-left')[0]

toggleButton.addEventListener('click', () =>{
    links.classList.toggle('active')
})


document.addEventListener("DOMContentLoaded", function() {
    const exploreLink = document.querySelector('a[href="#explore"]');
    if (exploreLink) {
        exploreLink.addEventListener("click", function(event) {
            event.preventDefault();
            const targetElement = document.querySelector(exploreLink.getAttribute("href"));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});