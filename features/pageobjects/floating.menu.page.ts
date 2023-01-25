import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class LoginPage extends Page {
    public open () {
        return super.open('floating_menu');
    }
}

export default new LoginPage();
