var H5ComponentBase = function(name, cfg) {
	var cfg = cfg || {};

	var id = ('h5_c_' + Math.random()).replace('.', '_');
	var cls = ' h5_component_' + cfg.type;
	var component = $('<div class="h5_component ' + cls + ' h5_component_name_' + name + '" id="' + id + '">');

	cfg.text && component.text(cfg.text);
    cfg.full && component.css('width', '100%') && component.css('height', '100%');
	cfg.width && component.css('width', cfg.width/2);
	cfg.height && component.css('height', cfg.height/2);
	
	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');

    if( typeof cfg.onclick === 'function' ){
        component.on('click',cfg.onclick);
    }

	if(cfg.center === true) {
		component.css({
			marginLeft: (cfg.width/4 * -1) + 'px',
			left: '50%'
		})
	}

	component.on('onLoad', function(){
		component.addClass(cls + '_load').removeClass(cls + '_leave');
		cfg.animateIn && component.animate(cfg.animateIn);
		return false;
	});
	component.on('onLeave', function(){
		component.addClass(cls + '_leave').removeClass(cls + '_load');
		cfg.animateOut && component.animate(cfg.animateOut);
		return false;
	});

	return component;
}