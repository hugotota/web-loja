$(document).ready(function() {
	
	var position = 0;
	var slideWidth = 725;
	var slides = $('.slide');
	var pages = slides.lenght;
	
	$('#slidesContainer').css('overflow', 'hidden');
	
	slides
		.wrapAll('<div id="slideInner"></div>')
		.css({
			'float':'left',
			'width':slideWidth
		});
	
	$('#slideInner').css('width', slideWidth * pages);
	
	$('#slideshow')
		.prepend('<span class="control" id="leftControl">left</span>')
		.append('<span class="control" id="rightControl">right</span>');
	
	manageControls(position);
	
	$('.control')
		.bind('click', function() {
			position = ($(this).attr('id')=='rightControl') ? position + 1 : position - 1;

	
			manageControls(position);
			
			$('#slideInner').animate({
				'marginLeft':slideWidth * (-position)
			});
	
		});	
	function manageControls(position) {
		if (position == 0) {
			$('#leftControl').hide();
		} else {
			$('#leftControl').show();
		}
		
		if (position == pages -1) {
			$('#rightControl').hide();
		} else {
			$('#rightControl').show();
		}
	}
});