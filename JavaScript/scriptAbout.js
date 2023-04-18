"use strick";
console.log("My name chris");

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
const menuLinkdisable = document.querySelectorAll(".disabler");
const testimonialPix1 = document.querySelector(".testimonial-pix1");

const testifierPix = document.querySelector(".testimonial-pix");
let nexterPrevier = 0;
// /////////////////////////////////////////

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
    testimonialTextEl.textContent = `   The website Danny Technet created is simply stunning. It's modern,
    user-friendly, and perfectly represents our brand.`;
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
    testimonialTextEl.textContent = `Throughout the entire process, the team was always there to answer any questions I had and to provide valuable input to help me make the best decisions for my business. `;
    full.style.display = "block";
    half.style.display = "none";
    testibackgroundColor.style.backgroundColor = "#EDF2D5 ";
  }
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
