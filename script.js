$(document).ready(function() {
    $('#qrForm').on('submit', function(event) {
        event.preventDefault();
        const data = $('#qrData').val().trim(); // Trim whitespace
        if (data) {
            try {
                // Validate and encode data
                const validatedData = encodeURIComponent(data);
                $('#spinner').show();
                $('#qrCode').empty(); // Clear any previous QR code
                QRCode.toCanvas(document.getElementById('qrCode'), validatedData, function (error) {
                    $('#spinner').hide();
                    if (error) {
                        console.error(error);
                        alert('An error occurred while generating the QR code.');
                    } else {
                        console.log('QR code generated successfully.');
                    }
                });
            } catch (e) {
                console.error(e);
                alert('Invalid data. Please enter valid text.');
            }
        } else {
            alert('Please enter some data.');
        }
