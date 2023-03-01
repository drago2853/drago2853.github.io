let testimonial = `
<!-- Testimonial Start -->
<div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-6" style="min-height: 500px;">
            <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100" src="img/testimonial.jpg" style="object-fit: cover;">
            </div>
        </div>
        <div class="col-lg-6 py-6 px-5">
            <h1 class="display-5 mb-4">Sta nasi klijenti kazu!!!</h1>
            <div class="owl-carousel testimonial-carousel">
                <div class="testimonial-item">
                    <p class="fs-4 fw-normal mb-4"><i class="fa fa-quote-left text-primary me-3"></i>Sve preporuke.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid rounded-circle" src="img/profile_photo.jpg" alt="">
                        <div class="ps-4">
                            <h3>John Doe</h3>
                            <span class="text-uppercase">CEO</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-item">
                    <p class="fs-4 fw-normal mb-4"><i class="fa fa-quote-left text-primary me-3"></i>Svaka cast.</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid rounded-circle" src="img/profile_photo.jpg" alt="">
                        <div class="ps-4">
                            <h3>John Doe</h3>
                            <span class="text-uppercase">CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Testimonial End -->
`;

document.getElementById('testimonialTemplateId').innerHTML = testimonial;