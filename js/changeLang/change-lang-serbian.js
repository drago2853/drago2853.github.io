let popupChangeLangSerbian = `
<p>Odaberite željeni jezik: 
    <a href="vehicle-transportation-europe.html">Engleski</a> | 
    <a href="fahrzeugtransport-europa.html">Nemački</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangSerbian;

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, 7000);
}, 1500);