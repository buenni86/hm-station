class k{constructor(e){this.properties=e??[]}get(e){const o=this.properties.filter(r=>r.name===e).map(r=>r.value);if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(o.length!==0)return o[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,o){const r=this.get(e);if(r!==void 0){if(o!=="json"&&typeof r!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,o){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(o!=="json"&&typeof r!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return r}getType(e){const o=this.properties.filter(r=>r.name===e).map(r=>r.type);if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(o.length!==0)return o[0]}}const G="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class Je{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new k(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function K(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(G+"/configuration.html"+e)}async function Ze(t,e){const o=await WA.room.getTiledMap(),r=new Map;return ee(o.layers,r,t,e),r}function ee(t,e,o,r){for(const n of t)if(n.type==="objectgroup"){for(const a of n.objects)if(a.type==="variable"||a.class==="variable"){if(o&&n.name!==o||r&&!r.includes(a.name))continue;e.set(a.name,new Je(a))}}else n.type==="group"&&ee(n.layers,e,o,r)}let x;async function T(){return x===void 0&&(x=De()),x}async function De(){return Ge(await WA.room.getTiledMap())}function Ge(t){const e=new Map;return te(t.layers,"",e),e}function te(t,e,o){for(const r of t)r.type==="group"?te(r.layers,e+r.name+"/",o):(r.name=e+r.name,o.set(r.name,r))}async function Oe(){const t=await T(),e=[];for(const o of t.values())if(o.type==="objectgroup")for(const r of o.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function qe(t){let e=1/0,o=1/0,r=0,n=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),n=Math.max(n,i),o=Math.min(o,s),r=Math.max(r,s));return{top:o,left:e,right:n+1,bottom:r+1}}function oe(t){let e=1/0,o=1/0,r=0,n=0;for(const a of t){const s=qe(a);s.left<e&&(e=s.left),s.top<o&&(o=s.top),s.right>n&&(n=s.right),s.bottom>r&&(r=s.bottom)}return{top:o,left:e,right:n,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var Ne=Object.prototype.toString,S=Array.isArray||function(e){return Ne.call(e)==="[object Array]"};function O(t){return typeof t=="function"}function ze(t){return S(t)?"array":typeof t}function J(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $(t,e){return t!=null&&typeof t=="object"&&e in t}function Ke(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var $e=RegExp.prototype.test;function He(t,e){return $e.call(t,e)}var Xe=/\S/;function Ye(t){return!He(Xe,t)}var Fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Qe(t){return String(t).replace(/[&<>"'`=\/]/g,function(o){return Fe[o]})}var et=/\s*/,tt=/\s+/,H=/\s*=/,ot=/\s*\}/,rt=/#|\^|\/|>|\{|&|=|!/;function nt(t,e){if(!t)return[];var o=!1,r=[],n=[],a=[],s=!1,i=!1,l="",p=0;function f(){if(s&&!i)for(;a.length;)delete n[a.pop()];else a=[];s=!1,i=!1}var y,v,V;function R(W){if(typeof W=="string"&&(W=W.split(tt,2)),!S(W)||W.length!==2)throw new Error("Invalid tags: "+W);y=new RegExp(J(W[0])+"\\s*"),v=new RegExp("\\s*"+J(W[1])),V=new RegExp("\\s*"+J("}"+W[1]))}R(e||m.tags);for(var u=new M(t),A,d,b,P,I,L;!u.eos();){if(A=u.pos,b=u.scanUntil(y),b)for(var j=0,xe=b.length;j<xe;++j)P=b.charAt(j),Ye(P)?(a.push(n.length),l+=P):(i=!0,o=!0,l+=" "),n.push(["text",P,A,A+1]),A+=1,P===`
`&&(f(),l="",p=0,o=!1);if(!u.scan(y))break;if(s=!0,d=u.scan(rt)||"name",u.scan(et),d==="="?(b=u.scanUntil(H),u.scan(H),u.scanUntil(v)):d==="{"?(b=u.scanUntil(V),u.scan(ot),u.scanUntil(v),d="&"):b=u.scanUntil(v),!u.scan(v))throw new Error("Unclosed tag at "+u.pos);if(d==">"?I=[d,b,A,u.pos,l,p,o]:I=[d,b,A,u.pos],p++,n.push(I),d==="#"||d==="^")r.push(I);else if(d==="/"){if(L=r.pop(),!L)throw new Error('Unopened section "'+b+'" at '+A);if(L[1]!==b)throw new Error('Unclosed section "'+L[1]+'" at '+A)}else d==="name"||d==="{"||d==="&"?i=!0:d==="="&&R(b)}if(f(),L=r.pop(),L)throw new Error('Unclosed section "'+L[1]+'" at '+u.pos);return st(at(n))}function at(t){for(var e=[],o,r,n=0,a=t.length;n<a;++n)o=t[n],o&&(o[0]==="text"&&r&&r[0]==="text"?(r[1]+=o[1],r[3]=o[3]):(e.push(o),r=o));return e}function st(t){for(var e=[],o=e,r=[],n,a,s=0,i=t.length;s<i;++s)switch(n=t[s],n[0]){case"#":case"^":o.push(n),r.push(n),o=n[4]=[];break;case"/":a=r.pop(),a[5]=n[2],o=r.length>0?r[r.length-1][4]:e;break;default:o.push(n)}return e}function M(t){this.string=t,this.tail=t,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var o=this.tail.match(e);if(!o||o.index!==0)return"";var r=o[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var o=this.tail.search(e),r;switch(o){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=r.length,r};function E(t,e){this.view=t,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var o=this.cache,r;if(o.hasOwnProperty(e))r=o[e];else{for(var n=this,a,s,i,l=!1;n;){if(e.indexOf(".")>0)for(a=n.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=$(a,s[i])||Ke(a,s[i])),a=a[s[i++]];else a=n.view[e],l=$(n.view,e);if(l){r=a;break}n=n.parent}o[e]=r}return O(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,o){this._cache[e]=o},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,o){var r=this.templateCache,n=e+":"+(o||m.tags).join(":"),a=typeof r<"u",s=a?r.get(n):void 0;return s==null&&(s=nt(e,o),a&&r.set(n,s)),s};g.prototype.render=function(e,o,r,n){var a=this.getConfigTags(n),s=this.parse(e,a),i=o instanceof E?o:new E(o,void 0);return this.renderTokens(s,i,r,e,n)};g.prototype.renderTokens=function(e,o,r,n,a){for(var s="",i,l,p,f=0,y=e.length;f<y;++f)p=void 0,i=e[f],l=i[0],l==="#"?p=this.renderSection(i,o,r,n,a):l==="^"?p=this.renderInverted(i,o,r,n,a):l===">"?p=this.renderPartial(i,o,r,a):l==="&"?p=this.unescapedValue(i,o):l==="name"?p=this.escapedValue(i,o,a):l==="text"&&(p=this.rawValue(i)),p!==void 0&&(s+=p);return s};g.prototype.renderSection=function(e,o,r,n,a){var s=this,i="",l=o.lookup(e[1]);function p(v){return s.render(v,o,r,a)}if(l){if(S(l))for(var f=0,y=l.length;f<y;++f)i+=this.renderTokens(e[4],o.push(l[f]),r,n,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],o.push(l),r,n,a);else if(O(l)){if(typeof n!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(o.view,n.slice(e[3],e[5]),p),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],o,r,n,a);return i}};g.prototype.renderInverted=function(e,o,r,n,a){var s=o.lookup(e[1]);if(!s||S(s)&&s.length===0)return this.renderTokens(e[4],o,r,n,a)};g.prototype.indentPartial=function(e,o,r){for(var n=o.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=n+a[s]);return a.join(`
`)};g.prototype.renderPartial=function(e,o,r,n){if(r){var a=this.getConfigTags(n),s=O(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],p=e[4],f=s;l==0&&p&&(f=this.indentPartial(s,p,i));var y=this.parse(f,a);return this.renderTokens(y,o,r,f,n)}}};g.prototype.unescapedValue=function(e,o){var r=o.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,o,r){var n=this.getConfigEscape(r)||m.escape,a=o.lookup(e[1]);if(a!=null)return typeof a=="number"&&n===m.escape?String(a):n(a)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){_.templateCache=t},get templateCache(){return _.templateCache}},_=new g;m.clearCache=function(){return _.clearCache()};m.parse=function(e,o){return _.parse(e,o)};m.render=function(e,o,r,n){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ze(e)+'" was given as the first argument for mustache#render(template, view, partials)');return _.render(e,o,r,n)};m.escape=Qe;m.Scanner=M;m.Context=E;m.Writer=g;class re{constructor(e,o){this.template=e,this.state=o,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const o=[];for(const r of this.getUsedVariables().values())o.push(this.state.onVariableChange(r).subscribe(()=>{const n=m.render(this.template,this.state);n!==this.value&&(this.value=n,e(this.value))}));return{unsubscribe:()=>{for(const r of o)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,o){for(const r of e){const n=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(n)&&o.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,o)}}}async function it(){var t;const e=await Oe();for(const o of e){const r=(t=o.properties)!==null&&t!==void 0?t:[];for(const n of r){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const a=new re(n.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await X(o.name,n.name,s),a.onChange(async i=>{await X(o.name,n.name,i)})}}}async function lt(){var t;const e=await T();for(const[o,r]of e.entries())if(r.type!=="objectgroup"){const n=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new re(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();Y(o,a.name,i),s.onChange(l=>{Y(o,a.name,l)})}}}async function X(t,e,o){console.log(t),(await WA.room.area.get(t)).setProperty(e,o)}function Y(t,e,o){WA.room.setProperty(t,e,o),e==="visible"&&(o?WA.room.showLayer(t):WA.room.hideLayer(t))}let D,q=0,N=0;function F(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const o of e.split(`
`))WA.room.showLayer(o);e=t.properties.mustGetString("closeLayer");for(const o of e.split(`
`))WA.room.hideLayer(o)}else{let e=t.properties.mustGetString("openLayer");for(const o of e.split(`
`))WA.room.hideLayer(o);e=t.properties.mustGetString("closeLayer");for(const o of e.split(`
`))WA.room.showLayer(o)}}function ut(t){const e=t.properties.getString("openSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=ae(t.properties.mustGetString("openLayer").split(`
`));if(n>o)return;r=1-n/o}e&&WA.sound.loadSound(e).play({volume:r})}function ct(t){const e=t.properties.getString("closeSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=ae(t.properties.mustGetString("closeLayer").split(`
`));if(n>o)return;r=1-n/o}e&&WA.sound.loadSound(e).play({volume:r})}function ne(t){return t.map(e=>D.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function ae(t){const e=ne(t),o=oe(e),r=((o.right-o.left)/2+o.left)*32,n=((o.bottom-o.top)/2+o.top)*32;return Math.sqrt(Math.pow(q-r,2)+Math.pow(N-n,2))}function pt(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?ut(t):ct(t),F(t)}),F(t)}function ft(t,e,o,r){const n=t.name;let a,s,i=!1;const l=o.getString("tag");let p=!0;l&&!WA.player.tags.includes(l)&&(p=!1);const f=!!l;function y(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=o.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=o.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function V(u){const A=oe(ne(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+u,url:r+"/keypad.html#"+encodeURIComponent(u),position:{x:A.right*32,y:A.top*32,width:32*3,height:32*4},allowApi:!0})}function R(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(n).subscribe(()=>{if(i=!0,o.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!p||!f)&&(o.getString("code")||o.getString("codeVariable"))){V(n);return}p&&(WA.state[e.name]?y():v())}),WA.room.onLeaveLayer(n).subscribe(()=>{i=!1,o.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),R()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!o.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),s&&WA.state[e.name]===!0&&R(),!o.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function ht(t){const e=t.properties.mustGetString("bellSound"),o=t.properties.getNumber("soundRadius");let r=1;if(o){const n=Math.sqrt(Math.pow(t.x-q,2)+Math.pow(t.y-N,2));if(n>o)return;r=1-n/o}WA.sound.loadSound(e).play({volume:r})}function yt(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&ht(t)})}function gt(t,e,o){let r;const n=e.getString("bellPopup");WA.room.onEnterLayer(o).subscribe(()=>{var a;n?r=WA.ui.openPopup(n,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(o).subscribe(()=>{r&&(r.close(),r=void 0)})}async function dt(t){t=t??G;const e=await Ze();D=await T();for(const o of e.values())o.properties.get("door")&&pt(o),o.properties.get("bell")&&yt(o);for(const o of D.values()){const r=new k(o.properties),n=r.getString("doorVariable");if(n&&o.type==="tilelayer"){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of layer "'+o.name+'"');ft(o,s,r,t)}const a=r.getString("bellVariable");a&&gt(a,r,o.name)}WA.player.onPlayerMove(o=>{q=o.x,N=o.y})}function mt(t,e){const o=t.getString("bindVariable");if(o){const r=t.get("enterValue"),n=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");bt(o,e,r,n,a,s)}}function bt(t,e,o,r,n,a){a&&!WA.player.tags.includes(a)||(o!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{n||(WA.state[t]=o)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function vt(){const t=await T();for(const e of t.values()){const o=new k(e.properties);mt(o,e.name)}}let Q;async function At(t){const e=await WA.room.getTiledMap();t=t??G,Q=await T();const o=e.layers.find(r=>r.name==="configuration");if(o){const n=new k(o.properties).getString("tag");(!n||WA.player.tags.includes(n))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of Q.values()){const s=new k(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Wt(i.split(","),a.name,s)}}}function Wt(t,e,o){let r;const n=o.getString("openConfigAdminTag");let a=!0;n&&!WA.player.tags.includes(n)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=o.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>K(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=o.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():K(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Lt(){return WA.onInit().then(()=>{dt().catch(t=>console.error(t)),vt().catch(t=>console.error(t)),At().catch(t=>console.error(t)),lt().catch(t=>console.error(t)),it().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");var h=void 0,w="Schließen",se="popUpJobs1",ie="popUpJobs2",wt="jobs_1",Et="jobs_2",le="Finde die passende Einstiegsmöglichkeit für dich",ue="Jobs anzeigen",ce="https://db.jobs/service/search/de-de/5441588?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",pe="popUpJobProfiler",St="jobProfiler",Ct="Du weißt noch nicht, wohin es gehen soll?",Rt="Finde es hier heraus!",Pt="https://ausbildung-deutschebahn.com/jobprofiler/?utm_source=Careerpage&utm_medium=organic_Linkout&utm_campaign=Rec_Jobprofiler&utm_term=bundesweit_Azubi",fe="popUpMeetUs",kt="meetUs",_t="Lerne uns persönlich kennen",Tt="Meet Us",Mt="https://db.jobs/service/search/de-de/9639412?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",Vt="popUpDoVoting",It="doVoting",Ut="Möchtest du am Voting teilnehmen und weitere interessante Dinge über die DB als Arbeitgeber erfahren?",Bt="Ja!",jt="Kein Interesse",B="Voting abbrechen",xt="importance",Jt=`Willkommen beim Voting. Lass uns direkt loslegen:

Was ist dir wichtig?

Springe in das jeweilige Portal, um deine Stimme abzugeben.`,Zt="importanceResult",Dt=`Na? Ist dir die Entscheidung schwer gefallen?

Zum Glück musst du dich bei uns nicht für eine der Optionen entscheiden. Du bekommst sie alle!`,Gt="Cool!",Ot="jobLocation",qt=`Wo möchtest du am liebsten arbeiten?

Gehe zum jeweiligen Ort, um deine Stimme abzugeben.`,Nt="locationResult",zt="Bei uns kannst du jedem der Bereiche einstiegen. Schau dich doch einfach mal um:",Kt="Zeig mir die Jobs!",$t="https://db.jobs/service/search/de-de/7707604?qli=true&query=&itemsPerPage=10&pageNum=0&country=Deutschland&positiontype=Ausbildung&positiontype=Duales+Studium",he="../db/hm-bahnhof",Ht="../db/hm-bahnhof#specialZones/voting/entry1stRoom",Xt="../db/hm-bahnhof#specialZones/voting/entry2ndRoom",Yt="../db/hm-bahnhof#specialZones/voting/entry3rdRoom",Ft="../db/hm-bahnhof#specialZones/voting/entry4thRoom",Qt="../db/hm-bahnhof#specialZones/voting/votingExit";function c(){h!==void 0&&(h.close(),h=void 0)}WA.room.onLeaveLayer(se).subscribe(()=>{c()});WA.room.onEnterLayer(se).subscribe(()=>{h=WA.ui.openPopup(wt,le,[{label:ue,callback:t=>{WA.nav.openTab(ce),c()}},{label:w,callback:t=>{c()}}])});WA.room.onLeaveLayer(ie).subscribe(()=>{c()});WA.room.onEnterLayer(ie).subscribe(()=>{h=WA.ui.openPopup(Et,le,[{label:ue,callback:t=>{WA.nav.openTab(ce),c()}},{label:w,callback:t=>{c()}}])});WA.room.onLeaveLayer(pe).subscribe(()=>{c()});WA.room.onEnterLayer(pe).subscribe(()=>{h=WA.ui.openPopup(St,Ct,[{label:Rt,callback:t=>{WA.nav.openTab(Pt),c()}},{label:w,callback:t=>{c()}}])});WA.room.onLeaveLayer(fe).subscribe(()=>{c()});WA.room.onEnterLayer(fe).subscribe(()=>{h=WA.ui.openPopup(kt,_t,[{label:Tt,callback:t=>{WA.nav.openTab(Mt),c()}},{label:w,callback:t=>{c()}}])});WA.room.onEnterLayer(Vt).subscribe(()=>{WA.player.state.hasVoted||(h=WA.ui.openPopup(It,Ut,[{label:Bt,callback:t=>{c(),WA.player.state.hasVoted=!0,no(),WA.nav.goToRoom(Ht)}},{label:jt,callback:t=>{c()}}]))});var ye="trains_top/ice1_roof",ge="trains_top/ice1_maul",de="trains_top/ice2_roof",me="trains_top/ice2_maul",be="trains_top/ice3_roof",ve="trains_top/ice3_maul",Ae="trains_top/ice4_roof",We="trains_top/ice4_maul",Le="trains_top/regio1_roof",we="trains_top/regio1_maul",Ee="trains_top/regio2_roof",Se="trains_top/regio2_maul",Ce="specialZones/ICEs/hideICE1",Re="specialZones/ICEs/hideICE2",Pe="specialZones/ICEs/hideICE3",ke="specialZones/ICEs/hideICE4",_e="specialZones/ICEs/hideRegio1",Te="specialZones/ICEs/hideRegio2";WA.room.onLeaveLayer(Ce).subscribe(()=>{WA.room.showLayer(ye),WA.room.hideLayer(ge)});WA.room.onEnterLayer(Ce).subscribe(()=>{WA.room.hideLayer(ye),WA.room.showLayer(ge)});WA.room.onLeaveLayer(Re).subscribe(()=>{WA.room.showLayer(de),WA.room.hideLayer(me)});WA.room.onEnterLayer(Re).subscribe(()=>{WA.room.hideLayer(de),WA.room.showLayer(me)});WA.room.onLeaveLayer(Pe).subscribe(()=>{WA.room.showLayer(be),WA.room.hideLayer(ve)});WA.room.onEnterLayer(Pe).subscribe(()=>{WA.room.hideLayer(be),WA.room.showLayer(ve)});WA.room.onLeaveLayer(ke).subscribe(()=>{WA.room.showLayer(Ae),WA.room.hideLayer(We)});WA.room.onEnterLayer(ke).subscribe(()=>{WA.room.hideLayer(Ae),WA.room.showLayer(We)});WA.room.onLeaveLayer(_e).subscribe(()=>{WA.room.showLayer(Le),WA.room.hideLayer(we)});WA.room.onEnterLayer(_e).subscribe(()=>{WA.room.hideLayer(Le),WA.room.showLayer(we)});WA.room.onLeaveLayer(Te).subscribe(()=>{WA.room.showLayer(Ee),WA.room.hideLayer(Se)});WA.room.onEnterLayer(Te).subscribe(()=>{WA.room.hideLayer(Ee),WA.room.showLayer(Se)});var Me="voting_top_closed/room1",Ve="voting_top_closed/room2",Ie="voting_top_closed/room3",eo="voting_top_closed/room4",C="voting_top_opened/mainRoom",Ue="voting_top_opened/room1",Be="voting_top_opened/room2",je="voting_top_opened/room3",to="voting_top_opened/room4";const oo=[{label:"Reset",className:"error",callback:()=>{WA.state.voteMoney=WA.state.voteAcquisition=WA.state.voteTicket=WA.state.voteOffice=WA.state.voteOutside=WA.state.voteWorkshop=WA.state.voteTrain=0,WA.player.state.hasVoted=!1}}];function z(){WA.room.hideLayer(C),WA.nav.goToRoom(he)}function ro(){WA.room.hideLayer(C),WA.nav.goToRoom(Qt)}function no(){console.log("preparing 1st room..."),WA.room.hideLayer(Me),WA.room.showLayer(C),WA.room.showLayer(Ue),h!=null&&c(),h=WA.ui.openPopup(xt,Jt,[{label:w,callback:t=>{c()}},{label:B,callback:t=>{c(),z()}}])}function Z(){console.log("preparing 2nd room..."),WA.room.showLayer(Me),WA.room.showLayer(C),WA.room.showLayer(Be),WA.room.hideLayer(Ue),WA.room.hideLayer(Ve),WA.nav.goToRoom(Xt),h!=null&&c(),h=WA.ui.openPopup(Zt,Dt,[{label:Gt,callback:t=>{c()}},{label:B,callback:t=>{c(),z()}}])}function ao(){console.log("preparing 3rd room..."),WA.room.showLayer(C),WA.room.showLayer(Ve),WA.room.showLayer(je),WA.room.hideLayer(Be),WA.room.hideLayer(Ie),WA.nav.goToRoom(Yt),h!=null&&c(),h=WA.ui.openPopup(Ot,qt,[{label:w,callback:t=>{c()}},{label:B,callback:t=>{c(),z()}}])}function U(){console.log("preparing 4th room..."),WA.room.showLayer(C),WA.room.showLayer(Ie),WA.room.showLayer(to),WA.room.hideLayer(je),WA.room.hideLayer(eo),WA.nav.goToRoom(Ft),h!=null&&c(),h=WA.ui.openPopup(Nt,zt,[{label:Kt,callback:t=>{WA.nav.openTab($t),c()}},{label:w,callback:t=>{c()}},{label:B,callback:t=>{c(),WA.nav.goToRoom(he)}}])}WA.onInit().then(async()=>{Lt().then(()=>{console.log("Scripting API Extra ready")}).catch(y=>console.error(y));var t="specialZones/voting/acquisitionVoting",e="specialZones/voting/moneyVoting",o="specialZones/voting/ticketVoting",r="specialZones/voting/officeVoting",n="specialZones/voting/workshopVoting",a="specialZones/voting/trainVoting",s="specialZones/voting/outsideVoting",i="specialZones/voting/exit2ndRoom",l="specialZones/voting/openExit_auto",p="specialZones/voteReset";WA.room.onEnterLayer(t).subscribe(()=>{WA.state.voteAcquisition++,Z()}),WA.room.onLeaveLayer(t).subscribe(()=>{WA.state.voteAcquisition}),WA.room.onEnterLayer(e).subscribe(()=>{WA.state.voteMoney++,Z()}),WA.room.onLeaveLayer(e).subscribe(()=>{WA.state.voteMoney}),WA.room.onEnterLayer(o).subscribe(()=>{WA.state.voteTicket++,Z()}),WA.room.onLeaveLayer(o).subscribe(()=>{WA.state.voteTicket}),WA.room.onEnterLayer(i).subscribe(()=>{ao()}),WA.room.onEnterLayer(r).subscribe(()=>{WA.state.voteOffice++,U()}),WA.room.onLeaveLayer(r).subscribe(()=>{WA.state.voteOffice}),WA.room.onEnterLayer(a).subscribe(()=>{WA.state.voteTrain++,U()}),WA.room.onLeaveLayer(a).subscribe(()=>{WA.state.voteTrain}),WA.room.onEnterLayer(n).subscribe(()=>{WA.state.voteWorkshop++,U()}),WA.room.onLeaveLayer(n).subscribe(()=>{WA.state.voteWorkshop}),WA.room.onEnterLayer(s).subscribe(()=>{WA.state.voteOutside++,U()}),WA.room.onLeaveLayer(s).subscribe(()=>{WA.state.voteOutside}),WA.room.onEnterLayer(l).subscribe(()=>{ro()});let f;WA.room.onEnterLayer(p).subscribe(()=>{(WA.player.tags.includes("editor")||WA.player.tags.includes("admin")||WA.player.tags.includes("hm-station-admin"))&&(f=WA.ui.openPopup("resetPopup","Soll das Voting zurückgesetzt werden?",oo))}),WA.room.onLeaveLayer(p).subscribe(()=>{f.close()})}).catch(t=>console.error(t));