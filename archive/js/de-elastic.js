  // no elastic bounce on ipad
    document.body.addEventListener('touchmove', function(event) {
      console.log(event.source);
      if (event.source == document.body)
        event.preventDefault();
    }, false);

    window.onresize = function() {
      $(document.body).width(window.innerWidth).height(window.innerHeight);
    }

     $(function() {
        window.onresize();
     });

