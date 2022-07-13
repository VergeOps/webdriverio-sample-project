const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Application login validation', () => {

    const jsonData = require('../testdata/json-test-data.json');

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    jsonData.forEach((credentials) => {
        it('can\'t login with invalid credentials', async () => {
            await LoginPage.open();

            await LoginPage.login(credentials.username, credentials.password);

            await expect(LoginPage.flashAlert).toBeExisting();
            await expect(LoginPage.flashAlert).toHaveTextContaining(
                credentials.expectedError);
            });
    });
});


