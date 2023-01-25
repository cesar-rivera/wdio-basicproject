import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import FloatingMenuPage from '../pageobjects/floating.menu.page.js';

const pages = {
    login: LoginPage,
    floating_menu: FloatingMenuPage
}

Given(/^I am on the (.+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Then(/^main heading should say "(.+)"$/, async (expectedText) => {
    const heading = await $('.example>h3');
    const headingText = await heading.getText();
    expect(headingText).toHaveText(expectedText);
  });
