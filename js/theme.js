(function ($) {
  'use strict';

  Drupal.behaviors.themeTitle = {
    attach: function(context, settings) {

      $('.navbar-brand').html(function(i, v) {
         return v.replace(/(^\w{4})/, '<span>$1</span>');
      });

    }
  };

}(jQuery));(window.jQuery, window.Drupal, window.Drupal.bootstrap);
