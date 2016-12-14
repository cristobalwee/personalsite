app.controller('LandingController', ['$scope', '$http', function($scope, $http) {
  $(function(){
    $(".changetext").typed({
      strings: ["Student at UIUC", "Frontend web developer", "UI/UX designer", "Private pilot", "Trivia enthusiast"],
      typeSpeed: 60,
      backSpeed: 25,
      loop: true,
      startDelay: 1000,
      showCursor: false
    });
  });

  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#landing").bind("mousewheel", function(e) {
      var $indicator = $(".currentposition");
      if (scrollflag) {
        if(e.originalEvent.wheelDelta /120 < 0) {
          var $mouse = $('#scrollanim');
          TweenLite.to($mouse, 0.4, {autoAlpha: 0, delay: 0});
          var $h1 = $("h1");
          TweenLite.to($h1, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn});
          var $first = $(".first");
          TweenLite.to($first, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.15});
          var $second = $(".second");
          TweenLite.to($second, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.3});
          setTimeout(function() {
            window.location.href = "#/about";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#landing").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);

app.controller('AboutController', ['$scope', '$http', function($scope, $http) {
  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#about").bind("mousewheel", function(e) {
      if (scrollflag) {
        if(e.originalEvent.wheelDelta /120 < 0) {
          var $first = $(".first");
          TweenLite.to($first, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn});
          var $second = $(".second");
          TweenLite.to($second, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.15});
          var $third = $(".third");
          TweenLite.to($third, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.3});
          var $fourth = $(".fourth");
          TweenLite.to($fourth, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.45});
          setTimeout(function() {
            window.location.href = "#/whosin";
          }, 950);
        };
        if (e.originalEvent.wheelDelta /120 > 0) {
          var $fourth = $(".fourth");
          TweenLite.to($fourth, 0.5, {bottom: "-750px", autoAlpha: 0, ease: Power3.easeIn});
          var $third = $(".third");
          TweenLite.to($third, 0.5, {bottom: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.15});
          var $second = $(".second");
          TweenLite.to($second, 0.5, {bottom: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.3});
          var $first = $(".first");
          TweenLite.to($first, 0.5, {bottom: "-750px", autoAlpha: 0, ease: Power3.easeIn, delay: 0.45});
          var $header = $(".title-bar");
          TweenLite.to($header, 0.5, {top: "-750px", autoAlpha: 0, ease: Power3.easeIn});
          var $indicator = $(".indicator");
          TweenLite.to($indicator, 0.5, {right: "-750px", autoAlpha: 0, ease: Power3.easeIn});
          setTimeout(function() {
            window.location.href = "#/";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#about").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);

app.controller('WhosinController', ['$scope', '$http', function($scope, $http) {
  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#whosin").bind("mousewheel", function(e) {
      if (scrollflag) {
        if(e.originalEvent.wheelDelta /120 < 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/foodful";
          }, 950);
        };
        if (e.originalEvent.wheelDelta /120 > 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/about";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#whosin").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);

app.controller('FoodfulController', ['$scope', '$http', function($scope, $http) {
  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#foodful").bind("mousewheel", function(e) {
      if (scrollflag) {
        if(e.originalEvent.wheelDelta /120 < 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/illinisporcle";
          }, 950);
        };
        if (e.originalEvent.wheelDelta /120 > 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/whosin";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#foodful").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);

app.controller('SporcleController', ['$scope', '$http', function($scope, $http) {
  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#illinisporcle").bind("mousewheel", function(e) {
      if (scrollflag) {
        if(e.originalEvent.wheelDelta /120 < 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          var $indicator = $(".worksposition");

          TweenMax.to($indicator, 0.25, {autoAlpha: 0, height: "0rem", delay: 0.5});
          setTimeout(function() {
            window.location.href = "#/contact";
          }, 950);
        };
        if (e.originalEvent.wheelDelta /120 > 0) {
          var $currline = $(".currentline");
          TweenMax.to($currline, 0.4, {width: "0.9rem", delay: 0.25});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $box = $(".work");
          TweenLite.to($box, 0.1, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/foodful";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#illinisporcle").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);

app.controller('ContactController', ['$scope', '$http', function($scope, $http) {
  $scope.toggleMenu = function() {
    $(".menu").css("opacity", "1");
    $(".menu").css("z-index", "4");
  };

  $scope.closeMenu = function() {
    $(".menu").css("z-index", "-1");
    $(".menu").css("opacity", "0");
  };

  if (!isMobile) {
    $("#contact").bind("mousewheel", function(e) {
      if (scrollflag) {
        if (e.originalEvent.wheelDelta /120 > 0) {
          var $footer = $(".footer");
          TweenLite.to($footer, 0.75, {bottom: "-100px"});
          var $animout = $(".animout");
          TweenLite.to($animout, 0.25, {autoAlpha: 0});
          var $form = $("form");
          TweenLite.to($form, 0.5, {scaleX: 0.0001, delay: 0.25, ease: Power2.easeInOut});
          setTimeout(function() {
            window.location.href = "#/illinisporcle";
          }, 950);
        };
        scrollflag = false;
      };
    });

    $("#contact").bind("mousewheel", function(e) {
      if (!scrollflag) {
        scrollflag = true;
      };
    }, 150);
  };
}]);
