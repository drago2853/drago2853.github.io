let popupChangeLangSerbian = `
<p>Wählen Sie Ihre gewünschte Sprache: 
    <a href="vehicle-transportation-europe.html">Englisch</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbisch</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangSerbian;

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, 7000);
}, 1500);