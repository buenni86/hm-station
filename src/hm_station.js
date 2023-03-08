import { bootstrapExtra } from "@workadventure/scripting-api-extra";

//bootstrapExtra();
console.log('Script started successfully');

var currentPopup = undefined;
var isCoWebSiteOpened =  false;

var labelClose = "Schließen";

var layerJobs1 = "popUpJobs1";
var layerJobs2 = "popUpJobs2";
var popUpJobs1 = "jobs_1";
var popUpJobs2 = "jobs_2";
var msgJobs = "Finde die passende Einstiegsmöglichkeit für dich";
var labelJobs = "Jobs anzeigen";
var urlJobs = "https://db.jobs/service/search/de-de/5441588?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium";
                
var layerJobProfiler = "popUpJobProfiler";
var popUpJobProfiler = "jobProfiler";
var msgJobProfiler = "Du weißt noch nicht, wohin es gehen soll?";
var labelJobProfiler = "Finde es hier heraus!";
var urlJobProfiler = "https://ausbildung-deutschebahn.com/jobprofiler/?utm_source=Careerpage&utm_medium=organic_Linkout&utm_campaign=Rec_Jobprofiler&utm_term=bundesweit_Azubi";

var layerMeetUs = "popUpMeetUs";
var popUpMeetUs = "meetUs";
var msgMeetUs = "Lerne uns persönlich kennen";
var labelMeetUs = "Meet Us";
var urlMeetUs= "https://db.jobs/service/search/de-de/9639412?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium";

var layerDoVoting = "popUpDoVoting";
var popUpDoVoting = "doVoting";
var msgDoVoting = "Möchtest du am Voting teilnehmen und weitere interessante Dinge über die DB als Arbeitgeber erfahren?";
var labelDo = "Ja!";
var labelDont = "Kein Interesse";
var labelAbortVoting = "Voting abbrechen";

var layerImportance = "popUpImportance";
var popUpImportance = "importance";
var msgImportance = "Willkommen beim Voting. Lass uns direkt loslegen:\n\nWas ist dir wichtig?\n\nSpringe in das jeweilige Portal, um deine Stimme abzugeben.";

var layerImportanceResult = "popUpImportanceResult";
var popUpImportanceResult = "importanceResult";
var msgImportanceResult = "Na? Ist dir die Entscheidung schwer gefallen?\n\nZum Glück musst du dich bei uns nicht für eine der Optionen entscheiden. Du bekommst sie alle!";
var labelCool = "Cool!";

var layerJobLocation = "popUpJobLocation";
var popUpJobLocation = "jobLocation";
var msgJobLocation = "Wo möchtest du am liebsten arbeiten?\n\nGehe zum jeweiligen Ort, um deine Stimme abzugeben.";

var layerJobLocationResult = "popUpJobLocationResult";
var popUpJobLocationResult = "locationResult";
var msgJobLocationResult = "Bei uns kannst du jedem der Bereiche einstiegen. Schau dich doch einfach mal um:";
var labelShowJobs = "Zeig mir die Jobs!";
var urlJobs2 = "https://db.jobs/service/search/de-de/7707604?qli=true&query=&itemsPerPage=10&pageNum=0&country=Deutschland&positiontype=Ausbildung&positiontype=Duales+Studium"

var urlAbortVoting = "../db/hm-bahnhof";
var url1stRoom = "../db/hm-bahnhof#specialZones/voting/entry1stRoom";
var url2ndRoom = "../db/hm-bahnhof#specialZones/voting/entry2ndRoom";
var url3rdRoom = "../db/hm-bahnhof#specialZones/voting/entry3rdRoom";
var url4thRoom = "../db/hm-bahnhof#specialZones/voting/entry4thRoom";
var urlVotingExit = "../db/hm-bahnhof#specialZones/voting/votingExit";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

WA.room.onLeaveLayer(layerJobs1).subscribe(() => {
    closePopUp();
})
 
