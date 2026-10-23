// steps
// 1. start with slide 0
// 2. get all the slides
// 3. get all dots
// 4. hide every slides
// 5. remove active states from all dots
// 6. show current slide
// 7. activate current dot
// 8. handle edge cases.


//logic steps
//step 1: initialize slide index
//0=>slide 1
//1=>slide 2
//2=>slide 3

let currentSlideIndex=0;  //let the current slide be 0

//function to show active slides

function showSlide(index){
    //collect all the slides
    //js store them like:
    //slide[0],slide[1],slide[2]
    const slides=document.getElementsByClassName("carousel-slide")

    //collect all dots
    const dots = document.getElementsByClassName("dot")

    //handle egde cases
    if(index>=slides.length){
        currentSlideIndex=0
    }
    else if(index < 0){
        currentSlideIndex=slides.length-1
    }
  
    //hide all before showing active one
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }
    //remove all active dots
    for(let i=0;i< dots.length;i++){
        dots[i].className=dots[i].className.replace("dot-active", "")
    }

    slides[currentSlideIndex].style.display="block";
    dots[currentSlideIndex].className += " dot-active" //dot dot-active:if we will not give space :  dotdot-active
}
     //function to change slide
     function changeSlide(n){
        showSlide((currentSlideIndex +=n))
     }

     //dot navigation
     function currentSlide(n){
        showSlide((currentSlideIndex = n))
     }
     //initially display setup
     showSlide(currentSlideIndex)
     









