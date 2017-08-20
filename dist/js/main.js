!function(n,i){var r=function(n,i,r){var t;return function(){var e=this,u=arguments;t?clearTimeout(t):r&&n.apply(e,u),t=setTimeout(function(){r||n.apply(e,u),t=null},i||100)}};jQuery.fn[i]=function(n){return n?this.bind("resize",r(n)):this.trigger(i)}}(jQuery,"smartresize"),$(window).smartresize(function(){});

/**
 * Responsive iframe module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */
!function(e,t,i,r){var a={width:null,height:null};e(function(){e("[data-responsive-iframe]").each(function(t,i){var r=e(i),h=e.extend({},a,r.data("responsiveIframe")),n=Number.isInteger(h.width)?h.width:r.width(),s=(Number.isInteger(h.height)?h.height:r.height())/n;r.data("responsiveIframeRatio",s),r.removeAttr("height").removeAttr("width").css({width:"100%"})}),e(t).trigger("resize")}),e(t).smartresize(function(t){e("[data-responsive-iframe]").each(function(t,i){var r=e(i),a=r.data("responsiveIframeRatio"),h=r.width();r.height(h*a)})})}(jQuery,this,this.document);

/**
 * Skyline module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */
!function(t,i,n,a){function e(t,i){return Math.floor(Math.random()*(i-t+1)+t)}var h={num:64,minWidth:1,maxWidth:4,minHeight:5,maxHeight:90};t(function(){t("[data-skyline]").each(function(i,n){for(var a=t(n),d=t.extend({},h,a.data("skyline")),i=d.num-1;i>=0;i--){var m=t("<div>");m.css({width:e(d.minWidth,d.maxWidth)+"%",height:e(d.minHeight,d.maxHeight)+"%",left:2+1.5*i+"%"}),a.append(m)}})})}(jQuery,0,this.document);

/**
 * Main script for batmanandrobin.run.
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */
