let aboutHtmlText = `
<!-- About Start -->
<div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-6 py-6 px-5">
            <h1 class="display-5 mb-4">Dobrodosli u <span class="text-primary">Transport Evropom</span></h1>
            <h4 class="text-primary mb-4">Neki dugacak title Neki dugacak title Neki dugacak title</h4>
            <p class="mb-4">Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis Neki dugacak opis</p>
        </div>
        
        <div class="col-lg-6" style="min-height: 500px;">
            <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100" src="img/1.jpg" style="object-fit: cover;">
            </div>
        </div>
    </div>
</div>
<!-- About End -->
`;

document.getElementById('aboutTemplateId').innerHTML = aboutHtmlText;