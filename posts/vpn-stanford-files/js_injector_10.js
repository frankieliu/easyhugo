jQuery(document).ready(function($) {
  jQuery("#main-nav a").click(function(e) {
    if (typeof _gaq === "object") {
      _gaq.push(['_trackEvent', 'Main Menu Navigation', 'Click', $(this).attr('href')]);
    }
  });
});