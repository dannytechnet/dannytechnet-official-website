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
