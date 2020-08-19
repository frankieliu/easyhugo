jQuery(document).ready(function($) {
        $('.faq-expand').click(function() {
                        $('.faq dt').addClass('active');
                        $('.faq dd').slideDown().addClass('active');
	});
        $('.faq-collapse').click(function() {
                        $('.faq dt').removeClass('active');
                        $('.faq dd').slideUp().removeClass('active');
	});
	$('.faq dt').each(function() {
                $(this).attr('tabindex', 0);
                var tis = $(this), state = false, answer = tis.next('dd').slideUp();
                tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
                tis.on('keydown', function (e) {
                        if (e.which == 13) {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
                        }
		}); 
	});
});;
