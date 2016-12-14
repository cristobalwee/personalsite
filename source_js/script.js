var isMobile = false;
if (screen.width <= 640) {
  isMobile = true;
};

$( window ).resize(function() {
  if (screen.width <= 640) {
    isMobile = true;
  }
  else {
    isMobile = false;
  };
});

var position = 0;
var views = ['#/', '#/about', '#/whosin', '#/foodful', '#/illinisporcle', '#/contact'];
var scrollflag = true;

if (!isMobile) {

};
