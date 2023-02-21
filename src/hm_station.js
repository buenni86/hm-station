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