(function(){

	var prevBtn = document.getElementsByClassName('prevBtn')[0];
	var nextBtn = document.getElementsByClassName('nextBtn')[0];

	prevBtn.addEventListener('click', function(){

		console.log('prev Clicked!');

	});

	nextBtn.addEventListener('click', function(){

		console.log('next Clicked!');

	});


})();


var SlideShow =  function(){

		var numSlide = 4,
				currentSlideIndex = 0,
				currentSlide,
				nextSlideIndex,
				nextSlide,
				slideImages = document.getElementsByClassName('carousel__img'),
				bullets = document.getElementsByClassName('bullet'),
				direction,
				running = false;
				slideTarget();

		function slideTarget(){

			if(direction === 'prev'){

				nextSlideIndex = slideImages[currentSlideIndex - 1] === undefined ? numSlide - 1 : currentSlideIndex - 1;

			}else{

				nextSlideIndex = slideImages[currentSlideIndex + 1] === undefined ?  0 : currentSlideIndex + 1;

			}
			console.log(nextSlideIndex);
			nextSlide = slideImages[nextSlideIndex];
			currentSlide = slideImages[currentSlideIndex];
			console.log(nextSlide);
			console.log(currentSlide);
		};
		function slideAnimation(){

			nextSlide.style.left = direction === 'prev' ? '-100%' : '100%';
			currentSlide.style.left = '0%';

		}

};


SlideShow();
