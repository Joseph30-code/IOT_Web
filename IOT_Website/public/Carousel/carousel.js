document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "https://i.postimg.cc/5ydrd41G/technology-4816658-1280.jpg",
  "https://i.postimg.cc/1zX2D7JW/tech-3041437-1280.jpg",
  "https://i.postimg.cc/26BtKbph/photography-1850469-1280.jpg",
  "https://i.postimg.cc/XYQtG6cG/eye-4063134-1280.jpg",
  "https://i.postimg.cc/q7FYwcFp/communication-4871245-1280.jpg",
  "https://i.postimg.cc/gjVTGC20/business-5475661-1280.jpg",
  "https://i.postimg.cc/KvjPG7W7/technology-3435575-1280.jpg",
  "https://i.postimg.cc/bJLn8dHF/smart-4168483-1280.jpg",
  "https://i.postimg.cc/VNqMGKSw/fiber-4814456-1280.jpg",
  "https://i.postimg.cc/tCchYZ0K/electrician-1288717-1280.jpg",
  "https://i.postimg.cc/LXmPrjf1/computer-6125821-1280.jpg",
  "https://i.postimg.cc/JzBjJrMG/computer-4795762-1280.jpg",
  "https://i.postimg.cc/zfZKFsGp/circuit-board-973311-1920.jpg",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();



