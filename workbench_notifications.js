
(function ($) {
  
  $.fn.wbnotificationAlertAnimate = function() {
    this.animate({opacity:0.5},800,"linear",function(){
      $(this).animate({opacity:1},800,"linear",function(){
        $(this).animate({opacity:0.5},800, "linear", function() {
          $(this).animate({opacity:1},800);
        });
      });
    });
  };

  Drupal.Nodejs.callbacks.workbenchNotifications = {
    callback: function (message) {
      Drupal.nodejs_ajax.runCommands(message);
      $('li.wbnotification-alert a').wbnotificationAlertAnimate();
    }
  };

}(jQuery));

