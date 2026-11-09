import { defaultLocale, localeCookie, locales } from "./config";

/**
 * Inline script, run before the first paint of the English pages only, that sends a visitor to the
 * version of the same page in their language. It never leaves anyone stuck in a language:
 *
 *  - only English URLs are redirected; a French URL is never sent anywhere, so there is no loop;
 *  - a language chosen with the selector (cookie) always wins over the browser's preference;
 *  - arriving from another page of the site (the selector, an internal link) is left alone;
 *  - otherwise the first language of the browser's preference list that the site supports wins.
 *
 * It is plain ES5 on purpose: it is sent as is, without any compilation.
 */
export const detectLocaleScript = `(function(){
var supported=${JSON.stringify(locales)},fallback=${JSON.stringify(defaultLocale)},path=location.pathname;
function go(code){location.replace("/"+code+(path==="/"?"":path)+location.search+location.hash);}
try{
for(var i=0;i<supported.length;i++){
if(supported[i]!==fallback&&(path==="/"+supported[i]||path.indexOf("/"+supported[i]+"/")===0))return;
}
var saved=document.cookie.match(/(?:^|; )${localeCookie}=([a-z]{2})/);
if(saved&&supported.indexOf(saved[1])!==-1){if(saved[1]!==fallback)go(saved[1]);return;}
if(document.referrer){
try{if(new URL(document.referrer).origin===location.origin)return;}catch(e){}
}
var prefs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
for(var j=0;j<prefs.length;j++){
var code=String(prefs[j]).slice(0,2).toLowerCase();
if(supported.indexOf(code)!==-1){if(code!==fallback)go(code);return;}
}
}catch(e){}
})();`;
