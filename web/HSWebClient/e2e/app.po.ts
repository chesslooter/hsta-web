import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLogin() {
    return element(by.cssContainingText('button', 'Login'));
  }

  getHomepage() {
    return element(by.cssContainingText('button', 'HSTournamentHelper'));
  }

  getTournament1() {
    return element(by.cssContainingText('button', 'tournament 1'));
  }

  getTournament2() {
    return element(by.cssContainingText('button', 'tournament 2'));
  }

  getTournament3() {
    return element(by.cssContainingText('button', 'tournament 3'));
  }

  getCreateTournament() {
    return element(by.cssContainingText('button', 'Create'));
  }

  getBack() {
    return element(by.cssContainingText('button', 'Back'));
  }

  getCancel() {
    return element(by.cssContainingText('button', 'Cancel'));
  }

  fillTournamentName() {
    var searchComment = element(by.id("tournamentName"));
    searchComment.sendKeys('Test Tournament Name')
  }

  fillTournamentDescription() {
    var searchComment = element(by.id("tournamentDescription"));
    searchComment.sendKeys('Test Tournament Description')
  }
  
  fillTournamentPlayers() {
    var searchComment = element(by.id("exampleFormControlTextarea1"));
    searchComment.sendKeys('Test Tournament Battle.net')
  }

}