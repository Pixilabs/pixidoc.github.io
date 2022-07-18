"use strict";(self.webpackChunkpixidoc=self.webpackChunkpixidoc||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1},i="Installation",o={unversionedId:"installation",id:"installation",title:"Installation",description:"R\xe9cup\xe9rer le code",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pixidoc/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Cr\xe9er un site web",permalink:"/pixidoc/docs/create-website"}},s={},u=[{value:"R\xe9cup\xe9rer le code",id:"r\xe9cup\xe9rer-le-code",level:2},{value:"Pr\xe9parer le code",id:"pr\xe9parer-le-code",level:2},{value:"Variables d&#39;environement",id:"variables-denvironement",level:3},{value:"Serveur DNS local",id:"serveur-dns-local",level:3},{value:"D\xe9marrer le serveur",id:"d\xe9marrer-le-serveur",level:2},{value:"Administration du site",id:"administration-du-site",level:2},{value:"Cr\xe9er un compte administrateur",id:"cr\xe9er-un-compte-administrateur",level:3},{value:"Connexion au back office",id:"connexion-au-back-office",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("h2",{id:"r\xe9cup\xe9rer-le-code"},"R\xe9cup\xe9rer le code"),(0,n.kt)("p",null,"Le code est disponible sur Github \xe0 l'adresse : ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Pixilabs/pixilabs"},"https://github.com/Pixilabs/pixilabs"),"."),(0,n.kt)("p",null,"Vous pouvez, soit cr\xe9er un fork, soit si vous avez les droits d'\xe9criture sur le repository, directement cloner le repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Pixilabs/pixilabs.git\n")),(0,n.kt)("h2",{id:"pr\xe9parer-le-code"},"Pr\xe9parer le code"),(0,n.kt)("h3",{id:"variables-denvironement"},"Variables d'environement"),(0,n.kt)("p",null,"Vous devez ensuite cr\xe9er le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," \xe0 partir du fichier ",(0,n.kt)("inlineCode",{parentName:"p"},".env.example"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,n.kt)("p",null,"Ce fichier contient vos variables d'environnement. Elles sont d\xe9crites dans le tableau ci-dessous. Toutes les variables d'environement qui ne sont pas dans ce tableau sont celles par d\xe9faut de Laravel. Pour plus d'information \xe0 leur sujet, il faut se r\xe9f\xe9rer \xe0 la documentation de Laravel."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variables"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Requis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"APP_DOMAIN"),(0,n.kt)("td",{parentName:"tr",align:null},"Le nom de domaine de l'application. Cela peut \xeatre par exemple localhost:8000 ou ",(0,n.kt)("a",{parentName:"td",href:"http://www.pixilabs.local"},"www.pixilabs.local"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Oui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NOVA_DOMAIN_NAME"),(0,n.kt)("td",{parentName:"tr",align:null},"Le nom de domaine sur lequel Laravel Nova doit r\xe9pondre. Cela peut \xeatre par exemple console.pxlabs.local"),(0,n.kt)("td",{parentName:"tr",align:null},"Oui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JETSTREAM_DOMAIN_NAME"),(0,n.kt)("td",{parentName:"tr",align:null},"Le nom de domaine sur lequel Laravel Jetstream doit r\xe9pondre."),(0,n.kt)("td",{parentName:"tr",align:null},"Oui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GOOGLE_RECAPTCHA_KEY"),(0,n.kt)("td",{parentName:"tr",align:null},"Cl\xe9 publique de google recaptcha."),(0,n.kt)("td",{parentName:"tr",align:null},"Non")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GOOGLE_RECAPTCHA_SECRET"),(0,n.kt)("td",{parentName:"tr",align:null},"Cl\xe9 priv\xe9e de google recaptcha."),(0,n.kt)("td",{parentName:"tr",align:null},"Non")))),(0,n.kt)("h3",{id:"serveur-dns-local"},"Serveur DNS local"),(0,n.kt)("p",null,"Pour que les noms de domaines ",(0,n.kt)("a",{parentName:"p",href:"http://www.pixilabs.local"},"www.pixilabs.local"),", console.pxlabs.local et my.pixilabs.local fonctionnent, vous devez modifier le fichier de configuration ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," avec le contenu suivant :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="/etc/hosts"',title:'"/etc/hosts"'},"127.0.0.1 www.pixilabs.local\n127.0.0.1 console.pxlabs.local\n127.0.0.1 my.pixilabs.local\n")),(0,n.kt)("h2",{id:"d\xe9marrer-le-serveur"},"D\xe9marrer le serveur"),(0,n.kt)("p",null,"Vous pouvez utiliser votre outil favori pour d\xe9marrer un serveur PHP. Cependant, le code contient un fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," qui se charge de cr\xe9er toute l'infrastructure pour vous. Si vous le souhaitez, placer vous \xe0 la racine du projet et lancez la commande suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,n.kt)("p",null,"Testez ensuite l'application en lan\xe7ant la commande suivante directement depuis le conteneur PHP."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan test\n")),(0,n.kt)("p",null,"Si tous les tests passent alors vous pouvez passer \xe0 la suite."),(0,n.kt)("h2",{id:"administration-du-site"},"Administration du site"),(0,n.kt)("h3",{id:"cr\xe9er-un-compte-administrateur"},"Cr\xe9er un compte administrateur"),(0,n.kt)("p",null,"Pour cr\xe9er un compte administrateur, vous pouvez utiliser la commande directement fournie par Laravel Nova."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan nova:user\n")),(0,n.kt)("h3",{id:"connexion-au-back-office"},"Connexion au back office"),(0,n.kt)("p",null,"Une fois que vous avez cr\xe9\xe9 votre utilisateur, vous pouvez vous connecter au back office en utilisant ses identifiants. Pour acc\xe9der au back office, il vous suffit de vous rendre sur le domaine d\xe9finie par la variable d'environnement ",(0,n.kt)("inlineCode",{parentName:"p"},"NOVA_DOMAIN_NAME"),"."),(0,n.kt)("p",null,"\xc0 partir de la console d'administration, vous allez pouvoir cr\xe9er votre premier site web."))}c.isMDXComponent=!0}}]);