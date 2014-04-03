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


/**
 * site navigation (dropdowns)
 */
APP.siteNavigation = (function(nav) {

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
APP.isotope = (function() {

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
APP.tabs = (function () {

	if (!$('.tabs').length) {
		return;
	}

	$('.tabs__nav').on('click', 'a', function(e) {
		e.preventDefault();
		var
			$this = $(this);
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


for (var key in APP) {
  if (APP[key] !== undefined) {
		if(APP.hasOwnProperty(key) && APP[key].hasOwnProperty('init')) {
			APP[key].init();
		}
  }
}
