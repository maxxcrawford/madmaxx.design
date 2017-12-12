var site = site || {};

(function($){

	$(function(){
		site.displayWindowSize();

		/* POLYFILL: <input> placeholder shim
		--------------------------------------------------------------------------- */
		if(!Modernizr.input.placeholder){
			$('input').each(function(){
				if($(this).val() === '' && $(this).attr('placeholder') !== ''){
					$(this).val(
						$(this).attr('placeholder')
					).focus(function(){
						if($(this).val() === $(this).attr('placeholder')){ $(this).val(''); }
					}).blur(function(){
						if($(this).val() === ''){  $(this).val($(this).attr('placeholder')); }
					});
				}
			});
		}

	});
})(jQuery);