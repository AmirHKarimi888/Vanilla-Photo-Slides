import './style.css'

const photos = [
  { id: 1, src: "https://wallpapershome.com/images/pages/pic_h/25056.jpeg" },
  { id: 2, src: "https://wallpapershome.com/images/pages/pic_h/25021.jpeg" },
  { id: 3, src: "https://wallpapershome.com/images/pages/pic_h/19538.jpg" },
  { id: 4, src: "https://wallpapershome.com/images/pages/pic_h/25057.jpeg" },
  { id: 5, src: "https://wallpapershome.com/images/pages/pic_h/13445.jpg" },
  { id: 6, src: "https://wallpapershome.com/images/pages/pic_h/169.jpg" }
]

let num = 0;

setInterval(() => {
  num++;
  img.src = photos[num].src;

  if(num == photos.length - 1) {
    num = -1;
  } else if(num < -1) {
    num = photos.length - 1;
  }
}, 2000)

const moveForward = () => {
  num++;
  img.src = photos[num].src;

  if(num == photos.length - 1) {
    num = -1;
  }
}

const moveBack = () => {
  num--;
  img.src = photos[num].src;

  if(num == -1) {
    num = photos.length - 2;
  }

}

const app = document.querySelector("#app");

const main = document.createElement("div");
main.className = "main";

const backArrow = document.createElement("button");
backArrow.className = "backArrow";
const backArrowIcon = document.createElement("i");
backArrowIcon.className = "fa fa-chevron-left";
backArrow.append(backArrowIcon);
backArrow.addEventListener("click", moveBack);

const img = document.createElement("img");
img.className = "img";
img.src = photos[0].src;

const forwardArrow = document.createElement("button");
forwardArrow.className = "forwardArrow";
const forwardArrowIcon = document.createElement("i");
forwardArrowIcon.className = "fa fa-chevron-right";
forwardArrow.append(forwardArrowIcon);
forwardArrow.addEventListener("click", moveForward);

main.append(backArrow);
main.append(img);
main.append(forwardArrow);

app.append(main);