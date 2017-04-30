


console.log('hi');
// add event listeners
(function () {
  var prevArrow = document.getElementsByClassName('prevBtn')[0];
  var nextArrow = document.getElementsByClassName('nextBtn')[0];

  prevArrow.addEventListener('click', CHESLIDESHOW.prevSlide);
  nextArrow.addEventListener('click', CHESLIDESHOW.nextSlide);


})();
  console.log(prevArrow);

var SLIDESHOW = (function(){

    var numSlides = 4,
        currentSlideIndex = 0,
        running = false,
        slideSelector = document.getElementsByClassName('carousel__images')[0],
        bulletSelector = document.getElementsByClassName('bullet')[0],
        currentSlide,
        nextSlide,
        direction;
        console.log(numSlides);
        console.log(currentSlideIndex);
        console.log(running);
        console.log(slideSelector);
        console.log(bulletSelector);
        console.log(currentSlide);
        console.log(nextSlide);
        console.log(direction);





    function animateSlides(newDirect){

      if(running){

        return false;

      }

      running = true;

      //define target slides factorling in passed-in 'direction'

      direction = newDirect; // assign to direction with 'prev' or 'next'
      setTargets(newDirect); // assign to setTargets function width 'prev' or 'next'

      //set bullets to next state
      bulletSelector[currentSlideIndex].classList.add('bullet--active');
      bulletSelector[nextSlideIndex].classList.remove('bullet--active');

      //set staging position
      nextSlide.style.left = direction === 'prev' ? '-100%' : '100%';
      currentSlide.style.left = '0%';

      nextSlide.classList.remove = 'carousel__img--hidden';

      //begins both animations

      animate(nextSlide);
      animate(currentSlide);
    }

    // defines target slides according to direction of animation
    function setTargets(){

      //get the index of the next slide. hard reset to 0 or numSlides(-1) so slideshow can loop back

      if(direction === "prev"){

         nextSlideIndex = slideSelector[currentSlideIndex -1] === undefined ? (numSlides - 1): currentSlideIndex - 1;


      }else{

         nextSlideIndex = slideSelector[currentSlideIndex + 1] === undefined ? 0 : cuurentSlideIndex + 1;

      }

      currentSlide = slideSelector[currentSlideIndex];
      nextSlide = slideSelector[nextSlideIndex];

    }


    function animte(slideSelector){

      var i = 0;
      //animation Inteval
      var animationInt  = setInterval(function(){
        //animate one tick according to direction
        slideSelector.style.left = direction === 'prev' ? (parseInt(slideSelector.style.left) + 2) + "%"
        : (parseInt(slideSelector.style.left) - 2) + "%";

        i++;
        if(i >= 50){
          stopAnimation();
        }

      }, 7);

      //clears interval, returns all elements to a nominal state

      function stopAnimation(){

        currentSlide.classList.add('carousel__img--hidden');
        nextSlide.style.left = '0%';
        clearInterval(animationInt);
        currentSlideIndex = nextSlideIndex;
        running = false;
      }
    }


    //Responsive practice
    //sets the container height to the height of slides. height not defined in css.

     window.onload = setContainerSize;
     window.onresize = setContainerSize;

    function setContainerSize(){

      var container = document.getElementsByClassName('carousel')[0];
      container.style.height = getComputedStyle(slideSelector[currentSlideIndex]).height;

    }

    //expose the private animate function & call with appropriate argument

    return {

      nextSlide:function(){

        animateSlides('next');

      },

      prevSlide:function(){

        animateSlides('prev');

      }
    };

})();
