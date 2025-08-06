//  July 25, 2025


const imgSlides = document.querySelector(".img-slides-crop");
let indexChildren = 0;

Array.from(imgSlides.children).forEach((element, index, array) => {
    array[index].style.order = index + 1;
});

setInterval(() => {
    Array.from(imgSlides.children).forEach((element, index, array) => {
        array[index].classList.add("animation-right");
        setTimeout(() => {
            array[index].style.order = Number(element.style.order) + 1;
            if(array[index].style.order > imgSlides.children.length){
                array[index].style.order = 1;
            };
        }, 700); 
    }); 
}, 7000);

function goButton(theButton){
    switch(theButton){
        case "next":
            Array.from(imgSlides.children).forEach((element, index, array) => {
                array[index].classList.add("animation-right");
                setTimeout(() => {
                    array[index].style.order = Number(element.style.order) + 1;
                    if(array[index].style.order > imgSlides.children.length){
                        array[index].style.order = 1;
                    };
                }, 700); 
            });
            break;
        case "prev":
            Array.from(imgSlides.children).forEach((element, index, array) => {
                array[index].classList.add("animation-left");
                setTimeout(() => {
                    array[index].style.order = Number(element.style.order) - 1;
                    if(array[index].style.order <= 0){
                        array[index].style.order = imgSlides.children.length;
                    };
                }, 700);
            });
            break;
        }
}

imgSlides.children[0].addEventListener("animationend", () => {
    Array.from(imgSlides.children).forEach((element) => {
        element.classList.remove("animation-left");
        element.classList.remove("animation-right");
    });
});


// -----------------------------------------------------------------------------------------------------------------------


// const imgSlides = document.querySelector(".img-slides-crop");
// let indexChildren = 0;

// imgSlides.children[0].classList.add("display-slide");
// setInterval(() => {
//     if(indexChildren + 1 == imgSlides.children.length){
//         indexChildren = 0;
//     }else{
//         indexChildren++;
//     }
//     Array.from(imgSlides.children).forEach(element => element.classList.remove("display-slide"));
//     console.log(1, imgSlides.children[indexChildren]);   
//     imgSlides.children[indexChildren].classList.add("display-slide");
//     console.log(2, imgSlides.children[indexChildren]);    
// }, 10000);

// function goButton(theButton){
//     switch(theButton){
//         case "next":
//             if(indexChildren + 1 == imgSlides.children.length){
//                 indexChildren = 0;
//             }else{
//                 indexChildren++;
//             }
//             break;
//         case "prev":
//             if(indexChildren == 0){
//                 indexChildren = imgSlides.children.length - 1;
//             }else{
//                 indexChildren--;
//             }
//             break;
//         }
//     Array.from(imgSlides.children).forEach(element => element.classList.remove("display-slide"));
//     imgSlides.children[indexChildren].classList.add("display-slide");
// }




// -----------------------------------------------------------------------------------------------------------------------



const imageVideo1Slides = document.getElementById("image-video-1-slides");
let currentChildrenVideo1 = 0;

imageVideo1Slides.children[currentChildrenVideo1].classList.add("image-video-1-slides-display");
function goButtonVideo(element){
    if(element == "next"){
        currentChildrenVideo1++;
    }else{
        currentChildrenVideo1--;
    }

    if(currentChildrenVideo1 == imageVideo1Slides.children.length - 2){
        currentChildrenVideo1 = 0;
    }else if(currentChildrenVideo1 < 0){
        currentChildrenVideo1 = imageVideo1Slides.children.length - 3;
    }
    Array.from(imageVideo1Slides.children).forEach((element, index, array) => {
        if(index < imageVideo1Slides.children.length - 2){
            array[index].classList.remove("image-video-1-slides-display");
        }
    })
    imageVideo1Slides.children[currentChildrenVideo1].classList.add("image-video-1-slides-display");
}


