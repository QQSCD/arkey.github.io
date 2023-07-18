function setMainMaxHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const windowHeight = window.innerHeight;
    const mainMaxHeight = windowHeight - headerHeight - footerHeight;

    document.querySelector('main').style.maxHeight = `${mainMaxHeight}px`;
}

// Call the function when the page loads and when the window is resized
window.addEventListener('load', setMainMaxHeight);
window.addEventListener('resize', setMainMaxHeight);
function setSocialLinksDirection() {
    const socialLinksContainer = document.getElementById('social');

    if (socialLinksContainer) {
        const containerWidth = socialLinksContainer.offsetWidth;
        const containerHeight = socialLinksContainer.offsetHeight;

        if (containerWidth > containerHeight) {
            socialLinksContainer.style.flexDirection = 'row';
        } else {
            socialLinksContainer.style.flexDirection = 'column';
        }
    }
}

// Call the function when the page loads
window.addEventListener('load', setSocialLinksDirection);

// Call the function when the window is resized
window.addEventListener('resize', setSocialLinksDirection);

function redirectTo(page) {
    document.body.style.opacity = 0; // Set the body opacity to 0 (completely transparent)
    setTimeout(() => {
        window.location.href = page; // Redirect to the desired page after a short delay
    }, 500); // Adjust the duration of the fade effect (in milliseconds)
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".fade-link");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const destination = this.getAttribute("href");

            // Apply fade-out effect to the body element
            document.body.style.transition = "opacity 0.5s";
            document.body.style.opacity = 0;

            // Wait for the fade-out effect to complete, then navigate to the destination
            setTimeout(function () {
                // Add the fadeInAnimation class to the body element
                document.body.classList.add("fadeInAnimation");

                // After 800ms (adjust this duration as per your preference), remove the fadeInAnimation class
                setTimeout(function () {
                    document.body.classList.remove("fadeInAnimation");
                }, 800);

                // Navigate to the destination after the fade-in animation is complete
                setTimeout(function () {
                    window.location.href = destination;
                }, 800); // 800ms is the duration of the fade-in animation
            }, 500); // 500ms is the duration of the fade-out effect (0.5s)
        });
    });
});