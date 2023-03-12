let navbarTemplate = `
<nav class="navigationWrapper" id="navbarElement">
    <div class="logoWrapper" id="logoWrapper">
        <span class="stylish">Transport Evropa</span>
        <span class="logo">By Autoservice Mazić</span>
    </div>
    <div class="navigation listNavbarPages" id="contantDetails">
        <p class="fa fa-envelope-open link photoLarge" id="fName"><i class="listNavbarItem">danilo.mazic12@gmail.com</i>
        </p>
        <p class="fa fa-phone-alt me-2 link photoLarge" id="mob1"><a class="listNavbarItem" href="tel:+381 6286 07021">+381 6286 07021</a></p>
        <p class="fa fa-phone-alt me-2 link photoLarge" id="mob2"><a class="listNavbarItem" href="tel:+49 170436 2889">Viber/WA: +49 170436 2889</a></p>
    </div>
    <ul class="navigation" id="pagesList">
        <li class="parent"><a href="index.html" class="link" id="homeTab">Pocetna</a></li>
        <li class="parent"><a href="about.html" class="link" id="aboutTab">O nama</a></li>
        <li class="parent"><a href="gallery.html" class="link" id="galleryTab">Galerija</a></li>
        <li class="parent"><a href="contact.html" class="link" id="contactTab">Kontakt</a></li>
    </ul>
</nav>
`;

document.getElementById('navbarTemplateId').innerHTML = navbarTemplate;

currentLocation = document.getElementById("scriptNavbar").getAttribute("currentLocation");

if (currentLocation) {
    document.getElementById(currentLocation).style.color = "rgb(255, 123, 123)";
}