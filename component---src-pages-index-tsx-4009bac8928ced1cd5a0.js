(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return E});n(150),n(160),n(71);var r=n(0),a=n(142),o=n(154),i=n.n(o),c=n(155),l=n(157),m=n(153),p=n(151),s=n(152),d=n(145),u=n(148),f=n(222),g=n.n(f),h=Object(a.a)("@media (min-width:795px){.post-card:nth-child(6n + 1):not(.no-image){flex:1 1 100%;flex-direction:row;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-image-link{position:relative;flex:1 1 auto;border-radius:5px 0 0 5px;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-image{position:absolute;width:100%;height:100%;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-content{flex:0 1 357px;}.post-card:nth-child(6n + 1):not(.no-image) h2{font-size:2.6rem;}.post-card:nth-child(6n + 1):not(.no-image) p{font-size:1.8rem;line-height:1.55em;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-content-link{padding:30px 40px 0;}.post-card:nth-child(6n + 1):not(.no-image) .post-card-meta{padding:0 40px 30px;}}");t.default=function(e){var t=d.a.siteRootUrl+e.data.social_bg.childImageSharp.fluid.src,n=e.data.header.childImageSharp.fluid.sizes.split(", ")[1].split("px")[0],a=String(Number(n)/e.data.header.childImageSharp.fluid.aspectRatio);return r.createElement(s.a,{className:""+h},r.createElement(i.a,null,r.createElement("title",null,d.a.title),r.createElement("meta",{name:"description",content:d.a.description}),r.createElement("meta",{property:"og:site_name",content:d.a.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:title",content:d.a.title}),r.createElement("meta",{property:"og:description",content:d.a.description}),r.createElement("meta",{property:"og:url",content:d.a.siteUrl}),r.createElement("meta",{property:"og:image",content:t}),r.createElement("meta",{property:"article:publisher",content:d.a.facebook}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:d.a.title}),r.createElement("meta",{name:"twitter:description",content:d.a.description}),r.createElement("meta",{name:"twitter:url",content:d.a.siteUrl}),r.createElement("meta",{name:"twitter:image",content:t}),r.createElement("meta",{name:"twitter:site",content:d.a.twitterHandle}),r.createElement("meta",{property:"og:image:width",content:n}),r.createElement("meta",{property:"og:image:height",content:a}),r.createElement("meta",{name:"google-site-verification",content:"VYMr-1LuAaJC6SzJkR1x_CRPTWZWJNMZYXCQh0YfRjI"}),r.createElement("link",{rel:"shortcut icon",href:g.a}),";"),r.createElement(p.a,null,r.createElement("header",{className:u.e+" "+u.k,style:{backgroundImage:"url('"+e.data.header.childImageSharp.fluid.src+"')"}},r.createElement("div",{className:""+u.j},r.createElement(u.f,null,r.createElement(u.h,null,e.data.logo?r.createElement("img",{style:{maxHeight:"45px"},src:e.data.logo.childImageSharp.fixed.src,alt:d.a.title}):d.a.title),r.createElement(u.d,null,d.a.description)),r.createElement(l.a,{isHome:!0}))),r.createElement("main",{id:"site-main",className:u.g+" "+u.k},r.createElement("div",{className:""+u.j},r.createElement("div",{className:u.b+" "+u.c},e.data.allMarkdownRemark.edges.map(function(e){return r.createElement(m.a,{key:e.node.fields.slug,post:e.node})})))),e.children,r.createElement(c.a,null)))};var E="1647128154"},158:function(e,t,n){var r=n(74),a=n(46),o=n(29),i=n(70),c=n(22),l=n(72),m=Object.getOwnPropertyDescriptor;t.f=n(14)?m:function(e,t){if(e=o(e),t=i(t,!0),l)try{return m(e,t)}catch(e){}if(c(e,t))return a(!r.f.call(e,t),e[t])}},160:function(e,t,n){"use strict";var r=n(5),a=n(22),o=n(13),i=n(165),c=n(70),l=n(21),m=n(167).f,p=n(158).f,s=n(25).f,d=n(168).trim,u=r.Number,f=u,g=u.prototype,h="Number"==o(n(76)(g)),E="trim"in String.prototype,y=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=E?t.trim():d(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,l=t.slice(2),m=0,p=l.length;m<p;m++)if((i=l.charCodeAt(m))<48||i>a)return NaN;return parseInt(l,r)}}return+t};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof u&&(h?l(function(){g.valueOf.call(n)}):"Number"!=o(n))?i(new f(y(t)),n,u):y(t)};for(var N,b=n(14)?m(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;b.length>I;I++)a(f,N=b[I])&&!a(u,N)&&s(u,N,p(f,N));u.prototype=g,g.constructor=u,n(15)(r,"Number",u)}},165:function(e,t,n){var r=n(10),a=n(166).set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},166:function(e,t,n){var r=n(10),a=n(11),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(16)(Function.call,n(158).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},167:function(e,t,n){var r=n(73),a=n(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},168:function(e,t,n){var r=n(24),a=n(23),o=n(21),i=n(169),c="["+i+"]",l=RegExp("^"+c+c+"*"),m=RegExp(c+c+"*$"),p=function(e,t,n){var a={},c=o(function(){return!!i[e]()||"​"!="​"[e]()}),l=a[e]=c?t(s):i[e];n&&(a[n]=l),r(r.P+r.F*c,"String",a)},s=p.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(m,"")),e};e.exports=p},169:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},222:function(e,t,n){e.exports=n.p+"static/favicon-84cb9d3bd5b5608b1f6a90242cbd556e.ico"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4009bac8928ced1cd5a0.js.map