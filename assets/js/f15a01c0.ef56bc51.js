"use strict";(self.webpackChunkpixidoc=self.webpackChunkpixidoc||[]).push([[629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Cr\xe9er un composant",s={unversionedId:"create-component",id:"create-component",title:"Cr\xe9er un composant",description:"Structure de base",source:"@site/docs/create-component.md",sourceDirName:".",slug:"/create-component",permalink:"/docs/create-component",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/create-component.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9er un site web",permalink:"/docs/create-website"},next:{title:"Composants",permalink:"/docs/category/composants"}},l={},p=[{value:"Structure de base",id:"structure-de-base",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:3},{value:"id",id:"id",level:4},{value:"type",id:"type",level:4},{value:"style",id:"style",level:4},{value:"spacing",id:"spacing",level:4},{value:"options",id:"options",level:4},{value:"M\xe9thodes",id:"m\xe9thodes",level:2},{value:"Formatter le style",id:"formatter-le-style",level:3},{value:"Afficher les images",id:"afficher-les-images",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cr\xe9er-un-composant"},"Cr\xe9er un composant"),(0,o.kt)("h2",{id:"structure-de-base"},"Structure de base"),(0,o.kt)("p",null,"La structure de base d'un composant est la suivante :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "custom_id",\n    "type": "folder.component-name",\n    "style": {},\n    "spacing": {\n        "top": "y",\n        "bottom": "n"\n    },\n    "options": {} \n}\n')),(0,o.kt)("h3",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"id"},"id"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requis :")," Non"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"type"},"type"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requis :")," Oui"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description :")," Repr\xe9sente le composant \xe0 afficher. Le nom est formatt\xe9 ainsi : ",(0,o.kt)("inlineCode",{parentName:"p"},"nom_du_dossier.nom_du_fichier"),". Il repr\xe9sente l'aborescence du fichier contenant le composant. ",(0,o.kt)("inlineCode",{parentName:"p"},"nom_du_fichier")," est le nom du fichier sans l'extension."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"style"},"style"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requis :")," Non"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"spacing"},"spacing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requis :")," Non"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description :")," Repr\xe9sente les marges int\xe9rieures verticales des composants. ",(0,o.kt)("inlineCode",{parentName:"p"},"spacing")," peut prendre les valeur ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," pour qu'il y ai des marges int\xe9rieures, ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," pour qu'il n'y ai pas de marges int\xe9rieures ou un object contenant les propri\xe9t\xe9s ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," pour dissocier le comportement des marges int\xe9rieures hautes et basses."),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"options"},"options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requis :")," Non"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description :")," Repr\xe9sente les options de configuration propos\xe9es par le composant. C'est un objet qui d\xe9fini les valeurs des options de chaques composants."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"m\xe9thodes"},"M\xe9thodes"),(0,o.kt)("h3",{id:"formatter-le-style"},"Formatter le style"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div style=\"{{ @inlineStyle($component['style']) }}\">...</div>\n")),(0,o.kt)("h3",{id:"afficher-les-images"},"Afficher les images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<img src=\"{{ @loadImage($component['image']) }}\" />\n")))}u.isMDXComponent=!0}}]);