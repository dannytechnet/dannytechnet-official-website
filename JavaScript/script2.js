const menuModal2 = document.querySelector(".menu-modalTwo");
const menuCalcel = document.querySelector(".menuCancelIcon");
const menuIcon2 = document.querySelector(".menuIcon");
menuIcon2.addEventListener("click", function () {
  menuModal2.classList.add("visible");
  menuIcon2.classList.add("hidder");
  menuCalcel.classList.remove("hidder");
});
menuCalcel.addEventListener("click", function () {
  menuModal2.classList.remove("visible");

  menuIcon2.classList.remove("hidder");
  menuCalcel.classList.add("hidder");
});
