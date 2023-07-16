"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{524:function(t,r,e){var i=e(734),n=function(){if("u">typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),o={toTextLines:function(t){var r,e=[];for(t=[].concat(t);t.length;)"string"==typeof(r=t.pop())?e.unshift.apply(e,r.split(`
`)):Array.isArray(r)?t.push.apply(t,r):(0,i.i)(t)||e.unshift(""+r);return e},textSize:function(t,r,e){var i,n=[].concat(r),o=n.length,a=t.font,h=0;for(t.font=e.string,i=0;i<o;++i)h=Math.max(t.measureText(n[i]).width,h);return t.font=a,{height:o*e.lineHeight,width:h}},bound:function(t,r,e){return Math.max(t,Math.min(r,e))},arrayDiff:function(t,r){var e,i,n,o,a=t.slice(),h=[];for(e=0,n=r.length;e<n;++e)o=r[e],-1===(i=a.indexOf(o))?h.push([o,1]):a.splice(i,1);for(e=0,n=a.length;e<n;++e)h.push([a[e],-1]);return h},rasterize:function(t){return Math.round(t*n)/n}};function a(t,r){var e=r.x,i=r.y;if(null===e)return{x:0,y:-1};if(null===i)return{x:1,y:0};var n=t.x-e,o=t.y-i,a=Math.sqrt(n*n+o*o);return{x:a?n/a:0,y:a?o/a:-1}}function h(t,r,e){var i=0;return t<e.left?i|=1:t>e.right&&(i|=2),r<e.top?i|=8:r>e.bottom&&(i|=4),i}function l(t,r){var e,i,n=r.anchor,o=t;return r.clamp&&(o=function(t,r){for(var e,i,n,o=t.x0,a=t.y0,l=t.x1,s=t.y1,c=h(o,a,r),x=h(l,s,r);!(!(c|x)||c&x);)8&(e=c||x)?(i=o+(l-o)*(r.top-a)/(s-a),n=r.top):4&e?(i=o+(l-o)*(r.bottom-a)/(s-a),n=r.bottom):2&e?(n=a+(s-a)*(r.right-o)/(l-o),i=r.right):1&e&&(n=a+(s-a)*(r.left-o)/(l-o),i=r.left),e===c?c=h(o=i,a=n,r):x=h(l=i,s=n,r);return{x0:o,x1:l,y0:a,y1:s}}(o,r.area)),"start"===n?(e=o.x0,i=o.y0):"end"===n?(e=o.x1,i=o.y1):(e=(o.x0+o.x1)/2,i=(o.y0+o.y1)/2),function(t,r,e,i,n){switch(n){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:n*=Math.PI/180,e=Math.cos(n),i=Math.sin(n)}return{x:t,y:r,vx:e,vy:i}}(e,i,t.vx,t.vy,r.align)}var s={arc:function(t,r){var e=(t.startAngle+t.endAngle)/2,i=Math.cos(e),n=Math.sin(e),o=t.innerRadius,a=t.outerRadius;return l({x0:t.x+i*o,y0:t.y+n*o,x1:t.x+i*a,y1:t.y+n*a,vx:i,vy:n},r)},point:function(t,r){var e=a(t,r.origin),i=e.x*t.options.radius,n=e.y*t.options.radius;return l({x0:t.x-i,y0:t.y-n,x1:t.x+i,y1:t.y+n,vx:e.x,vy:e.y},r)},bar:function(t,r){var e=a(t,r.origin),i=t.x,n=t.y,o=0,h=0;return t.horizontal?(i=Math.min(t.x,t.base),o=Math.abs(t.base-t.x)):(n=Math.min(t.y,t.base),h=Math.abs(t.base-t.y)),l({x0:i,y0:n+h,x1:i+o,y1:n,vx:e.x,vy:e.y},r)},fallback:function(t,r){var e=a(t,r.origin);return l({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:e.x,vy:e.y},r)}},c=o.rasterize;(0,i.m)((function(t,r,e,i){this._config=t,this._index=i,this._model=null,this._rects=null,this._ctx=r,this._el=e}).prototype,{_modelize:function(t,r,e,n){var a,h=this._index,l=(0,i.t)((0,i.r)([e.font,{}],n,h)),c=(0,i.r)([e.color,i.d.color],n,h);return{align:(0,i.r)([e.align,"center"],n,h),anchor:(0,i.r)([e.anchor,"center"],n,h),area:n.chart.chartArea,backgroundColor:(0,i.r)([e.backgroundColor,null],n,h),borderColor:(0,i.r)([e.borderColor,null],n,h),borderRadius:(0,i.r)([e.borderRadius,0],n,h),borderWidth:(0,i.r)([e.borderWidth,0],n,h),clamp:(0,i.r)([e.clamp,!1],n,h),clip:(0,i.r)([e.clip,!1],n,h),color:c,display:t,font:l,lines:r,offset:(0,i.r)([e.offset,4],n,h),opacity:(0,i.r)([e.opacity,1],n,h),origin:function(t,r){var e=r.chart.getDatasetMeta(r.datasetIndex).vScale;if(!e)return null;if(void 0!==e.xCenter&&void 0!==e.yCenter)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return t.horizontal?{x:i,y:null}:{x:null,y:i}}(this._el,n),padding:(0,i.a)((0,i.r)([e.padding,4],n,h)),positioner:(a=this._el)instanceof i.A?s.arc:a instanceof i.P?s.point:a instanceof i.B?s.bar:s.fallback,rotation:(0,i.r)([e.rotation,0],n,h)*(Math.PI/180),size:o.textSize(this._ctx,r,l),textAlign:(0,i.r)([e.textAlign,"start"],n,h),textShadowBlur:(0,i.r)([e.textShadowBlur,0],n,h),textShadowColor:(0,i.r)([e.textShadowColor,c],n,h),textStrokeColor:(0,i.r)([e.textStrokeColor,c],n,h),textStrokeWidth:(0,i.r)([e.textStrokeWidth,0],n,h)}},update:function(t){var r,e,n,a,h,l,s,c,x,u,y=null,d=null,f=this._index,v=this._config,p=(0,i.r)([v.display,!0],t,f);p&&(c=t.dataset.data[f],x=(0,i.v)((0,i.c)(v.formatter,[c,t]),c),(u=(0,i.i)(x)?[]:o.toTextLines(x)).length&&(e=(r=y=this._modelize(p,u,v,t)).borderWidth||0,n=r.padding,a=r.size.height,l=-(h=r.size.width)/2,s=-a/2,d={frame:{x:l-n.left-e,y:s-n.top-e,w:h+n.width+2*e,h:a+n.height+2*e},text:{x:l,y:s,w:h,h:a}})),this._model=y,this._rects=d},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,r){var e,i,n,a,h,l=t.ctx,s=this._model,x=this._rects;this.visible()&&(l.save(),s.clip&&(h=s.area,l.beginPath(),l.rect(h.left,h.top,h.right-h.left,h.bottom-h.top),l.clip()),l.globalAlpha=o.bound(0,s.opacity,1),l.translate(c(r.x),c(r.y)),l.rotate(s.rotation),e=x.frame,i=s.backgroundColor,n=s.borderColor,a=s.borderWidth,(i||n&&a)&&(l.beginPath(),function(t,r,e,i,n,o){var a=Math.PI/2;if(o){var h=Math.min(o,n/2,i/2),l=r+h,s=e+h,c=r+i-h,x=e+n-h;t.moveTo(r,s),l<c&&s<x?(t.arc(l,s,h,-Math.PI,-a),t.arc(c,s,h,-a,0),t.arc(c,x,h,0,a),t.arc(l,x,h,a,Math.PI)):l<c?(t.moveTo(l,e),t.arc(c,s,h,-a,a),t.arc(l,s,h,a,Math.PI+a)):s<x?(t.arc(l,s,h,-Math.PI,0),t.arc(l,x,h,0,Math.PI)):t.arc(l,s,h,-Math.PI,Math.PI),t.closePath(),t.moveTo(r,e)}else t.rect(r,e,i,n)}(l,c(e.x)+a/2,c(e.y)+a/2,c(e.w)-a,c(e.h)-a,s.borderRadius),l.closePath(),i&&(l.fillStyle=i,l.fill()),n&&a&&(l.strokeStyle=n,l.lineWidth=a,l.lineJoin="miter",l.stroke())),function(t,r,e,i){var n,o,a,h,l,s,x=i.textAlign,u=i.color,y=!!u,d=i.font,f=r.length,v=i.textStrokeColor,p=i.textStrokeWidth,g=v&&p;if(!(!f||!y&&!g))for(n=e,o=d.lineHeight,a=n.w,h=n.x,l=n.y+o/2,"center"===x?h+=a/2:("end"===x||"right"===x)&&(h+=a),e={h:o,w:a,x:h,y:l},t.font=d.string,t.textAlign=x,t.textBaseline="middle",t.shadowBlur=i.textShadowBlur,t.shadowColor=i.textShadowColor,y&&(t.fillStyle=u),g&&(t.lineJoin="round",t.lineWidth=p,t.strokeStyle=v),s=0,f=r.length;s<f;++s)!function(t,r,e){var i=t.shadowBlur,n=e.stroked,o=c(e.x),a=c(e.y),h=c(e.w);n&&t.strokeText(r,o,a,h),e.filled&&(i&&n&&(t.shadowBlur=0),t.fillText(r,o,a,h),i&&n&&(t.shadowBlur=i))}(t,r[s],{stroked:g,filled:y,w:e.w,x:e.x,y:e.y+e.h*s})}(l,s.lines,x.text,s),l.restore())}});var x=Number.MIN_SAFE_INTEGER||-9007199254740991,u=Number.MAX_SAFE_INTEGER||9007199254740991;function y(t,r,e){var i=Math.cos(e),n=Math.sin(e),o=r.x,a=r.y;return{x:o+i*(t.x-o)-n*(t.y-a),y:a+n*(t.x-o)+i*(t.y-a)}}function d(t,r){var e,i,n,o,a,h=u,l=x,s=r.origin;for(e=0;e<t.length;++e)n=(i=t[e]).x-s.x,o=i.y-s.y,h=Math.min(h,a=r.vx*n+r.vy*o),l=Math.max(l,a);return{min:h,max:l}}function f(t,r){var e=r.x-t.x,i=r.y-t.y,n=Math.sqrt(e*e+i*i);return{vx:(r.x-t.x)/n,vy:(r.y-t.y)/n,origin:t,ln:n}}(0,i.m)((function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}}).prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,r,e){this._rotation=e,this._rect={x:r.x+t.x,y:r.y+t.y,w:r.w,h:r.h}},contains:function(t){var r=this._rect;return!((t=y(t,this.center(),-this._rotation)).x<r.x-1||t.y<r.y-1||t.x>r.x+r.w+2||t.y>r.y+r.h+2)},intersects:function(t){var r,e,i,n=this._points(),o=t._points(),a=[f(n[0],n[1]),f(n[0],n[3])];for(this._rotation!==t._rotation&&a.push(f(o[0],o[1]),f(o[0],o[3])),r=0;r<a.length;++r)if(e=d(n,a[r]),i=d(o,a[r]),e.max<i.min||i.max<e.min)return!1;return!0},_points:function(){var t=this._rect,r=this._rotation,e=this.center();return[y({x:t.x,y:t.y},e,r),y({x:t.x+t.w,y:t.y},e,r),y({x:t.x+t.w,y:t.y+t.h},e,r),y({x:t.x,y:t.y+t.h},e,r)]}})}}]);