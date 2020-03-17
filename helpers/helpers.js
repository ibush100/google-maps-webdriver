
class Helpers {

constructor() {

}   

typeInput(element, text) {
    clickElement(element);
    element.keys(text);
}

clickElement(element) {
    element.waitForDisplayed();
    element.click();

}

}
module.exports = Helpers;
