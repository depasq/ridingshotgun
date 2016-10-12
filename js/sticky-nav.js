var  mn = $('nav');
    mns = "scrolled";
    hdr = 237;
    // $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});