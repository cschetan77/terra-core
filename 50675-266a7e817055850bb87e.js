"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[50675],{50675:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(67294)),r=n(t(47166)),d=n(t(36594)),i=n(t(14427));function n(e){return e&&e.__esModule?e:{default:e}}var o=r.default.bind(i.default),u=function(){return a.default.createElement("div",{className:o("test-shell")},a.default.createElement(d.default,{isIncomplete:!0,label:"Incomplete Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"test-id"}))};l.default=u},36594:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=u(t(67294)),r=u(t(45697)),d=u(t(65318)),i=u(t(81229)),n=t(7461),o=["defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isLabelHidden","isInvalid","label","labelAttrs","maxWidth","onChange","options","required","selectAttrs","selectId","showOptional","value"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function f(e,l){if(null==e)return{};var t,a,r=function(e,l){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c={defaultValue:r.default.oneOfType([r.default.number,r.default.string]),disabled:r.default.bool,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,isIncomplete:r.default.bool,isInline:r.default.bool,isLabelHidden:r.default.bool,isInvalid:r.default.bool,label:r.default.node.isRequired,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,options:r.default.arrayOf(r.default.oneOfType([n.optionPropType,n.optGroupPropType])),required:r.default.bool,selectAttrs:r.default.object,selectId:r.default.string.isRequired,showOptional:r.default.bool,value:r.default.oneOfType([r.default.number,r.default.string])},p=function(e){var l,t=e.defaultValue,r=e.disabled,n=e.error,u=e.help,c=e.hideRequired,p=e.isIncomplete,b=e.isInline,h=e.isLabelHidden,v=e.isInvalid,m=e.label,y=e.labelAttrs,I=e.maxWidth,O=e.onChange,g=e.options,_=e.required,q=e.selectAttrs,j=e.selectId,w=e.showOptional,P=e.value,A=f(e,o),T=u?a.default.createElement("span",null,u):void 0;return u&&n&&v?l="".concat(j,"-error ").concat(j,"-help"):(u&&(l="".concat(j,"-help")),n&&v&&(l="".concat(j,"-error"))),a.default.createElement(d.default,s({},A,{label:m,labelAttrs:y,error:n,help:T,hideRequired:c,required:_,showOptional:w,isInvalid:v,isInline:b,isLabelHidden:h,htmlFor:j,maxWidth:I}),a.default.createElement(i.default,{attrs:q,id:j,ariaDescribedBy:l,ariaLabel:m,disabled:r,isIncomplete:p,isInvalid:v,defaultValue:t,required:_,onChange:O,options:g,value:P}))};p.propTypes=c,p.defaultProps={disabled:!1,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,required:!1,showOptional:!1};var b=p;l.default=b},14427:function(e,l,t){t.r(l),l.default={"test-shell":"NativeSelectTest-module__test-shell___NbuPM"}}}]);