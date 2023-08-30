import { bootstrapExtra } from "@workadventure/scripting-api-extra";

//bootstrapExtra();
console.log('Script started successfully');

WA.onInit().then(async () => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
    .then(() => {
        console.log("Scripting API Extra ready")        
        
    	addButtons();

    }).catch(e => console.error(e))
}).catch(e => console.error(e))

WA.room.area.onEnter("1").subscribe(() => {
    console.log("setting player state...");
    WA.player.state.currPlatform = 1;
})

WA.room.area.onEnter("2").subscribe(() => {
    console.log("setting player state...");
    WA.player.state.currPlatform = 2;
})

function updateCam() {
    const subscription = WA.camera.onCameraUpdate().subscribe((worldView) => console.log(worldView));
//later...
subscription.unsubscribe();
}

function addButtons() {
    addResetButton();
    addBackButton();
    addForwardButton();
    addStopButton();
}

function addResetButton() {
    console.log("adding button")
    WA.ui.actionBar.addButton({
        id: 'reset',
//        type: 'action',
        label: 'Reset',
//        toolTip: 'Gehe zurück zum Anfang',
        callback: (event) => {
            WA.nav.goToRoom("../dbevents/hm-joblabyrinth");
        }
    })
}

function addBackButton() {
    WA.ui.actionBar.addButton({
        id: 'back',
//        type: 'action',
        label: 'Zurück',
//        toolTip: 'Gehe zurück zum Anfang',
        callback: (event) => {
            WA.player.moveTo(3839,3583)
        }
    })
}

async function addForwardButton() {
    WA.ui.actionBar.addButton({
        id: 'forward',
//        type: 'action',
        label: 'Vor',
//        toolTip: 'Gehe zurück zum Anfang',
        callback: (event) => {
            //WA.nav.goToRoom("../db/hm-joblabyrinth#1");
            WA.player.moveTo(4483,4165)
        }
    })
}

function addStopButton() {
    WA.ui.actionBar.addButton({
        id: 'stop',
//        type: 'action',
        label: 'zur Hauptmap',
//        toolTip: 'Gehe zurück zum Anfang',
        callback: (event) => {
            WA.nav.goToRoom("../dbevents/hm-bahnhof#specialZones/enterFromLabyrinth");
        }
    })
}

async function getNextPlatform() {
    var playersCurrPlatform = await WA.player.state.currPlatform;

    if (!playersCurrPlatform) {
        return "flyerDriver"
    }
}

function getPrevPlatform() {

}