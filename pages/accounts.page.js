class Account {

    get signInToGoogle () {return $('#identifierId'); }

    waitForAccoutnsToLoad() {
        this.signInToGoogle.waitForDisplayed();
        return this.signInToGoogle.isDisplayed();
    }

}

module.exports = new Account(); 
