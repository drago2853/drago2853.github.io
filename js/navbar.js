let navbarTemplate = `
<nav class="navigationWrapper" id="navbarElement">
    <div class="logoWrapper" id="logoWrapper">
        <span class="stylish">Transport Evropa</span>
        <span class="logo">By Auto servis Mazić</span>
    </div>
    <div class="navigation listNavbarPages" id="contantDetails">
        <p class="m-0 parent"><p class="fa fa-envelope-open link" id="fName"/><i class="listNavbarItem">danilomazic@gmail.com</i></p>
        <p class="m-0 parent"><p class="fa fa-phone-alt me-2 link" id="mob1"/><i class="listNavbarItem">+381 64 123 1234</i></p>
        <p class="m-0 parent"><p class="fa fa-phone-alt me-2 link" id="mob2"/><i class="listNavbarItem">Viber: +11 64 123 1234</i></p>
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
    document.getElementById(currentLocation).className = "colorRed";
}

let diffNavbarLayout = false;
resizeNavbar()
function resizeNavbar() {
    if (window.innerWidth < 1430 && window.innerWidth > 700) {
        if (diffNavbarLayout) {
            setElemBigScreen()
        }

        calc = (25 / 100) * (window.innerWidth / 19)
        document.getElementById("navbarElement").style.fontSize = calc + "px";

    } else if (window.innerWidth < 700) {

        if (!diffNavbarLayout) {
            setElemSmallScreen()
        }
        
        calc = (60 / 100) * (window.innerWidth / 19)
        document.getElementById("logoWrapper").style.fontSize = calc + "px";
        
        calc = (40 / 100) * (window.innerWidth / 19)
        document.getElementById("navbarElement").style.fontSize = calc + "px";

        calc = (60 / 100) * (window.innerWidth / 19)
        document.getElementById("homeTab").style.fontSize = calc + "px";
        document.getElementById("aboutTab").style.fontSize = calc + "px";
        document.getElementById("galleryTab").style.fontSize = calc + "px";
        document.getElementById("contactTab").style.fontSize = calc + "px";

    } else {
        if (diffNavbarLayout) {
            setElemBigScreen()
        }
        document.getElementById("navbarElement").style.fontSize = "16px";
    }
}

function setElemSmallScreen(){
    document.getElementById("navbarElement").className += " diffNavbarLayout";
    document.getElementById("pagesList").className += " listNavbarPagesSmallScreen";
    document.getElementById("contantDetails").className += " contactDetailsSmallScreen";
    document.getElementById("fName").className += " contactDetailsSmallScreen";
    document.getElementById("mob1").className += " contactDetailsSmallScreen";
    document.getElementById("mob2").className += " contactDetailsSmallScreen";
    diffNavbarLayout = true
}

function setElemBigScreen(){
    document.getElementById("navbarElement").className = "navigationWrapper";
    document.getElementById("pagesList").className = "navigation";
    document.getElementById("contantDetails").className = "navigation listNavbarPages";
    document.getElementById("fName").className = "m-0 parent";
    document.getElementById("mob1").className = "m-0 parent";
    document.getElementById("mob2").className = "m-0 parent";
    diffNavbarLayout = false;
}