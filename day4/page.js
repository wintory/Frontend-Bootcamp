$(function () {
    $('#demo')
        .click(function () {
            $('#mobody').html($('#inp').val())
            $('#exampleModal').modal('show')
        })

    $('#exampleModal').on('hidden.bs.modal', function (e) {
        alert('dialog close')
    })
})