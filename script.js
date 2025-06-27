let html5QrCode;

function startScanner() {
  html5QrCode = new Html5Qrcode("reader");

  const qrConfig = { fps: 10, qrbox: 250 };

  html5QrCode.start(
    { facingMode: "environment" }, // use rear camera
    qrConfig,
    qrCodeMessage => {
      document.getElementById("output").innerText = qrCodeMessage;
      stopScanner(); // stop after first scan
    },
    errorMessage => {
      console.warn("QR Code no match", errorMessage);
    }
  ).catch(err => {
    console.error("Unable to start scanning", err);
  });
}

function stopScanner() {
  if (html5QrCode) {
    html5QrCode.stop().then(() => {
      console.log("Scanner stopped.");
    }).catch(err => {
      console.error("Error stopping scanner", err);
    });
  }
}
