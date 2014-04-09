var APP = APP || {};

if (!window.console) console = {log: function() {}};

APP.ns = function (ns_string) {
	var
		parts = ns_string.split('.'),
		parent = APP,
		i
	;
	//strip leading global
	if (parts[0] === "APP") {
		parts = parts.slice(1);
	}
	for (i = 0; i < parts.length; i += 1) {
		//create prop if it doesn't exist
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}


APP.ns('modules');
/**
 * site navigation (dropdowns)
 */
APP.modules.general = (function () {
	//navigation dropdowns
	$( '.site__nav > ul > li').mouseenter(function() {
		$(this).addClass('expand');
	});
	$( '.site__nav > ul > li').mouseleave(function() {
		$(this).removeClass('expand');
	});

	//mobile navigation
	$('.toggle--nav').click(function (e) {
		e.preventDefault();
		$('.show--sidebar').removeClass('show--sidebar');
		$('.site__nav').toggleClass('show--nav');
	});

	//mobile sidebar toggle
	$('.toggle--sidebar').click(function (e) {
		e.preventDefault();
		$('.site__sidebar').toggleClass('show--sidebar');
		$('.show--nav').removeClass('show--nav');
	});

	$('body').click(function (e) {
		$('.show--sidebar').removeClass('show--sidebar');
		$('.show--nav').removeClass('show--nav');
	});

	$('.site__sidebar, .site__nav, [class*="toggle"]').click(function (e) {
		e.stopPropagation();
		console.log("propagation stopped");
	});

})();

/**
 * isotope tiles
 */
APP.modules.isotope = (function () {

	if(!$('.tiles').length) {
		return;
	}
	var
		$container = $('.tiles')
	;

	$container.isotope({
		itemSelector: '.tiles__tile',
		masonry: {
			columnWidth: 275 + 25
		}
	});

	function init () {
		console.log('init of isotope!');
	}

	return {
		init: init
	};

})();

/**
 * site tabs (global sidebars)
 */
APP.modules.tab = (function () {

	if (!$('.tabs').length) {
		return;
	}

	$('.tabs__nav').on('click', 'a', function (e) {
		e.preventDefault();
		var
			$this = $(this),
			$data = $this.data()
		;

		if ($this.hasClass('active')) {
			return;
		}

		$this.closest('.tabs').find('.active').removeClass('active');

		$this.addClass('active');
		$this.closest('.tabs').find('.tabs__content [data-tabname=' + $data.tabname + ']').addClass('active');
	});

	function init () {
		console.log('init of tabs!');
	}

	return {
		init: init
	};

})();

/**
 * site slider
 */
APP.modules.slider = (function () {

	if (!$('[data-plugin="slider"]').length) {
		return;
	}

	//create pagination
	$('[data-plugin="slider"] .slider__slide').each(function() {
		var
			$this = $(this),
			$index = $this.index(),
			$classes = ''
		;
		if ($index === 0) {
			$classes = 'active';
		}
		$('.slider__pagination .inner').append('<a href="#" class="' + $classes + '">' + $index + '</a>');
	});

	//pagination click
	$('.slider__pagination .inner').on('click', 'a', function (e) {

		e.preventDefault();
		var
			$this = $(this),
			$index = $this.index();
			$container = $this.closest('[data-plugin="slider"]')
		;

		$('[data-plugin="slider"]').find('.active').removeClass('active');
		$container.find('.slider__slide:nth-child(' + ($index + 1) + ')').addClass('active');
		$this.addClass('active');

	});

	function galleryNavItem (sel, diff) {
		var that = this;

		$('.slider__pagination').on('click', sel, function (e) {
			e.preventDefault();

			var
				$this = $(this);
				$parent = $this.closest('[data-plugin="slider"]');
				$current = $parent.find('.slider__slide.active').index() + 1;
				$slides = $parent.find('.slider__slide').length;
			;

			that.processClick($parent, $current, diff);

		});

	}

	//process next prev click
	galleryNavItem.prototype.processClick = function ($parent, $current, diff) {
		$parent.find('.active').removeClass('active');
		if ($current === $slides && diff === 1)
		{
			$parent.find('.slider__slide:first-child').addClass('active');
			$parent.find('.slider__pagination .inner a:first-child').addClass('active');
		}
		else if ($current === 1 && diff === -1)
		{
			$parent.find('.slider__slide:last-child').addClass('active');
			$parent.find('.slider__pagination .inner a:last-child').addClass('active');
		}
		else
		{
			$parent.find('.slider__slide:nth-child(' + ($current + diff) + ')').addClass('active');
			$parent.find('.slider__pagination .inner a:nth-child(' + ($current + diff) + ')').addClass('active');
		}
	}

	//next prev click
	var
		next = new galleryNavItem('.next', 1);
		prev = new galleryNavItem('.prev', -1);
	;


	function init () {
		console.log('slider init!');
	}

	return {
		init: init
	};

})();


/**
 * cycle through APP properties with an init method (for no reason in this site)
 */
for (var key in APP.modules) {
  if (APP.modules[key] !== undefined) {
		if(APP.modules.hasOwnProperty(key) && APP.modules[key].hasOwnProperty('init')) {
			APP.modules[key].init();
		}
  }
}
