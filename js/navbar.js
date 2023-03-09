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
    document.getElementById(currentLocation).className = "colorRed";
}

let diffNavbarLayout = false;
resizeNavbar()
function resizeNavbar() {
    if (window.innerWidth < 1430 && window.innerWidth > 1050) {
        if (diffNavbarLayout) {
            setElemBigScreen()
        }

        calc = (25 / 100) * (window.innerWidth / 19)
        document.getElementById("navbarElement").style.fontSize = calc + "px";

        calc = (20 / 100) * (window.innerWidth / 19)
        resizeContactDetails(calc);

        calc = (100 / 100) * (window.innerWidth / 19)
        minWidthNabarList(calc);

        calc = (200 / 100) * (window.innerWidth / 10)
        document.getElementById("logoWrapper").style.minWidth = calc + "px";

        calc = (30 / 100) * (window.innerWidth / 19)
        document.getElementById("logoWrapper").style.fontSize = calc + "px";

        calc = (20 / 100) * (window.innerWidth / 19)
        fontSizeNabarList(calc);

    } else if (window.innerWidth < 1050 && window.innerWidth > 700) {
        if (diffNavbarLayout) {
            setElemBigScreen()
        }

        calc = (25 / 100) * (window.innerWidth / 19)
        document.getElementById("navbarElement").style.fontSize = calc + "px";

        calc = (25 / 100) * (window.innerWidth / 19)
        resizeContactDetails(calc);

        calc = (100 / 100) * (window.innerWidth / 19)
        minWidthNabarList(calc);

        calc = (200 / 100) * (window.innerWidth / 10)
        document.getElementById("logoWrapper").style.minWidth = calc + "px";

        calc = (30 / 100) * (window.innerWidth / 19)
        document.getElementById("logoWrapper").style.fontSize = calc + "px";

        calc = (25 / 100) * (window.innerWidth / 19)
        fontSizeNabarList(calc);

    } else if (window.innerWidth < 700) {

        if (!diffNavbarLayout) {
            setElemSmallScreen()
        }
        
        calc = (40 / 100) * (window.innerWidth / 19)
        document.getElementById("navbarElement").style.fontSize = calc + "px";

        calc = (60 / 100) * (window.innerWidth / 19)
        fontSizeNabarList(calc);

        calc = (60 / 100) * (window.innerWidth / 19)
        resizeContactDetails(calc);
        
        calc = (100 / 100) * (window.innerWidth / 19)
        minWidthNabarList(calc);
        
        calc = (60 / 100) * (window.innerWidth / 19)
        document.getElementById("logoWrapper").style.fontSize = calc + "px";
        calc = (200 / 100) * (window.innerWidth / 19)
        document.getElementById("logoWrapper").style.minWidth = calc + "px";

    } else {
        if (diffNavbarLayout) {
            setElemBigScreen()
        }
        document.getElementById("navbarElement").style.fontSize = "16px";

        calc = (20 / 100) * (window.innerWidth / 19)
        resizeContactDetails(calc);
        
        calc = (80 / 100) * (window.innerWidth / 19)
        minWidthNabarList(calc);
    }
}

function setElemSmallScreen(){
    document.getElementById("navbarElement").className += " diffNavbarLayout";
    document.getElementById("pagesList").className += " listNavbarPagesSmallScreen";
    document.getElementById("contantDetails").className += " contactDetailsSmallScreen";
    document.getElementById("fName").className += " contactDetailsSmallScreen photo";
    document.getElementById("mob1").className += " contactDetailsSmallScreen photo";
    document.getElementById("mob2").className += " contactDetailsSmallScreen photo";
    diffNavbarLayout = true
}

function setElemBigScreen(){
    document.getElementById("navbarElement").className = "navigationWrapper";
    document.getElementById("pagesList").className = "navigation";
    document.getElementById("contantDetails").className = "navigation listNavbarPages";
    document.getElementById("fName").className = "fa fa-envelope-open link photoLarge";
    document.getElementById("mob1").className = "fa fa-phone-alt me-2 link photoLarge";
    document.getElementById("mob2").className = "fa fa-phone-alt me-2 link photoLarge";
    diffNavbarLayout = false;
}

function resizeContactDetails(calc){

    document.getElementById("fName").style.fontSize = calc + "px";
    document.getElementById("mob1").style.fontSize = calc + "px";
    document.getElementById("mob2").style.fontSize = calc + "px";
}

function minWidthNabarList(calc){

    document.getElementById("homeTab").style.minWidth = calc + "px";
    document.getElementById("aboutTab").style.minWidth = calc + "px";
    document.getElementById("galleryTab").style.minWidth = calc + "px";
    document.getElementById("contactTab").style.minWidth = calc + "px";
}

function fontSizeNabarList(calc){

    document.getElementById("homeTab").style.fontSize = calc + "px";
    document.getElementById("aboutTab").style.fontSize = calc + "px";
    document.getElementById("galleryTab").style.fontSize = calc + "px";
    document.getElementById("contactTab").style.fontSize = calc + "px";
}