class T{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const O="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ze{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new T(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function H(o){const e=o?"#"+o.join():"";WA.nav.openCoWebSite(O+"/configuration.html"+e)}async function Ke(o,e){const t=await WA.room.getTiledMap(),r=new Map;return se(t.layers,r,o,e),r}function se(o,e,t,r){for(const n of o)if(n.type==="objectgroup"){for(const a of n.objects)if(a.type==="variable"||a.class==="variable"){if(t&&n.name!==t||r&&!r.includes(a.name))continue;e.set(a.name,new ze(a))}}else n.type==="group"&&se(n.layers,e,t,r)}let B;async function M(){return B===void 0&&(B=$e()),B}async function $e(){return He(await WA.room.getTiledMap())}function He(o){const e=new Map;return ie(o.layers,"",e),e}function ie(o,e,t){for(const r of o)r.type==="group"?ie(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function Xe(){const o=await M(),e=[];for(const t of o.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function Ye(o){let e=1/0,t=1/0,r=0,n=0;const a=o.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<o.height;s++)for(let i=0;i<o.width;i++)a[i+s*o.width]!==0&&(e=Math.min(e,i),n=Math.max(n,i),t=Math.min(t,s),r=Math.max(r,s));return{top:t,left:e,right:n+1,bottom:r+1}}function le(o){let e=1/0,t=1/0,r=0,n=0;for(const a of o){const s=Ye(a);s.left<e&&(e=s.left),s.top<t&&(t=s.top),s.right>n&&(n=s.right),s.bottom>r&&(r=s.bottom)}return{top:t,left:e,right:n,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var Fe=Object.prototype.toString,k=Array.isArray||function(e){return Fe.call(e)==="[object Array]"};function D(o){return typeof o=="function"}function Qe(o){return k(o)?"array":typeof o}function J(o){return o.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function X(o,e){return o!=null&&typeof o=="object"&&e in o}function eo(o,e){return o!=null&&typeof o!="object"&&o.hasOwnProperty&&o.hasOwnProperty(e)}var oo=RegExp.prototype.test;function to(o,e){return oo.call(o,e)}var ro=/\S/;function no(o){return!to(ro,o)}var ao={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function so(o){return String(o).replace(/[&<>"'`=\/]/g,function(t){return ao[t]})}var io=/\s*/,lo=/\s+/,Y=/\s*=/,uo=/\s*\}/,co=/#|\^|\/|>|\{|&|=|!/;function po(o,e){if(!o)return[];var t=!1,r=[],n=[],a=[],s=!1,i=!1,l="",p=0;function f(){if(s&&!i)for(;a.length;)delete n[a.pop()];else a=[];s=!1,i=!1}var h,b,w;function L(W){if(typeof W=="string"&&(W=W.split(lo,2)),!k(W)||W.length!==2)throw new Error("Invalid tags: "+W);h=new RegExp(J(W[0])+"\\s*"),b=new RegExp("\\s*"+J(W[1])),w=new RegExp("\\s*"+J("}"+W[1]))}L(e||v.tags);for(var u=new V(o),y,m,A,_,I,E;!u.eos();){if(y=u.pos,A=u.scanUntil(h),A)for(var U=0,Ne=A.length;U<Ne;++U)_=A.charAt(U),no(_)?(a.push(n.length),l+=_):(i=!0,t=!0,l+=" "),n.push(["text",_,y,y+1]),y+=1,_===`
`&&(f(),l="",p=0,t=!1);if(!u.scan(h))break;if(s=!0,m=u.scan(co)||"name",u.scan(io),m==="="?(A=u.scanUntil(Y),u.scan(Y),u.scanUntil(b)):m==="{"?(A=u.scanUntil(w),u.scan(uo),u.scanUntil(b),m="&"):A=u.scanUntil(b),!u.scan(b))throw new Error("Unclosed tag at "+u.pos);if(m==">"?I=[m,A,y,u.pos,l,p,t]:I=[m,A,y,u.pos],p++,n.push(I),m==="#"||m==="^")r.push(I);else if(m==="/"){if(E=r.pop(),!E)throw new Error('Unopened section "'+A+'" at '+y);if(E[1]!==A)throw new Error('Unclosed section "'+E[1]+'" at '+y)}else m==="name"||m==="{"||m==="&"?i=!0:m==="="&&L(A)}if(f(),E=r.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+u.pos);return yo(fo(n))}function fo(o){for(var e=[],t,r,n=0,a=o.length;n<a;++n)t=o[n],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function yo(o){for(var e=[],t=e,r=[],n,a,s=0,i=o.length;s<i;++s)switch(n=o[s],n[0]){case"#":case"^":t.push(n),r.push(n),t=n[4]=[];break;case"/":a=r.pop(),a[5]=n[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(n)}return e}function V(o){this.string=o,this.tail=o,this.pos=0}V.prototype.eos=function(){return this.tail===""};V.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};V.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function C(o,e){this.view=o,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)};C.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var n=this,a,s,i,l=!1;n;){if(e.indexOf(".")>0)for(a=n.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=X(a,s[i])||eo(a,s[i])),a=a[s[i++]];else a=n.view[e],l=X(n.view,e);if(l){r=a;break}n=n.parent}t[e]=r}return D(r)&&(r=r.call(this.view)),r};function d(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};d.prototype.parse=function(e,t){var r=this.templateCache,n=e+":"+(t||v.tags).join(":"),a=typeof r<"u",s=a?r.get(n):void 0;return s==null&&(s=po(e,t),a&&r.set(n,s)),s};d.prototype.render=function(e,t,r,n){var a=this.getConfigTags(n),s=this.parse(e,a),i=t instanceof C?t:new C(t,void 0);return this.renderTokens(s,i,r,e,n)};d.prototype.renderTokens=function(e,t,r,n,a){for(var s="",i,l,p,f=0,h=e.length;f<h;++f)p=void 0,i=e[f],l=i[0],l==="#"?p=this.renderSection(i,t,r,n,a):l==="^"?p=this.renderInverted(i,t,r,n,a):l===">"?p=this.renderPartial(i,t,r,a):l==="&"?p=this.unescapedValue(i,t):l==="name"?p=this.escapedValue(i,t,a):l==="text"&&(p=this.rawValue(i)),p!==void 0&&(s+=p);return s};d.prototype.renderSection=function(e,t,r,n,a){var s=this,i="",l=t.lookup(e[1]);function p(b){return s.render(b,t,r,a)}if(l){if(k(l))for(var f=0,h=l.length;f<h;++f)i+=this.renderTokens(e[4],t.push(l[f]),r,n,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],t.push(l),r,n,a);else if(D(l)){if(typeof n!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(t.view,n.slice(e[3],e[5]),p),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],t,r,n,a);return i}};d.prototype.renderInverted=function(e,t,r,n,a){var s=t.lookup(e[1]);if(!s||k(s)&&s.length===0)return this.renderTokens(e[4],t,r,n,a)};d.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=n+a[s]);return a.join(`
`)};d.prototype.renderPartial=function(e,t,r,n){if(r){var a=this.getConfigTags(n),s=D(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],p=e[4],f=s;l==0&&p&&(f=this.indentPartial(s,p,i));var h=this.parse(f,a);return this.renderTokens(h,t,r,f,n)}}};d.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};d.prototype.escapedValue=function(e,t,r){var n=this.getConfigEscape(r)||v.escape,a=t.lookup(e[1]);if(a!=null)return typeof a=="number"&&n===v.escape?String(a):n(a)};d.prototype.rawValue=function(e){return e[1]};d.prototype.getConfigTags=function(e){return k(e)?e:e&&typeof e=="object"?e.tags:void 0};d.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!k(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(o){R.templateCache=o},get templateCache(){return R.templateCache}},R=new d;v.clearCache=function(){return R.clearCache()};v.parse=function(e,t){return R.parse(e,t)};v.render=function(e,t,r,n){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Qe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return R.render(e,t,r,n)};v.escape=so;v.Scanner=V;v.Context=C;v.Writer=d;class ue{constructor(e,t){this.template=e,this.state=t,this.ast=v.parse(e)}getValue(){return this.value===void 0&&(this.value=v.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const n=v.render(this.template,this.state);n!==this.value&&(this.value=n,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const n=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(n)&&t.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,t)}}}async function ho(){var o;const e=await Xe();for(const t of e){const r=(o=t.properties)!==null&&o!==void 0?o:[];for(const n of r){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const a=new ue(n.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await F(t.name,n.name,s),a.onChange(async i=>{await F(t.name,n.name,i)})}}}async function go(){var o;const e=await M();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const n=(o=r.properties)!==null&&o!==void 0?o:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ue(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();Q(t,a.name,i),s.onChange(l=>{Q(t,a.name,l)})}}}async function F(o,e,t){console.log(o),(await WA.room.area.get(o)).setProperty(e,t)}function Q(o,e,t){WA.room.setProperty(o,e,t),e==="visible"&&(t?WA.room.showLayer(o):WA.room.hideLayer(o))}let j,G=0,q=0;function ee(o){if(WA.state[o.name]){let e=o.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=o.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=o.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=o.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function bo(o){const e=o.properties.getString("openSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=pe(o.properties.mustGetString("openLayer").split(`
`));if(n>t)return;r=1-n/t}e&&WA.sound.loadSound(e).play({volume:r})}function mo(o){const e=o.properties.getString("closeSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=pe(o.properties.mustGetString("closeLayer").split(`
`));if(n>t)return;r=1-n/t}e&&WA.sound.loadSound(e).play({volume:r})}function ce(o){return o.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function pe(o){const e=ce(o),t=le(e),r=((t.right-t.left)/2+t.left)*32,n=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(G-r,2)+Math.pow(q-n,2))}function vo(o){WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]?bo(o):mo(o),ee(o)}),ee(o)}function Ao(o,e,t,r){const n=o.name;let a,s,i=!1;const l=t.getString("tag");let p=!0;l&&!WA.player.tags.includes(l)&&(p=!1);const f=!!l;function h(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=t.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=t.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,h()}})}function w(u){const y=le(ce(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+u,url:r+"/keypad.html#"+encodeURIComponent(u),position:{x:y.right*32,y:y.top*32,width:32*3,height:32*4},allowApi:!0})}function L(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(n).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!p||!f)&&(t.getString("code")||t.getString("codeVariable"))){w(n);return}p&&(WA.state[e.name]?h():b())}),WA.room.onLeaveLayer(n).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),L()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&h(),s&&WA.state[e.name]===!0&&L(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function Wo(o){const e=o.properties.mustGetString("bellSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=Math.sqrt(Math.pow(o.x-G,2)+Math.pow(o.y-q,2));if(n>t)return;r=1-n/t}WA.sound.loadSound(e).play({volume:r})}function Lo(o){WA.state[o.name]===void 0&&(WA.state[o.name]=0),WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]&&Wo(o)})}function wo(o,e,t){let r;const n=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var a;n?r=WA.ui.openPopup(n,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[o]=WA.state[o]+1}}]):WA.state[o]=WA.state[o]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Eo(o){o=o??O;const e=await Ke();j=await M();for(const t of e.values())t.properties.get("door")&&vo(t),t.properties.get("bell")&&Lo(t);for(const t of j.values()){const r=new T(t.properties),n=r.getString("doorVariable");if(n&&t.type==="tilelayer"){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of layer "'+t.name+'"');Ao(t,s,r,o)}const a=r.getString("bellVariable");a&&wo(a,r,t.name)}WA.player.onPlayerMove(t=>{G=t.x,q=t.y})}function So(o,e){const t=o.getString("bindVariable");if(t){const r=o.get("enterValue"),n=o.get("leaveValue"),a=o.getString("triggerMessage"),s=o.getString("tag");Co(t,e,r,n,a,s)}}function Co(o,e,t,r,n,a){a&&!WA.player.tags.includes(a)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{n||(WA.state[o]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[o]=r}))}async function ko(){const o=await M();for(const e of o.values()){const t=new T(e.properties);So(t,e.name)}}let oe;async function Po(o){const e=await WA.room.getTiledMap();o=o??O,oe=await M();const t=e.layers.find(r=>r.name==="configuration");if(t){const n=new T(t.properties).getString("tag");(!n||WA.player.tags.includes(n))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(o+"/configuration.html",!0)});for(const a of oe.values()){const s=new T(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&_o(i.split(","),a.name,s)}}}function _o(o,e,t){let r;const n=t.getString("openConfigAdminTag");let a=!0;n&&!WA.player.tags.includes(n)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=t.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>H(o)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=t.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():H(o))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function fe(){return WA.onInit().then(()=>{Eo().catch(o=>console.error(o)),ko().catch(o=>console.error(o)),Po().catch(o=>console.error(o)),go().catch(o=>console.error(o)),ho().catch(o=>console.error(o))}).catch(o=>console.error(o))}fe();console.log("Script started successfully");var g=void 0,S="Schließen",ye="popUpJobs1",he="popUpJobs2",To="jobs_1",Ro="jobs_2",ge="Finde die passende Einstiegsmöglichkeit für dich",de="Jobs anzeigen",be="https://db.jobs/service/search/de-de/5441588?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",me="popUpJobProfiler",Mo="jobProfiler",Vo="Du weißt noch nicht, wohin es gehen soll?",Io="Finde es hier heraus!",Uo="https://ausbildung-deutschebahn.com/jobprofiler/?utm_source=Careerpage&utm_medium=organic_Linkout&utm_campaign=Rec_Jobprofiler&utm_term=bundesweit_Azubi",ve="popUpMeetUs",Bo="meetUs",Jo="Lerne uns persönlich kennen",jo="Meet Us",Oo="https://db.jobs/service/search/de-de/9639412?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",Ae="popUpDoVoting",Do="doVoting",Go="Möchtest du am Voting teilnehmen und weitere interessante Dinge über die DB als Arbeitgeber erfahren?",qo="Ja!",Zo="Kein Interesse",te="popUpImportance",xo="importance",No=`Willkommen beim Voting. Lass uns direkt loslegen:

Was ist dir wichtig?

Springe in das jeweilige Portal, um deine Stimme abzugeben.`,re="popUpImportanceResult",zo="importanceResult",Ko=`Na? Ist dir die Entscheidung schwer gefallen?

Zum Glück musst du dich bei uns nicht für eine der Optionen entscheiden. Du bekommst sie alle!`,$o="Cool!",ne="popUpJobLocation",Ho="jobLocation",Xo=`Wo möchtest du am liebsten arbeiten?

Gehe zum jeweiligen Ort, um deine Stimme abzugeben.`,ae="popUpJobLocationResult",Yo="locationResult",Fo="Bei uns kannst du jedem der Bereiche einstiegen. Schau dich doch einfach mal um:",Qo="Zeig mir die Jobs!",et="https://db.jobs/service/search/de-de/7707604?qli=true&query=&itemsPerPage=10&pageNum=0&country=Deutschland&positiontype=Ausbildung&positiontype=Duales+Studium";function c(){g!==void 0&&(g.close(),g=void 0)}WA.room.onLeaveLayer(ye).subscribe(()=>{c()});WA.room.onEnterLayer(ye).subscribe(()=>{g=WA.ui.openPopup(To,ge,[{label:de,callback:o=>{WA.nav.openTab(be),c()}},{label:S,callback:o=>{c()}}])});WA.room.onLeaveLayer(he).subscribe(()=>{c()});WA.room.onEnterLayer(he).subscribe(()=>{g=WA.ui.openPopup(Ro,ge,[{label:de,callback:o=>{WA.nav.openTab(be),c()}},{label:S,callback:o=>{c()}}])});WA.room.onLeaveLayer(me).subscribe(()=>{c()});WA.room.onEnterLayer(me).subscribe(()=>{g=WA.ui.openPopup(Mo,Vo,[{label:Io,callback:o=>{WA.nav.openTab(Uo),c()}},{label:S,callback:o=>{c()}}])});WA.room.onLeaveLayer(ve).subscribe(()=>{c()});WA.room.onEnterLayer(ve).subscribe(()=>{g=WA.ui.openPopup(Bo,Jo,[{label:jo,callback:o=>{WA.nav.openTab(Oo),c()}},{label:S,callback:o=>{c()}}])});WA.room.onLeaveLayer(Ae).subscribe(()=>{c()});WA.room.onEnterLayer(Ae).subscribe(()=>{g=WA.ui.openPopup(Do,Go,[{label:qo,callback:o=>{WA.player.moveTo(),c()}},{label:Zo,callback:o=>{c()}}])});var Z="voting_top_closed/room1",x="voting_top_closed/room2",N="voting_top_closed/room3",We="voting_top_closed/room4",P="voting_top_opened/mainRoom",z="voting_top_opened/room1",K="voting_top_opened/room2",$="voting_top_opened/room3",Le="voting_top_opened/room4",we="specialZones/voting/remove_roofs/roof1",Ee="specialZones/voting/remove_roofs/roof2",Se="specialZones/voting/remove_roofs/roof3",Ce="specialZones/voting/remove_roofs/roof4";WA.room.onLeaveLayer(we).subscribe(()=>{WA.room.showLayer(Z),WA.room.hideLayer(z),WA.room.hideLayer(P)});WA.room.onEnterLayer(we).subscribe(()=>{WA.room.hideLayer(Z),WA.room.showLayer(P),WA.room.showLayer(z)});WA.room.onLeaveLayer(Ee).subscribe(()=>{WA.room.showLayer(x),WA.room.hideLayer(K)});WA.room.onEnterLayer(Ee).subscribe(()=>{WA.room.showLayer(P),WA.room.showLayer(Z),WA.room.hideLayer(z),WA.room.hideLayer(x),WA.room.showLayer(K)});WA.room.onLeaveLayer(Se).subscribe(()=>{WA.room.showLayer(N),WA.room.hideLayer($)});WA.room.onEnterLayer(Se).subscribe(()=>{WA.room.showLayer(P),WA.room.showLayer(x),WA.room.hideLayer(K),WA.room.hideLayer(N),WA.room.showLayer($)});WA.room.onLeaveLayer(Ce).subscribe(()=>{WA.room.showLayer(We),WA.room.hideLayer(Le),WA.room.hideLayer(P)});WA.room.onEnterLayer(Ce).subscribe(()=>{WA.room.showLayer(P),WA.room.showLayer(N),WA.room.hideLayer($),WA.room.hideLayer(We),WA.room.showLayer(Le)});var ke="trains_top/ice1_roof",Pe="trains_top/ice1_maul",_e="trains_top/ice2_roof",Te="trains_top/ice2_maul",Re="trains_top/ice3_roof",Me="trains_top/ice3_maul",Ve="trains_top/ice4_roof",Ie="trains_top/ice4_maul",Ue="trains_top/regio1_roof",Be="trains_top/regio1_maul",Je="trains_top/regio2_roof",je="trains_top/regio2_maul",Oe="specialZones/ICEs/hideICE1",De="specialZones/ICEs/hideICE2",Ge="specialZones/ICEs/hideICE3",qe="specialZones/ICEs/hideICE4",Ze="specialZones/ICEs/hideRegio1",xe="specialZones/ICEs/hideRegio2";WA.room.onLeaveLayer(Oe).subscribe(()=>{WA.room.showLayer(ke),WA.room.hideLayer(Pe)});WA.room.onEnterLayer(Oe).subscribe(()=>{WA.room.hideLayer(ke),WA.room.showLayer(Pe)});WA.room.onLeaveLayer(De).subscribe(()=>{WA.room.showLayer(_e),WA.room.hideLayer(Te)});WA.room.onEnterLayer(De).subscribe(()=>{WA.room.hideLayer(_e),WA.room.showLayer(Te)});WA.room.onLeaveLayer(Ge).subscribe(()=>{WA.room.showLayer(Re),WA.room.hideLayer(Me)});WA.room.onEnterLayer(Ge).subscribe(()=>{WA.room.hideLayer(Re),WA.room.showLayer(Me)});WA.room.onLeaveLayer(qe).subscribe(()=>{WA.room.showLayer(Ve),WA.room.hideLayer(Ie)});WA.room.onEnterLayer(qe).subscribe(()=>{WA.room.hideLayer(Ve),WA.room.showLayer(Ie)});WA.room.onLeaveLayer(Ze).subscribe(()=>{WA.room.showLayer(Ue),WA.room.hideLayer(Be)});WA.room.onEnterLayer(Ze).subscribe(()=>{WA.room.hideLayer(Ue),WA.room.showLayer(Be)});WA.room.onLeaveLayer(xe).subscribe(()=>{WA.room.showLayer(Je),WA.room.hideLayer(je)});WA.room.onEnterLayer(xe).subscribe(()=>{WA.room.hideLayer(Je),WA.room.showLayer(je)});const ot=[{label:"Reset",className:"error",callback:()=>WA.state.voteAcq=WA.state.voteMoney=WA.state.voteTicket=0}];WA.onInit().then(async()=>{var o="specialZones/voting/acquisitionVoting",e="voteAcquisiton",t="specialZones/voting/moneyVoting",r="voteMoney",n="specialZones/voting/ticketVoting",a="voteTicket",s="specialZones/voting/officeVoting",i="voteOffice",l="specialZones/voting/workshopVoting",p="voteWorkshop",f="specialZones/voting/trainVoting",h="voteTrain",b="specialZones/voting/outsideVoting",w="voteOutside",L="specialZones/voteReset";console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer(o).subscribe(()=>{console.log(e,WA.state.voteAcquisition),WA.state.voteAcquisition++}),WA.room.onLeaveLayer(o).subscribe(()=>{console.log(e,WA.state.voteAcquisition),WA.state.voteAcquisition}),WA.room.onEnterLayer(t).subscribe(()=>{console.log(r,WA.state.voteMoney),WA.state.voteMoney++}),WA.room.onLeaveLayer(t).subscribe(()=>{console.log(r,WA.state.voteMoney),WA.state.voteMoney}),WA.room.onEnterLayer(n).subscribe(()=>{console.log(a,WA.state.voteTicket),WA.state.voteTicket++}),WA.room.onLeaveLayer(n).subscribe(()=>{console.log(a,WA.state.voteTicket),WA.state.voteTicket}),WA.room.onEnterLayer(s).subscribe(()=>{console.log(i,WA.state.voteOffice),WA.state.voteOffice++}),WA.room.onLeaveLayer(s).subscribe(()=>{console.log(i,WA.state.voteOffice),WA.state.voteOffice}),WA.room.onEnterLayer(f).subscribe(()=>{console.log(h,WA.state.voteTrain),WA.state.voteTrain++}),WA.room.onLeaveLayer(f).subscribe(()=>{console.log(h,WA.state.voteTrain),WA.state.voteTrain}),WA.room.onEnterLayer(l).subscribe(()=>{console.log(p,WA.state.voteWorkshop),WA.state.voteWorkshop++}),WA.room.onLeaveLayer(l).subscribe(()=>{console.log(p,WA.state.voteWorkshop),WA.state.voteWorkshop}),WA.room.onEnterLayer(b).subscribe(()=>{console.log(w,WA.state.voteOutside),WA.state.voteOutside++}),WA.room.onLeaveLayer(b).subscribe(()=>{console.log(w,WA.state.voteOutside),WA.state.voteOutside});let u;WA.room.onEnterLayer(L).subscribe(()=>{(WA.player.tags.includes("editor")||WA.player.tags.includes("admin")||WA.player.tags.includes("hm-station-admin"))&&(u=WA.ui.openPopup("resetPopup","Soll das Voting zurückgesetzt werden?",ot))}),WA.room.onLeaveLayer(L).subscribe(()=>{u.close()}),WA.room.onLeaveLayer(te).subscribe(()=>{c()}),WA.room.onEnterLayer(te).subscribe(()=>{g&&c(),g=WA.ui.openPopup(xo,No,[{label:S,callback:y=>{c()}}])}),WA.room.onLeaveLayer(re).subscribe(()=>{c()}),WA.room.onEnterLayer(re).subscribe(()=>{g&&c(),g=WA.ui.openPopup(zo,Ko,[{label:$o,callback:y=>{c()}}])}),WA.room.onLeaveLayer(ne).subscribe(()=>{c()}),WA.room.onEnterLayer(ne).subscribe(()=>{g&&c(),g=WA.ui.openPopup(Ho,Xo,[{label:S,callback:y=>{c()}}])}),WA.room.onLeaveLayer(ae).subscribe(()=>{c()}),WA.room.onEnterLayer(ae).subscribe(()=>{g&&c(),g=WA.ui.openPopup(Yo,Fo,[{label:Qo,callback:y=>{WA.nav.openTab(et),c()}},{label:S,callback:y=>{c()}}])}),fe().then(()=>{console.log("Scripting API Extra ready")}).catch(y=>console.error(y))}).catch(o=>console.error(o));