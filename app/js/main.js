timerOff = false;

function timer(field, second, num) {
		var _Seconds = $(field).text(),
			int;
		_Seconds = 0;
		int = setInterval(function () { // запускаем интервал
			if (_Seconds < num) {
				if (_Seconds == num - 1) {
					
				}
				_Seconds++; // прибавляем 1
				$(field).text(_Seconds); // выводим получившееся значение в блок
			} else {
				clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
			}
		}, second);
}

$(function () {

	$('#fullpage').fullpage({
		//options here
		scrollHorizontally: false,
		licenseKey: '1FFDFC19-BDB4411F-916902A8-369CF227',
		scrollingSpeed: 600,
		menu: '#menu',
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourPage', 'fivePage', 'sixPage', 'sevenPage', 'eightPage', 'ninePage', 'tenPage', 'elevenPage'],
		// normalScrollElements: '.works',
		paddingTop: '10px',
		responsiveHeight: 567,
		afterRender: function () {
			var pluginContainer = this;
		},
		afterResponsive: function (isResponsive) {
			// alert("Is responsive: " + isResponsive);
			$('.wrap-burger').addClass("white");
			$('.header').addClass('white');
			$('.header-burger').addClass('white');
		},
		afterResize: function (width, height) {
			var pluginContainer = this;
			// alert( $(window).height() );
			// if((window).height() > )
		},
		onLeave: function (origin, destination, direction) {
			var leavingSection = this;
			if(destination.index == 3) {
				animation1.play();
			}
			//после покидания раздела 2
			if (destination.index == 1) {
				if(timerOff == false) {
					timer('.about-item__num.item1', 130, 23);
					timer('.about-item__num.item2', 253, 12);
					timer('.about-item__num.item3', 506, 6);
					timerOff = true;
				}
			}
		},
	});

	if ($(window).height() <= 567) {
		$('.section').addClass('padding-mobile');
		// $('.wrap-burger').addClass('active');
		// fullpage_api.destroy('all');
	}

	$('.header-burger').on('click', function () {
		$('.header-burger').toggleClass('active');
		$('.main__menu').toggleClass('active');
		$('.wrap-burger').toggleClass('active');
	});

	$('#menu a').on('click', function () {
		$('.header-burger').toggleClass('active');
		$('.main__menu').toggleClass('active');
		$('.wrap-burger').toggleClass('active');
	});



	// tabs('.advantages__inner', 'hover');

	$('.tabs .tab').hover(
		function () {
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			let id = $(this).attr('data-tab');
			$('.tab-content .tab').removeClass('active');
			$('.tab-content .tab[data-tab=' + id + ']').addClass('active').fadeIn();
			data.forEach(function(item, i, arr) {
				data[i].stop();
			});
			data[id - 1].play();
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

	const sliderWork = $('.works__item-wrap');

	sliderWork.slick({
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		infinite: false,
		prevArrow: '<button class="works-prev works-btn"></button>',
		nextArrow: '<button class="works-next works-btn"></button>',
		responsive: [{
				breakpoint: 840,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	sliderWork.on('wheel', (function (e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));

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


	if ($(window).width() <= 1000) {
		$('.services-tariff__wrap').slick({
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: false,
			variableWidth: true,
			centerMode: true,
		});
	}

	$('input[type=checkbox').styler();
	activeModal('.header__btn', '#modal');
	activeModal('.main__btn-get', '#modal');
	activeModal('.offer__btn', '#modal');
	activeModal('.btn-small', '#small');
	activeModal('.btn-medium', '#medium');
	activeModal('.btn-large', '#large');
	activeModal('.null-btn', '#modal');

	$('.list-next').on('click', function () {
		fullpage_api.moveSectionDown();
	});
	$('.list-prev').on('click', function () {
		fullpage_api.moveSectionUp();
	});

	// Валидация формы
	$('.footer__form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			phone: {
				required: true,
				// tel: true
			}
		},
		messages: {
			username: {
				required: "Укажите имя",
				minlength: "Не менее 2 символов",
				maxlength: 'Не более 30 символов'
			},
			phone: {
				required: "Введите номер телефона"
			}
		},
		submitHandler: function (form) {
			let f = $(form);
			$.ajax({
				type: "POST",
				url: "../mail2.php", //Change
				data: $(form).serialize()
			}).done(function () {
				setTimeout(function () {
					// Done Functions
					let thanks = '<div class="footer__form-thanks">Спасибо за заявку!</div>';
					f.find('button').detach();
					f.find('.footer__signature').detach();
					f.find('.footer-flex').append(thanks);
					f.find('input').attr('disabled', true	);
					f.trigger('reset');
				}, 200);
			});
		},

	});

	$('.modal form').each(function () {
		$(this).validate({
			// debug: true,
			rules: {
				username: {
					required: true,
					minlength: 2,
					maxlength: 30,
				},
				phone: {
					required: true,
					// tel: true
				},
				company: {
					minlength: 2,
					maxlength: 30,
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				username: {
					required: "Укажите имя",
					minlength: "Не менее 2 символов",
					maxlength: 'Не более 30 символов'
				},
				phone: {
					required: "Введите номер телефона"
				},
				company: {
					minlength: "Не менее 2 символов",
					maxlength: 'Не более 30 символов'
				},
				email: {
					required: 'Укажите E-mail',
					email: 'Введите правильный E-mail'
				}
			},
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "../mail2.php", //Change
					data: $(form).serialize()
				}).done(function () {
					setTimeout(function () {
						// Done Functions
						let title = '<div class="modal-message">Сообщение отправлено</div>';
						let suptitle = '<div class="modal-suptitle">Спасибо! Мы свяжемся с вами в ближайшее время</div>';
						let btn = '<button class="modal-ok">Ок</button>';
						result = title + suptitle + btn;
						let modal = $(form).parents('.modal');
						$(modal).children('.modal__inner').empty();
						$(modal).children('.modal__inner').append(result);
						$(modal).find('.modal-ok').on('click', function () {
							$(modal).removeClass('active');
							$('.overlay-body').removeClass('active');
						});
						// form.trigger("reset");
					}, 200);
				});
			},
		});
	});

	// Маска для телефона
	$(".phone").mask('+7 (999) 999 999');

	$('.modal__agree a').on('click', function(e) {
		e.preventDefault();
		$('.protect').addClass('active');
	});
	$('.protect__close').on('click', function() {
		$('.protect').removeClass('active');
	});

	// var animData = {
	// 			wrapper: document.getElementById('anim1'),
	// 			animType: 'svg',
	// 			loop: false,
	// 			prerender: false,
	// 			autoplay: true,
	// 			path: 'Exp.json'
	// 	};
	// 	var anim = bodymovin.loadAnimation(animData);
	
	var animation1 = bodymovin.loadAnimation({
		container: document.getElementById('anim1'), // Required
		path: 'js/Exp.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var animation2 = bodymovin.loadAnimation({
		container: document.getElementById('anim2'), // Required
		path: 'js/Interconnection.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var animation3 = bodymovin.loadAnimation({
		container: document.getElementById('anim3'), // Required
		path: 'js/Relevance.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var animation4 = bodymovin.loadAnimation({
		container: document.getElementById('anim4'), // Required
		path: 'js/Responsiveness.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var animation5 = bodymovin.loadAnimation({
		container: document.getElementById('anim5'), // Required
		path: 'js/Time.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});

	var animation6 = bodymovin.loadAnimation({
		container: document.getElementById('anim6'), // Required
		path: 'js/Ceses.json', // Required
		renderer: 'svg', // Required
		loop: false, // Optional
		autoplay: false, // Optional
	});
	var data = Array(animation1, animation2, animation3, animation4, animation5, animation6);
	// console.log(data[0]);

});

function activeModal(target, modalWindow) {
	$(target).on('click', function () {
		$(modalWindow).addClass("active");
		$('.overlay-body').addClass('active');
	});
	$(".modal__close").on('click', function () {
		$(modalWindow).removeClass("active");
		$('.overlay-body').removeClass('active');
	});
}