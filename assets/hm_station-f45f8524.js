class R{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const O="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class Oe{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new R(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function oe(o){const e=o?"#"+o.join():"";WA.nav.openCoWebSite(O+"/configuration.html"+e)}async function qe(o,e){const t=await WA.room.getTiledMap(),r=new Map;return le(t.layers,r,o,e),r}function le(o,e,t,r){for(const n of o)if(n.type==="objectgroup"){for(const a of n.objects)if(a.type==="variable"||a.class==="variable"){if(t&&n.name!==t||r&&!r.includes(a.name))continue;e.set(a.name,new Oe(a))}}else n.type==="group"&&le(n.layers,e,t,r)}let J;async function T(){return J===void 0&&(J=Ne()),J}async function Ne(){return ze(await WA.room.getTiledMap())}function ze(o){const e=new Map;return ue(o.layers,"",e),e}function ue(o,e,t){for(const r of o)r.type==="group"?ue(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function Ke(){const o=await T(),e=[];for(const t of o.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function $e(o){let e=1/0,t=1/0,r=0,n=0;const a=o.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<o.height;s++)for(let i=0;i<o.width;i++)a[i+s*o.width]!==0&&(e=Math.min(e,i),n=Math.max(n,i),t=Math.min(t,s),r=Math.max(r,s));return{top:t,left:e,right:n+1,bottom:r+1}}function ce(o){let e=1/0,t=1/0,r=0,n=0;for(const a of o){const s=$e(a);s.left<e&&(e=s.left),s.top<t&&(t=s.top),s.right>n&&(n=s.right),s.bottom>r&&(r=s.bottom)}return{top:t,left:e,right:n,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var He=Object.prototype.toString,S=Array.isArray||function(e){return He.call(e)==="[object Array]"};function q(o){return typeof o=="function"}function Xe(o){return S(o)?"array":typeof o}function D(o){return o.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function te(o,e){return o!=null&&typeof o=="object"&&e in o}function Ye(o,e){return o!=null&&typeof o!="object"&&o.hasOwnProperty&&o.hasOwnProperty(e)}var Fe=RegExp.prototype.test;function Qe(o,e){return Fe.call(o,e)}var eo=/\S/;function oo(o){return!Qe(eo,o)}var to={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ro(o){return String(o).replace(/[&<>"'`=\/]/g,function(t){return to[t]})}var no=/\s*/,ao=/\s+/,re=/\s*=/,so=/\s*\}/,io=/#|\^|\/|>|\{|&|=|!/;function lo(o,e){if(!o)return[];var t=!1,r=[],n=[],a=[],s=!1,i=!1,l="",p=0;function f(){if(s&&!i)for(;a.length;)delete n[a.pop()];else a=[];s=!1,i=!1}var y,v,M;function k(W){if(typeof W=="string"&&(W=W.split(ao,2)),!S(W)||W.length!==2)throw new Error("Invalid tags: "+W);y=new RegExp(D(W[0])+"\\s*"),v=new RegExp("\\s*"+D(W[1])),M=new RegExp("\\s*"+D("}"+W[1]))}k(e||m.tags);for(var c=new V(o),A,d,b,P,I,w;!c.eos();){if(A=c.pos,b=c.scanUntil(y),b)for(var x=0,Ge=b.length;x<Ge;++x)P=b.charAt(x),oo(P)?(a.push(n.length),l+=P):(i=!0,t=!0,l+=" "),n.push(["text",P,A,A+1]),A+=1,P===`
`&&(f(),l="",p=0,t=!1);if(!c.scan(y))break;if(s=!0,d=c.scan(io)||"name",c.scan(no),d==="="?(b=c.scanUntil(re),c.scan(re),c.scanUntil(v)):d==="{"?(b=c.scanUntil(M),c.scan(so),c.scanUntil(v),d="&"):b=c.scanUntil(v),!c.scan(v))throw new Error("Unclosed tag at "+c.pos);if(d==">"?I=[d,b,A,c.pos,l,p,t]:I=[d,b,A,c.pos],p++,n.push(I),d==="#"||d==="^")r.push(I);else if(d==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+b+'" at '+A);if(w[1]!==b)throw new Error('Unclosed section "'+w[1]+'" at '+A)}else d==="name"||d==="{"||d==="&"?i=!0:d==="="&&k(b)}if(f(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+c.pos);return co(uo(n))}function uo(o){for(var e=[],t,r,n=0,a=o.length;n<a;++n)t=o[n],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function co(o){for(var e=[],t=e,r=[],n,a,s=0,i=o.length;s<i;++s)switch(n=o[s],n[0]){case"#":case"^":t.push(n),r.push(n),t=n[4]=[];break;case"/":a=r.pop(),a[5]=n[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(n)}return e}function V(o){this.string=o,this.tail=o,this.pos=0}V.prototype.eos=function(){return this.tail===""};V.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};V.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function E(o,e){this.view=o,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var n=this,a,s,i,l=!1;n;){if(e.indexOf(".")>0)for(a=n.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=te(a,s[i])||Ye(a,s[i])),a=a[s[i++]];else a=n.view[e],l=te(n.view,e);if(l){r=a;break}n=n.parent}t[e]=r}return q(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,t){var r=this.templateCache,n=e+":"+(t||m.tags).join(":"),a=typeof r<"u",s=a?r.get(n):void 0;return s==null&&(s=lo(e,t),a&&r.set(n,s)),s};g.prototype.render=function(e,t,r,n){var a=this.getConfigTags(n),s=this.parse(e,a),i=t instanceof E?t:new E(t,void 0);return this.renderTokens(s,i,r,e,n)};g.prototype.renderTokens=function(e,t,r,n,a){for(var s="",i,l,p,f=0,y=e.length;f<y;++f)p=void 0,i=e[f],l=i[0],l==="#"?p=this.renderSection(i,t,r,n,a):l==="^"?p=this.renderInverted(i,t,r,n,a):l===">"?p=this.renderPartial(i,t,r,a):l==="&"?p=this.unescapedValue(i,t):l==="name"?p=this.escapedValue(i,t,a):l==="text"&&(p=this.rawValue(i)),p!==void 0&&(s+=p);return s};g.prototype.renderSection=function(e,t,r,n,a){var s=this,i="",l=t.lookup(e[1]);function p(v){return s.render(v,t,r,a)}if(l){if(S(l))for(var f=0,y=l.length;f<y;++f)i+=this.renderTokens(e[4],t.push(l[f]),r,n,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],t.push(l),r,n,a);else if(q(l)){if(typeof n!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(t.view,n.slice(e[3],e[5]),p),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],t,r,n,a);return i}};g.prototype.renderInverted=function(e,t,r,n,a){var s=t.lookup(e[1]);if(!s||S(s)&&s.length===0)return this.renderTokens(e[4],t,r,n,a)};g.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=n+a[s]);return a.join(`
`)};g.prototype.renderPartial=function(e,t,r,n){if(r){var a=this.getConfigTags(n),s=q(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],p=e[4],f=s;l==0&&p&&(f=this.indentPartial(s,p,i));var y=this.parse(f,a);return this.renderTokens(y,t,r,f,n)}}};g.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,t,r){var n=this.getConfigEscape(r)||m.escape,a=t.lookup(e[1]);if(a!=null)return typeof a=="number"&&n===m.escape?String(a):n(a)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var m={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(o){_.templateCache=o},get templateCache(){return _.templateCache}},_=new g;m.clearCache=function(){return _.clearCache()};m.parse=function(e,t){return _.parse(e,t)};m.render=function(e,t,r,n){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Xe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return _.render(e,t,r,n)};m.escape=ro;m.Scanner=V;m.Context=E;m.Writer=g;class pe{constructor(e,t){this.template=e,this.state=t,this.ast=m.parse(e)}getValue(){return this.value===void 0&&(this.value=m.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const n=m.render(this.template,this.state);n!==this.value&&(this.value=n,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const n=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(n)&&t.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,t)}}}async function po(){var o;const e=await Ke();for(const t of e){const r=(o=t.properties)!==null&&o!==void 0?o:[];for(const n of r){if(n.type==="int"||n.type==="bool"||n.type==="object"||typeof n.value!="string")continue;const a=new pe(n.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await ne(t.name,n.name,s),a.onChange(async i=>{await ne(t.name,n.name,i)})}}}async function fo(){var o;const e=await T();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const n=(o=r.properties)!==null&&o!==void 0?o:[];for(const a of n){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new pe(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();ae(t,a.name,i),s.onChange(l=>{ae(t,a.name,l)})}}}async function ne(o,e,t){console.log(o),(await WA.room.area.get(o)).setProperty(e,t)}function ae(o,e,t){WA.room.setProperty(o,e,t),e==="visible"&&(t?WA.room.showLayer(o):WA.room.hideLayer(o))}let G,N=0,z=0;function se(o){if(WA.state[o.name]){let e=o.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=o.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=o.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=o.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function ho(o){const e=o.properties.getString("openSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=he(o.properties.mustGetString("openLayer").split(`
`));if(n>t)return;r=1-n/t}e&&WA.sound.loadSound(e).play({volume:r})}function yo(o){const e=o.properties.getString("closeSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=he(o.properties.mustGetString("closeLayer").split(`
`));if(n>t)return;r=1-n/t}e&&WA.sound.loadSound(e).play({volume:r})}function fe(o){return o.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function he(o){const e=fe(o),t=ce(e),r=((t.right-t.left)/2+t.left)*32,n=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(N-r,2)+Math.pow(z-n,2))}function go(o){WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]?ho(o):yo(o),se(o)}),se(o)}function mo(o,e,t,r){const n=o.name;let a,s,i=!1;const l=t.getString("tag");let p=!0;l&&!WA.player.tags.includes(l)&&(p=!1);const f=!!l;function y(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=t.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,v()}})}function v(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=t.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function M(c){const A=ce(fe(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+c,url:r+"/keypad.html#"+encodeURIComponent(c),position:{x:A.right*32,y:A.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(n).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&p){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!p||!f)&&(t.getString("code")||t.getString("codeVariable"))){M(n);return}p&&(WA.state[e.name]?y():v())}),WA.room.onLeaveLayer(n).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),k()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),s&&WA.state[e.name]===!0&&k(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&v())})}function bo(o){const e=o.properties.mustGetString("bellSound"),t=o.properties.getNumber("soundRadius");let r=1;if(t){const n=Math.sqrt(Math.pow(o.x-N,2)+Math.pow(o.y-z,2));if(n>t)return;r=1-n/t}WA.sound.loadSound(e).play({volume:r})}function vo(o){WA.state[o.name]===void 0&&(WA.state[o.name]=0),WA.state.onVariableChange(o.name).subscribe(()=>{WA.state[o.name]&&bo(o)})}function Ao(o,e,t){let r;const n=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var a;n?r=WA.ui.openPopup(n,"",[{label:(a=e.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[o]=WA.state[o]+1}}]):WA.state[o]=WA.state[o]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Wo(o){o=o??O;const e=await qe();G=await T();for(const t of e.values())t.properties.get("door")&&go(t),t.properties.get("bell")&&vo(t);for(const t of G.values()){const r=new R(t.properties),n=r.getString("doorVariable");if(n&&t.type==="tilelayer"){const s=e.get(n);if(s===void 0)throw new Error('Cannot find variable "'+n+'" referred in the "doorVariable" property of layer "'+t.name+'"');mo(t,s,r,o)}const a=r.getString("bellVariable");a&&Ao(a,r,t.name)}WA.player.onPlayerMove(t=>{N=t.x,z=t.y})}function Lo(o,e){const t=o.getString("bindVariable");if(t){const r=o.get("enterValue"),n=o.get("leaveValue"),a=o.getString("triggerMessage"),s=o.getString("tag");wo(t,e,r,n,a,s)}}function wo(o,e,t,r,n,a){a&&!WA.player.tags.includes(a)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{n||(WA.state[o]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[o]=r}))}async function Eo(){const o=await T();for(const e of o.values()){const t=new R(e.properties);Lo(t,e.name)}}let ie;async function So(o){const e=await WA.room.getTiledMap();o=o??O,ie=await T();const t=e.layers.find(r=>r.name==="configuration");if(t){const n=new R(t.properties).getString("tag");(!n||WA.player.tags.includes(n))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(o+"/configuration.html",!0)});for(const a of ie.values()){const s=new R(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Co(i.split(","),a.name,s)}}}function Co(o,e,t){let r;const n=t.getString("openConfigAdminTag");let a=!0;n&&!WA.player.tags.includes(n)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=t.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>oe(o)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=t.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():oe(o))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function ko(){return WA.onInit().then(()=>{Wo().catch(o=>console.error(o)),Eo().catch(o=>console.error(o)),So().catch(o=>console.error(o)),fo().catch(o=>console.error(o)),po().catch(o=>console.error(o))}).catch(o=>console.error(o))}console.log("Script started successfully");var h=void 0,L="Schließen",ye="popUpJobs1",ge="popUpJobs2",Po="jobs_1",Ro="jobs_2",de="Finde die passende Einstiegsmöglichkeit für dich",me="Jobs anzeigen",be="https://db.jobs/service/search/de-de/5441588?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",ve="popUpJobProfiler",_o="jobProfiler",To="Du weißt noch nicht, wohin es gehen soll?",Vo="Finde es hier heraus!",Mo="https://ausbildung-deutschebahn.com/jobprofiler/?utm_source=Careerpage&utm_medium=organic_Linkout&utm_campaign=Rec_Jobprofiler&utm_term=bundesweit_Azubi",Ae="popUpMeetUs",Io="meetUs",Uo="Lerne uns persönlich kennen",Bo="Meet Us",jo="https://db.jobs/service/search/de-de/9639412?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium",xo="popUpDoVoting",Jo="doVoting",Do="Möchtest du am Voting teilnehmen und weitere interessante Dinge über die DB als Arbeitgeber erfahren?",Zo="Ja!",Go="Kein Interesse",B="Voting abbrechen",Oo="importance",qo=`Willkommen beim Voting. Lass uns direkt loslegen:

Was ist dir wichtig?

Springe in das jeweilige Portal, um deine Stimme abzugeben.`,No="importanceResult",zo=`Na? Ist dir die Entscheidung schwer gefallen?

Zum Glück musst du dich bei uns nicht für eine der Optionen entscheiden. Du bekommst sie alle!`,Ko="Cool!",$o="jobLocation",Ho=`Wo möchtest du am liebsten arbeiten?

Gehe zum jeweiligen Ort, um deine Stimme abzugeben.`,Xo="locationResult",Yo="Bei uns kannst du jedem der Bereiche einstiegen. Schau dich doch einfach mal um:",Fo="Zeig mir die Jobs!",Qo="https://db.jobs/service/search/de-de/7707604?qli=true&query=&itemsPerPage=10&pageNum=0&country=Deutschland&positiontype=Ausbildung&positiontype=Duales+Studium",et="../db/hm-bahnhof#specialZones/voting/entry1stRoom",ot="../db/hm-bahnhof#specialZones/voting/entry2ndRoom",tt="../db/hm-bahnhof#specialZones/voting/entry3rdRoom",rt="../db/hm-bahnhof#specialZones/voting/entry4thRoom",We="../db/hm-bahnhof#specialZones/voting/votingExit",Le="popUpTime",nt="time",at="Bei der Bahn hast du immer geregelte Arbeitszeiten.",we="popUpVacation",st="vacation",it="Wusstest du eigentlich, dass du bei der DB 28 Tage Urlaub bekommst?";function u(){h!==void 0&&(h.close(),h=void 0)}WA.room.onLeaveLayer(Le).subscribe(()=>{u()});WA.room.onEnterLayer(Le).subscribe(()=>{h=WA.ui.openPopup(nt,at,[{label:L,callback:o=>{u()}}])});WA.room.onLeaveLayer(we).subscribe(()=>{u()});WA.room.onEnterLayer(we).subscribe(()=>{h=WA.ui.openPopup(st,it,[{label:L,callback:o=>{u()}}])});WA.room.onLeaveLayer(ye).subscribe(()=>{u()});WA.room.onEnterLayer(ye).subscribe(()=>{h=WA.ui.openPopup(Po,de,[{label:me,callback:o=>{WA.nav.openTab(be),u()}},{label:L,callback:o=>{u()}}])});WA.room.onLeaveLayer(ge).subscribe(()=>{u()});WA.room.onEnterLayer(ge).subscribe(()=>{h=WA.ui.openPopup(Ro,de,[{label:me,callback:o=>{WA.nav.openTab(be),u()}},{label:L,callback:o=>{u()}}])});WA.room.onLeaveLayer(ve).subscribe(()=>{u()});WA.room.onEnterLayer(ve).subscribe(()=>{h=WA.ui.openPopup(_o,To,[{label:Vo,callback:o=>{WA.nav.openTab(Mo),u()}},{label:L,callback:o=>{u()}}])});WA.room.onLeaveLayer(Ae).subscribe(()=>{u()});WA.room.onEnterLayer(Ae).subscribe(()=>{h=WA.ui.openPopup(Io,Uo,[{label:Bo,callback:o=>{WA.nav.openTab(jo),u()}},{label:L,callback:o=>{u()}}])});WA.room.onEnterLayer(xo).subscribe(()=>{WA.player.state.hasVoted||(h=WA.ui.openPopup(Jo,Do,[{label:Zo,callback:o=>{u(),WA.player.state.hasVoted=!0,ct(),WA.nav.goToRoom(et)}},{label:Go,callback:o=>{u()}}]))});var Ee="trains_top/ice1_roof",Se="trains_top/ice1_maul",Ce="trains_top/ice2_roof",ke="trains_top/ice2_maul",Pe="trains_top/ice3_roof",Re="trains_top/ice3_maul",_e="trains_top/ice4_roof",Te="trains_top/ice4_maul",Ve="trains_top/regio1_roof",Me="trains_top/regio1_maul",Ie="trains_top/regio2_roof",Ue="trains_top/regio2_maul",Be="specialZones/ICEs/hideICE1",je="specialZones/ICEs/hideICE2",xe="specialZones/ICEs/hideICE3",Je="specialZones/ICEs/hideICE4",De="specialZones/ICEs/hideRegio1",Ze="specialZones/ICEs/hideRegio2";WA.room.onLeaveLayer(Be).subscribe(()=>{WA.room.showLayer(Ee),WA.room.hideLayer(Se)});WA.room.onEnterLayer(Be).subscribe(()=>{WA.room.hideLayer(Ee),WA.room.showLayer(Se)});WA.room.onLeaveLayer(je).subscribe(()=>{WA.room.showLayer(Ce),WA.room.hideLayer(ke)});WA.room.onEnterLayer(je).subscribe(()=>{WA.room.hideLayer(Ce),WA.room.showLayer(ke)});WA.room.onLeaveLayer(xe).subscribe(()=>{WA.room.showLayer(Pe),WA.room.hideLayer(Re)});WA.room.onEnterLayer(xe).subscribe(()=>{WA.room.hideLayer(Pe),WA.room.showLayer(Re)});WA.room.onLeaveLayer(Je).subscribe(()=>{WA.room.showLayer(_e),WA.room.hideLayer(Te)});WA.room.onEnterLayer(Je).subscribe(()=>{WA.room.hideLayer(_e),WA.room.showLayer(Te)});WA.room.onLeaveLayer(De).subscribe(()=>{WA.room.showLayer(Ve),WA.room.hideLayer(Me)});WA.room.onEnterLayer(De).subscribe(()=>{WA.room.hideLayer(Ve),WA.room.showLayer(Me)});WA.room.onLeaveLayer(Ze).subscribe(()=>{WA.room.showLayer(Ie),WA.room.hideLayer(Ue)});WA.room.onEnterLayer(Ze).subscribe(()=>{WA.room.hideLayer(Ie),WA.room.showLayer(Ue)});var K="voting_top_closed/room1",$="voting_top_closed/room2",H="voting_top_closed/room3",X="voting_top_closed/room4",C="voting_top_opened/mainRoom",Y="voting_top_opened/room1",F="voting_top_opened/room2",Q="voting_top_opened/room3",ee="voting_top_opened/room4";const lt=[{label:"Reset",className:"error",callback:()=>{WA.state.voteMoney=WA.state.voteAcquisition=WA.state.voteTicket=WA.state.voteOffice=WA.state.voteOutside=WA.state.voteWorkshop=WA.state.voteTrain=0,WA.player.state.hasVoted=!1}}];function j(){WA.room.hideLayer(C),WA.room.hideLayer(Y),WA.room.hideLayer(F),WA.room.hideLayer(Q),WA.room.hideLayer(ee),WA.room.showLayer(K),WA.room.showLayer($),WA.room.showLayer(H),WA.room.showLayer(X),WA.nav.goToRoom(We)}function ut(){WA.room.hideLayer(C),WA.room.hideLayer(ee),WA.room.showLayer(X),WA.nav.goToRoom(We)}function ct(){console.log("preparing 1st room..."),WA.room.hideLayer(K),WA.room.showLayer(C),WA.room.showLayer(Y),h!=null&&u(),h=WA.ui.openPopup(Oo,qo,[{label:L,callback:o=>{u()}},{label:B,callback:o=>{u(),j()}}])}function Z(){console.log("preparing 2nd room..."),WA.room.showLayer(K),WA.room.showLayer(C),WA.room.showLayer(F),WA.room.hideLayer(Y),WA.room.hideLayer($),WA.nav.goToRoom(ot),h!=null&&u(),h=WA.ui.openPopup(No,zo,[{label:Ko,callback:o=>{u()}},{label:B,callback:o=>{u(),j()}}])}function pt(){console.log("preparing 3rd room..."),WA.room.showLayer(C),WA.room.showLayer($),WA.room.showLayer(Q),WA.room.hideLayer(F),WA.room.hideLayer(H),WA.nav.goToRoom(tt),h!=null&&u(),h=WA.ui.openPopup($o,Ho,[{label:L,callback:o=>{u()}},{label:B,callback:o=>{u(),j()}}])}function U(){console.log("preparing 4th room..."),WA.room.showLayer(C),WA.room.showLayer(H),WA.room.showLayer(ee),WA.room.hideLayer(Q),WA.room.hideLayer(X),WA.nav.goToRoom(rt),h!=null&&u(),h=WA.ui.openPopup(Xo,Yo,[{label:Fo,callback:o=>{WA.nav.openTab(Qo),u()}},{label:L,callback:o=>{u()}},{label:B,callback:o=>{u(),j()}}])}WA.onInit().then(async()=>{ko().then(()=>{console.log("Scripting API Extra ready")}).catch(y=>console.error(y));var o="specialZones/voting/acquisitionVoting",e="specialZones/voting/moneyVoting",t="specialZones/voting/ticketVoting",r="specialZones/voting/officeVoting",n="specialZones/voting/workshopVoting",a="specialZones/voting/trainVoting",s="specialZones/voting/outsideVoting",i="specialZones/voting/exit2ndRoom",l="specialZones/voting/openExit_auto",p="specialZones/voteReset";WA.room.onEnterLayer(o).subscribe(()=>{WA.state.voteAcquisition++,Z()}),WA.room.onLeaveLayer(o).subscribe(()=>{WA.state.voteAcquisition}),WA.room.onEnterLayer(e).subscribe(()=>{WA.state.voteMoney++,Z()}),WA.room.onLeaveLayer(e).subscribe(()=>{WA.state.voteMoney}),WA.room.onEnterLayer(t).subscribe(()=>{WA.state.voteTicket++,Z()}),WA.room.onLeaveLayer(t).subscribe(()=>{WA.state.voteTicket}),WA.room.onEnterLayer(i).subscribe(()=>{pt()}),WA.room.onEnterLayer(r).subscribe(()=>{WA.state.voteOffice++,U()}),WA.room.onLeaveLayer(r).subscribe(()=>{WA.state.voteOffice}),WA.room.onEnterLayer(a).subscribe(()=>{WA.state.voteTrain++,U()}),WA.room.onLeaveLayer(a).subscribe(()=>{WA.state.voteTrain}),WA.room.onEnterLayer(n).subscribe(()=>{WA.state.voteWorkshop++,U()}),WA.room.onLeaveLayer(n).subscribe(()=>{WA.state.voteWorkshop}),WA.room.onEnterLayer(s).subscribe(()=>{WA.state.voteOutside++,U()}),WA.room.onLeaveLayer(s).subscribe(()=>{WA.state.voteOutside}),WA.room.onEnterLayer(l).subscribe(()=>{ut()});let f;WA.room.onEnterLayer(p).subscribe(()=>{(WA.player.tags.includes("editor")||WA.player.tags.includes("admin")||WA.player.tags.includes("hm-station-admin"))&&(f=WA.ui.openPopup("resetPopup","Soll das Voting zurückgesetzt werden?",lt))}),WA.room.onLeaveLayer(p).subscribe(()=>{f.close()})}).catch(o=>console.error(o));