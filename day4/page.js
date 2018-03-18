var img = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];

$(function () {
    $('#demo')
        .click(function () {
            $('#mobody').html($('#inp').val())
            $('#exampleModal').modal('show')
        })

    $('#exampleModal').on('hidden.bs.modal', function (e) {
        alert('dialog close')
    })

    $.each(img, function (index, value) {
        $('#carouselExample .carousel-inner').append(`<div class="carousel-item">
       <h2>${value}</h2>
    </div>`);

        if (index === 0) {
            $('#carouselExample .carousel-inner').addClass('active')
        }

    })

    $('#carouselExample').carousel();
})
