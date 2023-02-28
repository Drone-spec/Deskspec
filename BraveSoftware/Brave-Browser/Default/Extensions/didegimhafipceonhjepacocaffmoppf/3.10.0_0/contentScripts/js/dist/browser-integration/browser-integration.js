/*! For license information please see browser-integration.js.LICENSE.txt */
(()=>{"use strict";var e,t={810:(e,t,n)=>{var i=n(531);const o="input[type='password']:not([hidden]):not([disabled]), input[type='Password']:not([hidden]):not([disabled]), input[type='PASSWORD']:not([hidden]):not([disabled])",s="input[type='text']:not([hidden]):not([disabled]), input[type='Text']:not([hidden]):not([disabled]), input[type='TEXT']:not([hidden]):not([disabled]), input[type='email']:not([hidden]):not([disabled]), input[type='Email']:not([hidden]):not([disabled]), input[type='EMAIL']:not([hidden]):not([disabled]), input:not([type]):not([hidden]):not([disabled])",l=function(e,t){return new URL(e).origin===new URL(t).origin},r=function(e,t){e&&(e.addEventListener("click",(function n(o){i.BX.input(e,{target:{value:t}}),o.target.removeEventListener(o.type,n)}),!1),i.BX.click(e,{button:0}))},a=function(e,t){const n=document.querySelectorAll("iframe");let i=null;for(const o in n){const s=d(n[o]);if(s&&l(t.url,s.location.origin)&&(i=c(e,s),i))break}return i},d=function(e){let t=null;try{t=e.contentDocument}catch(e){console.error(e)}return t},c=function(e,t){let n=null;if("password"===e){if(n=t.querySelectorAll(o),n.length)return n[0]}else if("username"===e&&(n=t.querySelectorAll(s),n.length&&(n=h(n),n)))return n;return null},u=function(e,t){if(t&&!t.parentElement)return null;let n=null;const i=t.querySelectorAll(s);return i.length?(n=h(i),n||(n=a("username",e)),n):u(e,t.parentElement)},h=function(e){let t=null;const n=["id","class","name","placeholder"],i=["user","email","name","login"];e:for(let o=0;o<e.length;o++){const s=e[o];for(let e=0;e<n.length;e++)for(let o=0;o<i.length;o++){const l=s.querySelectorAll(`input[${n[e]}*='${i[o]}' i]`);if(l.length){t=l[0];break e}}}return t||(t=e[0]),t},m=function(e){try{if(function(e){const{username:t,secret:n,url:i}=e;if("string"!=typeof t)throw new Error("The parameter username is not valid");if("string"!=typeof n)throw new Error("The parameter secret is not valid");if("string"!=typeof i)throw new Error("The parameter url is not valid")}(e),!l(e.url,document.location.origin))throw new Error("The request is not initiated from same origin");const t=function(e){const t=document.querySelectorAll(o);if(t.length){for(const e of t)if(e.offsetWidth>0)return e;return null}return a("password",e)}(e);let n=null;if(null!==t)n=u(e,t.parentElement),null!==n&&r(n,e.username),r(t,e.secret);else{if(n=function(e,t){let n=null;const i=t.querySelectorAll(s);return n=i.length?h(i):a("username",e),n}(e,document),null===n)throw new Error("Unable to find the username element on this page.");r(n,e.username)}if(null===t&&null===n)throw new Error("Unable to find the input elements on this page.");port.emit(e.requestId,"SUCCESS")}catch(t){console.error(t),port.emit(e.requestId,"ERROR",{name:"Error",message:t.message})}},f=function(){port.on("passbolt.quickaccess.fill-form",((e,t,n,i)=>{m({requestId:e,username:t,secret:n,url:i})}))},p=function(){if(!function(){const e=document.querySelectorAll("html.passbolt .js_main-login-section");return e&&0!==e.length}())return;const e=document.getElementsByTagName("base");if(!e||!e.length)return;const t=e[0].attributes.href.value.replace(/\/*$/g,""),n=document.getElementsByClassName("plugin-check");if(!n||!n.length)return;n[0].classList.remove("error"),n[0].classList.add("warning");const i=document.querySelectorAll(".plugin-check .message");if(!i||!i.length)return;i[0].textContent="The plugin is installed but not configured. Please contact your domain administrator to request an invitation, or ";const o=document.createElement("a"),s=document.createTextNode("recover your account if you already have one!");o.appendChild(s),o.href=`${t}/users/recover`,o.rel="noopener,noreferrer",i[0].appendChild(o);const l=document.querySelectorAll(".fa-download.huge");if(!l||!l.length)return;l[0].classList.remove("fa-download"),l[0].classList.add("fa-rocket");const r=document.querySelectorAll(".button.primary");if(!r||!r.length)return;r[0].remove();const a=document.querySelectorAll(".users.login.form .feedback");if(!a||!a.length)return;const d=document.createElement("p"),c=document.createTextNode("You need an account to login.");d.appendChild(c),a[0].appendChild(d)};var g=n(586);class b{static getAccessibleAndSameDomainIframes(){return Array.prototype.filter.call(document.querySelectorAll("iframe"),(e=>{const t=b.getAccessedIframeContentDocument(e);return t&&b.isRequestInitiatedFromSameOrigin(window.location.href,t.location.href)}))}static getAccessedIframeContentDocument(e){let t=null;try{t=e.contentDocument}catch(e){console.error(e)}return t}static isRequestInitiatedFromSameOrigin(e,t){return new URL(e).origin===new URL(t).origin}static getScrollParent(e){const t=/(auto|scroll)/,n=(e,t)=>getComputedStyle(e,null).getPropertyValue(t),i=e=>e&&e!==document.body&&e.nodeType===Node.ELEMENT_NODE?(e=>t.test(n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")))(e)?e:i(e.parentNode):window;return i(e)}static getFieldWithLowestCommonAncestor(e,t){if(0===t.length)return null;if(1===t.length)return t[0];{let n,i=e;for(;i&&!n;)i=i.offsetParent||i.parentElement,n=t.find((e=>i.contains(e.field)));return n}}}const v=b;var y=n(150),A=n.n(y);class C{static findAll(e){const t=Array.from(document.querySelectorAll(e)),n=C.findAllInIframes(e);return t.concat(n)}static findAllInIframes(e){return v.getAccessibleAndSameDomainIframes().map((t=>Array.from(t.contentDocument.querySelectorAll(e)))).flat()}constructor(e,t){this.field=e,this.fieldType=t,this.iframeId=(0,g.Z)(),this.scrollableFieldParent=null,this.isCallToActionMousingOver=!1,this.callToActionClickWatcher=null,this.callToActionClickCallback=null,this.bindCallbacks(),this.handleInsertionEvent(),this.handleRemoveEvent(),this.handleScrollEvent()}bindCallbacks(){this.insertInformCallToActionIframe=this.insertInformCallToActionIframe.bind(this),this.removeInFormCallToActionWhenMouseOut=this.removeInFormCallToActionWhenMouseOut.bind(this),this.removeInFormCallToAction=this.removeInFormCallToAction.bind(this),this.removeCallToActionIframe=this.removeCallToActionIframe.bind(this),this.destroy=this.destroy.bind(this)}onClick(e){this.callToActionClickCallback=e}handleInsertionEvent(){document.activeElement===this.field&&this.insertInformCallToActionIframe(),this.field.addEventListener("mouseover",this.insertInformCallToActionIframe),this.field.addEventListener("focus",this.insertInformCallToActionIframe)}insertInformCallToActionIframe(){const e=document.querySelectorAll("iframe"),t=this.iframeId;if(!Array.prototype.some.call(e,(e=>e.id===t))){const e=this.createCallToActionIframe();this.handleCallToActionClicked(e)}}createCallToActionIframe(){const{top:e,left:t}=this.calculateFieldPosition(),n=document.createElement("iframe");document.body.appendChild(n);const i=A().runtime.getURL("/");return n.id=this.iframeId,n.style.position="fixed",n.style.top=`${e}px`,n.style.left=`${t}px`,n.style.border=0,n.style.width="18px",n.style.height="18px",n.style.zIndex="123456",n.contentWindow.location=`${i}webAccessibleResources/passbolt-iframe-in-form-call-to-action.html?passbolt=passbolt-iframe-in-form-call-to-action`,n}calculateFieldPosition(){let e=0,t=0,n=this.field,i=!1;const o=this.field.ownerDocument!==document,{top:s,left:l,height:r,width:a}=this.field.getBoundingClientRect(),{top:d,left:c}=o?this.field.ownerDocument.defaultView.frameElement.getBoundingClientRect():document.documentElement.getBoundingClientRect();for(;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)i=i||n.scrollLeft+n.scrollTop>0,e+=n.offsetLeft-n.scrollLeft,t+=n.offsetTop-n.scrollTop,n=n.offsetParent;return i||o?(e=e+c+a-25,t=t+d+Math.floor(r/2)-9):(e=l+a-25,t=s+Math.floor(r/2)-9),{top:t,left:e}}handleCallToActionClicked(e){this.callToActionClickWatcher=setInterval((()=>{const e=document.activeElement;e&&"IFRAME"===e.tagName&&e.id===this.iframeId&&(this.field.focus(),this.callToActionClickCallback(),clearInterval(this.callToActionClickWatcher))}),100),e.addEventListener("mouseover",(()=>this.isCallToActionMousingOver=!0)),e.addEventListener("mouseout",(()=>this.isCallToActionMousingOver=!1))}handleRemoveEvent(){this.field.addEventListener("mouseout",this.removeInFormCallToActionWhenMouseOut),this.field.addEventListener("blur",this.removeInFormCallToAction)}removeInFormCallToAction(){const e=this.isCallToActionMousingOver,t=document.activeElement===this.field;e||t||this.removeCallToActionIframe()}removeInFormCallToActionWhenMouseOut(e){const t=e.relatedTarget&&e.relatedTarget.id!==this.iframeId,n=document.activeElement===this.field;t&&!n&&this.removeCallToActionIframe()}removeCallToActionIframe(){document.querySelectorAll("iframe").forEach((e=>{const t=this.iframeId;e.id===t&&e.parentNode.removeChild(e)}))}handleScrollEvent(){this.scrollableFieldParent=v.getScrollParent(this.field),this.scrollableFieldParent.addEventListener("scroll",this.removeCallToActionIframe)}destroy(){this.field.removeEventListener("mouseover",this.insertInformCallToActionIframe),this.field.removeEventListener("focus",this.insertInformCallToActionIframe),this.field.removeEventListener("mouseout",this.removeInFormCallToActionWhenMouseOut),this.field.removeEventListener("blur",this.removeInFormCallToAction),this.scrollableFieldParent.removeEventListener("scroll",this.removeCallToActionIframe),this.removeCallToActionIframe()}}const T=C,I="input[type='text' i][name*='user' i]:not([hidden]):not([disabled]),\n  input[type='text' i][name*='email' i]:not([hidden]):not([disabled]),\n  input[type='text' i][name*='login' i]:not([hidden]):not([disabled]),\n  input[type='text' i][name*='benutzerkennung' i]:not([hidden]):not([disabled]),\n  input[type='text' i][name*='utilisateur' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='user' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='email' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='login' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='benutzerkennung' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='utilisateur' i]:not([hidden]):not([disabled]),\n  input[type='text' i][class*='user' i]:not([hidden]):not([disabled]),\n  input[type='text' i][class*='email' i]:not([hidden]):not([disabled]),\n  input[type='text' i][class*='create-account-input' i]:not([hidden]):not([disabled]),\n  input[type='text' i][autocomplete*='user' i]:not([hidden]):not([disabled]),\n  input[type='text' i][autocomplete*='email' i]:not([hidden]):not([disabled]),\n  input[type='text' i][placeholder*='user' i]:not([hidden]):not([disabled]),\n  input[type='text' i][placeholder*='email' i]:not([hidden]):not([disabled]),\n  input[type='text' i][placeholder*='e-mail' i]:not([hidden]):not([disabled]),\n  input[type='email' i]:not([hidden]):not([disabled]),\n  input[name*='user' i]:not([type]):not([hidden]):not([disabled]),\n  input[name*='email' i]:not([type]):not([hidden]):not([disabled]),\n  input[name*='login' i]:not([type]):not([hidden]):not([disabled]),\n  input[name*='benutzerkennung' i]:not([type]):not([hidden]):not([disabled]),\n  input[name*='utilisateur' i]:not([type]):not([hidden]):not([disabled]),\n  input[id*='user' i]:not([type]):not([hidden]):not([disabled]),\n  input[id*='email' i]:not([type]):not([hidden]):not([disabled]),\n  input[id*='login' i]:not([type]):not([hidden]):not([disabled]),\n  input[id*='benutzerkennung' i]:not([type]):not([hidden]):not([disabled]),\n  input[id*='utilisateur' i]:not([type]):not([hidden]):not([disabled]),\n  input[class*='user' i]:not([type]):not([hidden]):not([disabled]),\n  input[class*='email' i]:not([type]):not([hidden]):not([disabled]),\n  input[class*='create-account-input' i]:not([type]):not([hidden]):not([disabled]),\n  input[autocomplete*='user' i]:not([type]):not([hidden]):not([disabled]),\n  input[autocomplete*='email' i]:not([type]):not([hidden]):not([disabled]),\n  input[placeholder*='user' i]:not([type]):not([hidden]):not([disabled]),\n  input[placeholder*='email' i]:not([type]):not([hidden]):not([disabled]),\n  input[placeholder*='e-mail' i]:not([type]):not([hidden]):not([disabled])",w="input[type='password' i]:not([hidden]):not([disabled]),\n  input[type='text' i][name*='password' i]:not([hidden]):not([disabled]),\n  input[type='text' i][id*='password' i]:not([hidden]):not([disabled]),\n  input[type='text' i][class*='password' i]:not([hidden]):not([disabled])",E=class{static findAll(){const e=Array.from(document.querySelectorAll("form")),t=T.findAllInIframes();return e.concat(t)}static findAllInIframes(){return v.getAccessibleAndSameDomainIframes().map((e=>Array.from(e.contentDocument.querySelectorAll("form")))).flat()}constructor(e,t,n){this.field=e,this.usernameField=t,this.passwordField=n,this.hasAlreadySubmitted=!1,this.bindCallbacks()}get submitButton(){return this.field.querySelector("button[type='submit'], input[type='submit']")}bindCallbacks(){this.handleAutoSaveEvent=this.handleAutoSaveEvent.bind(this),this.autosave=this.autosave.bind(this),this.destroy=this.destroy.bind(this)}handleAutoSaveEvent(){this.field.addEventListener("submit",this.autosave),this.submitButton?.addEventListener("click",this.autosave)}autosave(){const e=Boolean(this.usernameField?.value?.trim())||Boolean(this.passwordField?.value?.trim());!this.hasAlreadySubmitted&&e&&(this.hasAlreadySubmitted=!0,port.emit("passbolt.web-integration.autosave",{name:document.title,username:this.usernameField?.value||"",password:this.passwordField.value,url:document.URL}))}destroy(){this.field.removeEventListener("submit",this.autosave),this.submitButton?.removeEventListener("click",this.autosave)}},F=new class{constructor(){this.callToActionFields=[],this.menuField=null,this.credentialsFormFields=[],this.mutationObserver=null,this.bindCallbacks()}initialize(){this.findAndSetAuthenticationFields(),this.handleDomChange(),this.handleInformCallToActionRepositionEvent(),this.handlePortDisconnectEvent(),this.handleInFormMenuInsertionEvent(),this.handleInFormMenuRemoveEvent(),this.handleInformCallToActionClickEvent(),this.handleGetLastCallToActionClickedInput(),this.handleGetCurrentCredentials(),this.handleFillCredentials(),this.handleFillPassword()}bindCallbacks(){this.findAndSetAuthenticationFields=this.findAndSetAuthenticationFields.bind(this),this.handleInformCallToActionClickEvent=this.handleInformCallToActionClickEvent.bind(this),this.clean=this.clean.bind(this),this.destroy=this.destroy.bind(this)}findAndSetAuthenticationFields(){this.findAndSetUsernameAndPasswordFields(),this.findAndSetCredentialsFormFields()}findAndSetUsernameAndPasswordFields(){const e=T.findAll(I),t=T.findAll(w),n=e.concat(t);n.length>0?this.callToActionFields=n.map((e=>{const t=this.callToActionFields.find((n=e,e=>e.field===n));var n;const i=e.matches(I)?"username":"password";return t||new T(e,i)})):(this.clean(),this.callToActionFields=[])}findAndSetCredentialsFormFields(){const e=E.findAll();e.length>0?this.credentialsFormFields=e.map((e=>{const t=this.credentialsFormFields.find((n=e,e=>e.field===n));var n;const i=this.callToActionFields.find((t=>"username"===t.fieldType&&e.contains(t.field))),o=this.callToActionFields.find((t=>"password"===t.fieldType&&e.contains(t.field)));return t||new E(e,i?.field,o?.field)})):this.credentialsFormFields=[]}clean(){this.callToActionFields.forEach((e=>e.removeCallToActionIframe())),this.menuField?.removeMenuIframe()}handleDomChange(){this.mutationObserver=new MutationObserver((e=>{!e.some((e=>(e=>"childList"===e.type)(e)&&this.isInformIframe(e)))&&(this.findAndSetAuthenticationFields(),this.handleInformCallToActionClickEvent())})),this.mutationObserver.observe(document.body,{attributes:!0,childList:!0,subtree:!0})}isInformIframe(e){const t=e.addedNodes.length>0?e.addedNodes:e.removedNodes;let n=!1;if(this.callToActionFields.length>0){const e=e=>Array.prototype.some.call(t,(t=>e.iframeId===t.id));n=this.callToActionFields.some(e)}return!n&&this.menuField&&(n=Array.prototype.some.call(t,(e=>this.menuField.iframeId===e.id))),n}handleInformCallToActionRepositionEvent(){window.addEventListener("resize",this.clean)}handleInFormMenuInsertionEvent(){port.on("passbolt.in-form-menu.open",(()=>{this.menuField=new class{constructor(e){this.field=e,this.iframeId=(0,g.Z)(),this.isMenuMousingOver=!1,this.scrollableFieldParent=null,this.bindCallbacks(),this.insertInformMenuIframe(),this.handleRemoveEvent(),this.handleScrollEvent()}bindCallbacks(){this.removeInFormMenu=this.removeInFormMenu.bind(this),this.removeMenuIframe=this.removeMenuIframe.bind(this),this.destroy=this.destroy.bind(this)}insertInformMenuIframe(){const e=document.querySelectorAll("iframe"),t=this.iframeId;if(!Array.prototype.some.call(e,(e=>e.id===t))){const e=this.createMenuIframe();this.handleMenuClicked(e)}}createMenuIframe(){const{top:e,left:t}=this.calculateIframePosition(),n=document.createElement("iframe");document.body.appendChild(n);const i=A().runtime.getURL("/");return n.id=this.iframeId,n.style.position="fixed",n.style.top=`${e}px`,n.style.left=`${t}px`,n.style.border=0,n.style.width="370px",n.style.height="220px",n.style.zIndex="123456",n.contentWindow.location=`${i}webAccessibleResources/passbolt-iframe-in-form-menu.html?passbolt=passbolt-iframe-in-form-menu`,n}calculateIframePosition(){let e=0,t=0,n=this.field,i=!1;const o=this.field.ownerDocument!==document,{top:s,left:l,height:r,width:a}=this.field.getBoundingClientRect(),{top:d,left:c}=o?this.field.ownerDocument.defaultView.frameElement.getBoundingClientRect():document.documentElement.getBoundingClientRect();for(;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)i=i||n.scrollLeft+n.scrollTop>0,e+=n.offsetLeft-n.scrollLeft,t+=n.offsetTop-n.scrollTop,n=n.offsetParent;return i||o?(e=e+c+a-367,t=t+d+r):(e=l+a-367,t=s+r),{top:t,left:e}}handleMenuClicked(e){e.addEventListener("mouseover",(()=>this.isMenuMousingOver=!0)),e.addEventListener("mouseout",(()=>this.isMenuMousingOver=!1))}handleRemoveEvent(){this.field.addEventListener("blur",this.removeInFormMenu)}removeInFormMenu(){const e=this.isMenuMousingOver,t=document.activeElement===this.field;e||t||this.removeMenuIframe()}removeMenuIframe(){document.querySelectorAll("iframe").forEach((e=>{const t=this.iframeId;e.id===t&&e.parentNode.removeChild(e)}))}handleScrollEvent(){this.scrollableFieldParent=v.getScrollParent(this.field),this.scrollableFieldParent.addEventListener("scroll",this.removeMenuIframe)}destroy(){this.field.removeEventListener("blur",this.removeInFormMenu),this.scrollableFieldParent.removeEventListener("scroll",this.removeMenuIframe),this.removeMenuIframe()}}(this.lastCallToActionFieldClicked.field)}))}handleInFormMenuRemoveEvent(){port.on("passbolt.in-form-menu.close",(()=>{this.menuField.removeMenuIframe()}))}handleInformCallToActionClickEvent(){this.callToActionFields.forEach((e=>e.onClick((()=>{this.lastCallToActionFieldClicked=e}))))}handleGetLastCallToActionClickedInput(){port.on("passbolt.web-integration.last-performed-call-to-action-input",(e=>{port.emit(e,"SUCCESS",{type:this.lastCallToActionFieldClicked.fieldType,value:this.lastCallToActionFieldClicked.field.value})}))}handleGetCurrentCredentials(){port.on("passbolt.web-integration.get-credentials",(e=>{const t=this.lastCallToActionFieldClicked?.fieldType,n="password"===t;let i=null,o=null;"username"===t||(i=this.callToActionFields.find((e=>"username"===e.fieldType))?.field.value||"",o=this.lastCallToActionFieldClicked?.field.value),n||(i=this.lastCallToActionFieldClicked?.field.value,o=this.callToActionFields.find((e=>"password"===e.fieldType))?.field.value||""),port.emit(e,"SUCCESS",{username:i,password:o})}))}handleFillCredentials(){port.on("passbolt.web-integration.fill-credentials",(({username:e,password:t})=>{const n=this.lastCallToActionFieldClicked?.fieldType;if("username"===n){if("password"!==n){i.BX.input(this.lastCallToActionFieldClicked.field,{target:{value:e}});const n=this.callToActionFields.filter((e=>"password"===e.fieldType)),o=v.getFieldWithLowestCommonAncestor(this.lastCallToActionFieldClicked.field,n);o&&i.BX.input(o.field,{target:{value:t}})}}else{i.BX.input(this.lastCallToActionFieldClicked.field,{target:{value:t}});const n=this.callToActionFields.filter((e=>"username"===e.fieldType)),o=v.getFieldWithLowestCommonAncestor(this.lastCallToActionFieldClicked.field,n);o&&i.BX.input(o.field,{target:{value:e}})}}))}handleFillPassword(){port.on("passbolt.web-integration.fill-password",(e=>{this.callToActionFields.filter((e=>"password"===e.fieldType)).forEach((t=>i.BX.input(t.field,{target:{value:e}}))),this.menuField.removeMenuIframe(),this.credentialsFormFields.find((e=>e.field.contains(this.lastCallToActionFieldClicked.field)))?.handleAutoSaveEvent()}))}destroy(){this.mutationObserver.disconnect(),this.callToActionFields.forEach((e=>e.destroy())),this.menuField?.destroy(),this.credentialsFormFields.forEach((e=>e.destroy())),window.removeEventListener("resize",this.clean)}handlePortDisconnectEvent(){port._port.onDisconnect.addListener(this.destroy)}},S=(e,t)=>t.split(".").reduce(((e,t)=>void 0===e?e:e[t]),e),L=(e,t)=>{if(void 0===e||"string"!=typeof e||!e.length)return!1;if((t=t||{}).whitelistedProtocols&&!Array.isArray(t.whitelistedProtocols))throw new TypeError("The whitelistedProtocols should be an array of string.");if(t.defaultProtocol&&"string"!=typeof t.defaultProtocol)throw new TypeError("The defaultProtocol should be a string.");const n=t.whitelistedProtocols||[k.HTTP,k.HTTPS],i=[k.JAVASCRIPT],o=t.defaultProtocol||"";!/^((?!:\/\/).)*:\/\//.test(e)&&o&&(e=`${o}//${e}`);try{const t=new URL(e);return!i.includes(t.protocol)&&!!n.includes(t.protocol)&&t.href}catch(e){return!1}},k={FTP:"http:",FTPS:"https:",HTTP:"http:",HTTPS:"https:",JAVASCRIPT:"javascript:",SSH:"ssh:"};class _{constructor(e){this.settings=e}canIUse(e){let t=!1;const n=`passbolt.plugins.${e}`,i=S(this.settings,n)||null;if(i&&"object"==typeof i){const e=S(i,"enabled");void 0!==e&&!0!==e||(t=!0)}return t}getPluginSettings(e){const t=`passbolt.plugins.${e}`;return S(this.settings,t)}getRememberMeOptions(){return(this.getPluginSettings("rememberMe")||{}).options||{}}get hasRememberMeUntilILogoutOption(){return void 0!==(this.getRememberMeOptions()||{})[-1]}getServerTimezone(){return S(this.settings,"passbolt.app.server_timezone")}get termsLink(){const e=S(this.settings,"passbolt.legal.terms.url");return!!e&&L(e)}get privacyLink(){const e=S(this.settings,"passbolt.legal.privacy_policy.url");return!!e&&L(e)}get registrationPublic(){return!0===S(this.settings,"passbolt.registration.public")}get debug(){return!0===S(this.settings,"app.debug")}get url(){return S(this.settings,"app.url")||""}get version(){return S(this.settings,"app.version.number")}get locale(){return S(this.settings,"app.locale")||_.DEFAULT_LOCALE.locale}async setLocale(e){this.settings.app.locale=e}get supportedLocales(){return S(this.settings,"passbolt.plugins.locale.options")||_.DEFAULT_SUPPORTED_LOCALES}get generatorConfiguration(){return S(this.settings,"passbolt.plugins.generator.configuration")}static get DEFAULT_SUPPORTED_LOCALES(){return[_.DEFAULT_LOCALE]}static get DEFAULT_LOCALE(){return{locale:"en-UK",label:"English"}}}const M=async function(){p(),f(),(await async function(){try{const e=await port.request("passbolt.organization-settings.get",!1);return new _(e)}catch(e){console.error(e)}}())?.canIUse("inFormIntegration")&&F.initialize()};A().scripting||(A().scripting=new class{executeScript(e){e.func?this._insertJsFunc(e):this._insertJsFiles(e)}insertCSS(e){let t=null;const n=e.files;for(let i=n.length-1;i>=0;--i){const o={file:n[i],runAt:"document_end",frameId:e.target?.frameId};t=this._createCssCallback(e.target.tabId,o,t)}t&&t()}_createJsCallback(e,t,n){return()=>chrome.tabs.executeScript(e,t,n)}_createCssCallback(e,t,n){return()=>chrome.tabs.insertCSS(e,t,n)}_insertJsFiles(e){let t=null;const n=e.files;for(let i=n.length-1;i>=0;--i){const o={file:n[i],runAt:"document_end",frameId:e.target?.frameId};t=this._createJsCallback(e.target.tabId,o,t)}t&&t()}_insertJsFunc(e){const t=JSON.stringify(e.args),n=`;${e.func.name}.apply(window, ${t});`,i={code:e.func.toString()+n,runAt:"document_end",frameId:e.target?.frameId};this._createJsCallback(e.target.tabId,i,null)()}});A().storage.session||(A().storage.session=new class{constructor(){this._storedData={}}async get(e){const t=typeof e;if("string"!==t&&"undefined"!==t)throw new Error(`Expected keys type of "string" but received an unsopprted type: ${t}`);return e?this._storedData[e]?{[e]:this._storedData[e]}:{}:this._storedData}async set(e){if("object"!=typeof e)throw new Error('Expected keys type of "object" but received an unsopprted type: '+typeof e);for(const t in e)this._storedData[t]=JSON.parse(JSON.stringify(e[t]))}async remove(e){delete this._storedData[e]}async clear(){this._storedData={}}});const P=A();var O=n(187);n(889);!async function(){self.port=new class{constructor(e){if(this._listeners={},this.lock=new class{constructor(){this._locked=!1,this._ee=new O.EventEmitter}acquire(){return new Promise((e=>{if(!this._locked)return this._locked=!0,e();const t=()=>{if(!this._locked)return this._locked=!0,this._ee.removeListener("release",t),e()};this._ee.on("release",t)}))}release(){this._locked=!1,setImmediate((()=>this._ee.emit("release")))}},void 0===e)throw Error("A port name is required.");if("string"!=typeof e)throw Error("The port name should be a valid string.");this._name=e}connect(){let e;const t=new Promise((t=>{e=t}));return this._port=P.runtime.connect({name:this._name}),this._connected=!0,this.initListener(),this.once("passbolt.port.ready",e),t}initListener(){this._port.onDisconnect.addListener((()=>{console.warn(`port disconnected from addon code: ${this._name}`),this._connected=!1})),this._port.onMessage.addListener((e=>{this._onMessage(e)}))}_onMessage(e){const t=JSON.parse(e),n=t[0];if(Array.isArray(this._listeners[n])){const e=this._listeners[n];for(let i=0;i<e.length;i++){const o=e[i],s=Array.prototype.slice.call(t,1);o.callback.apply(this,s),o.once&&(this._listeners[n].splice(i,1),0===this._listeners[n].length&&delete this._listeners[n],i--)}}}_addListener(e,t,n){Array.isArray(this._listeners[e])||(this._listeners[e]=[]),this._listeners[e].push({name:e,callback:t,once:n})}on(e,t){this._addListener(e,t,!1)}once(e,t){this._addListener(e,t,!0)}async emit(...e){const t=JSON.stringify(e);await this.connectIfDisconnected(),this._port.postMessage(t)}request(e,...t){const n=(0,g.Z)(),i=[e,n].concat(t);return new Promise(((e,t)=>{this.once(n,((n,...i)=>{"SUCCESS"===n?e.apply(null,i):"ERROR"===n&&t.apply(null,i)})),this.emit.apply(this,i)}))}async connectIfDisconnected(){await this.lock.acquire(),this._connected||await this.connect(),this.lock.release()}}(self.portname),await self.port.connect(),M()}()}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=t,e=[],i.O=(t,n,o,s)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,o,s]=e[c],r=!0,a=0;a<n.length;a++)(!1&s||l>=s)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,o,s]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={174:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,s,[l,r,a]=n,d=0;if(l.some((t=>0!==e[t]))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(a)var c=a(i)}for(t&&t(n);d<l.length;d++)s=l[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},n=self.contentScriptBrowserIntegrationChunkLoadingGlobal=self.contentScriptBrowserIntegrationChunkLoadingGlobal||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[216],(()=>i(810)));o=i.O(o)})();