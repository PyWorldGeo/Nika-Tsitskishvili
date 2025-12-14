// ============================
// Add your projects here
// ============================
const projects = [
  {
    title: "თანამედროვე ბიბლიოთეკა",
    desc: "პროექტის მიზანია იმერეთის მაღალმთიან რეგიონში თანამედროვე ბიბლიოთეკის აშენება. მიწის ნაკვეთი გამოყოფილია. ბიბლიოთეკის შენობის ასაშენებლად საჭიროა თანხის მობილიზება.",
    progress: 15
  },
  {
    title: "ამერიკული სკოლა",
    desc: "პოსტსაბჭოთა ქვეყნებში პირველი სკოლა, რომელიც აქტონის აკადემიის მოდელზე აიგო. ამ წამოწყების მთავარი მოტივაცია საბჭოთა განათლების მიღმა გასვლა და თავისუფალი და პასუხისმგებლიანი მოსწავლეების აღზრდაა.<br><a href='https://www.facebook.com/AmericanSchoolTbilisi' target='_blank' style='color: blue;'>ლინკი</a>",
    progress: 100
  },
  {
    title: "Python პროგრამირების ენის კურსი",
    desc: "კურსის მიზანია მსმენელს შეასწავლოს Python-ის პროგრამირების ენის საფუძვლები. კურსი მოიცავს როგორც თეორიულ ცოდნას, ასევე ინტენსიურ პრაქტიკულ სავარჯიშოებს.<br><a href='files/courses/Python პროგრამირების ენის კურსი.pdf' target='_blank' style='color: blue;'>სილაბუსი</a>",
    progress: 100
  },
  {
    title: "სტატიკური ვებგვერდების აწყობის სერვისი",
    desc: "ფიზიკური პირებისა და ბიზნესისთვის ბიუჯეტური ვებგვერდების შექმნა.<br><a href='https://freemoneyge.github.io/NanakoNoSekai/?fbclid=IwY2xjawOWW_9leHRuA2FlbQIxMABicmlkETFHeEh4WDRhTWF6OVNjcGMyc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjU5Y-_t0DdSCvCHanD0SsPS_hMfhvA8hG9QdE7pMmcV95LSoR1RTBJsAKSi_aem_noLf2nDE1zfguBI5VQ4tZw' target='_blank' style='color: blue;'>ერთერთი შეკვეთა</a>",
    progress: 100
  },
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
  <div class="donate-title">❤️ დააფინანსე ბიბლიოთეკის მშენებლობა</div>
  <p>შენი დახმარება მნიშვლელოვანია მიმდინარე და მომავალი პროექტების განსახორციელებლად. მიუთითე პროექტის დასახელება გადმორიცხვისას.</p>

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