import{b as i}from"./init-22028896.js";console.log("Script started successfully");let t;var c="https://buenni86.github.io/hm-station/reset_logo.png",g="https://buenni86.github.io/hm-station/back_logo.png",m="https://buenni86.github.io/hm-station/fwd_logo.png",A="https://buenni86.github.io/hm-station/mainmap_logo.png",l="https://play.workadventu.re/@/db-systel/dbevents/hm-bahnhof#specialZones/enterFromLabyrinth",b="../dbevents/hm-joblabyrinth";WA.ui.actionBar.addButton({id:"reset",type:"action",imageSrc:c,toolTip:"Zurück zum Start",callback:async()=>{WA.nav.goToRoom(b)}});WA.ui.actionBar.addButton({id:"back",type:"action",imageSrc:g,toolTip:"Bring mich zurück zur letzten Plattform",callback:async()=>{h()}});WA.ui.actionBar.addButton({id:"forward",type:"action",imageSrc:m,toolTip:"Bring mich zur nächsten Plattform",callback:async()=>{W()}});WA.ui.actionBar.addButton({id:"stop",type:"action",imageSrc:A,toolTip:"Keine Lust mehr - bring mich zurück zur Hauptmap",callback:async()=>{WA.nav.goToPage(l)}});WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),d(),i().then(()=>{console.log("Scripting API Extra ready")}).catch(o=>console.error(o))}).catch(o=>console.error(o));var U=new Map([["popUpArea0","popUp0"],["popUpArea1","popUp1"],["popUpArea2","popUp2"],["popUpArea3","popUp3"],["popUpArea4","popUp4"],["popUpArea5","popUp5"],["popUpArea6","popUp6"],["popUpArea7","popUp7"],["popUpArea8","popUp8"],["popUpArea9","popUp9"],["popUpArea10","popUp10"],["popUpArea11","popUp11"],["popUpArea12","popUp22"],["popUpArea13","popUp13"],["popUpArea14","popUp14"],["popUpArea15","popUp15"]]),u="Möchtest du das Labyrinth verlassen?",P="Ja",y="Nein";function d(){for(let[o,a]of U.entries())WA.room.area.onEnter(o).subscribe(()=>{f(a)}),WA.room.area.onLeave(o).subscribe(v)}function f(o){t=WA.ui.openPopup(o,u,[{label:P,className:"primary",callback:a=>{WA.nav.goToPage(l),a.close(),t=void 0}},{label:y,callback:a=>{a.close(),t=void 0}}])}function v(){t!==void 0&&(t.close(),t=void 0)}const e=new Map([[0,[3995,3674]],[1,[4464,4206]],[2,[4788,5038]],[3,[4497,3058]],[4,[2656,3187]],[5,[1439,3855]],[6,[63,4813]],[7,[300,4013]],[8,[1126,2896]],[9,[1579,1519]],[10,[1903,2449]],[11,[2860,2035]],[12,[4180,1897]],[13,[2580,749]],[14,[618,172]],[15,[3484,304]]]);async function n(){var o=await WA.player.getPosition();WA.player.state.lastPosX=o.x,WA.player.state.lastPosY=o.y}function s(o){let a;o!=e.size?a=e.get(o+1):a=e.get(o);let p=a[0],r=a[1];console.log("next platform pos: "+p,r),WA.player.state.nextPlatformPosX=p,WA.player.state.nextPlatformPosY=r}for(const o of e.keys())WA.room.area.onLeave(o.toString()).subscribe(()=>{n(),s(o)}),WA.room.area.onEnter(o.toString()).subscribe(()=>{n(),s(o)});function h(){let o=WA.player.state.lastPosX,a=WA.player.state.lastPosY;console.log("last Pos:"+o+a),o&&WA.player.moveTo(o,a)}function W(){let o=WA.player.state.nextPlatformPosX,a=WA.player.state.nextPlatformPosY;o&&WA.player.moveTo(o,a)}