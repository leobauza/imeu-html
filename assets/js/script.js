var APP = APP || {};

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
APP.modules.navigation = (function(nav) {

	$( '.site__nav > ul > li').mouseenter(function() {
		$(this).addClass('expand');
	});
	$( '.site__nav > ul > li').mouseleave(function() {
		$(this).removeClass('expand');
	});

})();

/**
 * isotope tiles
 */
APP.modules.isotope = (function() {

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

	$('.tabs__nav').on('click', 'a', function(e) {
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

	$('.slider__pagination').on('click', 'a', function (e) {

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
