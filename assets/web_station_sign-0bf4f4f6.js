(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();(async()=>{var r;var n=await fetch("./station_sign_files/content.json").then(e=>e.json().then(t=>t));const l=document.getElementById("tbr");l.innerHTML="";for(let e of n.tafel.misc.links){let t=document.createElement("a");t.classList.add("impressumLink"),t.setAttribute("href",e.link.to),t.innerHTML=e.link.title,l.appendChild(t)}l.innerHTML+="<span class='logos'><img id='logo-0-0' class='logo' src='./station_sign_files/Logo.gif'></span>",document.getElementById("tafelHeader").innerHTML=n.tafel.misc.header,document.getElementById("col1").innerHTML=n.tafel.misc.gelbeLeiste.col1,document.getElementById("col2").innerHTML=n.tafel.misc.gelbeLeiste.col2,document.getElementById("col3").innerHTML=n.tafel.misc.gelbeLeiste.col3;const a=document.getElementById("tbody");a.innerHTML="";for(let e of n.tafel.content){let t=document.createElement("tr"),i=document.createElement("td");i.classList.add("cell_time");let c=document.createElement("span");c.classList.add("time"),c.innerHTML=e.eintrag.col1.zeit,i.appendChild(c);let d=document.createElement("span");d.classList.add("tripID"),d.innerHTML=e.eintrag.col1.zugnummer,i.appendChild(d);let p=document.createElement("td"),s=document.createElement("span"),m=document.createElement("span");s.classList.add("to_from"),m.classList.add("additionalStyling"),m.innerHTML=e.eintrag.col2,s.appendChild(m),p.appendChild(s);let f=document.createElement("td"),u=document.createElement("span"),g=document.createElement("span");u.classList.add("platform"),g.classList.add("additionalStyling");let o=document.createElement("a");o.classList.add("trackLink"),o.setAttribute("href",e.eintrag.col3.to),o.setAttribute("target","_blank"),o.innerHTML=e.eintrag.col3.title,g.innerHTML=e.eintrag.col3.title,u.appendChild(o),f.appendChild(u),t.appendChild(i),t.appendChild(p),t.appendChild(f),a.appendChild(t)}if(n.tafel.misc.unterschrift!=""){const e=document.createElement("div");e.classList.add("additionalText"),e.setAttribute("id","disruption"),e.innerHTML=n.tafel.misc.unterschrift,(r=document.getElementById("additionalTextContainer"))==null||r.appendChild(e)}})().catch(n=>console.error(n));