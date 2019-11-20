$(function () {

	$('#fullpage').fullpage({
		//options here
		// autoScrolling: true,
		scrollHorizontally: true,
		licenseKey: '1FFDFC19-BDB4411F-916902A8-369CF227',
		scrollingSpeed: 600,
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourPage', 'fivePage', 'sixPage'],
		responsiveHeight: 568,
	});

	$('.header-burger').on('click', function () {
		$('.header-burger').toggleClass('active');
		$('.main__menu').toggleClass('active');
	});

	$('#menu a').on('click', function () {
		$('.header-burger').toggleClass('active');
		$('.main__menu').toggleClass('active');
	});

	function timer(field, second, num) {
		var _Seconds = $(field).text(),
			int;
		_Seconds = 0;
		int = setInterval(function () { // запускаем интервал
			if (_Seconds < num) {
				_Seconds++; // вычитаем 1
				$(field).text(_Seconds); // выводим получившееся значение в блок
			} else {
				clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
			}
		}, second);
	}


	timer('.about-item__num.item1', 300, 23);
	timer('.about-item__num.item2', 575, 12);
	timer('.about-item__num.item3', 1150, 6);

	// tabs('.advantages__inner', 'hover');

	$('.tabs .tab').hover(
		function () {
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			let id = $(this).attr('data-tab');
			$('.tab-content .tab').removeClass('active');
			$('.tab-content .tab[data-tab=' + id + ']').addClass('active').fadeIn();
		},
		function () {

		});

	var rtime;
	var timeout = false;
	var delta = 200;
	$(window).resize(function () {
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout(resizeend, delta);
		}
	});

	function resizeend() {
		if (new Date() - rtime < delta) {
			setTimeout(resizeend, delta);
		} else {
			if ($(window).width() <= 1100) {
				$('.site-item .close').on('click', function () {
					$('.site-item').removeClass('active');
					$('.site__list li').removeClass('active');
					$('.site-item__wrap').removeClass('active');
				});

				$('.site__list li').on('click', function () {
					$('.site-item').removeClass('active');
					$('.site__list li').removeClass('active');
					$('.site-item__wrap').addClass('active');
					let id = $(this).attr('data-id');
					$('.site-item[data-id=' + id + ']').addClass('active');
					$(this).addClass('active');
				});
			} else {
				$('.site__list li').hover(
					function () {
						let id = $(this).attr('data-id');
						$('.site-item[data-id=' + id + ']').addClass('active');
						$(this).addClass('active');
					},
					function () {
						$('.site-item').removeClass('active');
						$('.site__list li').removeClass('active');
					});
			}
		}
	}
	// if ($(window).width() <= 1100) {
	// 	$('.site-item__wrap').slick({
	// 		variableWidth: true,
	// 		arrows: false
	// 	});
	// }

	if ($(window).width() <= 1100) {
		$('.site-item .close').on('click', function () {
			$('.site-item').removeClass('active');
			$('.site__list li').removeClass('active');
			$('.site-item__wrap').removeClass('active');
		});

		$('.site__list li').on('click', function () {
			$('.site-item').removeClass('active');
			$('.site__list li').removeClass('active');
			$('.site-item__wrap').addClass('active');
			let id = $(this).attr('data-id');
			$('.site-item[data-id=' + id + ']').addClass('active');
			$(this).addClass('active');
		});
	} else {
		$('.site__list li').hover(
			function () {
				let id = $(this).attr('data-id');
				$('.site-item[data-id=' + id + ']').addClass('active');
				$(this).addClass('active');
			},
			function () {
				$('.site-item').removeClass('active');
				$('.site__list li').removeClass('active');
			});
	}

	$('.works__item-wrap').slick({
		slidesToShow: 3,
		variableWidth: true,
		arrows: false,
		// responsive
	});
	// $('.customers__slider').slick({
	// 	infinite: false,
	// 	arrows: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	prevArrow: '<button class="customers-prev customers-btn"></button>',
	// 	nextArrow: '<button class="customers-next customers-btn"></button>',
	// 	asNavFor: '.rate-slider',
	// });
	// $('.rate-slider').slick({
	// 	asNavFor: '.customers__slider',
	// 	slidesToShow: 3,
	// 	infinite: true,
	// 	variableWidth: true,
	// 	focusOnSelect: true // указываем что бы слайделось по клику
	// });

	$('.customers__slider').on('init', function (e, slick) {
		$('.rate-slider > span').eq(slick.currentSlide).addClass('active');
	}).slick({
		infinite: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="customers-prev customers-btn"></button>',
		nextArrow: '<button class="customers-next customers-btn"></button>',
	}).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		$('.rate-slider > span').removeClass('active').eq(nextSlide).addClass('active');
	});

	$('.rate-slider').on('click', 'span', function () {
		$('.customers__slider').slick('slickGoTo', $(this).index());
	});
});