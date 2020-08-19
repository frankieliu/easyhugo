jQuery.getJSON("https://sgkdi21db2.execute-api.us-west-2.amazonaws.com/prod/uit-alerts", function(data) {
  jQuery("a:contains('View alerts')").append(' <span class="badge">' + data.alerts + ' <span class="element-invisible">active alerts</span></span>');
});