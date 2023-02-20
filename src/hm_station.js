import { bootstrapExtra } from "@workadventure/scripting-api-extra";

bootstrapExtra();
console.log('Script started successfully');

var currentPopup = undefined;
var isCoWebSiteOpened =  false;

var popUpJobs1 = "jobs_1";
var popUpJobs2 = "jobs_2";
var popUpJobProfiler = "jobProfiler";
var msgJobs = "Finde die passende Einstiegsmöglichkeit für dich";
var msgJobProfiler = "Du weißt noch nicht, wohin es gehen soll?";
var urlJobs = "https://db.jobs/service/search/de-de/5441588?qli=true&query=&itemsPerPage=10&pageNum=0&positiontype=Ausbildung&positiontype=Duales+Studium";
var urlJobProfiler = "https://ausbildung-deutschebahn.com/jobprofiler/?utm_source=Careerpage&utm_medium=organic_Linkout&utm_campaign=Rec_Jobprofiler&utm_term=bundesweit_Azubi";
var layerJobs1 = "popUpJobs1";
var layerJobs2 = "popUpJobs2";
var layerJobProfiler = "popUpJobProfiler";
		
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
            label: "Jobs anzeigen",
            callback: (popup => {
                WA.nav.openTab(urlJobs);
                closePopUp();
            })
        },
        {
            label: "Schließen",
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
             label: "Jobs anzeigen",
             callback: (popup => {
                 WA.nav.openTab(urlJobs);
                 closePopUp();
             })
         },
         {
             label: "Schließen",
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
             label: "Finde es hier heraus!",
             callback: (popup => {
                 WA.nav.openTab(urlJobProfiler);
                 closePopUp();
             })
         },
         {
             label: "Schließen",
             callback: (popup => {
                 closePopUp();
             })
         }]);
 })