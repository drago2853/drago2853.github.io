
$(window).resize(function() {
    changeLargeImages();
});

$(window.window.length).resize(function() {
    changeLargeImages();
});


function changeLargeImages() {
    if(window.innerWidth < 1000) {
        document.getElementById("imagePresentation1").src = "img/32.jpg";
        document.getElementById("imagePresentation2").src = "img/13.jpg";
    } else {
        document.getElementById("imagePresentation1").src = "img/medium/32.jpg";
        document.getElementById("imagePresentation2").src = "img/medium/13.jpg";
    }
    //  else {
    //     document.getElementById("imagePresentation1").src = "img/large/32.jpg";
    //     document.getElementById("imagePresentation2").src = "img/large/13.jpg";
    // }
}