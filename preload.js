const imagesToPreload = [
  "files/images/Nika Tsitskishvili.png",

  "files/writings/posters/Haieki.png",
  "files/writings/posters/LoveOnTheMoon.png",
  "files/writings/posters/JustTwoMoreSeconds.png",
  "files/writings/posters/Tuti.png",

  "files/writings/posters/TheKindMan.png",
  "files/writings/posters/DivineFire.png",


  "files/paintings/Camel.jpg",
  "files/paintings/Women.jpg",
  "files/paintings/Childhood.jpg",
  "files/paintings/Colchis.jpg",
  "files/paintings/Dea.jpg",
  "files/paintings/Death.jpg",
  "files/paintings/Fuji.jpg",
  "files/paintings/Mamoth.jpg",
  "files/paintings/Moon.jpg",
  "files/paintings/Ocean.jpg",
  "files/paintings/Time.jpg",

  "files/writings/posters/General.png",
  "files/writings/posters/Nature.png",
  "files/writings/posters/Romantic.png"
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;  // starts loading in the background
});