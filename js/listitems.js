// sendWord

// should this even run since LIs come via array?
  function sendWord() {

    if ($('#AddAWord').val() == null) {

      return false

    } else {

    var sWord = $('#AddAWord').val();

    // apply to show now, but array is mostly now for HTML5 storage need
    $('#WordsLeft').append('<li class=\'listitem\'>'+sWord+'</li>');
    $('#WordsRight').prepend('<li class=\'listitem\'>'+sWord+'</li>');

    // add to array
    nameitems.push(sWord);
  };
}

// list items via Array
  $(window).load(function(){
    var nameitems = new Array();
    while (nameitems.length) {
        var ul = $('<ul style=\'padding-top:300px\' id=WordsLeft data-options=disable-for-touch:true>', {
        'class': 'words'
        });
            if (nameitems.length) {
              var li = $('<li class=listitem>').append(nameitems.shift());
              // var li2 = li.clone();
              ul.append(li);
              // ul.append(li2);
            };
        $('#WordsLeft').append(li);
        // $('#WordsRight').prepend(li2);
    };
  });

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
// removeA(ARRAY, 'STRING');


// remove + fade
$(function(){
	$("body").bind("click", ".listitem", function(e) {
		$(".listitem").click(function() {

      var itemtext = $(this).text();

      // $(':contains(itemtext)').each();

      // remove from other side
      // $('#WordsLeft .listitem').find("value='"+itemtext+"'").fadeOut(function(){$(this).remove();});
      // $('#WordsRight .listitem').find("value='"+itemtext+"'").fadeOut(function(){$(this).remove();});

      // remove from array
      removeA(nameitems, $(this).text());

      // $(this).fadeOut(function(){$(this).remove()});
      $('li:contains(itemtext)').fadeOut(function(){$('li:contains(itemtext)').remove()});
      // $(itemmatch).fadeOut(function(){$(':contains(itemtext)').each()});
      // $(itemmatch).remove();});
    });
	});
});
