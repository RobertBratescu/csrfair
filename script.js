$(document).ready(function () {
	console.log('ok');
	$('.csr-contact-email').mouseover(function () {
		$(this).parent().parent().find('.csr-contact-image-wrapper').addClass('hovered');
	});
	$('.csr-contact-email').mouseout(function () {
		$(this).parent().parent().find('.csr-contact-image-wrapper').removeClass('hovered');
	});
	// SCROLL STUFF
	const sections = [...document.querySelectorAll('.scroll-item')];

	let options = {
		rootMargin: '0px',
		threshold: 0.25,
	};

	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			const { target } = entry;
			console.log(entry, target);

			if (entry.intersectionRatio >= 0.25) {
				target.classList.add('is-visible');
			} else {
				// target.classList.remove("is-visible");
			}
		});
	};

	const observer = new IntersectionObserver(callback, options);

	sections.forEach((section, index) => {
		observer.observe(section);
	});

	//CLICK LEARN MORE
	$('.csr-card-button').click(function () {
		$('.card').removeClass('open');
		$('.card').removeClass('lower');
		$(this).parent().parent().addClass('open');
		$('.card:not(.open)').addClass('lower');

		$('.csr-intro h2, .csr-intro p').hide();

		// $([document.documentElement, document.body]).animate(
		// 	{
		// 		scrollTop: $('.csr-intro').offset().top - 80,
		// 	},
		// 	800
		// );
	});
});
