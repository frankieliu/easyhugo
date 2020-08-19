jQuery(document).ready(function($) {
  jQuery("#footer .content a").click(function(e) {
    if (typeof _gaq === "object") {
      _gaq.push(['_trackEvent', 'Footer Navigation', 'Click', $(this).attr('href')]);
    }
  });
});