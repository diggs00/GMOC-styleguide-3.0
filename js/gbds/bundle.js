/*!
 * 
 * name: @gbds/core
 * version: 4.0.19
 * date: Fri Oct 14 2022 10:15:08 GMT-0400 (Eastern Daylight Time)
 * Copyright 2021 GM Global Technology Operations LLC
 * All Rights Reserved.
 * This software is proprietary to GM Global Technology Operations LLC
 * and is protected by intellectual property laws and international
 * intellectual property treaties. Your access to this software is governed
 * by the terms of your license agreement with GM Global Technology Operations LLC.
 * Any other use of the software is strictly prohibited.
 * 
 */!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=26)}({26:function(t,e,s){"use strict";s.r(e);function i(t,e,s){let i,n;return function(){const r=arguments,o=function(){i=null,s||(n=t.apply(this,r))},a=s&&!i;return clearTimeout(i),i=setTimeout(o,e),a&&(n=t.apply(this,r)),n}}class n{static fromAttribute(t,e){switch(e){case"boolean":return null!==t&&"false"!==t;case"number":return null===t?null:Number(t);case"object":case"array":return JSON.parse(t)}return t}static toAttribute(t,e){switch(e){case"boolean":return!!t&&"";case"object":case"array":return JSON.stringify(t)}return t}}var r;!function(t){t.loaded="googleMapsApiLoaded",t.error="googleMapsApiLoadingError"}(r||(r={}));class o{static get isLoaded(){return"object"==typeof google&&"object"==typeof google.maps}static getScriptSource(t){let e=t.url?t.url:"https://maps.googleapis.com/maps/api/js";const s=t.language?"&language="+t.language:"",i=t.region?"&region="+t.region:"",n=t.channel?"&channel="+t.channel:"";return e+="?v=weekly&client="+t.clientId+n,`${e}${s}${i}&libraries=places`}static load(t){return o.isLoaded?new Promise(t=>t()):o.isLoading?new Promise((t,e)=>{window.addEventListener(r.loaded,()=>t(),{once:!0}),window.addEventListener(r.error,t=>e(t.detail),{once:!0})}):(o.isLoading=!0,new Promise((e,s)=>{const i=document.createElement("script");i.type="text/javascript",i.src=o.getScriptSource(t),i.onerror=()=>{o.isLoading=!1;const t=new Error("Google Maps API failed to load.");s(t),window.dispatchEvent(new CustomEvent(r.error,{detail:t}))},i.onload=()=>{o.isLoading=!1,e(),window.dispatchEvent(new CustomEvent(r.loaded))},document.body.appendChild(i)}))}}o.isLoading=!1;function a(t,e,s){Array.isArray(t)?(t.forEach(t=>t.setMap(e)),s&&s.addMarkers(t)):(t.setMap(e),s&&s.addMarker(t))}function l(t){Array.isArray(t)?t.forEach(t=>t.setMap(null)):t.clearMarkers()}const h=t=>new google.maps.Marker(t);function c(t,e){return Array.isArray(e)?e.forEach(e=>t.extend(e.getPosition())):t.extend(e.getPosition()),t}window.gmVhListenerAdded=window.gmVhListenerAdded||(()=>{const t=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")};return window.addEventListener("load",i(t,200),{once:!0}),window.addEventListener("resize",i(t,200)),!0})();function d(t="string",e=null){return(s,i)=>{const r=i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();if(e){if(!s.hasOwnProperty(e))throw new Error(`Member \`${e}\` does not exist on on target class.`);s.constructor.observedProps.set(r,{type:t,changedFn:e})}const o=function(){return n.fromAttribute(this.getAttribute(r),t)},a=function(e){this.setAttribute(r,n.toAttribute(e,t))};delete s[i]&&Object.defineProperty(s,i,{get:o,set:a,enumerable:!0})}}function u(t){return function(e){d("boolean")(e.prototype,"framework");const{onInit:s}=e.prototype;s&&(e.prototype.connectedCallback=function(){if(!this.framework){const t=document.readyState;"interactive"===t||"complete"===t?this.onInit():window.addEventListener("DOMContentLoaded",this.onInit.bind(this),{once:!0})}});customElements.get(t)||customElements.define(t,e)}}class g extends HTMLElement{constructor(){super()}static get observedAttributes(){return this.observedProps.keys()}attributeChangedCallback(t,e,s){const i=this.constructor.observedProps,{changedFn:r,type:o}=i.get(t),a=n.fromAttribute(e,o),l=n.fromAttribute(s,o);this[r](a,l)}}g.observedProps=new Map;var p,m=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};!function(t){t.activeSM="gb-active-sm",t.activeMED="gb-active-med",t.activeLG="gb-active-lg"}(p||(p={}));let _=class extends HTMLElement{constructor(){super(),this.hasClosedHeadline=!1}onInit(){this.expanderButton=this.querySelector(".gb-expander-btn"),this.expanderHeadline=this.querySelector(".gb-expander-btn .gb-expander-headline"),this.expanderContent=this.querySelector(".gb-expander-content"),this.expanderContentBody=this.querySelector(".gb-expander-content-body"),this.expanderButton.addEventListener("click",()=>this.onClick()),this.expanderButton.addEventListener("keydown",t=>this.handleKeydown(t)),this.closedHeadline&&this.openHeadline&&(this.hasClosedHeadline=!0),this.hasClosedHeadline&&(this.isOpen||this.dataDisabled?this.setHeadlineText(this.openHeadline):this.setHeadlineText(this.closedHeadline)),!this.dataDisabled&&this.expanderButton.hasAttribute("aria-expanded")&&this.expanderButton.setAttribute("aria-expanded",this.isOpen.toString())}disconnectedCallback(){this.expanderButton.removeEventListener("click",()=>this.onClick()),this.expanderButton.removeEventListener("keydown",t=>this.handleKeydown(t))}handleKeydown(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.onClick())}onClick(){this.dataDisabled||(this.isOpen?this.closeExpander():this.openExpander())}get isOpen(){return this.classList.contains("active")||"visible"===window.getComputedStyle(this.expanderContent).visibility}closeExpander(){const t=this.expanderContentBody.offsetHeight;this.expanderContent.style.height=t+"px",this.hasClosedHeadline&&this.setHeadlineText(this.closedHeadline),setTimeout(()=>{this.expanderContent.style.height="",this.classList.remove("active",p.activeSM,p.activeMED,p.activeLG),this.expanderButton.setAttribute("aria-expanded","false")},0)}openExpander(){const t=this.expanderContentBody.offsetHeight;this.expanderContent.addEventListener("transitionend",()=>{this.expanderContent.style.height=""},{once:!0}),this.hasClosedHeadline&&this.setHeadlineText(this.openHeadline),this.classList.add("active"),this.expanderContent.style.height=t+"px",this.expanderButton.setAttribute("aria-expanded","true")}setHeadlineText(t){t&&this.expanderHeadline&&(this.expanderHeadline.innerText=t)}};m([d("boolean")],_.prototype,"dataDisabled",void 0),m([d("string")],_.prototype,"openHeadline",void 0),m([d("string")],_.prototype,"closedHeadline",void 0),_=m([u("gb-expander")],_);class f{constructor(){!function(t,e){for(let s in e.prototype)t.prototype[s]=e.prototype[s]}(f,google.maps.OverlayView)}}function v(t){return Object.keys(t).reduce((e,s)=>(t[s]&&e.push(s+":"+t[s]),e),[]).join(";")}function y(t){return t?t+"px":void 0}class b extends f{constructor(t,e){super(),this.cluster_=t,this.styles_=e,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.style=null,this.setMap(t.getMap())}onAdd(){let t,e;const s=this.cluster_.getMarkerClusterer(),[i,n]=google.maps.version.split("."),r=100*parseInt(i,10)+parseInt(n,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){e=t})),google.maps.event.addDomListener(this.div_,"mousedown",()=>{t=!0,e=!1}),r>=332&&google.maps.event.addDomListener(this.div_,"touchstart",t=>{t.stopPropagation()}),google.maps.event.addDomListener(this.div_,"click",i=>{if(t=!1,!e){if(google.maps.event.trigger(s,"click",this.cluster_),google.maps.event.trigger(s,"clusterclick",this.cluster_),s.getZoomOnClick()){const t=s.getMaxZoom(),e=this.cluster_.getBounds();s.getMap().fitBounds(e),setTimeout((function(){s.getMap().fitBounds(e),null!==t&&s.getMap().getZoom()>t&&s.getMap().setZoom(t+1)}),100)}i.cancelBubble=!0,i.stopPropagation&&i.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",()=>{google.maps.event.trigger(s,"mouseover",this.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",()=>{google.maps.event.trigger(s,"mouseout",this.cluster_)})}onRemove(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)}draw(){if(this.visible_){const t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}}hide(){this.div_&&(this.div_.style.display="none"),this.visible_=!1}show(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0}getLabelDivHtml(){return`\n<div aria-label="${this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text)}" style="${v({position:"absolute",top:y(this.anchorText_[0]),left:y(this.anchorText_[1]),color:this.style.textColor,"font-size":y(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:y(this.style.width),"line-height":y(this.style.textLineHeight)})}" tabindex="0">\n  <span aria-hidden="true">${this.sums_.text}</span>\n</div>\n`}getImageElementHtml(){const t=(this.style.backgroundPosition||"0 0").split(" "),e=parseInt(t[0].replace(/^\s+|\s+$/g,""),10),s=parseInt(t[1].replace(/^\s+|\s+$/g,""),10);let i={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())i={width:y(this.style.width),height:y(this.style.height)};else{const[t,n,r,o]=[-1*s,-1*e+this.style.width,-1*s+this.style.height,-1*e];i={clip:`rect(${t}px, ${n}px, ${r}px, ${o}px)`}}const n=v(Object.assign({position:"absolute",top:y(s),left:y(e)},i));return`<img alt="${this.sums_.text}" aria-hidden="true" src="${this.style.url}" style="${n}"/>`}useStyle(t){this.sums_=t;let e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e),this.style=this.styles_[e],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+e)}setCenter(t){this.center_=t}createCss_(t){return v({"z-index":""+this.cluster_.getMarkerClusterer().getZIndex(),top:y(t.y),left:y(t.x),width:y(this.style.width),height:y(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})}getPosFromLatLng_(t){const e=this.getProjection().fromLatLngToDivPixel(t);return e.x=Math.floor(e.x-this.anchorIcon_[1]),e.y=Math.floor(e.y-this.anchorIcon_[0]),e}}class k{constructor(t){this.markerClusterer_=t,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new b(this,this.markerClusterer_.getStyles())}getSize(){return this.markers_.length}getMarkers(){return this.markers_}getCenter(){return this.center_}getMap(){return this.map_}getMarkerClusterer(){return this.markerClusterer_}getBounds(){const t=new google.maps.LatLngBounds(this.center_,this.center_),e=this.getMarkers();for(let s=0;s<e.length;s++)t.extend(e[s].getPosition());return t}remove(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_}addMarker(t){if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){const e=this.markers_.length+1,s=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,i=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(s,i),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);const e=this.markers_.length,s=this.markerClusterer_.getMaxZoom();if(null!==s&&this.map_.getZoom()>s)t.getMap()!==this.map_&&t.setMap(this.map_);else if(e<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(e===this.minClusterSize_)for(let t=0;t<e;t++)this.markers_[t].setMap(null);else t.setMap(null);return!0}isMarkerInClusterBounds(t){return this.bounds_.contains(t.getPosition())}calculateBounds_(){const t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)}updateIcon(){const t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)return void this.clusterIcon_.hide();if(t<this.minClusterSize_)return void this.clusterIcon_.hide();const s=this.markerClusterer_.getStyles().length,i=this.markerClusterer_.getCalculator()(this.markers_,s);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(i),this.clusterIcon_.show()}isMarkerAlreadyAdded_(t){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(let e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1}}const M=(t,e,s)=>void 0!==t[e]?t[e]:s;class C extends f{constructor(t,e=[],s={}){super(),this.options=s,this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.ariaLabelFn=this.options.ariaLabelFn||(()=>""),this.zIndex_=this.options.zIndex||google.maps.Marker.MAX_ZINDEX+1,this.gridSize_=this.options.gridSize||60,this.minClusterSize_=this.options.minimumClusterSize||2,this.maxZoom_=this.options.maxZoom||null,this.styles_=this.options.styles||[],this.title_=this.options.title||"",this.zoomOnClick_=M(this.options,"zoomOnClick",!0),this.averageCenter_=M(this.options,"averageCenter",!1),this.ignoreHidden_=M(this.options,"ignoreHidden",!1),this.enableRetinaIcons_=M(this.options,"enableRetinaIcons",!1),this.imagePath_=this.options.imagePath||C.IMAGE_PATH,this.imageExtension_=this.options.imageExtension||C.IMAGE_EXTENSION,this.imageSizes_=this.options.imageSizes||C.IMAGE_SIZES,this.calculator_=this.options.calculator||C.CALCULATOR,this.batchSize_=this.options.batchSize||C.BATCH_SIZE,this.batchSizeIE_=this.options.batchSizeIE||C.BATCH_SIZE_IE,this.clusterClass_=this.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(e,!0),this.setMap(t)}onAdd(){this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",()=>{const t=this.getMap(),e=t.minZoom||0,s=Math.min(t.maxZoom||100,t.mapTypes[t.getMapTypeId()].maxZoom),i=Math.min(Math.max(this.getMap().getZoom(),e),s);this.prevZoom_!=i&&(this.prevZoom_=i,this.resetViewport_(!1))}),google.maps.event.addListener(this.getMap(),"idle",()=>{this.redraw_()})]}onRemove(){for(let t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(let t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(let t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1}draw(){}setupStyles_(){if(!(this.styles_.length>0))for(let t=0;t<this.imageSizes_.length;t++){const e=this.imageSizes_[t];this.styles_.push(C.withDefaultStyle({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:e,width:e}))}}fitMapToMarkers(t){const e=this.getMarkers(),s=new google.maps.LatLngBounds;for(let t=0;t<e.length;t++)!e[t].getVisible()&&this.getIgnoreHidden()||s.extend(e[t].getPosition());this.getMap().fitBounds(s,t)}getGridSize(){return this.gridSize_}setGridSize(t){this.gridSize_=t}getMinimumClusterSize(){return this.minClusterSize_}setMinimumClusterSize(t){this.minClusterSize_=t}getMaxZoom(){return this.maxZoom_}setMaxZoom(t){this.maxZoom_=t}getZIndex(){return this.zIndex_}setZIndex(t){this.zIndex_=t}getStyles(){return this.styles_}setStyles(t){this.styles_=t}getTitle(){return this.title_}setTitle(t){this.title_=t}getZoomOnClick(){return this.zoomOnClick_}setZoomOnClick(t){this.zoomOnClick_=t}getAverageCenter(){return this.averageCenter_}setAverageCenter(t){this.averageCenter_=t}getIgnoreHidden(){return this.ignoreHidden_}setIgnoreHidden(t){this.ignoreHidden_=t}getEnableRetinaIcons(){return this.enableRetinaIcons_}setEnableRetinaIcons(t){this.enableRetinaIcons_=t}getImageExtension(){return this.imageExtension_}setImageExtension(t){this.imageExtension_=t}getImagePath(){return this.imagePath_}setImagePath(t){this.imagePath_=t}getImageSizes(){return this.imageSizes_}setImageSizes(t){this.imageSizes_=t}getCalculator(){return this.calculator_}setCalculator(t){this.calculator_=t}getBatchSizeIE(){return this.batchSizeIE_}setBatchSizeIE(t){this.batchSizeIE_=t}getClusterClass(){return this.clusterClass_}setClusterClass(t){this.clusterClass_=t}getMarkers(){return this.markers_}getTotalMarkers(){return this.markers_.length}getClusters(){return this.clusters_}getTotalClusters(){return this.clusters_.length}addMarker(t,e){this.pushMarkerTo_(t),e||this.redraw_()}addMarkers(t,e){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&this.pushMarkerTo_(t[e]);e||this.redraw_()}pushMarkerTo_(t){t.getDraggable()&&google.maps.event.addListener(t,"dragend",()=>{this.ready_&&(t.isAdded=!1,this.repaint())}),t.isAdded=!1,this.markers_.push(t)}removeMarker(t,e){const s=this.removeMarker_(t);return!e&&s&&this.repaint(),s}removeMarkers(t,e){let s=!1;for(let e=0;e<t.length;e++){const i=this.removeMarker_(t[e]);s=s||i}return!e&&s&&this.repaint(),s}removeMarker_(t){let e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(let s=0;s<this.markers_.length;s++)if(t===this.markers_[s]){e=s;break}return-1!==e&&(t.setMap(null),this.markers_.splice(e,1),!0)}clearMarkers(){this.resetViewport_(!0),this.markers_=[]}repaint(){const t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(let e=0;e<t.length;e++)t[e].remove()}),0)}getExtendedBounds(t){const e=this.getProjection(),s=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),i=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),n=e.fromLatLngToDivPixel(s);n.x+=this.gridSize_,n.y-=this.gridSize_;const r=e.fromLatLngToDivPixel(i);r.x-=this.gridSize_,r.y+=this.gridSize_;const o=e.fromDivPixelToLatLng(n),a=e.fromDivPixelToLatLng(r);return t.extend(o),t.extend(a),t}redraw_(){this.createClusters_(0)}resetViewport_(t){for(let t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(let e=0;e<this.markers_.length;e++){const s=this.markers_[e];s.isAdded=!1,t&&s.setMap(null)}}distanceBetweenPoints_(t,e){const s=(e.lat()-t.lat())*Math.PI/180,i=(e.lng()-t.lng())*Math.PI/180,n=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return 6371*(2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n)))}isMarkerInBounds_(t,e){return e.contains(t.getPosition())}addToClosestCluster_(t){let e=4e4,s=null;for(let i=0;i<this.clusters_.length;i++){const n=this.clusters_[i],r=n.getCenter();if(r){const i=this.distanceBetweenPoints_(r,t.getPosition());i<e&&(e=i,s=n)}}if(s&&s.isMarkerInClusterBounds(t))s.addMarker(t);else{const e=new k(this);e.addMarker(t),this.clusters_.push(e)}}createClusters_(t){if(!this.ready_)return;let e;0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),e=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));const s=this.getExtendedBounds(e),i=Math.min(t+this.batchSize_,this.markers_.length);for(let e=t;e<i;e++){const t=this.markers_[e];!t.isAdded&&this.isMarkerInBounds_(t,s)&&(!this.ignoreHidden_||this.ignoreHidden_&&t.getVisible())&&this.addToClosestCluster_(t)}if(i<this.markers_.length)this.timerRefStatic=window.setTimeout(()=>{this.createClusters_(i)},0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(let t=0;t<this.clusters_.length;t++)this.clusters_[t].updateIcon()}}static CALCULATOR(t,e){let s=0;const i=t.length;let n=i;for(;0!==n;)n=Math.floor(n/10),s++;return s=Math.min(s,e),{text:i.toString(),index:s,title:""}}static withDefaultStyle(t){return Object.assign({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:t.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},t)}}C.BATCH_SIZE=2e3,C.BATCH_SIZE_IE=500,C.IMAGE_PATH="../images/m",C.IMAGE_EXTENSION="png",C.IMAGE_SIZES=[53,56,66,78,90];var L=C,x=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},w=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function o(t){try{l(i.next(t))}catch(t){r(t)}}function a(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,a)}l((i=i.apply(t,e||[])).next())}))};let I=class extends g{constructor(){super(),this._centerOfWorld={lat:0,lng:0},this._defaultZoom=10,this._markers=[],this._markerListeners=[]}onInit(){return w(this,void 0,void 0,(function*(){this.innerHTML='<div class="gb-map"></div>';const t=this._getLoaderOptions();try{yield o.load(t),this._geocoder=new google.maps.Geocoder,yield this._getLocation(this.prompt)}catch(t){this.dispatchEvent(new CustomEvent(r.error,{detail:t}))}}))}_addClickSelectedListener(t){t.addListener("click",()=>{const e=this._markers.filter(t=>t.getIcon()===this.markerSelectedImage);e.length>0&&e[0].setIcon(this.markerImage),t.setIcon(this.markerSelectedImage)})}_dispatchGeoError(t){this.dispatchEvent(new CustomEvent("geoError",{detail:{code:t.code,message:t.message}}))}_getLoaderOptions(){const t={clientId:this.clientId,channel:this.channel};return t.region=this.region,t.language=this.language,t}_getLocation(t){return w(this,void 0,void 0,(function*(){const e=t=>w(this,void 0,void 0,(function*(){this._dispatchGeoError(t),yield this._initFromGeocodedLocation()})),s=t=>{const e=new google.maps.LatLng(t.coords.latitude,t.coords.longitude);this._initMap(e,this._zoom)};t?navigator.geolocation.getCurrentPosition(s,e,{timeout:1e3}):yield this._initFromGeocodedLocation()}))}_initFromGeocodedLocation(){return w(this,void 0,void 0,(function*(){try{const t=yield this.geocodeLocation(this.defaultMapLocation);this._initMap(t.geometry.location,this._zoom)}catch(t){this._initMap(this._centerOfWorld,this._zoom)}}))}_initMap(t,e){this._map=new google.maps.Map(this.querySelector(".gb-map"),{center:t,mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:e,mapTypeControl:!1,streetViewControl:!1,zoomControlOptions:{position:this.zoomControlPosition},fullscreenControlOptions:{position:this.fullScreenControlPosition}}),this.cluster&&this._initializeCluster(),this.markers&&this.markers.length>0&&this.setMarkers(this.markers);const s=new google.maps.OverlayView;s.draw=function(){this.getPanes().markerLayer.className="markerLayer"},s.setMap(this._map),google.maps.event.addListener(this._map,"dragend",t=>{this.dispatchEvent(new CustomEvent("mapDragEnd",{detail:{lat:this._map.getCenter().lat(),lng:this._map.getCenter().lng()}}))})}_initializeCluster(){this._clusterer=new L(this._map,null,{imagePath:this.clusterImagePath||"https://brands.gm-cdn.com/gbds/images/google-maps/m",clusterClass:"gb-map-cluster",styles:[{url:this.clusterImagePath,height:45,width:45}]})}_configureMarkerIcons(t){this.markerImage&&t.setIcon(this.markerImage)}_configureMarkerClickListeners(t){this.markerImage&&this.markerSelectedImage&&this._addClickSelectedListener(t),t.addListener("click",()=>this.dispatchEvent(new CustomEvent("markerSelected",{detail:t}))),this.scrollToMarker&&this._markerListeners.push(((t,e,s=0,i=0)=>t.addListener("click",()=>{if(s||i){const n=Math.pow(2,e.getZoom()),r=e.getProjection().fromLatLngToPoint(t.getPosition()),o=new google.maps.Point(s/n||0,i/n||0),a=new google.maps.Point(r.x-o.x,r.y+o.y),l=e.getProjection().fromPointToLatLng(a);e.panTo(l)}else e.panTo(t.getPosition())}))(t,this._map,this.scrollXOffset,this.scrollYOffset))}_updateMarkerListenerOffsets(){this._markerListeners.forEach(t=>t.remove()),this._markerListeners=[],this._markers.forEach(t=>{this._configureMarkerClickListeners(t)})}_updateMarkers(){this._map&&this.setMarkers(this.markers)}get _zoom(){var t;return null!==(t=this.zoom)&&void 0!==t?t:this._defaultZoom}addMarker(t){const e=c(this._map.getBounds(),t);a(t,this._map,this._clusterer),this._configureMarkerIcons(t),this._configureMarkerClickListeners(t),this._markers.push(t),this._map.fitBounds(e)}clearMarkers(){this._clusterer?l(this._clusterer):l(this._markers),this._markers=[],this._markerListeners=[]}geocodeLocation(t,e){return new Promise((s,i)=>{const n=function(t){return void 0!==t.lat}(t)?{location:t}:{address:t,region:e||this.region};this._geocoder.geocode(n,(t,e)=>{if(e===google.maps.GeocoderStatus.OK){const e=t[0];s(e)}else i(e)})})}getAllMarkers(){return this._markers}getMarker(t){return this._markers.find(e=>e.getPosition().equals(t))}setMarkers(t){this.clearMarkers();const e=t[0].getPosition?t:t.map(h);a(e,this._map,this._clusterer),e.forEach(t=>{this._configureMarkerIcons(t),this._configureMarkerClickListeners(t)});const s=c(new google.maps.LatLngBounds,e);this._markers=e,this._map.fitBounds(s)}resetMapBounds(){const t=c(new google.maps.LatLngBounds,this._markers);this._map.fitBounds(t)}resetMapCenterAndZoom(){return w(this,void 0,void 0,(function*(){try{const t=yield this.geocodeLocation(this.defaultMapLocation);this.setCenterAndZoom(t.geometry.location,this._zoom)}catch(t){this.setCenterAndZoom(this._centerOfWorld,this._zoom)}}))}setCenterAndZoom(t,e){this._map.setZoom(e),this._map.setCenter(t)}get center(){return this._map.getCenter()}get currentZoom(){return this._map.getZoom()}getPlaceFromAmbiguousTerm(t){return w(this,void 0,void 0,(function*(){const e=new google.maps.places.PlacesService(this._map);return new Promise((s,i)=>{e.findPlaceFromQuery({query:t,fields:["formatted_address","geometry"]},(t,e)=>{"OK"===e?s(t):i(e)})})}))}popInfoWindowForMarker(t,e){new google.maps.InfoWindow({content:e}).open(this._map,t)}};x([d()],I.prototype,"channel",void 0),x([d()],I.prototype,"clientId",void 0),x([d("boolean")],I.prototype,"cluster",void 0),x([d()],I.prototype,"clusterImagePath",void 0),x([d()],I.prototype,"language",void 0),x([d()],I.prototype,"markerImage",void 0),x([d()],I.prototype,"markerSelectedImage",void 0),x([d("boolean")],I.prototype,"prompt",void 0),x([d()],I.prototype,"region",void 0),x([d("boolean")],I.prototype,"scrollToMarker",void 0),x([d()],I.prototype,"defaultMapLocation",void 0),x([d("number")],I.prototype,"zoom",void 0),x([d("array","_updateMarkers")],I.prototype,"markers",void 0),x([d("number","_updateMarkerListenerOffsets")],I.prototype,"scrollXOffset",void 0),x([d("number","_updateMarkerListenerOffsets")],I.prototype,"scrollYOffset",void 0),x([d("number")],I.prototype,"zoomControlPosition",void 0),x([d("number")],I.prototype,"fullScreenControlPosition",void 0),I=x([u("gb-google-map")],I);var E,S=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o},P=function(t,e,s,i){return new(s||(s=Promise))((function(n,r){function o(t){try{l(i.next(t))}catch(t){r(t)}}function a(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,a)}l((i=i.apply(t,e||[])).next())}))};!function(t){t.stackedTabClosed="gb-stackedTabClosed",t.stackedTabOpened="gb-stackedTabOpened"}(E||(E={}));let T=class extends HTMLElement{constructor(){super(),this._tabContainerMap=new Map}onInit(){return P(this,void 0,void 0,(function*(){this._tabButtons=Array.from(this.querySelectorAll(".content-button button")),this._contentContainers=Array.from(this.querySelectorAll(".content-container")),this._backButtons=Array.from(this.querySelectorAll(".content-container .back-button")),this._multipleDefaultCheck(),this._tabButtons.forEach(t=>{const e=this._contentContainers.find(e=>e.dataset.contentId===t.dataset.tabId),s=this._backButtons.find(e=>e.parentElement.dataset.contentId===t.dataset.tabId);this._tabContainerMap.set(t.dataset.tabId,{tabButton:t,content:e,backButton:s})}),this.defaultTab.parentElement.classList.toggle("active"),this.isStackedView?this._tabContainerMap.get(this.defaultTab.dataset.tabId).content.classList.add("visible"):this.toggleTab(this.defaultTab),this._addTabListeners(),"rtl"===document.dir&&(this.style.setProperty("--rotate-stacked-button-arrow","rotate(180deg)"),this.style.setProperty("--rotate-back-button-arrow","rotate(0deg)"))}))}_multipleDefaultCheck(){this._tabButtons.filter(t=>t.parentElement.classList.contains("default")).length>1&&console.warn("gb-tab-nav: Multiple tabs set as default. Please only set one tab as the default.")}_addTabListeners(){this._tabButtons.forEach(t=>{t.addEventListener("click",t=>{this.toggleTab(t.currentTarget),t.preventDefault()})})}_setFirstLastTabbableElements(t,e){const{first:s,last:i}=(t=>{const e=Array.from(t.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(t=>!t.hasAttribute("disabled")&&t.offsetParent);return{first:e[0],last:e[e.length-1]}})(t);this._firstFocusableElement=s||e,this._lastFocusableElement=i||e}toggleTab(t){const e=t.dataset.tabId,s=this.openTab;s&&s.parentElement.classList.remove("active"),t.parentElement.classList.toggle("active"),this.toggleContainer(e)}toggleContainer(t){const e=this._tabContainerMap.get(t).content,s=this._tabContainerMap.get(t).backButton;if(this.openContainer&&this.openContainer.classList.remove("visible","open"),this.lastOpened&&this.lastOpened.classList.remove("last-opened"),this.isStackedView){let i=this.getBoundingClientRect().y<0?0:this.getBoundingClientRect().y;this.isInFlyout&&(i=this.closest("gb-flyout").getBoundingClientRect().y),this._setFirstLastTabbableElements(e,s),s.addEventListener("keydown",e=>{(function(t){return"Tab"===t.key&&t.shiftKey})(e)&&(this.closeTab(t),e.preventDefault())}),this._lastFocusableElement.addEventListener("keydown",t=>{(function(t){return"Tab"===t.key&&!t.shiftKey})(t)&&t.currentTarget!==s&&(s.focus(),t.preventDefault())}),e.style.top=i+"px",e.style.height="calc(100% - "+i+"px)",((t,e)=>{const s=()=>{t.classList.remove("opening"),t.classList.add("open"),e&&e()};t.addEventListener("animationend",s,{once:!0}),t.classList.add("opening")})(e),this.dispatchEvent(new CustomEvent(E.stackedTabOpened,{detail:{openContainer:e}}))}e.classList.add("visible"),s.focus(),s.addEventListener("click",()=>this.closeTab(t))}closeTab(t){const e=this._tabContainerMap.get(t).content;void 0!==this.lastOpened&&this.lastOpened.classList.remove("last-opened"),e.classList.remove("visible"),((t,e)=>{const s=()=>{t.classList.remove("closing"),e&&e()};t.addEventListener("animationend",s,{once:!0}),t.classList.remove("open"),t.classList.add("closing")})(e),this.dispatchEvent(new CustomEvent(E.stackedTabClosed,{detail:{closedContainer:e}})),e.classList.add("last-opened"),this._tabContainerMap.get(t).tabButton.focus()}get isStackedView(){return this._tabButtons.find(t=>"inline-block"!==window.getComputedStyle(t).display)}get isInFlyout(){return null!=this.closest("gb-flyout")}get openTab(){return this._tabButtons.find(t=>t.parentElement.classList.contains("active"))}get defaultTab(){return this._tabButtons.find(t=>t.parentElement.classList.contains("default"))}get openContainer(){return this._contentContainers.find(t=>t.classList.contains("visible"))}get lastOpened(){return this._contentContainers.find(t=>t.classList.contains("last-opened"))}};T=S([u("gb-tab-nav")],T)}});