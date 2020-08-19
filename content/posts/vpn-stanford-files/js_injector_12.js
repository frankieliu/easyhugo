jQuery(document).ready(function($) {
  jQuery("#block-menu-block-5 > div > div > ul > li > a").click(function(e) {
    if (typeof _gaq === "object") {
      _gaq.push(['_trackEvent', 'Parent Service Navigation', 'Breadcrumb Click', $(this).attr('href')]);
    }
  });
  jQuery("#block-menu-block-2 > h2 > a").click(function(e) {
    if (typeof _gaq === "object") {
      _gaq.push(['_trackEvent', 'Parent Service Navigation', 'Side Menu Click', $(this).attr('href')]);
    }
  });
});