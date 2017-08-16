/**
 * Skyline module
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */
!function(a,n,t,o){var e={num:64};a(function(){a("[data-skyline]").each(function(n,t){for(var o=a(t),n=a.extend({},e,o.data("skyline")).num-1;n>=0;n--){var d=a("<div>");d.css({width:Math.floor(4*Math.random()+1)+"%",height:Math.floor(75*Math.random()+1)+"%",left:5+1.5*n+"%"}),o.append(d)}})})}(jQuery,0,this.document);

/**
 * Main script for batmanandrobin.run.
 * 
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @preserve
 */
