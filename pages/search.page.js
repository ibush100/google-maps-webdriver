const Helpers = require('../helpers/helpers');

class SearchPage extends Helpers{
get directions () {return $('#searchbox-directions'); }
get startingLocation () { return $('#sb_ifc51'); } 
get destinationLocation () { return $('#sb_ifc52'); }
get directionsList () { return $$('.section-directions-trip clearfix'); }
get routeDurationsList() { return $$('.section-directions-trip-numbers'); } 
get firstResult() {return $('#section-directions-trip-0'); }
get reverseDestination() {return $('.widget-directions-reverse'); }
get drivingDirection () {return $('//div[@aria-label=\'Driving\']'); }
get leavingNowDropDown () {return $('.section-action-popup-container'); }
get signInForMobileDirections() {return $('button*=Sign in'); }

clickDirections() {
    this.clickElement(this.directions);
}

clickSendToMobile() {
    this.clickElement(this.leavingNowDropDown);
    this.clickElement(this.signInForMobileDirections);
} 

clickDrivingDirections() {
    this.clickElement(this.drivingDirection);
}

typeStartingLocation(text) {
    this.clickElement(this.startingLocation);
    this.typeInput(this.startingLocation, text);
}

clickToSearch () {
    browser.keys('\uE007');
}

typeEndingLocation(text) {
    this.clickElement(this.destinationLocation);
    this.typeInput(this.destinationLocation, text);
}

directionsListIsPresent () {
    this.firstResult.waitForDisplayed(); 
    return this.directionsList.every((element) => {
        element.isDisplayed();
    });
}

routesArSortedByTime () {
    this.firstResult.waitForDisplayed(); 
    let timeAndDistance = this.routeDurationsList.map(element => element.getText().split('h')[0]); 
    return timeAndDistance.every((a, b) =>{
        return a > b ? 1: b > a ? -1 :0; 
    });
}

}

module.exports = new SearchPage(); 
