function initSeasons() {
  const seasons = ['summer','winter'];
  let idx = 0;
  const layers = document.querySelectorAll('.season-layer');

  function setSeason(s) {
    layers.forEach(l => l.classList.toggle('active', l.dataset.season === s));
  }

  setSeason(seasons[idx]);
  setInterval(() => {
    idx = (idx + 1) % seasons.length;
    setSeason(seasons[idx]);
  }, 24000);

  function rand(a,b){ return Math.random()*(b-a)+a; }

  // SUMMER rain
  const summer=document.querySelector('.summer');
  for(let i=0;i<80;i++){
    const r=document.createElement('div');
    r.className='raindrop';
    r.style.left=rand(0,100)+'vw';
    r.style.top=rand(-40,0)+'vh';
    r.style.animationDuration=rand(0.6,1.8)+'s';
    r.style.animationDelay=rand(0,1.8)+'s';
    summer.appendChild(r);
  }

  // WINTER snow
  const winter=document.querySelector('.winter');
  for(let i=0;i<80;i++){
    const s=document.createElement('div');
    s.className='snow';
    const size=rand(3,8);
    s.style.width=size+'px';
    s.style.height=size+'px';
    s.style.left=rand(0,100)+'vw';
    s.style.top=rand(-50,0)+'vh';
    s.style.animationDuration=rand(5,14)+'s';
    s.style.animationDelay=rand(0,6)+'s';
    winter.appendChild(s);
  }
}

// Get references to button and audio
const playBtn = document.getElementById("playBtn");
const dayMusic = document.getElementById("dayMusic");

// Track if music is playing
let isPlaying = false;




