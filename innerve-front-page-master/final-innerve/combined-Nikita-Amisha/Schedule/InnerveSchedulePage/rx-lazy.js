(function ($) {
	$.fn.rxLazy = function (settings) {

		if (!this[0]) {
			return this;
		}

		var items = $(this),
			mainClass = 'rx-lazy_item',
			hiddenClass = 'rx-lazy_hidden',
			imageBackGround = '#eff0f1';

		items
			.addClass(hiddenClass + ' ' + mainClass);

		if (!window.rxLazy_windowLoad) {
			$(window).on('load.rxLazy', init);
		} else {
			init();
		}

		function init() {
			$(window)
				.on('scroll.rxLazy', setItemVisibile)
				.trigger('scroll.rxLazy');
		}

		function setItemVisibile() {
			items = items.map(function (index, element) {
				var item = $(element);

				if (isInViewport(item)) {
					item
						.on('load', showAnimation)
						.attr('src', item.data('src'));
				} else {
					return element;
				}
			})
		}

		function isInViewport(htmlElement, indent = 1000) {
			var htmlElement = $(htmlElement);

			return (window.pageYOffset <= htmlElement.offset().top && htmlElement.offset().top <= window.pageYOffset + window.innerHeight + indent);
		};

		function showAnimation() {
			var item = $(this);
			item.removeClass(hiddenClass);
		}
	};

	$(window).on('load.rxLazy', function () {
		window.rxLazy_windowLoad = true;
	});

	//show the specific popup after click the its button
	$("button.Mshow1").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Mshow2").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Cshow1").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Cshow2").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Eshow1").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Eshow2").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Ishow1").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});

	$("button.Ishow2").on("click", function (e) {
		e.preventDefault();
		$("." + $(this).data("pop")).fadeIn(400);
	});


	//hide the shown popup after clicking at any part in the body of the popup div
	$(".popup").on("click", function () {
		$(this).fadeOut(400);
	});

	//hide the shown popup after clicking at the cross sign
	$(".close").on("click", function () {
		$(this).parentsUntil(".popup").parent().fadeOut(400);
	});

	//hide the shown popup after clicking the esc key
	$(document).on("keydown", function (e) {
		if (e.keyCode === 27) {
			e.preventDefault();
			$(".popup").fadeOut(400);
		}
	});

	//Stop Propagation for the alert div to prevent it from hiding the all container popup if you clicked at its body
	$(".popup .Malert1, .popup .Malert2, .popup .Calert1, .popup .Calert2, .popup .Ealert1, .popup .Ealert2, .popup .Ialert1, .popup .Ialert2").on("click", function (e) {
		e.stopPropagation();
	});

}(jQuery));
