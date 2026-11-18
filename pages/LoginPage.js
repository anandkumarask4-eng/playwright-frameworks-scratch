exports.LoginPage =
class LoginPage{

    constructor(page){
        this.page = page;
        this.loginLink = "#login2";
        this.usernameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginButton = '//button[normalize-space()="Log in"]';
        this.logoutLink = '#logout2';
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/', { waitUntil: 'domcontentloaded' });
    }

    async login(username, password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);

        const dialogPromise = this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null);
        await this.page.locator(this.loginButton).click();

        const dialog = await dialogPromise;
        if (dialog) {
            await dialog.accept();
        }

        await this.page.locator(this.logoutLink).waitFor({
            state: 'visible',
            timeout: 15000
        });
    }
}