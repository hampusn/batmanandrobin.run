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
