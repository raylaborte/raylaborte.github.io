$(document).ready(function () {


	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function () {
		$('.main-navigation').toggle('slow');

		if ($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});

	/* Link to about me section */
	document.getElementsByClassName("brand-button")[0].addEventListener("click", function () {
		window.scrollTo(0, document.querySelector(".fh5co-about-me").offsetTop);
	});

	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

});



var counta = 0;

$(window).scroll(function (e) {

	// Scroll Down to About Me
	document.querySelector(".brand-button").onclick = function () {
		scrollIntoView();
	}

	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if (statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

					{
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
			});
			counta = 1;
		}
	}

});


// Redirect img-1 to another window
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector('#vid1').onclick = function () {
//         window.open('https://www.youtube.com/watch?v=2lY-wU0PXeA', '_blank')
//     }
// });

// // Redirect img-2 to another window
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector('#vid2').onclick = function () {
//         window.open('https://www.youtube.com/watch?v=MyTMVMGgwNg&t=146s', '_blank')
//     }
// });

// // Redirect img-3 to another window
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector('#vid3').onclick = function () {
//         window.open('https://www.youtube.com/watch?v=4vqOqwOUIpY', '_blank')
//     }
// });

// // Redirect img-4 to another window
// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector('#vid4').onclick = function () {
//         window.open('https://www.youtube.com/watch?v=yruezOI0PGc&t=46s', '_blank')
//     }
// });