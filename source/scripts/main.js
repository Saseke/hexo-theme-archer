!function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";var r=o(1),n=o(2),i=o(3),s=o(6),a=o(7),l=o(8);(0,r.initBackTop)(),(0,n.toggleHeader)(),(0,a.sidebarInit)(),(0,i.initShareBox)(),(0,l.initTag)(),(0,s.initMobile)()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.initBackTop=function(){function t(){s||(s=!0,requestAnimationFrame(function(){$(document).scrollTop()>i?n||(n=!0,e.addClass("back-top-show"),o.addClass("header-sidebar-menu-black")):n&&(n=!1,e.removeClass("back-top-show"),o.removeClass("header-sidebar-menu-black")),s=!1}))}var e=$(".back-top:first"),o=$(".header-sidebar-menu:first"),r=$(".site-background:first"),n=!1,i=r.offset().top+r.outerHeight()-o[0].offsetTop,s=!1;$(document).on("scroll",function(){t()}),e.on("click",function(){var t=setInterval(function(){var e=$(document).scrollTop();window.scrollTo(0,Math.max(Math.floor(.8*e))),0===e&&clearInterval(t)},20)})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.toggleHeader=function(){function t(){u||(requestAnimationFrame(function(){$(document).scrollTop()>h?c||(o&&(r.addClass("banner-show"),s.addClass("toc-fixed")),l.addClass("home-link-hide"),c=1):c&&(o&&(r.removeClass("banner-show"),s.removeClass("toc-fixed")),l.removeClass("home-link-hide"),c=0),u=!1}),u=!0)}function e(t){f||requestAnimationFrame(function(){r.hasClass("banner-show")?($(t).scrollTop()>d?a.removeClass("toggle-banner-show-site"):$(t).scrollTop()<d&&a.addClass("toggle-banner-show-site"),d=$(t).scrollTop(),f=!1):f=!1}),f=!0}var o=0;void 0!==document.getElementsByClassName("post-body")[0]&&(o=1);var r=$(".banner:first"),n=r.find(".post-banner:first"),i=$(".site-background:first"),s=$(".toc:first"),a=$(".toggle-banner:first"),l=r.parent().find(".home-link:first"),h=i.offset().top+i.outerHeight(),c=0,u=!1;if($(document).on("scroll",function(){t()}),o){r[0].addEventListener("transitionend",function(t){t.target==r[0]&&(c||a.removeClass("toggle-banner-show-site"))});var d=0,f=!1;$(document).on("scroll",function(){e(this)}),n.on("click",function(){var t=setInterval(function(){var e=$(document).scrollTop();window.scrollTo(0,Math.max(Math.floor(.8*e))),0===e&&clearInterval(t)},20)})}}},function(t,e,o){"use strict";function r(){function t(t){t.stopPropagation(),h.classList.remove("QRcode-mask-opacity-show"),c.classList.remove("QRcode-mask-opacity-show"),c.addEventListener("transitionend",function(){-1===h.className.indexOf("QRcode-mask-opacity-show")&&(h.classList.remove("QRcode-mask-show"),c.classList.remove("QRcode-mask-show"))})}var e=document.getElementsByClassName("QRcode-close")[0];e&&(e.addEventListener("click",t),h.addEventListener("click",t))}function n(t){(0,l.makeQR)(t),h.classList.add("QRcode-mask-show"),c.classList.add("QRcode-mask-show"),requestAnimationFrame(function(){h.classList.add("QRcode-mask-opacity-show"),c.classList.add("QRcode-mask-opacity-show")})}function i(t,e){return t.replace(/<%-sURL%>/g,e.sURL).replace(/<%-sTitle%>/g,e.sTitle).replace(/<%-sDesc%>/g,e.sDesc).replace(/<%-sPic%>/g,e.sPic)}function s(t,e){var o=void 0;switch(t){case"to-weibo":o=i("http://service.weibo.com/share/share.php?url=<%-sURL%>&title=<%-sTitle%>&pic=<%-sPic%>",e);break;case"to-qq":o=i("http://connect.qq.com/widget/shareqq/index.html?url=<%-sUrl%>&title=<%-sTitle%>&source=<%-sDesc%>",e);break;case"to-twitter":o=i("https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sURL%>",e);break;default:break;case"to-wechat":n(e)}"to-wechat"!==t&&window.open(o)}function a(t){t.isInited=!0;var e=t.querySelectorAll("li"),o={sURL:t.dataset.href,sTitle:t.dataset.title,sDesc:t.dataset.title,sPic:""};e.forEach(function(t){t.addEventListener("click",function(){s(this.className,o)})},this)}Object.defineProperty(e,"__esModule",{value:!0}),e.initShareBox=void 0;var l=o(4),h=document.getElementsByClassName("qr-mask")[0],c=document.getElementsByClassName("QRcode-box")[0];e.initShareBox=function(){r();for(var t=void 0,e=document.getElementsByClassName("post-share"),o=e.length;o--;)e[o].addEventListener("mouseover",function(){t&&clearTimeout(t);var e=this.getElementsByClassName("share-box")[0];e.classList.add("share-box-show"),e.isInited||a(e)}),e[o].addEventListener("mouseout",function(){var e=this.getElementsByClassName("share-box")[0];t=setTimeout(function(){e.classList.remove("share-box-show")},100)})}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeQR=void 0;var r=o(5);e.makeQR=function(t){var e=document.getElementsByClassName("QRcode-box")[0],o=e.getElementsByTagName("canvas");o.length&&e.removeChild(o[0]);var n=e.getElementsByTagName("img");n.length&&e.removeChild(n[0]),new r.QRCode(e,{text:t.sURL,width:128,height:128,colorDark:"#222",colorLight:"#fff",correctLevel:r.QRCode.CorrectLevel.H})}},function(t,e){"use strict";var o;!function(){function t(t){this.mode=h.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,o=this.data.length;e<o;e++){var r=[],n=this.data.charCodeAt(e);n>65536?(r[0]=240|(1835008&n)>>>18,r[1]=128|(258048&n)>>>12,r[2]=128|(4032&n)>>>6,r[3]=128|63&n):n>2048?(r[0]=224|(61440&n)>>>12,r[1]=128|(4032&n)>>>6,r[2]=128|63&n):n>128?(r[0]=192|(1984&n)>>>6,r[1]=128|63&n):r[0]=n,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function r(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var r=0;r<t.length-o;r++)this.num[r]=t[r+o]}function n(t,e){this.totalCount=t,this.dataCount=e}function i(){this.buffer=[],this.length=0}function s(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var o=e.toString().match(/android ([0-9]\.[0-9])/i);o&&o[1]&&(t=parseFloat(o[1]))}return t}function a(t,e){for(var o=1,r=l(t),n=0,i=p.length;n<=i;n++){var s=0;switch(e){case c.L:s=p[n][0];break;case c.M:s=p[n][1];break;case c.Q:s=p[n][2];break;case c.H:s=p[n][3]}if(r<=s)break;o++}if(o>p.length)throw new Error("Too long data");return o}function l(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,o=this.parsedData.length;e<o;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var o=new t(e);this.dataList.push(o),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,o){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,o),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,o)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+o][e+r]=0<=o&&o<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,o=0;o<8;o++){this.makeImpl(!0,o);var r=d.getLostPoint(this);(0==o||t>r)&&(t=r,e=o)}return e},createMovieClip:function(t,e,o){var r=t.createEmptyMovieClip(e,o);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,s=0;s<this.modules[n].length;s++){var a=1*s;this.modules[n][s]&&(r.beginFill(0,100),r.moveTo(a,i),r.lineTo(a+1,i),r.lineTo(a+1,i+1),r.lineTo(a,i+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var r=t[e],n=t[o];if(null==this.modules[r][n])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[r+i][n+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){r=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=r}for(o=0;o<18;o++){var r=!t&&1==(e>>o&1);this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=r}},setupTypeInfo:function(t,e){for(var o=this.errorCorrectLevel<<3|e,r=d.getBCHTypeInfo(o),n=0;n<15;n++){i=!t&&1==(r>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){var i=!t&&1==(r>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var o=-1,r=this.moduleCount-1,n=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[r][s-a]){var l=!1;i<t.length&&(l=1==(t[i]>>>n&1)),d.getMask(e,r,s-a)&&(l=!l),this.modules[r][s-a]=l,-1==--n&&(i++,n=7)}if((r+=o)<0||this.moduleCount<=r){r-=o,o=-o;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,o,r){for(var s=n.getRSBlocks(t,o),a=new i,l=0;l<r.length;l++){var h=r[l];a.put(h.mode,4),a.put(h.getLength(),d.getLengthInBits(h.mode,t)),h.write(a)}for(var c=0,l=0;l<s.length;l++)c+=s[l].dataCount;if(a.getLengthInBits()>8*c)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*c+")");for(a.getLengthInBits()+4<=8*c&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;;){if(a.getLengthInBits()>=8*c)break;if(a.put(e.PAD0,8),a.getLengthInBits()>=8*c)break;a.put(e.PAD1,8)}return e.createBytes(a,s)},e.createBytes=function(t,e){for(var o=0,n=0,i=0,s=new Array(e.length),a=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,c=e[l].totalCount-h;n=Math.max(n,h),i=Math.max(i,c),s[l]=new Array(h);for(m=0;m<s[l].length;m++)s[l][m]=255&t.buffer[m+o];o+=h;var u=d.getErrorCorrectPolynomial(c),f=new r(s[l],u.getLength()-1).mod(u);a[l]=new Array(u.getLength()-1);for(m=0;m<a[l].length;m++){var g=m+f.getLength()-a[l].length;a[l][m]=g>=0?f.get(g):0}}for(var p=0,m=0;m<e.length;m++)p+=e[m].totalCount;for(var v=new Array(p),w=0,m=0;m<n;m++)for(l=0;l<e.length;l++)m<s[l].length&&(v[w++]=s[l][m]);for(m=0;m<i;m++)for(l=0;l<e.length;l++)m<a[l].length&&(v[w++]=a[l][m]);return v};for(var h={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},c={L:1,M:0,Q:3,H:2},u={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case u.PATTERN000:return(e+o)%2==0;case u.PATTERN001:return e%2==0;case u.PATTERN010:return o%3==0;case u.PATTERN011:return(e+o)%3==0;case u.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case u.PATTERN101:return e*o%2+e*o%3==0;case u.PATTERN110:return(e*o%2+e*o%3)%2==0;case u.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),o=0;o<t;o++)e=e.multiply(new r([1,f.gexp(o)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case h.MODE_NUMBER:return 10;case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:case h.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,r=0;r<e;r++)for(c=0;c<e;c++){for(var n=0,i=t.isDark(r,c),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var a=-1;a<=1;a++)c+a<0||e<=c+a||0==s&&0==a||i==t.isDark(r+s,c+a)&&n++;n>5&&(o+=3+n-5)}for(r=0;r<e-1;r++)for(c=0;c<e-1;c++){var l=0;t.isDark(r,c)&&l++,t.isDark(r+1,c)&&l++,t.isDark(r,c+1)&&l++,t.isDark(r+1,c+1)&&l++,0!=l&&4!=l||(o+=3)}for(r=0;r<e;r++)for(c=0;c<e-6;c++)t.isDark(r,c)&&!t.isDark(r,c+1)&&t.isDark(r,c+2)&&t.isDark(r,c+3)&&t.isDark(r,c+4)&&!t.isDark(r,c+5)&&t.isDark(r,c+6)&&(o+=40);for(c=0;c<e;c++)for(r=0;r<e-6;r++)t.isDark(r,c)&&!t.isDark(r+1,c)&&t.isDark(r+2,c)&&t.isDark(r+3,c)&&t.isDark(r+4,c)&&!t.isDark(r+5,c)&&t.isDark(r+6,c)&&(o+=40);for(var h=0,c=0;c<e;c++)for(r=0;r<e;r++)t.isDark(r,c)&&h++;return o+=10*(Math.abs(100*h/e/e-50)/5)}},f={glog:function(t){if(t<1)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)f.EXP_TABLE[g]=1<<g;for(g=8;g<256;g++)f.EXP_TABLE[g]=f.EXP_TABLE[g-4]^f.EXP_TABLE[g-5]^f.EXP_TABLE[g-6]^f.EXP_TABLE[g-8];for(g=0;g<255;g++)f.LOG_TABLE[f.EXP_TABLE[g]]=g;r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=f.gexp(f.glog(this.get(o))+f.glog(t.get(n)));return new r(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=f.glog(this.get(0))-f.glog(t.get(0)),o=new Array(this.getLength()),n=0;n<this.getLength();n++)o[n]=this.get(n);for(n=0;n<t.getLength();n++)o[n]^=f.gexp(f.glog(t.get(n))+e);return new r(o,0).mod(t)}},n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var o=n.getRsBlockTable(t,e);if(void 0==o)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=o.length/3,i=[],s=0;s<r;s++)for(var a=o[3*s+0],l=o[3*s+1],h=o[3*s+2],c=0;c<a;c++)i.push(new n(l,h));return i},n.getRsBlockTable=function(t,e){switch(e){case c.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case c.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case c.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case c.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},i.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var o=0;o<e;o++)this.putBit(1==(t>>>e-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],m=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)e.hasOwnProperty(r)&&o.setAttribute(r,e[r]);return o}var o=this._htOption,r=this._el,n=t.getModuleCount();Math.floor(o.width/n),Math.floor(o.height/n);this.clear();var i=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:o.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(i),i.appendChild(e("rect",{fill:o.colorLight,width:"100%",height:"100%"})),i.appendChild(e("rect",{fill:o.colorDark,width:"1",height:"1",id:"template"}));for(var s=0;s<n;s++)for(var a=0;a<n;a++)if(t.isDark(s,a)){var l=e("use",{x:String(a),y:String(s)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase()?m:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,o=this._el,r=t.getModuleCount(),n=Math.floor(e.width/r),i=Math.floor(e.height/r),s=['<table style="border:0;border-collapse:collapse;">'],a=0;a<r;a++){s.push("<tr>");for(var l=0;l<r;l++)s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+i+"px;background-color:"+(t.isDark(a,l)?e.colorDark:e.colorLight)+';"></td>');s.push("</tr>")}s.push("</table>"),o.innerHTML=s.join("");var h=o.childNodes[0],c=(e.width-h.offsetWidth)/2,u=(e.height-h.offsetHeight)/2;c>0&&u>0&&(h.style.margin=u+"px "+c+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var o=this;if(o._fFail=e,o._fSuccess=t,null===o._bSupportDataURI){var r=document.createElement("img"),n=function(){o._bSupportDataURI=!1,o._fFail&&o._fFail.call(o)};return r.onabort=n,r.onerror=n,r.onload=function(){o._bSupportDataURI=!0,o._fSuccess&&o._fSuccess.call(o)},void(r.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===o._bSupportDataURI&&o._fSuccess?o._fSuccess.call(o):!1===o._bSupportDataURI&&o._fFail&&o._fFail.call(o)}if(this&&this._android<=2.1){var o=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,n,i,s,a,l,h,c){if("nodeName"in t&&/img/i.test(t.nodeName))for(var u=arguments.length-1;u>=1;u--)arguments[u]=arguments[u]*o;else void 0===h&&(arguments[1]*=o,arguments[2]*=o,arguments[3]*=o,arguments[4]*=o);r.apply(this,arguments)}}var n=function(t,e){this._bIsPainted=!1,this._android=s(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,o=this._oContext,r=this._htOption,n=t.getModuleCount(),i=r.width/n,s=r.height/n,a=Math.round(i),l=Math.round(s);e.style.display="none",this.clear();for(var h=0;h<n;h++)for(var c=0;c<n;c++){var u=t.isDark(h,c),d=c*i,f=h*s;o.strokeStyle=u?r.colorDark:r.colorLight,o.lineWidth=1,o.fillStyle=u?r.colorDark:r.colorLight,o.fillRect(d,f,i,s),o.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,a,l),o.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,a,l)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}();(o=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:c.H},"string"==typeof e&&(e={text:e}),e)for(var o in e)this._htOption[o]=e[o];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(v=m),this._android=s(),this._el=t,this._oQRCode=null,this._oDrawing=new v(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new e(a(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},o.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},o.prototype.clear=function(){this._oDrawing.clear()},o.CorrectLevel=c}(),t.exports=o},function(t,e){"use strict";function o(t){t.matches?(console.log("mobile"),document.body.addEventListener("touchstart",function(){})):console.log("desktop")}Object.defineProperty(e,"__esModule",{value:!0});if(window.matchMedia){var r=window.matchMedia("(max-width: 900px)");r.addListener(o),o(r)}else window.addListener("resize",function(){o((window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>900?{matches:!1}:{matches:!0})},!1);e.initMobile=function(){}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.sidebarInit=function(){function t(t){n.addClass("sidebar-show"),i.addClass("wrapper-show-sidebar"),u.addClass("header-slide"),c.addClass("toc-slide"),t.stopPropagation()}function e(t){this.scrollHeight==this.clientHeight?window.event.preventDefault():this.scrollTop<=0?t.originalEvent.wheelDelta>0&&window.event.preventDefault():this.scrollTop>=this.scrollHeight-this.clientHeight&&t.originalEvent.wheelDelta<0&&window.event.preventDefault()}function o(){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!1,!0),s[0].dispatchEvent(t),h[0].dispatchEvent(t)}function r(t){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!1,!0),s[0].dispatchEvent(e),f.currTagName=t,f.dispatchEvent(e)}var n=$(".sidebar:first"),i=$(".wrapper:first"),s=$(".header-sidebar-menu:first"),a=n.find(".sidebar-content:first"),l=n.find(".sidebar-archive-link:first"),h=n.find(".sidebar-tags-link:first"),c=$(".toc:first"),u=$(".header:first"),d=n.find(".sidebar-header:first");s.on("click",function(e){t(e)}),n.on("click",function(t){t.stopPropagation()}),i.on("click",function(t){n.hasClass("sidebar-show")&&t.preventDefault(),n.removeClass("sidebar-show"),u.removeClass("header-slide"),i.removeClass("wrapper-show-sidebar"),c.removeClass("toc-slide")}),l.on("click",function(){a.addClass("sidebar-content-show-archive").removeClass("sidebar-content-show-tags"),d.addClass("sidebar-header-show-archive").removeClass("sidebar-header-show-tags")}),h.on("click",function(){a.addClass("sidebar-content-show-tags").removeClass("sidebar-content-show-archive"),d.addClass("sidebar-header-show-tags").removeClass("sidebar-header-show-archive")}),n.on("mousewheel",function(t){var o=t.target,r=n.find(".sidebar-tag-list:first"),i=n.find(".sidebar-archive:first");$.contains(r[0],o)||r===o?e.call(r[0],t):$.contains(i[0],o)||i===o?e.call(i[0],t):t.preventDefault()});var f=$(".sidebar-tags-name:first")[0];$(".post-tag").on("click",function(t){o(),r(t.target.dataset.href),t.stopPropagation()})}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.initTag=void 0;var r=o(9);e.initTag=function(){function t(t){for(var e=this,o=0;o<t.length;o++)!function(o){var r=t[o].tags;r.length&&r.forEach(function(t){if(n.has(t.name)){var e=n.get(t.name)+","+o.toString();n.set(t.name,e)}else n.set(t.name,o.toString())},e)}(o)}function e(t){var e=$('<li class="tag-post-item"><span class="archive-post-date">'+r.archUtil.dateFormater(new Date(Date.parse(t.date)),"yyyy-MM-dd")+"</span></li>"),o=$('<a class="archive-post-title" href="'+jsInfo.root+t.path+'">'+t.title+"</a>");return e.append(o),e}var o=void 0,n=new Map;!function(){var e=jsInfo.root+"content.json?t="+ +new Date,r=new XMLHttpRequest;r.responseType="",r.open("get",e,!0),r.onload=function(){200!=this.status&&304!=this.status||t(o=JSON.parse(this.responseText))},r.send()}(),$(".sidebar-tags-name:first").on("click",function(t){t.preventDefault();var r=t.target,i=void 0;16&this.compareDocumentPosition(r)&&("SPAN"===r.tagName?this.currTagName=r.firstChild.innerHTML:this.currTagName=r.innerHTML),i=this.currTagName;var s=n.get(i);if(s){var a=s.split(","),l=document.createDocumentFragment(),h=document.getElementsByClassName("sidebar-tag-list")[0];h.innerHTML="",a.forEach(function(t){l.appendChild(e(o[t])[0])}),h.appendChild(l)}})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={backTop:function(){var t=setInterval(function(){var e=document.body.scrollTop;document.body.scrollTop-=Math.max(Math.ceil(e/9)+2),0===e&&clearInterval(t)},20)},getScrollTop:function(){return document.documentElement.scrollTop||document.body.scrollTop},getAbsPosition:function(t){for(var e=t.offsetLeft,o=t.offsetTop;t=t.offsetParent;)e+=t.offsetLeft,o+=t.offsetTop;return{x:e,y:o}},dateFormater:function(t,e){var o={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in o)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return e},toggler:function(t,e,o,r,n,i){t&&"undefined"!=typeof window&&(t===window||t.nodeType)&&o.addEventListener(e,function(e){if(r)for(var o=r.split(/[, ]/),s=o.length;s--;)t.classList.add(o[s]);if(n)for(var a=n.split(/[, ]/),l=a.length;l--;)t.classList.remove(a[l]);i&&i(e)})}};e.archUtil=o}]);