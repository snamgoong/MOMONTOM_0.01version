const bgBody = document.querySelector("body");

const ImgNumber = 5;

function paintImg(image_NB){
    const image = new Image();
    image.src = `images/${image_NB+1}.jpg`;
    image.classList.add("bgImage");
    bgBody.prepend(image);
} 

function genRandom(){
    const RdNumber = Math.floor(Math.random()*ImgNumber);
    return RdNumber; 
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber); 
}
init();