import { bootstrapExtra } from "@workadventure/scripting-api-extra";

//bootstrapExtra();
console.log('Script started successfully');

let currentPopup = undefined;

var btnImageResetUrl = "https://buenni86.github.io/hm-station/reset_logo.png";
var btnImageBackUrl = "https://buenni86.github.io/hm-station/back_logo.png";
var btnImageFwdUrl = "https://buenni86.github.io/hm-station/fwd_logo.png";
var btnImageStopUrl = "https://buenni86.github.io/hm-station/mainmap_logo.png";

var leavingUrl = "../dbevents/hm-bahnhof#specialZones/enterFromLabyrinth";
var resetUrl = "../dbevents/hm-joblabyrinth";

// adding map navigation buttons
WA.ui.actionBar.addButton({
    id:"reset",
    type:"action",
    imageSrc:btnImageResetUrl,
    toolTip:"Zurück zum Start",
    callback: async () => {
        WA.nav.goToRoom(resetUrl);
    }
})

WA.ui.actionBar.addButton({
    id:"back",
    type:"action",
    imageSrc:btnImageBackUrl,
    toolTip:"Bring mich zurück zur letzten Plattform",
    callback: async () => {
        goToLastPlatform();
    }
})

WA.ui.actionBar.addButton({
    id:"forward",
    type:"action",
    imageSrc:btnImageFwdUrl,
    toolTip:"Bring mich zur nächsten Plattform",
    callback: async () => {
        goToNextPlatform();
    }
})

WA.ui.actionBar.addButton({
    id:"stop",
    type:"action",
    imageSrc:btnImageStopUrl,
    toolTip:"Keine Lust mehr - bring mich zurück zur Hauptmap",
    callback: async () => {
        WA.nav.goToPage(leavingUrl);
    }
})

const leavingZones = new Map ([
    ["popUpArea0", "popUp0"],
    ["popUpArea1", "popUp1"],
    ["popUpArea2", "popUp2"],
    ["popUpArea3", "popUp3"],
    ["popUpArea4", "popUp4"],
    ["popUpArea5", "popUp5"],    
    ["popUpArea6", "popUp6"],
    ["popUpArea7", "popUp7"],
    ["popUpArea8", "popUp8"],
    ["popUpArea9", "popUp9"],
    ["popUpArea10", "popUp10"],
    ["popUpArea11", "popUp11"],
    ["popUpArea12", "popUp22"],
    ["popUpArea13", "popUp13"],
    ["popUpArea14", "popUp14"],
    ["popUpArea15", "popUp15"],
])

var msgLeaving = "Möchtest du das Labyrinth verlassen?";
var labelYes = "Ja";
var labelNo = "Nein";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

WA.onInit().then(async () => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
    .then(() => {
        console.log("Scripting API Extra ready")

        for (const leavingArea of leavingZones.keys()) {
            WA.room.area.onEnter(leavingArea).subscribe(() => {
                currentPopup = WA.ui.openPopup(leavingZones.get(leavingArea), msgLeaving, [
                    {
                        label: labelYes,
                        callback: (popup => {
                            WA.nav.goToPage(leavingUrl);
                            closePopUp(currentPopup);
                        })
                    },
                    {
                        label: labelNo,
                        callback: (popup => {
                            closePopUp(currentPopup);
                        })
                    }
                ])
            })

            WA.room.area.onLeave(leavingArea).subscribe(() => {
                closePopUp(currentPopup);
            })
        }

    }).catch(e => console.error(e))
}).catch(e => console.error(e))

const platformAreas = new Map ([
    [0, [3995, 3674]],
    [1, [4464, 4206]],
    [2, [4788, 5038]],
    [3, [4497, 3058]],
    [4, [2656, 3187]],
    [5, [1439, 3855]],
    [6, [63, 4813]],
    [7, [300, 4013]],
    [8, [1126, 2896]],
    [9, [1579, 1519]],
    [10, [1903, 2449]],
    [11, [2860, 2035]],
    [12, [4180, 1897]],
    [13, [2580, 749]],
    [14, [618, 172]],
    [15, [3484, 304]]
])

async function setLastPlayerPos() {
    var position = await WA.player.getPosition();

    WA.player.state.lastPosX = position.x;
    WA.player.state.lastPosY = position.y;
}

function setNextPlatformPos(currPlatform) {
    let nextPlatform = platformAreas.get(currPlatform+1);
    console.log("next platform content: " + currPlatform+1);
    let posX = nextPlatform[0];
    let posY = nextPlatform[1];

    console.log("next platform pos: " + posX, posY);

    WA.player.state.nextPlatformPosX = posX;
    WA.player.state.nextPlatformPosY = posY;
}

for (const platform of platformAreas.keys()) {
    
    WA.room.area.onLeave(platform.toString()).subscribe(() => {
        setLastPlayerPos();
        setNextPlatformPos(platform);
    })
    
    WA.room.area.onEnter(platform.toString()).subscribe(() => {
        setLastPlayerPos();
        setNextPlatformPos(platform);
    })
}

function goToLastPlatform() {
    let lastPosX = WA.player.state.lastPosX;
    let lastPosY = WA.player.state.lastPosY;

    console.log("last Pos:" + lastPosX + lastPosY)

    if (lastPosX) {
        WA.player.moveTo(lastPosX, lastPosY)
    }
}

function goToNextPlatform() {
    let nextPosX = WA.player.state.nextPlatformPosX;
    let nextPosY = WA.player.state.nextPlatformPosY;

    if (nextPosX) {
        WA.player.moveTo(nextPosX, nextPosY);
    }
}


function updateCam() {
    const subscription = WA.camera.onCameraUpdate().subscribe((worldView) => console.log(worldView));
//later...
subscription.unsubscribe();
}
