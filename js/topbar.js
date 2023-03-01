let topbarTemplate = `
<!-- Topbar Start -->
<div class="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block" id="topbarElement">
    <div class="row gx-0">
        <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0"></div>
        <div class="col-md-6 text-center text-lg-end">
            <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div class="me-3 pe-3 border-end py-2">
                    <p class="m-0"><i class="fa fa-envelope-open me-2"></i>danilomazic@gmail.com</p>
                </div>
                <div class="py-2 px-2">
                    <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+381 64 562 7536</p>
                </div>
                <div class="py-2 px-2">
                    <p class="m-0"><i class="fa fa-phone-alt me-2"></i>Viber: +11 64 562 7536</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Topbar End -->
`;

document.getElementById('topbarTemplateId').innerHTML = topbarTemplate;