let popupChangeLangEnglish = `
<p>Choose your preferred language: 
    <a href="fahrzeugtransport-europa.html">German</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbian</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangEnglish;

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, 10000);
}, 1500);