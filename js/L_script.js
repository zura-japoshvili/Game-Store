let active_cont = document.getElementById("active-cont");
function mouseOverFunc() {
  active_cont.style.display = "flex";
}
function mouseOutFunc() {
  active_cont.style.display = "none";
}

let active_icon = document.getElementById("active-icon");
let offline_icon = document.getElementById("offline-icon");
function activeClickFunc(arg) {
  if (arg === "active") {
    active_icon.style.visibility = "visible";
    offline_icon.style.visibility = "hidden";
  } else {
    active_icon.style.visibility = "hidden";
    offline_icon.style.visibility = "visible";
  }
}
let fg_list = document.getElementById("fg-list");
let ag_list = document.getElementById("ag-list");
let fg_arrow = document.getElementById("arrow-fg");
let ag_arrow = document.getElementById("arrow-ag");
fg_arrow.addEventListener("click", function () {
  fg_arrow.classList.toggle("active-arrow");
  fg_list.classList.toggle("dn");
});
ag_arrow.addEventListener("click", function () {
  ag_arrow.classList.toggle("active-arrow");
  ag_list.classList.toggle("dn");
});
