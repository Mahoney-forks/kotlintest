"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[1571],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return c}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,l(l({ref:e},u),{},{components:r})):n.createElement(g,l({ref:e},u))}));function c(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4430:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"arrow",title:"Arrow Generators",slug:"property-test-generators-arrow.html",sidebar_label:"Arrow Generators"},p=void 0,s={unversionedId:"proptest/arrow",id:"proptest/arrow",isDocsHomePage:!1,title:"Arrow Generators",description:"An optional module provides generators for Arrow. These generators are JVM only.",source:"@site/docs/proptest/arrow.md",sourceDirName:"proptest",slug:"/proptest/property-test-generators-arrow.html",permalink:"/docs/proptest/property-test-generators-arrow.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/arrow.md",tags:[],version:"current",frontMatter:{id:"arrow",title:"Arrow Generators",slug:"property-test-generators-arrow.html",sidebar_label:"Arrow Generators"},sidebar:"proptest",previous:{title:"Global Configuration",permalink:"/docs/proptest/property-test-global-config.html"}},u=[],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An optional module provides generators for ",(0,o.kt)("a",{parentName:"p",href:"https://arrow-kt.io"},"Arrow"),". These generators are JVM only."),(0,o.kt)("p",null,"To use, add ",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-property-arrow:version")," to your build."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Generator"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Either")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.either(arbL, arbR)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates approx 50/50 of left and right from the underlying generators")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.right(arb)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates instances of ","[Either.Right]"," using the given arb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.left(arb)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates instances of ","[Either.Left]"," using the given arb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"NonEmptyList")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.nel(arb, range)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates NonEmptyList instances with a size randomly chosen from the given range (defaults to 1 to 100), with elements populated from the given arb.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Option")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Exhaustive.option(a)")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an Exhaustive that contains a None and a Some with the given value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Exhaustive.none(a)")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns an Exhaustive that contains None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.option(arb)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates both None and Some with Some's populated with values from the given arb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.some(arb)")),(0,o.kt)("td",{parentName:"tr",align:null},"Generates Some's populated with values from the given arb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Arb.none()")),(0,o.kt)("td",{parentName:"tr",align:null},"A constant arb that returns None. Equivalent to Exhaustive.None and provided only for use when an Arb is required.")))))}m.isMDXComponent=!0}}]);