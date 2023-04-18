"use strick";

console.log("My name chris");
// prompt(`🤝 Welcome to DannyTechnet - Bost your brand
// Click ok to procced  `);
// ALL DECLERATIONS
const allTeam = document.querySelectorAll(".our-team-section");
const team = document.querySelectorAll(".Team");
const modal = document.querySelector(".modazl-window-container");
const visibility = document.querySelector(".visibility");
const modalContent = document.querySelector(".team-modal-content");
const modalIMG = document.querySelector(".ModalImg");
const modalLayer1Color = document.querySelector(".modal-team-con");
const modalLayer2Color = document.querySelector(".modal-widow-team");
const modalDataName = document.querySelector(".modal-team-con-header");
const modalDataName2 = document.querySelector(".modal-team-con-header2");
const nexter = document.querySelector(".nexter1");
const previewer = document.querySelector(".nexter2");
const carouselDot1 = document.querySelector(".previeBTN1");
const carouselDot2 = document.querySelector(".previeBTN2");
const carouselDot3 = document.querySelector(".previeBTN3");
const clickDisabled = document.querySelector(".clickDisabled");
const modalClose = document.querySelector(".cancelIcon");
const blueColor = document.querySelector(".blueColor");
const orangeColor = document.querySelector(".orangeColor");
const darkAsh = document.querySelector(".darkAsh");
const testimonialTextEl = document.querySelector(".testimonial-text");
const testifirstNameEl = document.querySelector(".testifirstNameEl");
const testibackgroundColor = document.querySelector(".testimonial-main-con");
const full = document.querySelector(".fa-star-full-stroke");
const half = document.querySelector(".fa-star-half-stroke");
full.style.display = "none";
const menuModal = document.querySelector(".menu-modal");
const menuBarEl = document.querySelector(".menu-bar");
const menuBarEl2 = document.querySelector(".menu-bar2");
const menuVisibility = document.querySelector(".menu-modal-visibility");
const menuCancelIcon = document.querySelector(".menuCancelIcon");
const testimonialPix3 = document.querySelector(".testimonial-pix3");
const testimonialPix2 = document.querySelector(".testimonial-pix2");
const testimonialPix1 = document.querySelector(".testimonial-pix1");
const menuLinkdisable = document.querySelectorAll(".disabler");
const testifierPix = document.querySelector(".testimonial-pix");
const testCompanyName = document.querySelector(".testifierCompany");
let nexterPrevier = 0;
// /////////////////////////////////////////

