const classes = document.querySelectorAll(".books");
const elems = document.querySelectorAll(".book");
const ads = document.querySelector(".adv");
const bodyAccess = document.querySelector("body");

ads.remove();

elems[0].before(elems[1]);
elems[2].before(elems[4]);
elems[2].before(elems[3]);
elems[2].before(elems[5]);

bodyAccess.style.backgroundImage = 'url("../image/you-dont-know-js.jpg")';
const change = document.querySelectorAll(".book h2 a")[2];
change.innerHTML = "Книга 3. this и Прототипы Объектов";
const changeChapterTwo = document.querySelectorAll(".book:nth-child(2) ul li");
changeChapterTwo[2].before(changeChapterTwo[3]);
changeChapterTwo[4].before(changeChapterTwo[10]);
changeChapterTwo[2].before(changeChapterTwo[9]);
changeChapterTwo[9].before(changeChapterTwo[7]);
changeChapterTwo[7].before(changeChapterTwo[6]);
changeChapterTwo[8].before(changeChapterTwo[8]);
changeChapterTwo[7].before(changeChapterTwo[8]);
changeChapterTwo[7].before(changeChapterTwo[4]);
changeChapterTwo[7].before(changeChapterTwo[5]);

const changeChapterFive = document.querySelectorAll(".book:nth-child(5) ul li");
changeChapterFive[2].before(changeChapterFive[9]);
changeChapterFive[6].before(changeChapterFive[2]);
changeChapterFive[8].before(changeChapterFive[5]);

let createElement = document.createElement("li");
createElement.textContent = "Глава 8: За пределами ES6";

const bookSix = document.querySelector(".book:nth-child(6) ul");
bookSix.append(createElement);
const chapterEight = document.querySelectorAll(".book:nth-child(6) ul li");
chapterEight[9].before(chapterEight[10]);
