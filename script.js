$(document).ready(function() {
    $('#qrForm').on('submit', function(event) {
        event.preventDefault();
        const data = $('#qrData').val();
        if (data) {
            $('#spinner').show();
            $('#qrCode').empty(); // Clear any previous QR code
            QRCode.toCanvas(document.getElementById('qrCode'), data, function (error) {
                $('#spinner').hide();
                if (error) {
                    console.error(error);
                    alert('An error occurred while generating the QR code.');
                } else {
                    console.log('QR code generated successfully.');
                }
            });
        } else {
            alert('Please enter some data.');
        }
    });
});
