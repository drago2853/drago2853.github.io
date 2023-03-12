
$(window).resize(function () {
    changeLargeImages();
    setNavbarSmallScreen();
});

function changeLargeImages() {
    if (window.innerWidth < 1000) {
        document.getElementById("imagePresentation1").src = "img/medium/36.avif";
        document.getElementById("imagePresentation2").src = "img/medium/13.avif";
        document.getElementById("imagePresentation3").src = "img/medium/28.avif";
    } else {
        document.getElementById("imagePresentation1").src = "img/large/36.avif";
        document.getElementById("imagePresentation2").src = "img/large/13.avif";
        document.getElementById("imagePresentation3").src = "img/medium/28.avif";
    }
}

changeLargeImages();
setNavbarSmallScreen();