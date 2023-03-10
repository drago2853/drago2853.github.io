let navbarTemplate = `
<nav class="navigationWrapper" id="navbarElement">
    <div class="logoWrapper" id="logoWrapper">
        <span class="stylish">Transport Evropa</span>
        <span class="logo">By Auto servis Mazić</span>
    </div>
    <div class="navigation listNavbarPages" id="contantDetails">
       <p class="fa fa-envelope-open link photoLarge" id="fName"><i class="listNavbarItem">danilomazic@gmail.com</i></p>
       <p class="fa fa-phone-alt me-2 link photoLarge" id="mob1"><i class="listNavbarItem">+381 64 123 1234</i></p>
       <p class="fa fa-phone-alt me-2 link photoLarge" id="mob2"><i class="listNavbarItem">Viber: +11 64 123 1234</i></p>
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