// ===============================
// OPEN PDF INSIDE PAGE
// ===============================
document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // stop normal opening

        const pdf = this.getAttribute("href");

        // Show the PDF in iframe
        document.getElementById("pdfFrame").src = pdf;

        // Reveal overlay
        document.getElementById("pdfViewer").classList.remove("hidden");
    });
});

// ===============================
// CLOSE PDF VIEWER
// ===============================
document.getElementById("closePdf").addEventListener("click", () => {
    document.getElementById("pdfViewer").classList.add("hidden");
    document.getElementById("pdfFrame").src = ""; // clear PDF
});
