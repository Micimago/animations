(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Clouds.4284dfb0.svg"},function(e,t,a){e.exports=a.p+"static/media/background.1bd2443a.png"},function(e,t,a){e.exports=a.p+"static/media/buildings.f9e053e7.png"},function(e,t,a){e.exports=a.p+"static/media/iron-man.9c6316c3.png"},function(e,t,a){e.exports=a.p+"static/media/background.bb0f0b1d.png"},function(e,t,a){e.exports=a.p+"static/media/ground.327b6aa1.png"},function(e,t,a){e.exports=a.p+"static/media/plane.19b5cb73.png"},,,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),r=a(15),i=a.n(r),s=(a(30),a(6)),n=a(7),o=a(9),f=a(8),p=a(10),d=(a(32),a(50)),m=(a(34),a(16)),u=a.n(m),b=a(17),h=a.n(b),g=a(18),k=a.n(g),E=a(19),v=a.n(E),y=a(20),N=a.n(y),w=a(21),O=a.n(w),_=a(22),x=a.n(_),M=a(13),W=a.n(M),T=a(11);W.a.Scene.addOption("tweenChanges",!1,function(e){return!!e}),W.a.Scene.extend(function(){var e,t=this,a=function(){t._log&&(Array.prototype.splice.call(arguments,1,0,"(animation.gsap)","->"),t._log.apply(this,arguments))};t.on("progress.plugin_gsap",function(){c()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var c=function(){if(e){var a=t.progress(),c=t.state();e.repeat&&-1===e.repeat()?"DURING"===c&&e.paused()?e.play():"DURING"===c||e.paused()||e.pause():a!==e.progress()&&(0===t.duration()?a>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(a*e.duration()):e.progress(a).pause())}};t.setTween=function(l,r,i){var s;arguments.length>1&&(arguments.length<3&&(i=r,r=1),l=T.b.to(l,r,i));try{(s=T.a?new T.a({smoothChildTiming:!0}).add(l):l).pause()}catch(h){return a(1,"ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"),t}if(e&&t.removeTween(),e=s,l.repeat&&-1===l.repeat()&&(e.repeat(-1),e.yoyo(l.yoyo())),t.tweenChanges()&&!e.tweenTo&&a(2,"WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."),e&&t.controller()&&t.triggerElement()&&t.loglevel()>=2){var n=T.b.getTweensOf(t.triggerElement()),o=t.controller().info("vertical");n.forEach(function(e,t){var c=e.vars.css||e.vars;if(o?void 0!==c.top||void 0!==c.bottom:void 0!==c.left||void 0!==c.right)return a(2,"WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"),!1})}if(parseFloat(T.b.version)>=1.14)for(var f,p,d=function(){p&&p.apply(this,arguments),u.apply(this,arguments)},m=e.getChildren?e.getChildren(!0,!0,!1):[e],u=function(){a(2,"WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")},b=0;b<m.length;b++)f=m[b],p!==u&&(p=f.vars.onOverwrite,f.vars.onOverwrite=d);return a(3,"added tween"),c(),t},t.removeTween=function(c){return e&&(c&&e.progress(0).pause(),e.kill(),e=void 0,a(3,"removed tween (reset: "+(c?"true":"false")+")")),t}});var C=W.a,j=function(e){var t=e.text,a=e.backgroundColor;return l.a.createElement("div",null,l.a.createElement("div",{id:"group1",className:"parallax__group"},l.a.createElement("div",{className:"parallax__layer parallax__layer--base ".concat(a)},l.a.createElement("h1",{className:"f1 ma0 white"},t))))},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(f.a)(t).call(this,e))).controller=new C.Controller,a}return Object(p.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){new C.Scene({triggerElement:"#plane-group",duration:1e3,offset:50}).setTween("#plane-group",1,{transform:"translate(-100%, -50%)"}).addTo(this.controller)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"parallax"},l.a.createElement(j,{text:"Welcome",backgroundColor:"bg-light-red"}),l.a.createElement("div",{id:"group2",className:"parallax__group"},l.a.createElement("div",{className:"parallax__layer parallax__layer--back"},l.a.createElement("img",{className:"img",src:"http://yodobi.com/4k-Wallpapers/4k-wallpapers-phone-Is-4K-Wallpaper.jpg",alt:"bg1"})),l.a.createElement("div",{className:"parallax__layer parallax__layer--closer"},l.a.createElement("img",{className:"img clouds",src:u.a,alt:"clouds"}))),l.a.createElement(j,{text:"This is my Website",backgroundColor:"bg-light-blue"}),l.a.createElement("div",{id:"group3",className:"parallax__group"},l.a.createElement("div",{className:"parallax__layer parallax__layer--deep"},l.a.createElement("img",{className:"img",src:h.a,alt:"bg1"})),l.a.createElement("div",{className:"parallax__layer parallax__layer--back"},l.a.createElement("img",{className:"img",src:k.a,alt:"bg1"})),l.a.createElement("div",{className:"parallax__layer parallax__layer--fore"},l.a.createElement("img",{className:"img",src:v.a,alt:"ironMan"}))),l.a.createElement(j,{text:"This is my Website",backgroundColor:"bg-light-blue"}),l.a.createElement("div",{id:"group4",className:"parallax__group"},l.a.createElement("div",{className:"parallax__layer parallax__layer--back"},l.a.createElement("img",{className:"img",src:N.a,alt:"bg1"})),l.a.createElement("div",{className:"parallax__layer parallax__layer--closer"},l.a.createElement("img",{className:"img",src:O.a,alt:"bg1"})),l.a.createElement("div",{className:"parallax__layer parallax__layer--base"},l.a.createElement("div",{id:"plane-group",className:"img"},l.a.createElement("img",{id:"plane",src:x.a,alt:"plane"}),l.a.createElement("div",{id:"trail"})))),l.a.createElement(d.a,{to:"/randoms"},l.a.createElement(j,{text:"random stuff",backgroundColor:"bg-orange"}))))}}]),t}(c.Component),R=(a(41),a(43),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(f.a)(t).call(this,e))).controller=new C.Controller,a}return Object(p.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){new C.Scene({triggerElement:"#hello",duration:300,offset:-200}).setTween("#hello",1,{strokeDashoffset:0,fillOpacity:1}).addTo(this.controller),new C.Scene({triggerElement:"#hello",offset:90}).setClassToggle("#hello","change-color").addTo(this.controller),new C.Scene({triggerElement:"#hello",offset:90}).setClassToggle("#hello","change-color").addTo(this.controller),new C.Scene({triggerElement:"#hello",offset:90}).setClassToggle("#hello-bg","bg-navy").addTo(this.controller),new C.Scene({triggerElement:"#hello",offset:90}).setClassToggle("#burst-piece","burst").addTo(this.controller),new C.Scene({triggerElement:"#hello-bg",offset:560}).setPin("#hello-bg").addTo(this.controller),new C.Scene({triggerElement:"#hello-bg",duration:300,offset:560}).setTween("#hello-combined-parent",1,{width:"16vw"}).addTo(this.controller)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"bg-white h5 pa7"}),l.a.createElement("div",{id:"hello-bg"},l.a.createElement("div",{id:"hello-combined-parent",className:"center-custom"},l.a.createElement("svg",{id:"hello-combined",className:"center-custom-percentage mv7",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 359.9 171.1",style:{overflow:"visible"}},l.a.createElement("defs",null),l.a.createElement("g",null,l.a.createElement("path",{id:"hello",className:"hello-h",fill:"black",strokeWidth:"5",stroke:"black",fillOpacity:"0",d:"M0,168.9c0.9-2,1.8-4.1,2.6-6.1c0.4-0.8,0.7-1.7,1-2.4c3.4,0.9,6.7,1.9,10,2.6c2.9,0.6,5.8,1,8.7,1.4 c1.6,0.2,3.3,0.2,5,0.3c5.6,0.2,11-0.9,16.3-2.7c5.6-2,10.7-4.8,15.3-8.6c2-1.7,4.1-3.3,5.9-5.2c3.6-3.7,6.6-7.9,9.1-12.4 c2.1-3.8,4.3-7.7,6.2-11.6c2.4-5.2,4.6-10.5,6.6-15.9c1.8-4.6,3.4-9.2,4.8-13.8c2.2-7.2,4.2-14.6,6.2-21.9c1.9-7,3.7-14,5.4-21 c1.3-5.6,2.3-11.2,3.5-16.8c0.9-4.2,1.7-8.4,2.6-12.5c0.1-0.3,0.1-0.6,0.1-0.8c0-0.9,0.3-1.5,1.3-2c4.1-2,8.2-4.1,12.5-6.2 c-0.2,1.7-0.3,3.3-0.6,4.8c-0.6,3.4-1.2,6.7-1.9,10c-0.8,3.8-1.5,7.5-2.4,11.2c-1.7,6.9-3.4,13.7-5.3,20.5 c-1.2,4.4-2.5,8.8-3.8,13.2c-2,6.6-4,13.2-6.2,19.8c-1.9,5.6-4.1,11.1-6.2,16.7c16.1,0,32.3,0,48.6,0c0.6-2.6,1.2-5.2,1.7-7.8 c0.9-4.5,1.8-9,2.8-13.4c1.1-5.2,2.2-10.4,3.2-15.6c0.9-4.3,1.9-8.6,2.8-13c1-4.8,2-9.6,3-14.5c0.8-3.9,1.6-7.9,2.5-11.8 c0.9-4.5,1.9-9,2.8-13.4c0.4-2,0.8-4,1.2-6c0-0.2,0.3-0.4,0.5-0.5c3.9-1.9,7.9-3.9,11.8-5.8c0.1,0,0.1,0,0.3,0.1 c-1.3,5.9-2.6,11.7-3.8,17.6c-1.4,6.7-2.7,13.4-4.1,20.1c-1.1,5.4-2.4,10.8-3.5,16.3c-1.1,5.2-2.1,10.4-3.2,15.6 c-1.1,5.4-2.4,10.8-3.5,16.3c-1.3,5.9-2.4,11.9-3.7,17.8c-1.1,5.4-2.4,10.8-3.5,16.3c-1.1,5.2-2.1,10.4-3.2,15.6 c-1.1,5-2.2,10.1-3.3,15.1c-0.5,2.1-0.9,4.2-1.3,6.3c-0.1,0.7-0.4,1-1.1,1c-1.9,0-3.8,0-5.8,0c-0.7,0-0.9-0.2-1.1-0.9 c-2.7-8-6.6-15.5-11.5-22.4c-2.5-3.6-5.2-7-8-10.3c-2.4-2.8-4.9-5.5-7.6-8.1c-4.3-4.1-9-7.7-14.3-10.5c-0.7-0.4-0.9,0.2-1.1,0.6 c-1.3,2.6-2.5,5.2-3.8,7.8c-3.4,6.7-7.5,13-12.2,19c-3.3,4.2-6.9,8-10.8,11.6c-4.4,4.1-9.4,7.4-14.8,10c-6.6,3.1-13.5,5.3-20.6,6.7 c-3.8,0.7-7.6,1.1-11.5,1.5c-3,0.3-6,0.6-9,0.4c-3.9-0.2-7.8-0.7-11.6-1.1C0,169.6,0,169.2,0,168.9z M104.8,113.5 c12.3,10.4,23.2,22,32.1,35.3c2.4-11.8,4.8-23.5,7.3-35.3C131.1,113.5,118,113.5,104.8,113.5z"}),l.a.createElement("path",{id:"hello",className:"hello-l",fill:"black",strokeWidth:"5",stroke:"black",fillOpacity:"0",d:"M274,0c-0.4,1.6-0.6,2.8-0.9,4c-1.6,7-3.2,14.1-4.8,21.1c-1.6,6.9-3.2,13.7-4.7,20.6c-1.9,8.1-3.7,16.2-5.6,24.3 c-1.3,5.6-2.6,11.2-3.8,16.8c-1.8,7.9-3.5,15.8-5.3,23.7c-1.6,6.8-3.2,13.6-4.7,20.4c-1,4.3-2,8.7-2.9,13.1c-0.4,2-0.7,4.1-0.7,6.2 c-0.1,2.2,0.2,4.4,1.3,6.4c1.3,2.3,3.2,3,5.5,1.7c1.6-0.9,3.1-2,4.5-3.2c1.7-1.5,3.2-3.2,4.9-4.9c0.7,0.7,1.4,1.3,2.1,1.9 c-1.9,2.2-3.8,4.4-5.7,6.5c-1.8,2-3.7,3.9-5.7,5.7c-2.3,2.1-5,3.3-8.2,2c-2.2-0.9-3.5-2.7-4.5-4.7c-1.6-3.2-2.3-6.6-1.6-10.2 c1.1-6.1,2-12.2,3.2-18.3c1.3-6.6,2.7-13.2,4-19.8c1.2-5.9,2.2-11.8,3.4-17.6c1.1-5.8,2.4-11.6,3.5-17.4c1-5.1,1.9-10.1,2.9-15.2 c1.1-5.4,2.2-10.8,3.3-16.2c0.9-4.6,1.8-9.3,2.7-13.9c1-5,2-10,3-15.1c0.7-3.5,1.4-6.9,2-10.4c0.2-0.9,0.5-1.4,1.3-1.9 C266.2,3.9,269.9,2,274,0z"}),l.a.createElement("path",{id:"hello",className:"hello-l",fill:"black",strokeWidth:"5",stroke:"black",fillOpacity:"0",d:"M291.2,150.2c0.7,0.8,1.4,1.4,2,2c-1.7,2-3.5,4.1-5.3,6.1c-1.5,1.7-3,3.4-4.7,4.9c-1.6,1.5-3.3,2.9-5.5,3.4 c-2.3,0.5-4.6-0.2-6.6-2.4c-2.9-3.3-3.9-7.1-3.7-11.3c0.1-2.5,0.5-5.1,1-7.6c0.8-4.3,1.7-8.6,2.6-12.9c0.8-4.2,1.6-8.4,2.5-12.6 c0.9-4.3,1.7-8.6,2.6-12.9c1-5,2-10,2.9-15c0.9-4.3,1.7-8.6,2.6-12.9c1-5,2-10,3-15c0.9-4.7,1.9-9.4,2.8-14.2c1-5,2-10,3-15.1 c0.8-4.3,1.6-8.5,2.5-12.8c1-5.1,2.1-10.3,3.1-15.4c0.1-0.3,0.3-0.6,0.6-0.8c3.9-1.9,7.7-3.8,11.6-5.7c0.1,0,0.2,0,0.5,0 c-0.6,2.7-1.2,5.4-1.9,8.1c-1.4,6.4-2.9,12.7-4.3,19.1c-1.5,6.5-3,13-4.5,19.5c-1.5,6.6-3,13.3-4.5,19.9 c-1.7,7.4-3.4,14.8-5.1,22.2c-1.4,6.3-2.9,12.6-4.3,18.9c-1.8,8.1-3.7,16.2-5.6,24.3c-0.9,3.9-1.8,7.8-2.6,11.7 c-0.3,1.6-0.5,3.3-0.5,4.9c0,1.8-0.1,3.7,0.3,5.5c0.3,1.4,1.1,2.8,2.1,3.8c1.5,1.5,3.4,1,5.3-0.4c2.5-1.9,4.7-4.1,7-6.2 C290.4,151.1,290.8,150.6,291.2,150.2z"}),l.a.createElement("path",{id:"hello",className:"hello-o",fill:"black",strokeWidth:"5",stroke:"black",fillOpacity:"0",d:"M298.9,142.9c0-8.6,2.8-16.3,7.2-23.6c2.5-4.1,5.4-7.9,9-11.1c4.7-4.2,9.8-7.7,16-9.2c6.2-1.5,12.3-1.3,18,1.9 c3.1,1.7,5.6,4.2,7.4,7.3c2.2,3.7,3.1,7.6,3.3,11.9c0.3,7.1-1.1,13.8-3.9,20.2c-2.2,4.9-5,9.4-8.5,13.5c-4.2,4.8-9.1,8.6-14.8,11.3 c-4.3,2-8.9,2.8-13.7,2.5c-5.1-0.4-9.6-2.3-13.2-6c-3.3-3.4-5.4-7.5-6.1-12.2C299.2,147.2,299.1,145,298.9,142.9z M309.5,146.8 c0.1,0.8,0.2,1.9,0.3,3.1c0.2,3,1,5.9,2.5,8.6c2.2,3.8,5.5,5.6,9.7,5.8c4.2,0.2,7.8-1.6,10.9-4.3c3.2-2.8,5.5-6.3,7.5-10 c2.8-5.1,4.8-10.5,6.2-16c1.6-6.1,2.7-12.3,2.3-18.7c-0.2-3-0.9-5.8-2.4-8.4c-1.5-2.5-3.4-4.4-6.2-5.4c-3.4-1.2-6.7-0.5-9.8,0.9 c-4.4,2-7.5,5.4-10.1,9.3c-3.8,5.7-6.3,12-8.2,18.6C310.7,135.7,309.7,141,309.5,146.8z"}),l.a.createElement("path",{id:"hello",className:"hello-e",fill:"black",strokeWidth:"5",stroke:"black",fillOpacity:"0",d:"M222.2,149.2c-3,3.2-5.8,6.6-9,9.6c-4.5,4.3-9.8,7.2-16,8.2c-4.9,0.8-9.8,0.5-14.3-1.8c-3.2-1.6-5.8-4-7.7-7 c-2-3.3-3-6.9-3.4-10.7c-0.8-7.9,1-15.3,4.2-22.4c2-4.4,4.4-8.6,7.4-12.4c4.4-5.5,9.4-10.4,15.9-13.3c4-1.8,8.3-2.4,12.5-1.2 c3.5,1,6.1,3.3,6.8,7.1c0.6,3.2,0.2,6.3-1,9.3c-1.9,4.4-4.9,8.1-8.4,11.3c-3.7,3.4-7.8,6.4-12.3,8.7c-4.7,2.3-9.4,4.4-14.1,6.6 c-0.3,0.1-0.7,0.6-0.7,0.9c-0.2,4.8,0.7,9.4,3.6,13.3c2.6,3.4,5.9,5.5,10.3,6c5.8,0.6,10.6-1.5,14.8-5.2c2.7-2.4,5.2-5.2,7.7-7.9 c1.1-1.1,1.1-1.2,2.3-0.1C221.3,148.4,221.6,148.7,222.2,149.2z M182.2,138.2c3.1-1.6,5.9-2.9,8.5-4.5c3.4-2.2,6.7-4.5,9.8-7.1 c4.1-3.6,7.2-8.2,9.4-13.2c1.1-2.6,1.9-5.3,1.7-8.2c-0.3-3.4-2.5-4.7-5.3-4.6c-2.2,0.1-4.2,1-6,2.2c-2.3,1.5-4.3,3.4-5.8,5.6 c-2.3,3.3-4.6,6.6-6.5,10.2c-2.3,4.3-3.9,9-4.8,13.9C182.9,134.3,182.6,136.1,182.2,138.2z"}))),l.a.createElement("svg",{id:"burst",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 891.6 695.7"},l.a.createElement("defs",null),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M713.1,157.9c0,0,17-55,80-62"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M628.1,120.9c0,0,11.5-62.5,66.5-83.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M553.1,107.9c0,2.8,7.5-57.3,33.5-92.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M780.6,213.6c0,0,36-28.7,99-21.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M792.6,301.6c0,0,36-7.7,99-0.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M487.6,98.9c0,0-5.8-36.4,4.9-98.8"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M713.1,537.8c0,0,17,55,80,62"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M628.1,574.8c0,0,11.5,62.5,66.5,83.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M553.1,587.8c0-2.8,7.5,57.3,33.5,92.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M780.6,482.1c0,0,36,28.7,99,21.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M792.6,394.1c0,0,36,7.7,99,0.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M487.6,596.8c0,0-5.8,36.4,4.9,98.8"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M178.6,157.9c0,0-17-55-80-62"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M263.6,120.9c0,0-11.5-62.5-66.5-83.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M338.6,107.9c0,2.8-7.5-57.3-33.5-92.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M111,213.6c0,0-36-28.7-99-21.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M99,301.6c0,0-36-7.7-99-0.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M404,98.9c0,0,5.8-36.4-4.9-98.8"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M178.6,537.8c0,0-17,55-80,62"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M263.6,574.8c0,0-11.5,62.5-66.5,83.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M338.6,587.8c0-2.8-7.5,57.3-33.5,92.5"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M111,482.1c0,0-36,28.7-99,21.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M99,394.1c0,0-36,7.7-99,0.2"}),l.a.createElement("path",{id:"burst-piece",className:"burst-before",strokeWidth:"0",stroke:"#f1c40f",fill:"#f1c40f",fillOpacity:"1",d:"M404,596.8c0,0,5.8,36.4-4.9,98.8"})))),l.a.createElement("div",{id:"hello-bg",className:"h5 pv7"}))}}]),t}(c.Component)),z=a(49),I=a(48),G=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(z.a,null,l.a.createElement("div",null,l.a.createElement(I.a,{path:"/",component:S,exact:!0}),l.a.createElement(I.a,{path:"/randoms",component:R})))}}]),t}(c.Component);a(45);i.a.render(l.a.createElement(G,null),document.getElementById("root"))}],[[25,2,1]]]);
//# sourceMappingURL=main.7fdfbe1f.chunk.js.map