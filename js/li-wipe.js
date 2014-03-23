$(function(){
	$("body").bind("click", ".listitem", function(e) {
		$(".listitem").click(function() {
			$(this).fadeOut(function(){$(this).remove();})
		});
	});
});
