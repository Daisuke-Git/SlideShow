
(function(){

	var prevBtn = document.getElementsByClassName('prevBtn')[0];
	var nextBtn = document.getElementsByClassName('nextBtn')[0];

	prevBtn.addEventListener('click', function(){

		SlideShow.prevSlide();

	});
	nextBtn.addEventListener('click',	function(){


	 	SlideShow.nextSlide();

	});

})();



	var SlideShow = (function(){

			var numSlides = 4,
					currentSlideIndex = 0,
					running = false,
					slideImages = document.getElementsByClassName('carousel__img'),
					bullets = document.getElementsByClassName('bullet'),
					currentSlide,
					nextSlide,
					direction,
					nextSlideIndex;

			function slideMove(newDirection){

				if(running){

					return false;

				}

				running = true;

				direction = newDirection;
				slideTarget(newDirection);

				bullets[currentSlideIndex].classList.add('bullet--active');
				bullets[nextSlideIndex].classList.remove('bullet--active');

				nextSlide.style.left = direction === 'prev' ? '-100%' : '100%';
				currentSlide.style.left = '0%';


				nextSlide.classList.remove('carousel__img--hidden');

				animate(nextSlide);
				animate(currentSlide);
			}

			function slideTarget(){

				if(direction === 'prev'){

					nextSlideIndex = slideImages[currentSlideIndex - 1] === undefined ? (numSlides - 1) : currentSlideIndex - 1;

				}else{

					nextSlideIndex = slideImages[currentSlideIndex + 1] === undefined ?  0 : currentSlideIndex + 1;

				}

				currentSlide = slideImages[currentSlideIndex];
				nextSlide = slideImages[nextSlideIndex];


			}

			function animate(slideImages){

				var i = 0;

				var animateInt = setInterval(function(){

						slideImages.style.left = direction === 'prev' ? (parseInt(slideImages.style.left) + 2) + '%': (parseInt(slideImages.style.left) - 2) + '%';

						i++;
						if(i >= 50){

							stopAnimate();

						}

					},7);

				function stopAnimate(){

					currentSlide.classList.add('carousel__img--hidden');
					nextSlide.style.left = "0%";
					clearInterval(animateInt);
					currentSlideIndex = nextSlideIndex;
					running = false;

				}

			}

			function setContainerSize(){

				var container = document.getElementsByClassName('carousel')[0];

			}

			return{

				nextSlide: function(){

					slideMove('next');
				},

				prevSlide: function(){

					slideMove('prev');

				}
			};
	})();
