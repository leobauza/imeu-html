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


//site navigation
APP.siteNavigation = (function(nav) {
	
	$( '.site__nav > ul > li').mouseenter(function() {
		$(this).addClass('expand');
	});
	$( '.site__nav > ul > li').mouseleave(function() {
		$(this).removeClass('expand');
	});
	
	return {};
	
})();

//isotope tiles
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

})();
