// List your paintings here (just add more names)
const images = [
  "files/paintings/Camel.jpg",
  "files/paintings/Women.png",
  "files/paintings/Childhood.jpg",
  "files/paintings/Colchis.jpg",
  "files/paintings/Dea.jpg",
  "files/paintings/Death.jpg",
  "files/paintings/Fuji.jpg",
  "files/paintings/Mamoth.jpg",
  "files/paintings/Moon.jpg",
  "files/paintings/Ocean.jpg",
  "files/paintings/Time.jpg",
];

const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeBtn = document.getElementById("closeBtn");

// Generate grid thumbnails
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "painting";
  img.loading = "lazy";
  img.addEventListener("click", () => openViewer(src));
  gallery.appendChild(img);
});

// Open Fullscreen Viewer
function openViewer(src) {
  viewerImg.src = src;
  viewer.style.display = "flex";
}

// Close viewer
closeBtn.addEventListener("click", () => viewer.style.display = "none");

// Close by clicking outside image
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.style.display = "none";
});
