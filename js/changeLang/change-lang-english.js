let popupChangeLang = `
<p>Choose your preferred language: 
    <a href="fahrzeugtransport-europa.html">German</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbian</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangSerbian;

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, 7000);
}, 1500);