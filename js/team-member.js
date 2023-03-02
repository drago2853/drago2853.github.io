let teamMember = `
<!-- Team Start -->
<div class="container-fluid py-6 px-5">
    <div class="text-center mx-auto mb-5" style="max-width: 600px;">
        <h1 class="display-5 mb-0">Nas tim:</h1>
        <hr class="w-25 mx-auto bg-primary">
    </div>
    <div class="row g-5">
        <div class="col-lg-4">
            <div class="team-item position-relative overflow-hidden">
                <img class="img-fluid w-100" src="img/profile_photo.jpg" alt="">
                <div class="w-100 position-absolute top-50 text-center bg-primary p-4">
                    <h3 class="text-white">Danilo Mazić</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Team End -->
`;

document.getElementById('team-memberTemplateId').innerHTML = teamMember;