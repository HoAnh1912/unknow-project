// Responsie nav sm, xs
let nav = document.querySelector(".nav");
let btnmenu = document.querySelector("header .btnmenu");
btnmenu.onclick = function () {
  //   console.log("ok");
  nav.classList.toggle("active");
  this.classList.toggle("click");
};
// Language
let lang = document.querySelector(".lang");
let langCurrent = document.querySelector(".lang .lang__current span");
let langOpt = document.querySelector(".lang .lang__option");
let langItems = document.querySelectorAll(".lang .lang__option a");
lang.addEventListener("click", function (e) {
  // console.log("ok");
  lang.classList.toggle("active");
  e.stopPropagation();
});

langItems.forEach(function (item) {
  // console.log(item);
  item.addEventListener("click", function () {
    // console.log(this.textContent);
    let langText = this.textContent;
    let langCurrentSpan = langCurrent.textContent;
    langCurrent.innerHTML = langText;
    this.innerHTML = langCurrentSpan;
  });
});
document.addEventListener("click", function () {
  lang.classList.remove("active");
});

// Add background header when scrolled
let header = document.querySelector("header");
let slider = document.querySelector(".slider");
let heighSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

function changeBgHeader() {
  //console.log(1);
  let scrollY = window.pageYOffset;
  // console.log(heighSlider);
  if (scrollY > heighSlider - heightHeader) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

//Back to top
let backtotop = document.querySelector(".totop");
let getHeightWindown = window.innerHeight; // lay chieu cao cua cua so trinh duyet
function showBackToTop() {
  let scrollY = window.pageYOffset; //tra ve chieu cao duoc scroll tinh tu o tren windown
  if (scrollY > getHeightWindown) {
    backtotop.classList.add("active");
  } else {
    backtotop.classList.remove("active");
  }
}
backtotop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});
document.addEventListener("scroll", function () {
  changeBgHeader();
  showBackToTop();
});
//Tag
let tagText = document.querySelectorAll(".news__tags .news__tags-text .tag");
let tagList = document.querySelectorAll(".news__list");

tagText.forEach(function (item, index) {
  item.addEventListener("click", function () {
    let tagID = index + 1;
    console.log(tagID);
    tagText.forEach(function (tag) {
      tag.classList.remove("active");
    });
    tagList.forEach(function (tags) {
      tags.classList.remove("active");
    });
    item.classList.add("active");
    document.querySelector(".news__list-" + tagID).classList.add("active");
  });
});
// Menu scroll toi vi tri
let menus = document.querySelectorAll("header .menu a");
let sections = [];
function removeActiveMenu() {
  menus.forEach(function (menu_element, menu_index) {
    menu_element.classList.remove("active");
  });
}

menus.forEach(function (element, index) {
  let className = element.getAttribute("href").replace("#", "");
  let section = document.querySelector("." + className); // lay ten section ".photos pd"
  sections.push(section);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    //let href = element.getAttribute("href");

    //let positionsection = section.offsetTop;
    window.scrollTo({
      top: section.offsetTop - heightHeader + 1,
      behavior: "smooth",
    });
    // menus.forEach(function (menu_element, menu_index) {
    //   menu_element.classList.remove("active");
    // });
    removeActiveMenu();
    element.classList.add("active");
  });
});

window.addEventListener("scroll", function (e) {
  let positonScroll = this.pageYOffset;
  sections.forEach(function (section, index) {
    if (
      positonScroll > section.offsetTop - heightHeader &&
      positonScroll < section.offsetTop + section.offsetHeight
    ) {
      removeActiveMenu();
      menus[index].classList.add("active");
    } else {
      menus[index].classList.remove("active");
    }
  });
});

//SLIDER
// let listItemSlider = document.querySelectorAll(".slider__item");
// let number = document.querySelector(".slider__bottom-paging .number");
// let dotLi = document.querySelectorAll(".slider__bottom-paging .dotted li");
// let currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, index) {
//   if (itemSlider.classList.contains("active")) {
//     currentSlider = index;
//   }
// });
// //PAGING
// function shownumber(index) {
//   number.innerHTML = index.toString().padStart(2, "0");
// }
// shownumber(currentSlider + 1);
// //default active
// // dotLi[currentSlider].classList.add("is-selected");

// // console.log(currentSlider + 1);
// document.querySelector(".btnctr.next").addEventListener("click", function () {
//   if (currentSlider < listItemSlider.length - 1) {
//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[currentSlider + 1].classList.add("active");
//     // currentSlider++;
//     goto(currentSlider + 1);
//   } else {
//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[0].classList.add("active");
//     // currentSlider = 0;
//     goto(0);
//   }
// });
// document.querySelector(".btnctr.prev").addEventListener("click", function () {
//   if (currentSlider > 0) {
//     // listItemSlider[currentSlider].classList.remove("acitve");
//     // listItemSlider[currentSlider - 1].classList.add("active");
//     // currentSlider--;
//     goto(currentSlider - 1);
//   } else {
//     // listItemSlider[currentSlider].classList.remove("active");
//     // listItemSlider[listItemSlider.length - 1].classList.add("active");
//     // currentSlider = listItemSlider.length - 1;
//     goto(listItemSlider.length - 1);
//   }
// });
// function goto(index) {
//   listItemSlider[currentSlider].classList.remove("active");
//   listItemSlider[index].classList.add("active");
//   dotLi[currentSlider].classList.remove("is-selected");
//   dotLi[index].classList.add("is-selected");
//   currentSlider = index;
//   shownumber(currentSlider + 1);
// }
// dotLi.forEach(function (li, index) {
//   li.addEventListener("click", function () {
//     goto(index);
//   });
// });

//POPUPVIDEO
let button_video = document.querySelectorAll(".play_button");
let popup_video = document.querySelector(".popup-video");
let close_popup_video = document.querySelector(".close");
let iframe = document.querySelector(".popup-video iframe");
button_video.forEach(function (btnvideo) {
  btnvideo.addEventListener("click", function () {
    let video_id = btnvideo.getAttribute("data-video-id");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + video_id);
    popup_video.style.display = "flex";
  });
});
close_popup_video.addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popup_video.style.display = "none";
});
document.querySelector(".popup-video").addEventListener("click", function () {
  iframe.setAttribute("src", "");
  popup_video.style.display = "none";
});
//FLICKITY SLIDER
let $carousel = $(".slider__item-wrap ");
$carousel.flickity({
  //option
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  on: {
    ready: function () {
      let dotted = $(".flickity-page-dots");
      paging = $(".slider__bottom-paging .dotted");
      dotted.appendTo(paging);
    },
    change: function (index) {
      let number = $(".slider__bottom-paging .number");
      let indexPage = index + 1;
      number.text(indexPage.toString().padStart(2, 0));
    },
  },
});
//PREVIOUS
$(".slider__bottom-control .prev").on("click", function () {
  $carousel.flickity("previous");
});
$(".slider__bottom-control .next").on("click", function () {
  $carousel.flickity("next");
});
//FLICKITY PHOTO
$(".photos").flickity({
  contain: true,
  wrapAround: false,
  freeScroll: true,
  cellAlign: "left",
  lazyLoad: 3,
  imagesLoaded: true,
  prevNextButtons: false,
});
