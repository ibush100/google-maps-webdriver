
class Helpers {

constructor() {

}   

clickElement(element) {
    element.waitForDisplayed();
    element.click();

}

typeInput(element, text) {
    element.waitForDisplayed();
    element.click();
    element.keys(text);
}


}
module.exports = Helpers;