for (let i = 0; i < team.length; i++) {
  team[0].addEventListener("click", function () {
    modal.classList.remove("hidder");
    console.log(team);
    modalContent.textContent = `A professional front-end web developer with years of experience, 
      I am deeply passionate about web development and constantly strive to learn and improve my skills. 
      My journey in web development began with HTML and CSS, 
      and has since expanded to include various front-end frameworks and tools like JavaScript, React and so mush more.
      As a front-end web developer, I hold usability, accessibility, and web standards in high regard. 
      I believe that websites should not only look great, but they should also be easy to use and accessible to users 
      of all abilities.`;
    modalIMG.src = `TeamImage/team1.webp`;
    modalLayer1Color.style.backgroundColor = " #777";
    modalLayer2Color.style.backgroundColor = " #777";
    modalDataName.textContent = `CHRIS`;
    modalDataName2.textContent = `  Front End Developer and UI/UX Designer`;
  });

  team[1].addEventListener("click", function () {
    modal.classList.remove("hidder");
    console.log(team);
    modalContent.textContent = `A professional Backend Developer and Data Scientist with 5 Years of experience in the industry. I am deeply passionate about developing software solutions that solve complex problems and enable businesses to thrive.
     As a Backend Developer, I specialize in using technologies such as Python,  SQL to develop efficient and scalable back-end systems that support a wide range of applications. I have experience in building RESTful APIs, deploying applications to the cloud, and using technologies such as Docker and Kubernetes to manage containerized applications.`;
    modalIMG.src = `TeamImage/team2.webp`;
    modalLayer1Color.style.backgroundColor = "#777";
    modalLayer2Color.style.backgroundColor = "#777";
    modalDataName.textContent = `DANNY`;
    modalDataName2.textContent = `Back End Developer and Data Scientist`;
  });
  team[2].addEventListener("click", function () {
    modal.classList.remove("hidder");
    console.log(team);
    modalContent.textContent = ` A highly skilled digital marketer with a wealth of experience in the industry. I began my career at a leading digital agency, where they worked on a variety of projects, including developing content marketing strategies for B2B clients, managing PPC campaigns for e-commerce companies, and optimizing websites for search engines. During this time, i gained valuable experience in all aspects of digital marketing.`;
    modalIMG.src = `TeamImage/team3.webp`;
    modalLayer1Color.style.backgroundColor = "#777";
    modalLayer2Color.style.backgroundColor = "#777";
    modalDataName.textContent = `SALOME  DAVID`;
    modalDataName2.textContent = `Digital Marketer`;
  });
}
//  testimonialPix3
// testimonialPix2
// testimonialPix1
testimonialPix2.classList.add("hidder");
testimonialPix3.classList.add("hidder");
testimonialPix1.classList.remove("hidder");
nexter.addEventListener("click", function () {
  nexterPrevier = nexterPrevier + 1;

  if (nexterPrevier === 0) {
    testimonialPix2.classList.add("hidder");
    testimonialPix3.classList.add("hidder");
    testimonialPix1.classList.remove("hidder");
    carouselDot1.classList.add("blueColor");
    console.log(nexterPrevier);
    testifirstNameEl.textContent = `Chanté Caleb`;
    testCompanyName.textContent = `CEO FieldLinks Tech`;
    testimonialTextEl.textContent = ` The Website Danny Technet's built for our brandd is stunning, user-friendly, and perfectly represents our brand.  `;
    testibackgroundColor.style.backgroundColor = " #d7e4fd";
    full.style.display = "none";
  }

  if (nexterPrevier === 1) {
    testimonialPix2.classList.remove("hidder");
    testimonialPix3.classList.add("hidder");
    testimonialPix1.classList.add("hidder");

    carouselDot1.classList.remove("blueColor");
    carouselDot2.classList.add("orangeColor");
    console.log(nexterPrevier);
    previewer.classList.remove("clickDisabled");
    testifirstNameEl.textContent = `Busta Booker`;
    testCompanyName.textContent = `CTO, Maxtro LTD`;
    testimonialTextEl.textContent = `Overall, I can't recommend Danny Technet enough. They're truly experts in their field, and they provided me with an exceptional level of service.  `;
    testibackgroundColor.style.backgroundColor = "#FFF5CB";
    full.style.display = "block";
    half.style.display = "none";
  }
  // nexter2.classList.remove("nexter2");
  if (nexterPrevier === 2) {
    testimonialPix2.classList.add("hidder");
    testimonialPix3.classList.remove("hidder");
    testimonialPix1.classList.add("hidder");
    carouselDot1.classList.remove("blueColor");
    carouselDot2.classList.remove("orangeColor");
    carouselDot3.classList.add("darkAsh");
    nexter.classList.add("clickDisabled");
    previewer.classList.remove("clickDisabled");
    console.log(nexterPrevier);
    testifirstNameEl.textContent = `Autry Abraham`;
    testCompanyName.textContent = `Co-Founder ZoneBit Tech`;

    testimonialTextEl.textContent = `Throughout the entire process, the team was always there to answer any questions I had and to provide valuable input to help me make the best decisions for my business. `;
    testibackgroundColor.style.backgroundColor = "#EDF2D5 ";
    full.style.display = "block";
    half.style.display = "none";
  }
});
previewer.addEventListener("click", function () {
  nexterPrevier = nexterPrevier - 1;
  if (nexterPrevier === 0) {
    testimonialPix2.classList.add("hidder");
    testimonialPix3.classList.add("hidder");
    testimonialPix1.classList.remove("hidder");
    carouselDot1.classList.add("blueColor");
    carouselDot3.classList.remove("darkAsh");
    carouselDot2.classList.remove("orangeColor");
    previewer.classList.add("clickDisabled");
    nexter.classList.remove("clickDisabled");
    console.log(nexterPrevier);
    testifirstNameEl.textContent = `Chanté Caleb`;
    testCompanyName.textContent = `CEO FieldLinks LTD`;
    testimonialTextEl.textContent = `   The website Danny Technet created is simply stunning. It's modern,
    user-friendly, and perfectly represents our brand.  
    considered.`;
    full.style.display = "none";
    half.style.display = "block";
    testibackgroundColor.style.backgroundColor = " #d7e4fd";
  }
  if (nexterPrevier === 1) {
    testimonialPix2.classList.remove("hidder");
    testimonialPix3.classList.add("hidder");
    testimonialPix1.classList.add("hidder");
    carouselDot1.classList.remove("blueColor");
    carouselDot3.classList.remove("darkAsh");
    carouselDot2.classList.add("orangeColor");
    console.log(nexterPrevier);
    nexter.classList.remove("clickDisabled");
    testifirstNameEl.textContent = `Busta Booker`;
    testCompanyName.textContent = `CTO, Maxtro LTD`;
    testimonialTextEl.textContent = `Overall, I can't recommend this web development company enough. They're truly experts in their field, and they provided me with an exceptional level of service.  `;
    full.style.display = "block";
    half.style.display = "none";
    testibackgroundColor.style.backgroundColor = "#FFF5CB";
  }
  // nexter2.classList.remove("nexter2");
  if (nexterPrevier === 2) {
    testimonialPix2.classList.add("hidder");
    testimonialPix3.classList.remove("hidder");
    testimonialPix1.classList.add("hidder");
    carouselDot1.classList.remove("blueColor");
    carouselDot2.classList.remove("orangeColor");
    carouselDot3.classList.add("darkAsh");
    nexter.classList.add("clickDisabled");
    console.log(nexterPrevier);
    testifirstNameEl.textContent = `Autry Abraham`;
    testCompanyName.textContent = `Co-Founder ZoneBit Tech`;
    testimonialTextEl.textContent = `Throughout the entire process, the team was always there to answer any questions I had and to provide valuable input to help me make the best decisions for my business. `;
    full.style.display = "block";
    half.style.display = "none";
    testibackgroundColor.style.backgroundColor = "#EDF2D5 ";
  }
});

