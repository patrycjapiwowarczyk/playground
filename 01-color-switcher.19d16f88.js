!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){t.disabled=!t.disabled}))}function o(o){o.target===e?(a(e,n),t=setInterval((function(){return document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3)):o.target===n&&(a(e,n),clearInterval(t))}n.disabled=!0,e.disabled=!1,e.addEventListener("click",o),n.addEventListener("click",o)}();
//# sourceMappingURL=01-color-switcher.19d16f88.js.map
