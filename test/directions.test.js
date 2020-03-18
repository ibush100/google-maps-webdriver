const searchPage = require('../pages/search.page');
const accountsPage = require('../pages/accounts.page');
const assert = require('assert');
global.URL = require('url').URL;

describe('Directions', () => {

it('Should display driving route options', () => {
    browser.url('https://www.google.com/maps/preview');
    searchPage.clickDirections(); 
    searchPage.typeStartingLocation("Philadelphia, PA");
    searchPage.typeEndingLocation("San Francisco, CA");
    searchPage.clickToSearch(); 
    let listIsPresent = searchPage.directionsListIsPresent();
    assert.equal(listIsPresent, true, 'List is not present');
  });

  it('Should list driving options only', () => {
    browser.url('https://www.google.com/maps/preview');
    searchPage.clickDirections(); 
    searchPage.typeStartingLocation("Philadelphia, PA");
    searchPage.typeEndingLocation("San Francisco, CA");
    searchPage.clickToSearch(); 
    searchPage.clickDrivingDirections();
    let routesAreSorted =searchPage.routesArSortedByTime(); 
    assert.equal(routesAreSorted, true, 'Drive times are not sorted'); 
  });

  it('Prompt login when sending directions to mobile', () => {
    browser.url('https://www.google.com/maps/preview');
    searchPage.clickDirections(); 
    searchPage.typeStartingLocation("Philadelphia, PA");
    searchPage.typeEndingLocation("San Francisco, CA");
    searchPage.clickToSearch(); 
    searchPage.clickSendToMobile();
    let accountsPageLoaded = accountsPage.waitForAccoutnsToLoad();
    assert.equal(true, accountsPageLoaded, 'Accounts page did not load');
  });

  it('Should display flying options', () => {
    browser.url('https://www.google.com/maps/preview');
    searchPage.clickDirections(); 
    searchPage.typeStartingLocation("Philadelphia, PA");
    searchPage.typeEndingLocation("San Francisco, CA");
    searchPage.clickToSearch(); 
    let flightOptions = searchPage.flightOptionsArePresent();
    assert.equal(true, flightOptions, 'Fligh options are not present');
  });

});

