// ==UserScript==
// @name         Supply clicker
// @namespace    Drugs click
// @version      0.0.1
// @description  Supplies clicker
// @author       Margiela
// @match        https://*.tankionline.com/play/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==

GM_xmlhttpRequest ({ url: "https://raw.githubusercontent.com/egoistime/supply-click/refs/heads/main/main.js", method: "GET", onload: (ev) => { eval(ev.responseText) } });
