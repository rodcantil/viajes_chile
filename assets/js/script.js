// POPPOVERS
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#enviarcorreo').click(function () {
    alert("Su correo fue enviado exitosamente");
    
});

$(viajeschile,destacados,quienesomos).click(function() {
    $(this).css({'color': 'red'});
});

$(destacados).click(function() {
    $(this).css({'color': 'red'});
});

$(quienesomos).click(function() {
    $(this).css({'color': 'red'});
});

$(contacto).click(function() {
    $(this).css({'color': 'red'});
});