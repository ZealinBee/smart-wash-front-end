const serviceNames = document.querySelectorAll('.service-name');
const arrows = document.querySelectorAll('.arrow');

serviceNames.forEach(serviceName => {
    serviceName.addEventListener("click", () => {
        serviceName.nextElementSibling.classList.toggle('active');
        serviceName.parentElement.nextElementSibling.classList.toggle('show');
    })
})