(function($) {

    Drupal.behaviors.open_framework = {
        attach: function(context, settings) {
            // Reset iPhone, iPad, and iPod zoom on orientation change to landscape
            var mobile_timer = false;
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i))) {
                $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
                $(window)
                    .bind('gesturestart', function() {
                        clearTimeout(mobile_timer);
                        $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=10.0');
                    })
                    .bind('touchend', function() {
                        clearTimeout(mobile_timer);
                        mobile_timer = setTimeout(function() {
                            $('#viewport').attr('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
                        }, 1000);
                    });
            }

            // Header Drupal Search Box
            $('#header [name=search_block_form]')
                .val('Search this site...')
                .focus(function() {
                    $(this).val('');
                });

            // Hide border for image links
            $('a:has(img)').css('border', 'none');

            // Apply the Equal Column Height function below by container
            // instead of page-wide
            equalHeightByContainer = function(className) {
                containerIDs = new Array();
                uncontainedExist = false;

                $(className).each(function() {
                    $el = $(this);
                    parentID = $el.offsetParent().attr('id');
                    if (typeof parentID !== 'undefined') {
                        if ($.inArray(parentID, containerIDs) === -1) {
                            containerIDs.push(parentID);
                        }
                    } else {
                        uncontainedExist = true;
                    }
                });

                if (uncontainedExist) {
                    equalHeight(className);
                }

                $.each(containerIDs, function() {
                    equalHeight('#' + this + ' ' + className);
                });
            }

            // Equal Column Height on load and resize
            // Credit: http://codepen.io/micahgodbolt/pen/FgqLc
            equalHeight = function(classname) {
                var currentTallest = 0,
                    currentRowStart = 0,
                    rowDivs = new Array(),
                    $el,
                    topPosition = 0;
                $(classname).each(function() {
                    $el = $(this);
                    $($el).height('auto')
                    topPosition = $el.position().top;

                    if (currentRowStart != topPosition) {
                        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                            rowDivs[currentDiv].height(currentTallest);
                        }
                        rowDivs.length = 0; // empty the array
                        currentRowStart = topPosition;
                        currentTallest = $el.height();
                        rowDivs.push($el);
                    } else {
                        rowDivs.push($el);
                        currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                    }
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                });
            }

            $(window).load(function() {
                equalHeightByContainer('.column');
            });

            $(window).resize(function() {
                equalHeightByContainer('.column');
            });


            // Add keyboard focus to .element-focusable elements in webkit browsers.
            $('.element-focusable').on('click', function() {
                $($(this).attr('href')).attr('tabindex', '-1').focus();
            });

            // Add placeholder value support for older browsers
            $('input, textarea').placeholder();

        }
    }

})(jQuery);

//Add legacy IE addEventListener support (http://msdn.microsoft.com/en-us/library/ms536343%28VS.85%29.aspx#1)
if (!window.addEventListener) {
    window.addEventListener = function(type, listener, useCapture) {
        attachEvent('on' + type, function() {
            listener(event)
        });
    }
}
//end legacy support addition

