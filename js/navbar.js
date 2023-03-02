let navbarTemplate = `
<!-- Navbar Start -->
<nav id="navbarElement">
    <div>
        <div class="fitContent" id="navbarLogo">
            <a href="index.html" class="navbar-brand p-0 fitContent">
                <h1 class="m-0 text-uppercase text-primary fitContent"><i
                        class="far fa-smile text-primary me-2 fitContent"></i>Transport Evropa</h1>
                <h5 class="m-0 text-primary fitContent"><i class="far text-primary me-2 fitContent"></i>By Auto servis
                    Mazić</h5>
            </a>
        </div>
        <div id="listNavbar">
            <div>
                <p class="m-0"><i class="fa fa-envelope-open me-2"></i>danilomazic@gmail.com</p>
                <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+381 64 123 1234</p>
                <p class="m-0"><i class="fa fa-phone-alt me-2"></i>Viber: +11 64 123 1234</p>
            </div>
        </div>
    </div>

    <div id="listNavbarPages">
        <a href="index.html" id="homeTab" class="nav-item navbarItem">Pocetna</a>
        <a href="about.html" id="aboutTab" class="nav-item navbarItem">O nama</a>
        <a href="gallery.html" id="galleryTab" class="nav-item navbarItem">Galerija</a>
        <a href="contact.html" id="contactTab" class="nav-item navbarItem">Kontakt</a>
    </div>
</nav>
<!-- Navbar End -->
`;

document.getElementById('navbarTemplateId').innerHTML = navbarTemplate;

currentLocation = document.getElementById("scriptNavbar").getAttribute("currentLocation");

if(currentLocation){
    document.getElementById(currentLocation).className = "nav-item navbarItem colorRed";
}

if(window.innerWidth < 700) {
    document.getElementById("homeTab").className += " listNavbarPagesSmallScreen";
    document.getElementById("aboutTab").className = " listNavbarPagesSmallScreen";
    document.getElementById("galleryTab").className = " listNavbarPagesSmallScreen";
    document.getElementById("contactTab").className = " listNavbarPagesSmallScreen";
}