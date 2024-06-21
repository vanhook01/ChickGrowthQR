document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = document.getElementById('qrData').value;
    if (data) {
        QRCode.toCanvas(document.getElementById('qrCode'), data, function (error) {
            if (error) console.error(error);
        });
    }
});
