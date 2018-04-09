'use strict';if(typeof window==='undefined')var window=typeof global==='undefined'?{}:global;(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('index',[],b):'object'==typeof exports?exports.index=b():a.index=b()})(window,function(){return function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={0:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{configurable:!1,enumerable:!0,get:c})},d.r=function(a){Object.defineProperty(a,'__esModule',{value:!0})},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='';var h=window.webpackJsonp_name_=window.webpackJsonp_name_||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([83,2]),c()}({83:function(a,b,c){c(84),c(31),c(85),a.exports=c(87)},85:function(){},87:function(a,b,c){'use strict';function d(b){return b&&b.__esModule?b:{default:b}}b.__esModule=!0,b.Documentation=void 0;var e=c(24),o=d(e),f=c(29),g=d(f),h=c(44),i=d(h),j=c(50),k=d(j),p=c(112),l=c(82),m=d(l),n=b.Documentation=function(h){function a(){return(0,g.default)(this,a),(0,i.default)(this,h.apply(this,arguments))}return(0,k.default)(a,h),a.prototype.initialize=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],c=this,d=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return this.startUpAnimationIsComplete=b,this._activateLanguageSupport=d,e&&(this.languageHandler=e),this._options={onExamplesLoaded:this.constructor.noop,domNodeSelectorPrefix:'body.{1}',codeTableWrapper:'<div class="table-responsive">',showExample:{pattern:'^ *showExample(: *([^ ]+))? *$',domNodeName:'#comment',htmlWrapper:'\n                    <div class="show-example-wrapper">\n                        <h3>\n                            Example:\n                            <!--deDE:Beispiel:-->\n                            <!--frFR:Exemple:-->\n                        </h3>\n                    </div>\n                '},domNode:{tableOfContentLinks:'.toc ul li a[href^="#"]',aboutThisWebsiteLink:'a[href="#about-this-website"]',homeLink:'a[href="#home"]',aboutThisWebsiteSection:'.about-this-website',mainSection:'.main-content',codeWrapper:'.codehilite',code:'.codehilite pre, code'},section:{aboutThisWebsite:{fadeOut:{duration:'fast'},fadeIn:{duration:'fast'}},main:{fadeOut:{duration:'fast'},fadeIn:{duration:'fast'}}}},this._activateLanguageSupport=a.activateLanguageSupport,a.activateLanguageSupport=!1,h.prototype.initialize.call(this,a),this._activateLanguageSupport||(this._activateLanguageSupport=this._parentOptions.activateLanguageSupport),'location'in p.$.global&&p.$.global.location.hash||(p.$.global.location.hash=this.$domNodes.homeLink.attr('href')),this.$domNodes.aboutThisWebsiteSection.hide(),this._showExamples()._makeCodeEllipsis().on(this.$domNodes.tableOfContentLinks,'click',function(d){var a=(0,p.$)(d.target).attr('href');a&&'#'!==a?p.$.scrollTo(a,'slow'):c.scrollToTop()}),this._options.section.aboutThisWebsite.fadeOut.always=function(){return c.$domNodes.mainSection.fadeIn(c._options.section.main.fadeIn)},this._options.section.main.fadeOut.always=function(){return c.$domNodes.aboutThisWebsiteSection.fadeIn(c._options.section.aboutThisWebsite.fadeIn)},this.on(this.$domNodes.aboutThisWebsiteLink,'click',function(){return c.scrollToTop().$domNodes.mainSection.fadeOut(c._options.section.main.fadeOut)}),this.on(this.$domNodes.homeLink,'click',function(){return c.scrollToTop().$domNodes.aboutThisWebsiteSection.fadeOut(c._options.section.aboutThisWebsite.fadeOut)}),this},a.prototype._onExamplesLoaded=function(){return this.$domNodes=this.grabDomNode(this._options.domNode),this.startUpAnimationIsComplete&&this._activateLanguageSupport&&!this._languageHandler&&(this._languageHandler=p.$.Language(this._options.language)),this},a.prototype._onSwitchSection=function(a){return this.$domNodes.tableOfContentLinks.add(this.$domNodes.aboutThisWebsiteLink).add(this.$domNodes.homeLink).filter('a[href="#'+a+'"]').trigger('click'),h.prototype._onSwitchSection.call(this,a)},a.prototype._onStartUpAnimationComplete=function(){var a;this._activateLanguageSupport&&!this._languageHandler&&(this._languageHandler=p.$.Language(this._options.language)),this.startUpAnimationIsComplete=!0,'location'in p.$.global&&this.$domNodes.tableOfContentLinks.add(this.$domNodes.aboutThisWebsiteLink).filter('a[href="'+p.$.global.location.href.substr(p.$.global.location.href.indexOf('#'))+'"]').trigger('click');for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=h.prototype._onStartUpAnimationComplete).call.apply(a,[this].concat(c))},a.prototype._makeCodeEllipsis=function(){var q=this;return this.$domNodes.code.each(function(a,b){var c=(0,p.$)(b),d=c.closest('table');d.length&&d.wrap(q._options.codeTableWrapper);for(var e='',f=c.html().split('\n'),g=0,h=f,i=Array.isArray(h),j=0,k=i?h:(0,o.default)(h);;){var r;if(i){if(j>=h.length)break;r=h[j++]}else{if(j=h.next(),j.done)break;r=j.value}var l=r,m=(0,p.$)('<div>'+l+'</div>').text().length-79;e+=0<m?q._replaceExcessWithDots(l,m):l,g+1!==f.length&&(e+='\n'),g+=1}c.html(e)}),this},a.prototype._replaceExcessWithDots=function(l,a){a+=3;var b,d='';b=(0,p.$)('<wrapper>'+l+'</wrapper>');for(var c=b.contents().get().reverse(),e=Array.isArray(c),f=0,g=e?c:(0,o.default)(c);;){var m;if(e){if(f>=c.length)break;m=c[f++]}else{if(f=c.next(),f.done)break;m=f.value}var h=m,i=(0,p.$)(h).wrap('<wrapper>').parent(),j=i.html();j||(j=h.textContent),a&&(h.textContent.length<a?(a-=h.textContent.length,j=''):h.textContent.length>=a&&(h.textContent=h.textContent.substr(0,h.textContent.length-a-1)+'...',a=0,j=i.html(),!j&&(j=h.textContent))),d=j+d}return d},a.prototype._showExamples=function(){var g=this;return this.$domNodes.parent.find(':not(iframe)').contents().each(function(a,b){if(b.nodeName===g._options.showExample.domNodeName){var c=b.textContent.match(new RegExp(g._options.showExample.pattern));if(c){var d=(0,p.$)(b).next(),e=d.find(g.$domNodes.codeWrapper).text();e||(e=d.text());try{2<c.length&&c[2]?['javascript','javascripts','js'].includes(c[2].toLowerCase())?d.after((0,p.$)('<script>').attr('type','text/javascript').text(e)):['css','cascadingstylesheet','cascadingstylesheets','stylesheet','stylesheets','sheet','sheets','style','styles'].includes(c[2].toLowerCase())?d.after((0,p.$)('<style>').attr('type','text/css').text(e)):'hidden'===c[2].toLowerCase()?d.after(e):d.after((0,p.$)(g._options.showExample.htmlWrapper).append(e)):d.after((0,p.$)(g._options.showExample.htmlWrapper).append(e))}catch(a){g.critical('Error while integrating code "'+e+'": '+a)}}}}),this.fireEvent('examplesLoaded'),this},a}(p.$.Website.class);n._name='Documentation',b.default=n,p.$.Documentation=function(){for(var d=arguments.length,a=Array(d),b=0;b<d;b++)a[b]=arguments[b];return p.$.Tools().controller(n,a)},p.$.Documentation.class=n;p.$.global.$documentationWebsite=p.$,p.$.noConflict(!0)(function(b){return b.Documentation({trackingCode:'UA-40192634-15',language:{selection:['enUS'],sessionDescription:'documentationWebsite{1}'}})})}})});