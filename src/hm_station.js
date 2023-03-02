import { bootstrapExtra } from "@workadventure/scripting-api-extra";

bootstrapExtra();
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

/*
 *  Hiding Layers ....
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