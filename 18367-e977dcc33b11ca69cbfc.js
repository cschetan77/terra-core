"use strict";(self.webpackChunkterra_core=self.webpackChunkterra_core||[]).push([[18367],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),d=r(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,d)};p.propTypes=u;var c=p;t.Z=c},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),u=n(21538),p=r(n(13810)),c=r(n(40931)),m=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,s=(0,o.useState)(i),f=(0,l.default)(s,2),y=f[0],h=f[1],g=(0,o.useState)(!1),O=(0,l.default)(g,2),_=O[0],T=O[1],w=o.default.useContext(u.ThemeContext),E=void 0!==r,j=function(){T(!_),y&&h(!y)},k=function(){h(!y),_&&T(!_)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",w.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},E&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":_}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:k,onKeyDown:function(e){return N(e,k)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,_&&o.default.createElement("div",{className:x("css")},r),y&&o.default.createElement("div",{className:x("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},78530:function(e,t,n){var r=n(64836),a=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var l=m(n(67294)),o=r(n(45697)),d=r(n(47166)),i=n(21538),u=m(n(37515)),p=r(n(54931));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(p.default),f={children:o.default.node},x={isRequired:o.default.bool},y=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)};t.O=y,y.propTypes=f;var b=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.Di=b,b.propTypes=f;var v=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")};t.dS=v,v.propTypes=x;var h=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)};t.mW=h,h.propTypes=f;var g=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)};t.Ex=g,g.propTypes=f;var O=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};O.propTypes=f;var _=O;t.ZP=_},18367:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(67294),a=n(81254),l=n(56813),o=n(65268),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function c(e){var t=e.components,n=u(e,d);return(0,a.mdx)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" text=\"Default hyperlink\" />;\n\n")))}c.isMDXComponent=!0;var m=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Default Hyperlink",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(2533),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function h(e){var t=e.components,n=b(e,x);return(0,a.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport HyperlinkButton from 'terra-hyperlink';\n\nexport default () => <HyperlinkButton onClick={() => {}} text=\"Default hyperlink button\" />;\n\n")))}h.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Default Hyperlink Button",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(h,null),isExpanded:a})},O=n(84997),_=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function j(e){var t=e.components,n=w(e,_);return(0,a.mdx)("wrapper",T({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="audio" text="Audio hyperlink" />;\n\n')))}j.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Audio Hyperlink",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(j,null),isExpanded:a})},N=n(98028),C=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={};function R(e){var t=e.components,n=D(e,C);return(0,a.mdx)("wrapper",P({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="document" text="Document hyperlink" />;\n\n')))}R.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Document Hyperlink",description:n,example:r.createElement(N.Z,null),exampleSrc:r.createElement(R,null),isExpanded:a})},H=n(88945),q=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={};function I(e){var t=e.components,n=X(e,q);return(0,a.mdx)("wrapper",Z({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="external" text="External hyperlink" />;\n\n')))}I.isMDXComponent=!0;var B=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"External Hyperlink",description:n,example:r.createElement(H.Z,null),exampleSrc:r.createElement(I,null),isExpanded:a})},A=n(52614),V=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U={};function F(e){var t=e.components,n=K(e,V);return(0,a.mdx)("wrapper",L({},U,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="image" text="Image hyperlink" />;\n\n')))}F.isMDXComponent=!0;var z=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Image Hyperlink",description:n,example:r.createElement(A.Z,null),exampleSrc:r.createElement(F,null),isExpanded:a})},G=n(39683),Y=["components"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $={};function ee(e){var t=e.components,n=Q(e,Y);return(0,a.mdx)("wrapper",J({},$,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="video" text="Video hyperlink" />;\n\n')))}ee.isMDXComponent=!0;var te=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Video Hyperlink",description:n,example:r.createElement(G.Z,null),exampleSrc:r.createElement(ee,null),isExpanded:a})},ne=n(78530),re=["components"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var oe={},de="wrapper";function ie(e){var t=e.components,n=le(e,re);return(0,a.mdx)(de,ae({},oe,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(ne.ZP,{mdxType:"PropsTable"},(0,a.mdx)(ne.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nupdate all the references to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"text")," prop to add the content to display inside link."))),(0,a.mdx)(ne.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display inside link."))),(0,a.mdx)(ne.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional information to display as a native tooltip on hover."))),(0,a.mdx)(ne.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"href"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nSets the href of the link. href is required for hyperlinks and should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," callback is used."))),(0,a.mdx)(ne.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"isDisabled"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to not use hyperlinks that are disabled."))),(0,a.mdx)(ne.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"isUnderlineHidden"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to always have hyperlinks display with an underline."))),(0,a.mdx)(ne.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nCallback function triggered when clicked. onClick is required to render hyperlink as a button.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," is provided."))),(0,a.mdx)(ne.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"onBlur"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink loses focus."))),(0,a.mdx)(ne.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"onFocus"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink gains focus."))),(0,a.mdx)(ne.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"onKeyDown"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is pressed."))),(0,a.mdx)(ne.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"onKeyUp"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is released."))),(0,a.mdx)(ne.X2,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(ne.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(ne.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'external'\n  'image'\n  'video'\n  'audio'\n  'document'\n],\n"))),(0,a.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the hyperlink variant. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"external"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"image"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"video"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"audio"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"document"),".")))))}ie.isMDXComponent=!0;var ue=["components"];function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var me={},se="wrapper";function fe(e){var t=e.components,n=ce(e,ue);return(0,a.mdx)(se,pe({},me,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-hyperlink"},"Terra Hyperlink"),(0,a.mdx)("p",null,"The terra hyperlink component allows linking to other web pages, files, locations within the same page, email addresses, or any other URL."),(0,a.mdx)("h2",{id:"terra-hyperlink-button"},"Terra Hyperlink Button"),(0,a.mdx)("p",null,"Similar to the standard hyperlinks, there are times when applications may need to use a button element and add a onClick function to navigate the user, instead of a traditional anchor ",(0,a.mdx)("inlineCode",{parentName:"p"},"<a>")," element with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," attribute for URL routing."),(0,a.mdx)("p",null,"Terra Hyperlink Button can be created by providing callback / handler to ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," prop. Hyperlink Button is intended to communicate both visually to sighted users and to accessible users relying on assistive technology, that the interactive element is still a link, with the intention of navigating a user somewhere (contrasted with standard buttons which communicate that user can take an action)."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-hyperlink"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Hyperlink from 'terra-hyperlink';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"DefaultHyperlink"}),(0,a.mdx)(g,{mdxType:"DefaultHyperlinkButton"}),(0,a.mdx)(B,{description:"An external variant adds a custom icon to indicate the destination is external to the source.",mdxType:"External"}),(0,a.mdx)(k,{description:"An audio variant adds a custom icon to indicate the content linked is audio.",mdxType:"Audio"}),(0,a.mdx)(te,{description:"A video variant adds a custom icon to indicate the content linked is a video.",mdxType:"Video"}),(0,a.mdx)(z,{description:"An image variant adds a custom icon to indicate the content linked is an image.",mdxType:"Image"}),(0,a.mdx)(M,{description:"A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).",mdxType:"Document"}),(0,a.mdx)("h2",{id:"hyperlink-props"},"Hyperlink Props"),(0,a.mdx)(ie,{mdxType:"HyperlinkPropsTable"}))}fe.isMDXComponent=!0},56813:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-hyperlink",name:"terra-hyperlink",version:"2.57.0",url:t})}},84997:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"audio",text:"Audio hyperlink"})}},65268:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",text:"Default hyperlink"})}},2533:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{onClick:function(){},text:"Default hyperlink button"})}},98028:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"document",text:"Document hyperlink"})}},88945:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"external",text:"External hyperlink"})}},52614:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"image",text:"Image hyperlink"})}},39683:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(71112));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"video",text:"Video hyperlink"})}},32634:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),l=p(n(94184)),o=p(n(47166)),d=p(n(50026)),i=p(n(16749)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=m(e,u),i=r.default.useContext(d.default),p=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",c({},o,{className:p}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};var y=x;t.default=y},80196:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},8685:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},19852:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(29805)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};p.propTypes=u,p.defaultProps={children:[]};var c=p;t.default=c},80876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};var p=u;t.default=p},70829:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(16749)),d=u(n(29805)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(o.default),s={children:a.default.node},f=function(e){var t=e.children,n=c(e,i),a=m(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};var x=f;t.default=x},29805:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(67294))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},37515:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(32634)),a=u(n(80196)),l=u(n(70829)),o=u(n(8685)),d=u(n(19852)),i=u(n(80876));function u(e){return e&&e.__esModule?e:{default:e}}var p=r.default;t.default=p},13810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(21969));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},16749:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___FXYdn","orion-fusion-theme":"Table-module__orion-fusion-theme___NK3-x",table:"Table-module__table___fuc+4","padding-standard":"Table-module__padding-standard___nzltF","padding-compact":"Table-module__padding-compact___4dUEL",striped:"Table-module__striped___xsLKz"}}}]);