// MODAL CLOSE BUTTON
modalClose.addEventListener("click", function () {
  modal.classList.add("hidder");
  modal.classList.add("closeAnimationAdd");
});
// MENU MODAL
menuModal.classList.add("hidder");

menuBarEl.addEventListener("click", function () {
  menuModal.classList.remove("hidder");

  menuModal.classList.add("menu-modalAnimation");
  menuModal.classList.remove("menu-modal-visibility");
  menuBarEl.classList.add("hidder");
  menuCancelIcon.classList.remove("hidder");
  console.log("menu Correct");
});
menuBarEl2.addEventListener("click", function () {
  menuModal.classList.remove("hidder");

  menuModal.classList.add("menu-modalAnimation");
  menuModal.classList.remove("menu-modal-visibility");
  menuBarEl2.classList.add("hidder");
  menuCancelIcon.classList.remove("hidder");
  console.log("menu Correct");
});
menuCancelIcon.addEventListener("click", function () {
  menuModal.classList.remove("menu-modalAnimation");
  menuModal.classList.add("menu-modal-visibility");
  console.log("name");
  menuBarEl.classList.remove("hidder");
  menuBarEl2.classList.remove("hidder");
  menuCancelIcon.classList.add("hidder");
  console.log("calncel Correct");
});

// BLUE MENU MODAL DISABLE AFTER A LINK IS CLICKED////
for (let i = 0; i < menuLinkdisable.length; i++) {
  menuLinkdisable[i].addEventListener("click", function () {
    menuModal.classList.remove("menu-modalAnimation");
    menuModal.classList.add("menu-modal-visibility");
    console.log("name");
    menuBarEl.classList.remove("hidder");
    menuBarEl2.classList.remove("hidder");
    menuCancelIcon.classList.add("hidder");
    console.log("calncel Correct");
  });
}
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
