(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{999:function(e,t,n){Promise.resolve().then(n.bind(n,7705)),Promise.resolve().then(n.bind(n,3726)),Promise.resolve().then(n.bind(n,92)),Promise.resolve().then(n.bind(n,1964)),Promise.resolve().then(n.t.bind(n,911,23)),Promise.resolve().then(n.t.bind(n,7960,23))},7705:function(e,t,n){"use strict";n.d(t,{default:function(){return i}});var r=n(7437),o=n(2265),s=n(5183);function i(){let[e,t]=(0,o.useState)({x:0,y:0}),[n,i]=(0,o.useState)("default");(0,o.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]);let l={default:{x:e.x-16,y:e.y-16},text:{height:150,width:150,x:e.x-75,y:e.y-75,backgroundColor:"white",mixBlendMode:"difference"}},a=()=>i("text"),c=()=>i("default");return(0,o.useEffect)(()=>{let e=e=>{("a"===e.target.tagName.toLowerCase()||"button"===e.target.tagName.toLowerCase())&&a()},t=()=>{c()};return document.addEventListener("mouseover",e),document.addEventListener("mouseout",t),()=>{document.removeEventListener("mouseover",e),document.removeEventListener("mouseout",t)}},[a,c]),(0,r.jsx)(s.E.div,{className:"cursor",variants:l,animate:n})}},3726:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),o=n(5183),s=n(7648),i=n(9089);function l(){let e=new Date().getFullYear(),t=[{icon:i.hJX,href:"https://github.com/mohitsrma",label:"GitHub"},{icon:i.ltd,href:"https://www.linkedin.com/in/mohitsrma",label:"LinkedIn"},{icon:i.fWC,href:"https://twitter.com/mohitsrma",label:"Twitter"}],n=[{icon:i.SRX,info:"mohitsrma7014@gmail.com"},{icon:i.I7T,info:"+91 7014 028949"},{icon:i.Nh4,info:"Alwar, Rajasthan, India"}];return(0,r.jsx)("footer",{className:"bg-gray-800 py-12",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-bold mb-4",children:"Mohit Sharma"}),(0,r.jsx)("p",{className:"text-gray-300 mb-4",children:"Data Analyst | Machine Learning Engineer | Python Developer"}),(0,r.jsx)("div",{className:"flex space-x-4",children:t.map(e=>(0,r.jsx)(o.E.a,{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-white transition-colors duration-300",whileHover:{scale:1.2},"aria-label":e.label,children:(0,r.jsx)(e.icon,{className:"text-2xl"})},e.label))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Quick Links"}),(0,r.jsx)("ul",{className:"space-y-2",children:["Home","About","Skills","Projects","Experience","Contact"].map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"#".concat(e.toLowerCase()),children:(0,r.jsx)(o.E.span,{className:"text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer inline-block",whileHover:{x:5},children:e})})},e))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Contact Information"}),(0,r.jsx)("ul",{className:"space-y-2",children:n.map((e,t)=>(0,r.jsxs)("li",{className:"flex items-center text-gray-300",children:[(0,r.jsx)(e.icon,{className:"mr-2"}),(0,r.jsx)("span",{children:e.info})]},t))})]})]}),(0,r.jsx)("div",{className:"mt-8 pt-8 border-t border-gray-700 text-center",children:(0,r.jsxs)("p",{className:"text-gray-300",children:["\xa9 ",e," Mohit Sharma. All rights reserved."]})})]})})}},92:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(7437),o=n(2265),s=n(5183),i=n(7648);let l=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Freelance",href:"#freelance"},{name:"Contact",href:"#contact"}];function a(){let[e,t]=(0,o.useState)(!1),[n,a]=(0,o.useState)("home"),[c,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=()=>{t(window.scrollY>20);let e=l.map(e=>e.name.toLowerCase()).find(e=>{let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect();return e.top<=100&&e.bottom>=100}return!1});e&&a(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let d=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,r.jsxs)("nav",{className:"fixed w-full z-50 transition-all duration-300 ".concat(e?"bg-gray-800 shadow-lg":"bg-transparent"),children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(i.default,{href:"/",className:"text-xl font-bold",children:"MS"})}),(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)("div",{className:"ml-10 flex items-baseline space-x-4",children:l.map(e=>(0,r.jsx)(s.E.button,{onClick:()=>d(e.name.toLowerCase()),className:"px-3 py-2 rounded-md text-sm font-medium cursor-pointer ".concat(n===e.name.toLowerCase()?"text-white bg-blue-500":"text-gray-300 hover:text-white hover:bg-gray-700"),whileHover:{scale:1.05},whileTap:{scale:.95},children:e.name},e.name))})}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsxs)("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>u(!c),children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),c?(0,r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):(0,r.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),(0,r.jsx)("div",{className:"md:hidden ".concat(c?"block":"hidden"),children:(0,r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute top-16 left-0 right-0 bg-gray-800 z-50",children:l.map(e=>(0,r.jsx)(s.E.button,{onClick:()=>{d(e.name.toLowerCase()),u(!1)},className:"block w-full text-left px-3 py-2 rounded-md text-base font-medium cursor-pointer ".concat(n===e.name.toLowerCase()?"text-white bg-blue-500":"text-gray-300 hover:text-white hover:bg-gray-700"),whileHover:{scale:1.05},whileTap:{scale:.95},children:e.name},e.name))})})]})}},7960:function(){},911:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(7437),o=n(2265),s=n(8881),i=n(3576),l=n(4252),a=n(5750);class c extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:n,anchorX:s}=e,i=(0,o.useId)(),l=(0,o.useRef)(null),u=(0,o.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=(0,o.useContext)(a._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o,right:a}=u.current;if(n||!l.current||!e||!t)return;l.current.dataset.motionPopId=i;let c=document.createElement("style");return d&&(c.nonce=d),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(o):"right: ".concat(a),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[n]),(0,r.jsx)(c,{isPresent:n,childRef:l,sizeRef:u,children:o.cloneElement(t,{ref:l})})}let d=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:a,custom:c,presenceAffectsLayout:d,mode:h,anchorX:f}=e,p=(0,i.h)(m),x=(0,o.useId)(),v=(0,o.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;a&&a()},[p,a]),b=(0,o.useMemo)(()=>({id:x,initial:n,isPresent:s,custom:c,onExitComplete:v,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),v]:[s,v]);return(0,o.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[s]),o.useEffect(()=>{s||p.size||!a||a()},[s]),"popLayout"===h&&(t=(0,r.jsx)(u,{isPresent:s,anchorX:f,children:t})),(0,r.jsx)(l.O.Provider,{value:b,children:t})};function m(){return new Map}var h=n(9637);let f=e=>e.key||"";function p(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var x=n(1534);let v=e=>{let{children:t,custom:n,initial:l=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:m=!1,anchorX:v="left"}=e,[b,g]=(0,h.oO)(m),w=(0,o.useMemo)(()=>p(t),[t]),j=m&&!b?[]:w.map(f),y=(0,o.useRef)(!0),N=(0,o.useRef)(w),E=(0,i.h)(()=>new Map),[k,O]=(0,o.useState)(w),[C,P]=(0,o.useState)(w);(0,x.L)(()=>{y.current=!1,N.current=w;for(let e=0;e<C.length;e++){let t=f(C[e]);j.includes(t)?E.delete(t):!0!==E.get(t)&&E.set(t,!1)}},[C,j.length,j.join("-")]);let L=[];if(w!==k){let e=[...w];for(let t=0;t<C.length;t++){let n=C[t],r=f(n);j.includes(r)||(e.splice(t,0,n),L.push(n))}"wait"===u&&L.length&&(e=L),P(p(e)),O(w);return}let{forceRender:S}=(0,o.useContext)(s.p);return(0,r.jsx)(r.Fragment,{children:C.map(e=>{let t=f(e),o=(!m||!!b)&&(w===C||j.includes(t));return(0,r.jsx)(d,{isPresent:o,initial:(!y.current||!!l)&&void 0,custom:o?void 0:n,presenceAffectsLayout:c,mode:u,onExitComplete:o?void 0:()=>{if(!E.has(t))return;E.set(t,!0);let e=!0;E.forEach(t=>{t||(e=!1)}),e&&(null==S||S(),P(N.current),m&&(null==g||g()),a&&a())},anchorX:v,children:e},t)})})}},1964:function(e,t,n){"use strict";n.d(t,{AnimatePresence:function(){return r.M}});var r=n(8614);n(5699)},6231:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(d,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,c({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:o,size:s,title:a}=e,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),d=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==s?r.createElement(s.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[944,699,358,971,117,744],function(){return e(e.s=999)}),_N_E=e.O()}]);