// Hide Address Bar in Mobile View
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    if (window.pageYOffset < 1) {
        window.scrollTo(0, 1);
    }
}
;
/*! http://mths.be/placeholder v1.8.7 by @mathias */
(function(f,h,c){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));;
;
(function ($) {
Drupal.behaviors.stanford_framework = {
	attach: function (context, settings) {

	if ($('#wrap').outerHeight(true) < $(window).height()) {	
		$('#push').css('height', $('#footer').outerHeight(true) + $('#global-footer').outerHeight(true));
		$('#wrap').css('margin-bottom', 0 - $('#push').outerHeight(true) );
			}
		}
	}
}(jQuery));
;
(function($) {

    Drupal.behaviors.stanford_uit = {
        attach: function(context, settings) {

            // Bootstrap Tab Links - See https://gist.github.com/JensRantil/4721860
            function handleTabLinks() {
                var hash = window.location.href.split("#")[1];
                if (hash !== undefined) {
                    var hpieces = hash.split("/");
                    for (var i = 0; i < hpieces.length; i++) {
                        var domelid = hpieces[i];
                        var domitem = $('a[href=#' + domelid + '][data-toggle=tab]');
                        if (domitem.length > 0) {
                            if (i + 1 == hpieces.length) {
                                // last piece
                                setTimeout(function() {
                                        // Highly unclear why this code needs to be inside a timeout call.
                                        // Possibly due to the fact that the first ?.tag('show') call needs
                                        // to have it's animation finishing before the next call is being
                                        // made.
                                        domitem.tab('show');
                                    },
                                    // This magic timeout is based on trial and error. I bumped it
                                    // partially to catch the visitor's attention.
                                    1000);
                            } else {
                                domitem.tab('show');
                            }
                        }
                    }
                }
            }
            handleTabLinks();

            // Responsive Table
            $('table.footable').footable();

            // Bootstrap Carousel
            $('.carousel').attr('id', 'myCarousel');
            $('.carousel .view-content').addClass('carousel-inner');
            $('.carousel .item:nth-child(1)').addClass('active');
            $('.carousel').carousel({
                interval: false //disable auto cycling
            });

            // Service Page Lead Paragraph
            $('.node-type-service-page .content-body article .field-name-field-service-overview > .field-items > .field-item > p:first-child').addClass('lead');

            // Help Content
            $('#block-system-help .content').addClass('alert');

            // Fancy Box Images
            $('.fancybox').fancybox();

            // Always Visible Module Restricted Menu Links
            $('.restricted').append("&nbsp;<i class=\"fa fa-lock\"></i>");

            // Landing Page
            $('.node-type-landing .field-collection-container > .field-type-field-collection > .field-items').addClass('row-fluid');
            $('.node-type-landing .field-collection-container > .field-type-field-collection > .field-items > .field-item').addClass('span4 column');
            $('.node-type-landing .field-collection-container > .field-type-field-collection .field-name-field-landing-item-title .field-items .field-item').replaceWith(
                function() {
                    return $('<h2>').append($(this).text());
                });
            $('.node-type-landing .field-name-field-landing-item-link a').addClass('more-link');

            // Border Simple Image Width
            $(window).load(function() {
                $('.border-simple.float-left, .border-simple.float-right').each(function() {
                    $(this).css('width', $(this).children('img').width());
                });
            });

            // Google Custom Search
            $('#search-icon').click(function() {
                $('#google-search').toggle();
                $('#google-search').toggleClass('active');
                $('#gsc-i-id1').focus();
            });

            // var myCallback = function() {
            //     jQuery('.gsc-search-button').attr('alt', 'Search IT Services');
            //     jQuery('.gsc-branding-img').attr('alt', 'Google');
            // }

            // window.__gcse = {
            //     callback: myCallback
            // };

            // Accordion Tweaks
            jQuery(document).ready(function() {
                panel_id = window.location.hash;
                if (panel_id.length) {
                    if (jQuery(panel_id + "> a").length) {
                        content_id = jQuery(panel_id + "> a").attr('href');
                        if (!jQuery(content_id).hasClass('in')) {
                            jQuery(panel_id + " > a").click();
                            jQuery(panel_id)[0].scrollIntoView(true);
                        }
                    }
                }
            });

            jQuery('.accordion-heading').click(function(e) {
                heading_id = $(this).attr('id');
                if (typeof heading_id !== 'undefined') {
                    var stateObj = {};
                    window.history.pushState(stateObj, "", window.location.href.replace(location.hash, "") + '#' + $(this).attr('id'));
                }
            });

            $('.accordion.accordion-faq .accordion-body').on('shown', function() {
                $(this).parent("div").find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");

            });

            $('.accordion.accordion-faq .accordion-body').on('hidden', function() {
                $(this).parent("div").find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
            });

            // FAQ
            $('.faq dd').hide();
            $('.faq dt').click(function() {
                var toggle = $(this).nextUntil('dd');
                toggle.slideToggle();
            });

            // Taxonomy
            $(".field-name-field-workgroup").find("a").contents().unwrap();

            // Guide Menu
            $(".full-width-guide.node-type-guide #fullwidth-bottom .secondary-nav a").removeClass("active");
            
        }
    }
}(jQuery));;
/*!
 * FooTable - Awesome Responsive Tables
 * http://themergency.com/footable
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2012 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 18 Nov 2012
 */
