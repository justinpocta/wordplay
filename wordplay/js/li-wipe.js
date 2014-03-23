$(function(){
	$(".listitem").bind("click", "", function(e) {
		$(".listitem").click(function() {
			$(this).fadeOut(function(){$(this).remove();})
		});
	});
});