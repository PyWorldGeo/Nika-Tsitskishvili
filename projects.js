// ============================
// Add your projects here
// ============================
const projects = [
  {
    title: "თანამედროვე ბიბლიოთეკა",
    desc: "პროექტის მიზანია იმერეთის მაღალმთიან რეგიონში, თანამედროვე ბიბლიოთეკის აშენება. მიწის ნაკვეთი გამოყოფილია. ბიბლიოთეკის შენობის ასაშენებლად საჭიროა დაახლოებით 10 000 დოლარი. მშენებლობის დასრულება სასურველია მოესწროს 2026 წლის ბოლომდე.",
    progress: 15
  },
  {
    title: "წიგნის გამოცემა",
    desc: "პროექტის მიზანია ფიზიკურ წიგნად გამოიცეს ჩემი მოთხრობების კრებული. თუ ხარ ფილოლოგი, ან მუშაობ გამომცემლობაში და დაინტერესებული ხარ ჩემთან თანამშრომლობით _ დამიკავშირდი!",
    progress: 10
  },
  {
    title: "მუსიკალური ალბომის ჩაწერა",
    desc: "პროექტის მიზანია პროფესიონალურ დონეზე ჩაიწეროს ჩემს მიერ შექმნილი 10-15 სიმღერა. თუ გაქვს ჩამწერი სტუდია და დაინტერესებული ხარ ჩემთან თანამშრომლობით _ დამიკავშირდი!",
    progress: 10
  }
];

// ============================
// Render projects
// ============================
const box = document.getElementById("projectsBox");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    <div class="project-title">${p.title}</div>
    <div class="project-desc">${p.desc}</div>

    <div class="progress-bar">
      <div class="progress-fill" style="width: ${p.progress}%"></div>
    </div>

    <div style="opacity:0.8;">Progress: ${p.progress}%</div>
  `;

  box.appendChild(div);
});

// ============================
// Donation Section
// ============================
const donate = document.createElement("div");
donate.className = "donate-box";

donate.innerHTML = `
  <div class="donate-title">❤️ დააფინანსე სასურველი პროექტი</div>
  <p>შენი დახმარება მნიშვლელოვანია მიმდინარე და მომავალი პროექტების განსახორციელებლად. მიუთითე სასურველი პროექტის დასახელება გადმორიცხვისას.</p>

  <p><strong>საბანკო ტრანზაქცია:</strong></p>

  <div class="bank-code">
    მიმღები: ნიკა ციცქიშვილი<br><br>
    საქართველოს ბანკის ანგარიში:<br>
    GE13BG0000000582389740<br><br>
    თიბისი ბანკის ანგარიში:<br>
    GE87TB7971345068100033<br>
  </div>

  <p style="margin-top:15px;">ნებისმიერი თანხა მნიშვნელოვანია. მადლობა!</p>
`;

box.appendChild(donate);