(function ($, w, undefined) {
  w.footable = {
    options: {
      delay: 0, // The number of millseconds to wait before triggering the react event
      breakpoints: { // The different screen resolution breakpoints
        phone: 480,
        tablet: 767
      },
      parsers: {  // The default parser to parse the value out of a cell (values are used in building up row detail)
        alpha: function (cell) {
          return $(cell).data('value') || $.trim($(cell).text());
        }
      },
      toggleSelector: ' > tbody > tr:not(.footable-row-detail)', //the selector to show/hide the detail row
      createDetail: function (element, data) {
        /// <summary>This function is used by FooTable to generate the detail view seen when expanding a collapsed row.</summary>
        /// <param name="element">This is the div that contains all the detail row information, anything could be added to it.</param>
        /// <param name="data">
        ///  This is an array of objects containing the cell information for the current row.
        ///  These objects look like the below:
        ///    obj = {
        ///      'name': String, // The name of the column
        ///      'value': Object, // The value parsed from the cell using the parsers. This could be a string, a number or whatever the parser outputs.
        ///      'display': String, // This is the actual HTML from the cell, so if you have images etc you want moved this is the one to use and is the default value used.
        ///      'group': String, // This is the identifier used in the data-group attribute of the column.
        ///      'groupName': String // This is the actual name of the group the column belongs to.
        ///    }
        /// </param>
        
        var groups = { '_none': { 'name': null, 'data': [] } };
        for (var i = 0; i < data.length; i++) {
          var groupid = data[i].group;
          if (groupid != null) {
            if (!(groupid in groups))
              groups[groupid] = { 'name': data[i].groupName, 'data': [] };
            
            groups[groupid].data.push(data[i]);
          } else {
            groups._none.data.push(data[i]);
          }
        }
        
        for (var group in groups) {
          if (groups[group].data.length == 0) continue;
          if (group != '_none') element.append('<h4>' + groups[group].name + '</h4>');
          
          for (var j = 0; j < groups[group].data.length; j++) {
            element.append('<div class="footable-cell-detail-row"><div class="footable-cell-detail-label">' + groups[group].data[j].name + '</div><div class="footable-cell-detail-value">' + groups[group].data[j].display + '</div></div>');
          }
        }
      },
      classes: {
        loading : 'footable-loading',
        loaded : 'footable-loaded',
        sorted : 'footable-sorted',
        descending : 'footable-sorted-desc',
        indicator : 'footable-sort-indicator'
      },
      debug: false // Whether or not to log information to the console.
    },

    version: {
      major: 0, minor: 1,
      toString: function () {
        return w.footable.version.major + '.' + w.footable.version.minor;
      },
      parse: function (str) {
        version = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);
        return {
          major: parseInt(version[1]) || 0,
          minor: parseInt(version[2]) || 0,
          patch: parseInt(version[3]) || 0
        };
      }
    },

    plugins: {
      _validate: function (plugin) {
        ///<summary>Simple validation of the <paramref name="plugin"/> to make sure any members called by Foobox actually exist.</summary>
        ///<param name="plugin">The object defining the plugin, this should implement a string property called "name" and a function called "init".</param>

        if (typeof plugin['name'] !== 'string') {
          if (w.footable.options.debug == true) console.error('Validation failed, plugin does not implement a string property called "name".', plugin);
          return false;
        }
        if (!$.isFunction(plugin['init'])) {
          if (w.footable.options.debug == true) console.error('Validation failed, plugin "' + plugin['name'] + '" does not implement a function called "init".', plugin);
          return false;
        }
        if (w.footable.options.debug == true) console.log('Validation succeeded for plugin "' + plugin['name'] + '".', plugin);
        return true;
      },
      registered: [], // An array containing all registered plugins.
      register: function (plugin, options) {
        ///<summary>Registers a <paramref name="plugin"/> and its default <paramref name="options"/> with Foobox.</summary>
        ///<param name="plugin">The plugin that should implement a string property called "name" and a function called "init".</param>
        ///<param name="options">The default options to merge with the Foobox's base options.</param>

        if (w.footable.plugins._validate(plugin)) {
          w.footable.plugins.registered.push(plugin);
          if (options != undefined && typeof options === 'object') $.extend(true, w.footable.options, options);
          if (w.footable.options.debug == true) console.log('Plugin "' + plugin['name'] + '" has been registered with the Foobox.', plugin);
        }
      },
      init: function (instance) {
        ///<summary>Loops through all registered plugins and calls the "init" method supplying the current <paramref name="instance"/> of the Foobox as the first parameter.</summary>
        ///<param name="instance">The current instance of the Foobox that the plugin is being initialized for.</param>

        for(var i = 0; i < w.footable.plugins.registered.length; i++){
          try {
            w.footable.plugins.registered[i]['init'](instance);
          } catch(err) {
            if (w.footable.options.debug == true) console.error(err);
          }
        }
      }
    }
  };

  var instanceCount = 0;

  $.fn.footable = function(options) {
    ///<summary>The main constructor call to initialize the plugin using the supplied <paramref name="options"/>.</summary>
    ///<param name="options">
    ///<para>A JSON object containing user defined options for the plugin to use. Any options not supplied will have a default value assigned.</para>
    ///<para>Check the documentation or the default options object above for more information on available options.</para>
    ///</param>

    options=options||{};
    var o=$.extend(true,{},w.footable.options,options); //merge user and default options
    return this.each(function () {
      instanceCount++;
      this.footable = new Footable(this, o, instanceCount);
    });
  };

  //helper for using timeouts
  function Timer() {
    ///<summary>Simple timer object created around a timeout.</summary>
    var t=this;
    t.id=null;
    t.busy=false;
    t.start=function (code,milliseconds) {
      ///<summary>Starts the timer and waits the specified amount of <paramref name="milliseconds"/> before executing the supplied <paramref name="code"/>.</summary>
      ///<param name="code">The code to execute once the timer runs out.</param>
      ///<param name="milliseconds">The time in milliseconds to wait before executing the supplied <paramref name="code"/>.</param>

      if (t.busy) {return;}
      t.stop();
      t.id=setTimeout(function () {
        code();
        t.id=null;
        t.busy=false;
      },milliseconds);
      t.busy=true;
    };
    t.stop=function () {
      ///<summary>Stops the timer if its runnning and resets it back to its starting state.</summary>

      if(t.id!=null) {
        clearTimeout(t.id);
        t.id=null;
        t.busy=false;
      }
    };
  };

  function Footable(t, o, id) {
    ///<summary>Inits a new instance of the plugin.</summary>
    ///<param name="t">The main table element to apply this plugin to.</param>
    ///<param name="o">The options supplied to the plugin. Check the defaults object to see all available options.</param>
    ///<param name="id">The id to assign to this instance of the plugin.</param>

    var ft = this;
    ft.id = id;
    ft.table = t;
    ft.options = o;
    ft.breakpoints = [];
    ft.breakpointNames = '';
    ft.columns = {};
    
    var opt = ft.options;
    var cls = opt.classes;
    var indexOffset = 0;

    // This object simply houses all the timers used in the footable.
    ft.timers = {
      resize: new Timer(),
      register: function (name) {
        ft.timers[name] = new Timer();
        return ft.timers[name];
      }
    };

    w.footable.plugins.init(ft);

    ft.init = function() {
      var $window = $(w), $table = $(ft.table);

      if ($table.hasClass(cls.loaded)) {
        //already loaded FooTable for the table, so don't init again
        ft.raise('footable_already_initialized');
        return;
      }

      $table.addClass(cls.loading);

      // Get the column data once for the life time of the plugin
      $table.find('> thead > tr:last-child > th, > thead > tr:last-child > td').each(function() {
        var data = ft.getColumnData(this);
        ft.columns[data.index] = data;

        if (data.className != null) {
          var selector = '', first = true;
          $.each(data.matches, function(m, match) { //support for colspans
            if (!first) { selector += ', '; }
            selector += '> tbody > tr:not(.footable-row-detail) > td:nth-child(' + (parseInt(match) + 1) + ')';
            first = false;
          });
          //add the className to the cells specified by data-class="blah"
          $table.find(selector).not('.footable-cell-detail').addClass(data.className);
        }
      });

      // Create a nice friendly array to work with out of the breakpoints object.
      for(var name in opt.breakpoints) {
        ft.breakpoints.push({ 'name': name, 'width': opt.breakpoints[name] });
        ft.breakpointNames += (name + ' ');
      }

      // Sort the breakpoints so the smallest is checked first
      ft.breakpoints.sort(function(a, b) { return a['width'] - b['width']; });

      //bind the toggle selector click events
      ft.bindToggleSelectors();

      ft.raise('footable_initializing');

      $table.bind('footable_initialized', function () {
        //resize the footable onload
        ft.resize();

        //remove the loading class
        $table.removeClass(cls.loading);

        //hides all elements within the table that have the attribute data-hide="init"
        $table.find('[data-init="hide"]').hide();
        $table.find('[data-init="show"]').show();

        //add the loaded class
        $table.addClass(cls.loaded);
      });

      $window
        .bind('resize.footable', function () {
          ft.timers.resize.stop();
          ft.timers.resize.start(function() {
            ft.resize();
          }, opt.delay);
        });

      ft.raise('footable_initialized');
    };
    
    //moved this out into it's own function so that it can be called from other add-ons
    ft.bindToggleSelectors = function() {
      var $table = $(ft.table);
      $table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable', function (e) {
        if ($table.is('.breakpoint') && $(e.target).is('td')) {
          var $row = $(this).is('tr') ? $(this) : $(this).parents('tr:first');
          ft.toggleDetail($row.get(0));
        }
      });      
    };

    ft.parse = function(cell, column) {
      var parser = opt.parsers[column.type] || opt.parsers.alpha;
      return parser(cell);
    };

    ft.getColumnData = function(th) {
      var $th = $(th), hide = $th.data('hide'), index = $th.index();
      hide = hide || '';
      hide = hide.split(',');
      var data = {
        'index': index,
        'hide': { },
        'type': $th.data('type') || 'alpha',
        'name': $th.data('name') || $.trim($th.text()),
        'ignore': $th.data('ignore') || false,
        'className': $th.data('class') || null,
        'matches': [],
        'names': { },
        'group': $th.data('group') || null,
        'groupName': null
      };
      
      if (data.group != null) {
        var $group = $(ft.table).find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]').first();
        data.groupName = ft.parse($group, { 'type': 'alpha' });
      }

      var pcolspan = parseInt($th.prev().attr('colspan') || 0);
      indexOffset += pcolspan > 1 ? pcolspan - 1 : 0;
      var colspan = parseInt($th.attr('colspan') || 0), curindex = data.index + indexOffset;
      if (colspan > 0) {
        var names = $th.data('names');
        names = names || '';
        names = names.split(',');
        for (var i = 0; i < colspan; i++) {
          data.matches.push(i + curindex);
          if (i < names.length) data.names[i + curindex] = names[i];
        }
      } else {
        data.matches.push(curindex);
      }
      
      data.hide['default'] = ($th.data('hide')==="all") || ($.inArray('default', hide) >= 0);

      for(var name in opt.breakpoints) {
        data.hide[name] = ($th.data('hide')==="all") || ($.inArray(name, hide) >= 0);
      }
      var e = ft.raise('footable_column_data', { 'column': { 'data': data, 'th': th } });
      return e.column.data;
    };

    ft.getViewportWidth = function() {
      return window.innerWidth || (document.body ? document.body.offsetWidth : 0);
    };

    ft.getViewportHeight = function() {
      return window.innerHeight || (document.body ? document.body.offsetHeight : 0);
    };

    ft.hasBreakpointColumn = function(breakpoint) {
      for(var c in ft.columns) {
        if (ft.columns[c].hide[breakpoint]) {
          return true;
        }
      }
      return false;
    };

    ft.resize = function() {
      var $table = $(ft.table);
      var info = {
        'width': $table.width(),                  //the table width
        'height': $table.height(),                //the table height
        'viewportWidth': ft.getViewportWidth(),   //the width of the viewport
        'viewportHeight': ft.getViewportHeight(), //the width of the viewport
        'orientation': null
      };
      info.orientation = info.viewportWidth > info.viewportHeight ? 'landscape' : 'portrait';

      if (info.viewportWidth < info.width) info.width = info.viewportWidth;
      if (info.viewportHeight < info.height) info.height = info.viewportHeight;

      var pinfo = $table.data('footable_info');
      $table.data('footable_info', info);
      ft.raise('footable_resizing', { 'old': pinfo, 'info': info });

      // This (if) statement is here purely to make sure events aren't raised twice as mobile safari seems to do
      if (!pinfo || ((pinfo && pinfo.width && pinfo.width != info.width) || (pinfo && pinfo.height && pinfo.height != info.height))) {
        var current = null, breakpoint;
        for (var i = 0; i < ft.breakpoints.length; i++) {
          breakpoint = ft.breakpoints[i];
          if (breakpoint && breakpoint.width && info.width <= breakpoint.width) {
            current = breakpoint;
            break;
          }
        }

        var breakpointName = (current == null ? 'default' : current['name']);

        var hasBreakpointFired = ft.hasBreakpointColumn(breakpointName);

        $table
          .removeClass('default breakpoint').removeClass(ft.breakpointNames)
          .addClass(breakpointName + (hasBreakpointFired ? ' breakpoint' : ''))
          .find('> thead > tr:last-child > th')
            .each(function() {
              var data = ft.columns[$(this).index()], selector = '', first = true;
              $.each(data.matches, function(m, match) {
                if (!first) { selector += ', '; }
                var count = match + 1;
                selector += '> tbody > tr:not(.footable-row-detail) > td:nth-child(' + count + ')';
                selector += ', > tfoot > tr:not(.footable-row-detail) > td:nth-child(' + count + ')';
                selector += ', > colgroup > col:nth-child(' + count + ')';
                first = false;
              });
              
              selector += ', > thead > tr[data-group-row="true"] > th[data-group="'+data.group+'"]';
              var $column = $table.find(selector).add(this);
              if (data.hide[breakpointName] == false) $column.show();
              else $column.hide();

              if ($table.find('> thead > tr.footable-group-row').length == 1) {
                var $groupcols = $table.find('> thead > tr:last-child > th[data-group="' + data.group + '"]:visible, > thead > tr:last-child > th[data-group="' + data.group + '"]:visible'),
                  $group = $table.find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]'),
                  groupspan = 0;

                $.each($groupcols, function() { groupspan += parseInt($(this).attr('colspan') || 1); });

                if (groupspan > 0) $group.attr('colspan', groupspan).show();
                else $group.hide();
              }
            })
          .end()
          .find('> tbody > tr.footable-detail-show').each(function() {
            ft.createOrUpdateDetailRow(this);
          });

        $table.find('> tbody > tr.footable-detail-show:visible').each(function() {
          var $next = $(this).next();
          if ($next.hasClass('footable-row-detail')) {
            if (breakpointName == 'default' && !hasBreakpointFired) $next.hide();
            else $next.show();
          }
        });
        
        // adding .footable-first-column and .footable-last-column to the first and last th and td of each row in order to allow 
        // for styling if the first or last column is hidden (which won't work using :first-child or :last-child)
        $table.find('> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column').removeClass('footable-last-column');
        $table.find('> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column').removeClass('footable-first-column');
        $table.find('> thead > tr, > tbody > tr')
          .find('> th:visible:last, > td:visible:last')
            .addClass('footable-last-column')
          .end()
          .find('> th:visible:first, > td:visible:first')
            .addClass('footable-first-column');
        
        ft.raise('footable_breakpoint_' + breakpointName, { 'info': info });
      }
      
      ft.raise('footable_resized', { 'old': pinfo, 'info': info });
    };

    ft.toggleDetail = function(actualRow) {
      var $row = $(actualRow),
          created = ft.createOrUpdateDetailRow($row.get(0)),
          $next = $row.next();

      if (!created && $next.is(':visible')) {
        $row.removeClass('footable-detail-show');
        //only hide the next row if it's a detail row
        if($next.hasClass('footable-row-detail')) $next.hide();
      } else {
        $row.addClass('footable-detail-show');
        $next.show();
      }
    };

    ft.getColumnFromTdIndex = function(index) {
      /// <summary>Returns the correct column data for the supplied index taking into account colspans.</summary>
      /// <param name="index">The index to retrieve the column data for.</param>
      /// <returns type="json">A JSON object containing the column data for the supplied index.</returns>
      var result = null;
      for (var column in ft.columns) {
        if ($.inArray(index, ft.columns[column].matches) >= 0) {
          result = ft.columns[column];
          break;
        }
      }
      return result;
    };

    ft.createOrUpdateDetailRow = function (actualRow) {
      var $row = $(actualRow), $next = $row.next(), $detail, values = [];
      if ($row.is(':hidden')) return false; //if the row is hidden for some readon (perhaps filtered) then get out of here
      $row.find('> td:hidden').each(function () {
        var index = $(this).index(), column = ft.getColumnFromTdIndex(index), name = column.name;
        if (column.ignore == true) return true;

        if (index in column.names) name = column.names[index];
        values.push({ 'name': name, 'value': ft.parse(this, column), 'display': $.trim($(this).html()), 'group': column.group, 'groupName': column.groupName });
        return true;
      });
      if(values.length == 0) return false; //return if we don't have any data to show
      var colspan = $row.find('> td:visible').length;
      var exists = $next.hasClass('footable-row-detail');
      if (!exists) { // Create
        $next = $('<tr class="footable-row-detail"><td class="footable-cell-detail"><div class="footable-row-detail-inner"></div></td></tr>');
        $row.after($next);
      }
      $next.find('> td:first').attr('colspan', colspan);
      $detail = $next.find('.footable-row-detail-inner').empty();
      opt.createDetail($detail, values);
      return !exists;
    };

    ft.raise = function(eventName, args) {
      args = args || { };
      var def = { 'ft': ft };
      $.extend(true, def, args);
      var e = $.Event(eventName, def);
      if (!e.ft) { $.extend(true, e, def); } //pre jQuery 1.6 which did not allow data to be passed to event object constructor
      $(ft.table).trigger(e);
      return e;
    };

    ft.init();
    return ft;
  };
})(jQuery, window);
;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
