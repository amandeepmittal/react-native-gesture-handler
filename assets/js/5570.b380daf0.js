(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5570],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(3117),r=n(7294),o=n(6010),l=n(5281),c=n(2802),s=n(8596),i=n(9960),d=n(5999),m=n(4996);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:p.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:a}=e;const o="breadcrumbs__link";return a?r.createElement("span",{className:o,itemProp:"name"},t):n?r.createElement(i.Z,{className:o,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:o},t)}function g(e){let{children:t,active:n,index:l,addMicrodata:c}=e;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function v(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,o.Z)(l.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(h,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(g,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},6781:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(7294),r=n(6010),o=n(5281),l=n(5130),c=n(6043),s=n(752),i=n(3117),d=n(5999);const m={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function u(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,i.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",m.tocCollapsibleButton,!t&&m.tocCollapsibleButtonExpanded,n.className)}),a.createElement(d.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const p={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function h(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:l}=e;const{collapsed:i,toggleCollapsed:d}=(0,c.u)({initialState:!0});return a.createElement("div",{className:(0,r.Z)(p.tocCollapsible,!i&&p.tocCollapsibleExpanded,n)},a.createElement(u,{collapsed:i,onClick:d}),a.createElement(c.z,{lazy:!0,className:p.tocCollapsibleContent,collapsed:i},a.createElement(s.Z,{toc:t,minHeadingLevel:o,maxHeadingLevel:l})))}const f={tocMobile:"tocMobile_ITEo"};function b(){const{toc:e,frontMatter:t}=(0,l.k)();return a.createElement(h,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,r.Z)(o.k.docs.docTocMobile,f.tocMobile)})}},2028:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Me});var a=n(7294),r=n(833),o=n(5130);function l(){const{metadata:e,frontMatter:t,assets:n}=(0,o.k)();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var c=n(6010),s=n(7524),i=n(49);function d(){const{metadata:e}=(0,o.k)();return a.createElement(i.Z,{previous:e.previous,next:e.next})}var m=n(3120),u=n(4364),p=n(5281),h=n(5999);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function b(e){let{lastUpdatedBy:t}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:p.k.common.lastUpdated},a.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var v=n(3117);const E={iconEdit:"iconEdit_Z9Sw"};function y(e){let{className:t,...n}=e;return a.createElement("svg",(0,v.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(E.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function k(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:p.k.common.editThisPage},a.createElement(y,null),a.createElement(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var N=n(9960);const L={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function C(e){let{permalink:t,label:n,count:r}=e;return a.createElement(N.Z,{href:t,className:(0,c.Z)(L.tag,r?L.tagWithCount:L.tagRegular)},n,r&&a.createElement("span",null,r))}const Z={tags:"tags_jXut",tag:"tag_QGVx"};function T(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,c.Z)(Z.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:Z.tag},a.createElement(C,{label:t,permalink:n}))}))))}const _={lastUpdated:"lastUpdated_vwxv"};function w(e){return a.createElement("div",{className:(0,c.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(T,e)))}function B(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,c.Z)(p.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(k,{editUrl:t})),a.createElement("div",{className:(0,c.Z)("col",_.lastUpdated)},(n||r)&&a.createElement(g,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function x(){const{metadata:e}=(0,o.k)(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:s}=e,i=s.length>0,d=!!(t||n||l);return i||d?a.createElement("footer",{className:(0,c.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(w,{tags:s}),d&&a.createElement(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var O=n(690),j=n(752);const A={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},H="table-of-contents__link toc-highlight",I="table-of-contents__link--active";function S(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,c.Z)(A.tableOfContents,"thin-scrollbar",t)},a.createElement(j.Z,(0,v.Z)({},n,{linkClassName:H,linkActiveClassName:I})))}function P(){const{toc:e,frontMatter:t}=(0,o.k)();return a.createElement(S,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var M=n(2503),U=n(3905),V=n(5742);var D=n(2389),W=n(2949),R=n(6668);function z(){const{prism:e}=(0,R.L)(),{colorMode:t}=(0,W.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var $=n(7594),F=n.n($);const q=/title=(?<quote>["'])(?<title>.*?)\1/,G=/\{(?<range>[\d,-]+)\}/,J={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function X(e,t){const n=e.map((e=>{const{start:n,end:a}=J[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function Y(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:o}=t;if(o&&G.test(o)){const e=o.match(G).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=F()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return X(["js","jsBlock"],t);case"jsx":case"tsx":return X(["js","jsBlock","jsx"],t);case"html":return X(["js","jsBlock","html"],t);case"python":case"py":case"bash":return X(["bash"],t);case"markdown":case"md":return X(["html","jsx","bash"],t);default:return X(Object.keys(J),t)}}(a,r),c=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:d[t]?s[d[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;F()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const Q={codeBlockContainer:"codeBlockContainer_Ckt0"};function K(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const o=t[a];o&&"string"==typeof r&&(n[o]=r)})),n}(z());return a.createElement(t,(0,v.Z)({},n,{style:r,className:(0,c.Z)(n.className,Q.codeBlockContainer,p.k.common.codeBlock)}))}const ee={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function te(e){let{children:t,className:n}=e;return a.createElement(K,{as:"pre",tabIndex:0,className:(0,c.Z)(ee.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:ee.codeBlockLines},t))}var ne=n(902);const ae={attributes:!0,characterData:!0,childList:!0,subtree:!0};function re(e,t){const[n,r]=(0,a.useState)(),o=(0,a.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=ae);const r=(0,ne.zX)(t),o=(0,ne.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()}),[e,r,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const oe={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var le={Prism:n(7410).Z,theme:oe};function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},se.apply(this,arguments)}var ie=/\r\n|\r|\n/,de=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},me=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},ue=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=se({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=se({},n,{backgroundColor:null}),r};function pe(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const he=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),ce(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?ue(e.theme,e.language):void 0;return t.themeDict=n})),ce(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=se({},pe(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?se({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),ce(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),ce(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=se({},pe(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?se({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),ce(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,d=t[l],m=n[l][o];if("string"==typeof m?(d=l>0?d:["plain"],i=m):(d=me(d,m.type),m.alias&&(d=me(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(ie),p=u.length;c.push({types:d,content:u[0]});for(var h=1;h<p;h++)de(c),s.push(c=[]),c.push({types:d,content:u[h]})}else l++,t.push(d),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return de(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),fe={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function be(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:o,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=o({line:t,className:(0,c.Z)(n,r&&fe.codeLine)}),i=t.map(((e,t)=>a.createElement("span",(0,v.Z)({key:t},l({token:e,key:t})))));return a.createElement("span",s,r?a.createElement(a.Fragment,null,a.createElement("span",{className:fe.codeLineNumber}),a.createElement("span",{className:fe.codeLineContent},i)):i,a.createElement("br",null))}function ge(e){return a.createElement("svg",(0,v.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function ve(e){return a.createElement("svg",(0,v.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const Ee={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function ye(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,Ee.copyButton,r&&Ee.copyButtonCopied),onClick:s},a.createElement("span",{className:Ee.copyButtonIcons,"aria-hidden":"true"},a.createElement(ge,{className:Ee.copyButtonIcon}),a.createElement(ve,{className:Ee.copyButtonSuccessIcon})))}function ke(e){return a.createElement("svg",(0,v.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const Ne={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function Le(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,r&&Ne.wordWrapButtonEnabled),"aria-label":o,title:o},a.createElement(ke,{className:Ne.wordWrapButtonIcon,"aria-hidden":"true"}))}function Ce(e){let{children:t,className:n="",metastring:r,title:o,showLineNumbers:l,language:s}=e;const{prism:{defaultLanguage:i,magicComments:d}}=(0,R.L)(),m=s??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??i;const u=z(),p=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return re(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),h=function(e){return e?.match(q)?.groups.title??""}(r)||o,{lineClassNames:f,code:b}=Y(t,{metastring:r,language:m,magicComments:d}),g=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return a.createElement(K,{as:"div",className:(0,c.Z)(n,m&&!n.includes(`language-${m}`)&&`language-${m}`)},h&&a.createElement("div",{className:ee.codeBlockTitle},h),a.createElement("div",{className:ee.codeBlockContent},a.createElement(he,(0,v.Z)({},le,{theme:u,code:b,language:m??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:p.codeBlockRef,className:(0,c.Z)(t,ee.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,c.Z)(ee.codeBlockLines,g&&ee.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(be,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:f[t],showLineNumbers:g})))))})),a.createElement("div",{className:ee.buttonGroup},(p.isEnabled||p.isCodeScrollable)&&a.createElement(Le,{className:ee.codeButton,onClick:()=>p.toggle(),isEnabled:p.isEnabled}),a.createElement(ye,{className:ee.codeButton,code:b}))))}function Ze(e){let{children:t,...n}=e;const r=(0,D.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?Ce:te;return a.createElement(l,(0,v.Z)({key:String(r)},n),o)}var Te=n(1509);function _e(e){return a.createElement(M.Z,e)}const we={containsTaskList:"containsTaskList_mC6p"};function Be(e){if(void 0!==e)return(0,c.Z)(e,e?.includes("contains-task-list")&&we.containsTaskList)}const xe={img:"img_ev3q"};var Oe=n(2401);const je={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(V.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(Ze,e)},a:function(e){return a.createElement(N.Z,e)},pre:function(e){return a.createElement(Ze,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:Te.Z,ul:function(e){return a.createElement("ul",(0,v.Z)({},e,{className:Be(e.className)}))},img:function(e){return a.createElement("img",(0,v.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,xe.img))}));var t},h1:e=>a.createElement(_e,(0,v.Z)({as:"h1"},e)),h2:e=>a.createElement(_e,(0,v.Z)({as:"h2"},e)),h3:e=>a.createElement(_e,(0,v.Z)({as:"h3"},e)),h4:e=>a.createElement(_e,(0,v.Z)({as:"h4"},e)),h5:e=>a.createElement(_e,(0,v.Z)({as:"h5"},e)),h6:e=>a.createElement(_e,(0,v.Z)({as:"h6"},e)),admonition:Oe.Z,mermaid:()=>null};function Ae(e){let{children:t}=e;return a.createElement(U.Zo,{components:je},t)}function He(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,o.k)();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,c.Z)(p.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(M.Z,{as:"h1"},n)),a.createElement(Ae,null,t))}var Ie=n(1310);const Se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Pe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,o.k)(),n=(0,s.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(O.Z,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(P,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,c.Z)("col",!n.hidden&&Se.docItemCol)},a.createElement(m.Z,null),a.createElement("div",{className:Se.docItemContainer},a.createElement("article",null,a.createElement(Ie.Z,null),a.createElement(u.Z,null),n.mobile,a.createElement(He,null,t),a.createElement(x,null)),a.createElement(d,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Me(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(o.b,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(l,null),a.createElement(Pe,null,a.createElement(n,null))))}},49:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(3117),r=n(7294),o=n(5999),l=n(2177);function c(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(7294),r=n(6010),o=n(5999),l=n(5281),c=n(4477);function s(e){let{className:t}=e;const n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(7294),r=n(6010),o=n(2263),l=n(9960),c=n(5999),s=n(4104),i=n(5281),d=n(373),m=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,o.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,s.Jo)(c),b=u??(g=f).docs.find((e=>e.id===g.mainDocId));var g;return a.createElement("div",{className:(0,r.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:f.label,to:b.path,onClick:()=>m(f.name)})))}function b(e){let{className:t}=e;const n=(0,m.E)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(3117),r=n(7294),o=n(6010),l=n(5999),c=n(6668),s=n(9960);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.Z)({},d,{className:(0,o.Z)("anchor",m?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,d.className),id:n}),d.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},752:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(3117),r=n(7294),o=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=i(c,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var u=n(7620);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:p,...h}=e;const f=(0,o.L)(),b=d??f.tableOfContents.minHeadingLevel,g=p??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:g});return m((0,r.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:b,maxHeadingLevel:g}}),[s,i,b,g])),r.createElement(u.Z,(0,a.Z)({toc:v,className:n,linkClassName:s},h))}},5130:(e,t,n)=>{"use strict";n.d(t,{b:()=>l,k:()=>c});var a=n(7294),r=n(902);const o=a.createContext(null);function l(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:r},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);