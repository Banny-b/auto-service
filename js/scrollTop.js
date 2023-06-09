window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollButton = document.querySelector(".scrollButton");
    if (window.innerWidth >= 360 && window.innerWidth <= 1199) {
        scrollButton.classList.remove("show"); // Removing the .show class to hide the button
    } else {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollButton.classList.add("show"); // Adding the .show class to show the button
        } else {
            scrollButton.classList.remove("show"); // Removing the .show class to hide the button
        }
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
