import { AppPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('hsweb-client App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });
it('should log the user in', () => {
    page.navigateTo();
    page.getLogin().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });
});

it('should login, navigate to tournament 1 then return to the main tournment page', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getTournament1().click();
    page.getHomepage().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });
})

it('should login, navigate to tournament 2 then return to the main tournment page', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getTournament2().click();
    page.getHomepage().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });
})

it('should login, navigate to tournament 3 then return to the main tournment page', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getTournament3().click();
    page.getHomepage().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });
})

it('should move to the create tournament page', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getCreateTournament().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('tournamentCreate');
  });
})

// This test can be expanded when the form submission is implemented in testing
it('should fill out tournament info and create the tournament', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getCreateTournament().click();
    page.fillTournamentName();
    page.fillTournamentDescription();
    page.fillTournamnetPlayers();
    page.getCreateTournament().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });
   
})

// This test is currently failing
it('should checkout specific tounament page then return to main page', () => {
    page.navigateTo();
    page.getLogin().click();
    page.getTournament1().click();
    page.getBack().click().then(function() {
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toContain('home');
  });

})

});