let navbarTemplate = `
<!-- Navbar Start -->
<div class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0" id="navbarElement">
    <a href="index.html" class="navbar-brand p-0">
        <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>Transport Evropa</h1>
        <h5 class="m-0 text-primary"><i class="far text-primary me-2"></i>By Auto servis Mazić</h5>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 me-n3">
            <a href="index.html" id="homeTab" class="nav-item nav-link">Pocenta</a>
            <a href="about.html" id="aboutTab" class="nav-item nav-link">O nama</a>
            <a href="gallery.html" id="galleryTab" class="nav-item nav-link">Galerija</a>
            <a href="contact.html" id="contactTab" class="nav-item nav-link">Kontakt</a>
        </div>
    </div>
</div>
<!-- Navbar End -->
`;

document.getElementById('navbarTemplateId').innerHTML = navbarTemplate;

currentLocation = document.getElementById("scriptNavbar").getAttribute("currentLocation");

if(currentLocation){
    document.getElementById(currentLocation).className = "nav-item nav-link active";
}