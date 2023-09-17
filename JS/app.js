const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider__line');
const fontSize = document.querySelectorAll('.btn');
let count = 0;
let width;
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px';
}

function init (){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    console.log(width)
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item =>{
        item.style.width = width +'px';
        item.style.height = 'auto'; 
    })
    fontSize.forEach (item2 =>{
        item2.style.fontSize = (width/35)+'px';
    })
    rollSlider();

}
init();
window.addEventListener('resize',init);

document.querySelector('.btn__next').addEventListener('click', function () {
    count++;
    if(count>=images.length){
        count=0;
        document.querySelector('.slider__line').style.transition = 'all ease .1s';
    }
    if (count !=0) {   document.querySelector('.slider__line').style.transition = 'all ease 1s';}
    rollSlider();
});

document.querySelector('.btn__prev').addEventListener('click', function () {
    count--;
    if(count<0){
        count=images.length-1;
        document.querySelector('.slider__line').style.transition = 'all ease .1s';
    }
    if (count != images.length-1) {   document.querySelector('.slider__line').style.transition = 'all ease 1s';}
    rollSlider();
});

