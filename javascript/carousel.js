var carouselImage = ["./images/europeanGreenWoodpecker3.jpg", "./images/fireCrest.jpg", "./images/europeanGreenWoodpecker.jpg"];
var imageCarousel = ["./images/europeanGreenWoodpecker4.jpg", "./images/crestedTit.jpg", "./images/europeanGreenWoodpecker2.jpg"];
var i = 2;

function nextCarousel() {
    if(i < carouselImage.length -1 ){
        i++;
    } else{
        i = 0;
    }

    // First picture
    var carousel = document.getElementById('pictureCarousel');
    carousel.src = carouselImage[i];
    // Second picture
    var carousel = document.getElementById('pictureCarousel2');
    carousel.src = imageCarousel[i];
}

function previousCarousel() {
    if(i > 0 ){
        i--
    } else{
        i = carouselImage.length -1;
    }
    
    var carousel = document.getElementById('pictureCarousel');
    carousel.src = carouselImage[i];

    var carousel = document.getElementById('pictureCarousel2');
    carousel.src = imageCarousel[i];
}