WA.room.onEnterLayer(layerJobs1).subscribe(() => {
   currentPopup =  WA.ui.openPopup(popUpJobs1, msgJobs,[
        {
            label: labelJobs,
            callback: (popup => {
                WA.nav.openTab(urlJobs);
                closePopUp();
            })
        },
        {
            label: labelClose,
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer(layerJobs2).subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer(layerJobs2).subscribe(() => {
    currentPopup =  WA.ui.openPopup(popUpJobs2, msgJobs,[
         {
             label: labelJobs,
             callback: (popup => {
                 WA.nav.openTab(urlJobs);
                 closePopUp();
             })
         },
         {
             label: labelClose,
             callback: (popup => {
                 closePopUp();
             })
         }]);
 })

WA.room.onLeaveLayer(layerJobProfiler).subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer(layerJobProfiler).subscribe(() => {
    currentPopup =  WA.ui.openPopup(popUpJobProfiler, msgJobProfiler,[
         {
             label: labelJobProfiler,
             callback: (popup => {
                 WA.nav.openTab(urlJobProfiler);
                 closePopUp();
             })
         },
         {
             label: labelClose,
             callback: (popup => {
                 closePopUp();
             })
         }]);
 })

WA.room.onLeaveLayer(layerMeetUs).subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer(layerMeetUs).subscribe(() => {
    currentPopup =  WA.ui.openPopup(popUpMeetUs, msgMeetUs,[
         {
             label: labelMeetUs,
             callback: (popup => {
                 WA.nav.openTab(urlMeetUs);
                 closePopUp();
             })
         },
         {
             label: labelClose,
             callback: (popup => {
                 closePopUp();
             })
         }]);
})

WA.room.onEnterLayer(layerDoVoting).subscribe(() => {
    if (!WA.player.state.hasVoted) {
        currentPopup =  WA.ui.openPopup(popUpDoVoting, msgDoVoting,[
            {
                label: labelDo,
                callback: (popup => {
                    closePopUp();
                    WA.player.state.hasVoted = true;    // players shall only vote once
                    init1stRoom();
                    WA.nav.goToRoom(url1stRoom);
                })
            },
            {
                label: labelDont,
                callback: (popup => {
                    closePopUp();
                })
        }]);
    }    
})

/*
 *  Hiding Layers .... ICE
 */

var layerICE1roof = "trains_top/ice1_roof";
var layerICE1maul = "trains_top/ice1_maul";
var layerICE2roof = "trains_top/ice2_roof";
var layerICE2maul = "trains_top/ice2_maul";
var layerICE3roof = "trains_top/ice3_roof";
var layerICE3maul = "trains_top/ice3_maul";
var layerICE4roof = "trains_top/ice4_roof";
var layerICE4maul = "trains_top/ice4_maul";
var layerRegio1roof = "trains_top/regio1_roof";
var layerRegio1maul = "trains_top/regio1_maul";
var layerRegio2roof = "trains_top/regio2_roof";
var layerRegio2maul = "trains_top/regio2_maul";
var hidelayerICE1 = "specialZones/ICEs/hideICE1";
var hidelayerICE2 = "specialZones/ICEs/hideICE2";
var hidelayerICE3 = "specialZones/ICEs/hideICE3";
var hidelayerICE4 = "specialZones/ICEs/hideICE4";
var hidelayerRegio1 = "specialZones/ICEs/hideRegio1";
var hidelayerRegio2 = "specialZones/ICEs/hideRegio2";

WA.room.onLeaveLayer(hidelayerICE1).subscribe(() => {
    WA.room.showLayer(layerICE1roof);
    WA.room.hideLayer(layerICE1maul);
})
 
WA.room.onEnterLayer(hidelayerICE1).subscribe(() => {
    WA.room.hideLayer(layerICE1roof);
    WA.room.showLayer(layerICE1maul);
})

WA.room.onLeaveLayer(hidelayerICE2).subscribe(() => {
    WA.room.showLayer(layerICE2roof);
    WA.room.hideLayer(layerICE2maul);
})
 
WA.room.onEnterLayer(hidelayerICE2).subscribe(() => {
    WA.room.hideLayer(layerICE2roof);
    WA.room.showLayer(layerICE2maul);
})

WA.room.onLeaveLayer(hidelayerICE3).subscribe(() => {
    WA.room.showLayer(layerICE3roof);
    WA.room.hideLayer(layerICE3maul);
})
 
WA.room.onEnterLayer(hidelayerICE3).subscribe(() => {
    WA.room.hideLayer(layerICE3roof);
    WA.room.showLayer(layerICE3maul);
})

WA.room.onLeaveLayer(hidelayerICE4).subscribe(() => {
    WA.room.showLayer(layerICE4roof);
    WA.room.hideLayer(layerICE4maul);
})
 
WA.room.onEnterLayer(hidelayerICE4).subscribe(() => {
    WA.room.hideLayer(layerICE4roof);
    WA.room.showLayer(layerICE4maul);
})

WA.room.onLeaveLayer(hidelayerRegio1).subscribe(() => {
    WA.room.showLayer(layerRegio1roof);
    WA.room.hideLayer(layerRegio1maul);
})
 
WA.room.onEnterLayer(hidelayerRegio1).subscribe(() => {
    WA.room.hideLayer(layerRegio1roof);
    WA.room.showLayer(layerRegio1maul);
})

WA.room.onLeaveLayer(hidelayerRegio2).subscribe(() => {
    WA.room.showLayer(layerRegio2roof);
    WA.room.hideLayer(layerRegio2maul);
})
 
WA.room.onEnterLayer(hidelayerRegio2).subscribe(() => {
    WA.room.hideLayer(layerRegio2roof);
    WA.room.showLayer(layerRegio2maul);
})

/*
 *  Voting
 */

var roofLayer1 = "voting_top_closed/room1";
var roofLayer2 = "voting_top_closed/room2";
var roofLayer3 = "voting_top_closed/room3";
var roofLayer4 = "voting_top_closed/room4";
var roofLayerMain = "voting_top_opened/mainRoom";
var openRoofLayer1 = "voting_top_opened/room1";
var openRoofLayer2 = "voting_top_opened/room2";
var openRoofLayer3 = "voting_top_opened/room3";
var openRoofLayer4 = "voting_top_opened/room4";
var hideLayerRoof1 = "specialZones/voting/remove_roofs/roof1";
var hideLayerRoof2 = "specialZones/voting/remove_roofs/roof2";
var hideLayerRoof3 = "specialZones/voting/remove_roofs/roof3";
var hideLayerRoof4 = "specialZones/voting/remove_roofs/roof4";

const buttons = [
    {
      label: "Reset",
      className: "error",
      callback: () => {
        (WA.state.voteMoney = WA.state.voteAcquisition = WA.state.voteTicket = WA.state.voteOffice = WA.state.voteOutside = WA.state.voteWorkshop = WA.state.voteTrain = 0),
        WA.player.state.hasVoted = false
        }
    }
]

function init1stRoom() {
    console.log("preparing 1st room...");
    WA.room.hideLayer(roofLayer1);
    WA.room.showLayer(roofLayerMain);
    WA.room.showLayer(openRoofLayer1);

    if (currentPopup != null) closePopUp();

    currentPopup =  WA.ui.openPopup(popUpImportance, msgImportance,[
        {
            label: labelClose,
            callback: (popup => {
                closePopUp();
            })
        },
        {
            label: labelAbortVoting,
            callback: (popup => {
                closePopUp();
                WA.nav.goToRoom(urlAbortVoting);
            })
        }]);
}
    

WA.onInit().then(async () => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra()
    .then(() => {
        console.log("Scripting API Extra ready")        
    }).catch(e => console.error(e))

    var layerVoteAcq = "specialZones/voting/acquisitionVoting";
    var layerVoteMoney = "specialZones/voting/moneyVoting";
    var layerVoteTicket = "specialZones/voting/ticketVoting";
    var layerVoteOffice = "specialZones/voting/officeVoting";
    var layerVoteWorkshop = "specialZones/voting/workshopVoting";
    var layerVoteTrain = "specialZones/voting/trainVoting";
    var layerVoteOutside = "specialZones/voting/outsideVoting";
    var layerExit2ndRoom = "specialZones/voting/exit2ndRoom";
    var layerOpenExit = "specialZones/voting/openExit_auto";

    var layerReset = "specialZones/voteReset";

    WA.room.onEnterLayer(layerVoteAcq).subscribe(() => {
        WA.state.voteAcquisition++
        WA.nav.goToRoom(url2ndRoom);
    })    
    WA.room.onLeaveLayer(layerVoteAcq).subscribe(() => {
        if (WA.state.voteAcquisition === 0) return
    })

    WA.room.onEnterLayer(layerVoteMoney).subscribe(() => {
        WA.state.voteMoney++
        WA.nav.goToRoom(url2ndRoom);
    })    
    WA.room.onLeaveLayer(layerVoteMoney).subscribe(() => {
        if (WA.state.voteMoney === 0) return
    })

    WA.room.onEnterLayer(layerVoteTicket).subscribe(() => {
        WA.state.voteTicket++
        WA.nav.goToRoom(url2ndRoom);
    })
    WA.room.onLeaveLayer(layerVoteTicket).subscribe(() => {
        if (WA.state.voteTicket === 0) return
    })

    WA.room.onEnterLayer(layerExit2ndRoom).subscribe(() => {
        WA.nav.goToRoom(url3rdRoom);
    })

    WA.room.onEnterLayer(layerVoteOffice).subscribe(() => {
        WA.state.voteOffice++
        WA.nav.goToRoom(url4thRoom);
    })
    WA.room.onLeaveLayer(layerVoteOffice).subscribe(() => {
        if (WA.state.voteOffice === 0) return
    })
    
    WA.room.onEnterLayer(layerVoteTrain).subscribe(() => {
        WA.state.voteTrain++
        WA.nav.goToRoom(url4thRoom);
    })
    WA.room.onLeaveLayer(layerVoteTrain).subscribe(() => {
        if (WA.state.voteTrain === 0) return
    })
    
    WA.room.onEnterLayer(layerVoteWorkshop).subscribe(() => {
        WA.state.voteWorkshop++
        WA.nav.goToRoom(url4thRoom);
    })
    WA.room.onLeaveLayer(layerVoteWorkshop).subscribe(() => {
        if (WA.state.voteWorkshop === 0) return
    })
    
    WA.room.onEnterLayer(layerVoteOutside).subscribe(() => {
        WA.state.voteOutside++
        WA.nav.goToRoom(url4thRoom);
    })
    WA.room.onLeaveLayer(layerVoteOutside).subscribe(() => {
        if (WA.state.voteOutside === 0) return
    })

    WA.room.onEnterLayer(layerOpenExit).subscribe(() => {
        WA.nav.goToRoom(urlVotingExit);
    })

    let voteResetPopup;
    WA.room.onEnterLayer(layerReset).subscribe(() => {
        if(WA.player.tags.includes("editor")||WA.player.tags.includes("admin")||WA.player.tags.includes("hm-station-admin")) {
            voteResetPopup = WA.ui.openPopup(
            "resetPopup",
            "Soll das Voting zurückgesetzt werden?",
            buttons)
        }
    })
    WA.room.onLeaveLayer(layerReset).subscribe(() => {
        voteResetPopup.close()
    })

    /*
    *  Hiding Layers .... voting roof
    */

    WA.room.onLeaveLayer(hideLayerRoof1).subscribe(() => {
        WA.room.showLayer(roofLayer1);
        WA.room.hideLayer(openRoofLayer1);
        WA.room.hideLayer(roofLayerMain);
    })

//    WA.room.onEnterLayer(hideLayerRoof1).subscribe(() => {
//        WA.room.hideLayer(roofLayer1);
//        WA.room.showLayer(roofLayerMain);
//        WA.room.showLayer(openRoofLayer1);
//    })

    WA.room.onLeaveLayer(hideLayerRoof2).subscribe(() => {
        WA.room.showLayer(roofLayer2);
        WA.room.hideLayer(openRoofLayer2);
    })

    WA.room.onEnterLayer(hideLayerRoof2).subscribe(() => {
        WA.room.showLayer(roofLayerMain);
        WA.room.showLayer(roofLayer1);
        WA.room.hideLayer(openRoofLayer1);

        WA.room.hideLayer(roofLayer2);
        WA.room.showLayer(openRoofLayer2);
    })

    WA.room.onLeaveLayer(hideLayerRoof3).subscribe(() => {
        WA.room.showLayer(roofLayer3);
        WA.room.hideLayer(openRoofLayer3);
    })

    WA.room.onEnterLayer(hideLayerRoof3).subscribe(() => {
        WA.room.showLayer(roofLayerMain);
        WA.room.showLayer(roofLayer2);
        WA.room.hideLayer(openRoofLayer2);

        WA.room.hideLayer(roofLayer3);
        WA.room.showLayer(openRoofLayer3);
    })

    WA.room.onLeaveLayer(hideLayerRoof4).subscribe(() => {
        WA.room.showLayer(roofLayer4);
        WA.room.hideLayer(openRoofLayer4);
        WA.room.hideLayer(roofLayerMain);
    })

    WA.room.onEnterLayer(hideLayerRoof4).subscribe(() => {
        WA.room.showLayer(roofLayerMain);
        WA.room.showLayer(roofLayer3);
        WA.room.hideLayer(openRoofLayer3);

        WA.room.hideLayer(roofLayer4);
        WA.room.showLayer(openRoofLayer4);
    })


    // Voting PopUps

    WA.room.onLeaveLayer(layerImportance).subscribe(() => {
        closePopUp();
    })
     
    /*
    WA.room.onEnterLayer(layerImportance).subscribe(() => {
        if (currentPopup != null) closePopUp();

        currentPopup =  WA.ui.openPopup(popUpImportance, msgImportance,[
            {
                label: labelClose,
                callback: (popup => {
                    closePopUp();
                })
            },
            {
                label: labelAbortVoting,
                callback: (popup => {
                    closePopUp();
                    WA.nav.goToRoom(urlAbortVoting);
                })
            }]);
    })
    */
    
    WA.room.onLeaveLayer(layerImportanceResult).subscribe(() => {
        closePopUp();
    })
     
    WA.room.onEnterLayer(layerImportanceResult).subscribe(() => {
        if (currentPopup != null) closePopUp();

        currentPopup =  WA.ui.openPopup(popUpImportanceResult, msgImportanceResult,[
            {
                label: labelCool,
                callback: (popup => {
                    closePopUp();
                })
            },
            {
                label: labelAbortVoting,
                callback: (popup => {
                    closePopUp();
                    WA.nav.goToRoom(urlAbortVoting);
                })
            }]);
    })
    
    WA.room.onLeaveLayer(layerJobLocation).subscribe(() => {
        closePopUp();
    })
     
    WA.room.onEnterLayer(layerJobLocation).subscribe(() => {
        if (currentPopup != null) closePopUp();

        currentPopup =  WA.ui.openPopup(popUpJobLocation, msgJobLocation,[
            {
                label: labelClose,
                callback: (popup => {
                    closePopUp();
                })
            },
            {
                label: labelAbortVoting,
                callback: (popup => {
                    closePopUp();
                    WA.nav.goToRoom(urlAbortVoting);
                })
            }]);
    })
    
    WA.room.onLeaveLayer(layerJobLocationResult).subscribe(() => {
        closePopUp();
    })
     
    WA.room.onEnterLayer(layerJobLocationResult).subscribe(() => {
        if (currentPopup != null) closePopUp();

        currentPopup =  WA.ui.openPopup(popUpJobLocationResult, msgJobLocationResult,[
            {
                label: labelShowJobs,
                callback: (popup => {
                    WA.nav.openTab(urlJobs2);
                    closePopUp();
                })
            },
            {
                label: labelClose,
                callback: (popup => {
                    closePopUp();
                })
            },
            {
                label: labelAbortVoting,
                callback: (popup => {
                    closePopUp();
                    WA.nav.goToRoom(urlAbortVoting);
                })
            }]);
    })
}).catch(e => console.error(e))
