sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/demo/travellist/test/integration/pages/MainListReport' ,
        'sap/fe/demo/travellist/test/integration/pages/MainObjectPage',
        'sap/fe/demo/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/demo/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);