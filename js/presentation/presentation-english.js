let presentationEnglish = `
<!-- Carousel Start -->
<div class="container-fluid p-0 photosOnHomePage marginTop">
    <div id="header-carousel" class="carousel slide carousel-fade photosOnHomePage marginTop" data-bs-ride="carousel">
        <div class="carousel-inner photosOnHomePage marginTop">
            <div class="carousel-item active">
                <img class="w-100 homeImages marginTop" src="img/medium/36.jpg" alt="transport vozila"
                    id="imagePresentation1">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3 imageDescriptionHome" style="max-width: 900px;">
                        <h5 class="display-1 text-white mb-md-4 imageDescriptionHomeFontTitle">Your Reliable Transport Partner - We Safely and Efficiently Transport Your Cargo Across Europe.</h5>
                        <a href="contact-transport-europe.html"
                            class="btn btn-secondary py-md-3 px-md-5 rounded-pill imageDescriptionHomeFont">Contact</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100 homeImages marginTop lazy" data-src="img/medium/13.jpg" alt="transport vozila"
                    id="imagePresentation2" loading="lazy">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3 imageDescriptionHome2" style="max-width: 900px;">
                        <h5 class="display-1 text-white mb-md-4 imageDescriptionHomeFontTitle">We Carry Your Success - Reliable and Quality Transport of Vehicles and Cargo.</h5>
                        <a href="contact-transport-europe.html"
                            class="btn btn-secondary py-md-3 px-md-5 rounded-pill imageDescriptionHomeFont">Contact</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100 homeImages marginTop lazy" data-src="img/medium/28.jpg" alt="transport vozila"
                    id="imagePresentation3" loading="lazy">
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3 imageDescriptionHome2" style="max-width: 900px;">
                        <h5 class="display-1 text-white mb-md-4 imageDescriptionHomeFontTitle">Entrust Your Vehicle or Cargo to Us - We Will Transport It Safely and Reliably.</h5>
                        <a href="contact-transport-europe.html"
                            class="btn btn-secondary py-md-3 px-md-5 rounded-pill imageDescriptionHomeFont">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev photosOnHomePage" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next photosOnHomePage" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
<!-- Carousel End -->
`;

document.getElementById("presentationTemplateId").innerHTML = presentationEnglish;